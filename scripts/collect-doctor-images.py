"""Collect name-matched public professional portraits into local static assets.
Uses supplied source pages; never substitutes generic or generated faces.
"""
import argparse,asyncio,aiohttp,hashlib,io,json,re,threading,time,urllib.request,urllib.error
from collections import defaultdict
from datetime import datetime,timezone
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin,urlparse,parse_qs
from PIL import Image
root=Path(__file__).resolve().parents[1]
parser=argparse.ArgumentParser();parser.add_argument('--cache-dir',required=True);parser.add_argument('--cached-pages-only',action='store_true');args=parser.parse_args()
cache=Path(args.cache_dir);cache.mkdir(parents=True,exist_ok=True)
assets=root/'public/assets/doctors';assets.mkdir(parents=True,exist_ok=True)
doctors=json.loads((root/'data/doctors.json').read_text())
manifestfile=root/'data/doctor-images.json'
manifest=json.loads(manifestfile.read_text()) if manifestfile.exists() else {}
rejections=root/'data/reports/rejected-portrait-placeholders.json'
rejected_urls={r['imageUrl'] for r in json.loads(rejections.read_text())} if rejections.exists() else set()
lock=threading.Lock();hosts=defaultdict(threading.Semaphore)
# Bounded concurrency and pacing per origin, no attempts to bypass access controls.
hosts=defaultdict(lambda:asyncio.Semaphore(6))
session=None
failures=[];pages={};collected=datetime.now(timezone.utc).isoformat()
def norm(value):
 words=re.sub(r'[^\w\u0980-\u09ff]+',' ',value.lower(),flags=re.UNICODE).replace('_',' ').strip().split()
 titles={'prof','professor','dr','doctor','associate','assistant','brig','brigadier','gen','general','lt','col','colonel','retd','retired','major','ডাঃ','ডা','ডা:','ডাক্তার','প্রফেসর','অধ্যাপক'}
 while words and words[0] in titles:words.pop(0)
 return ' '.join(words)
class Images(HTMLParser):
 def __init__(self):super().__init__(convert_charrefs=True);self.images=[];self.link=None;self.heading=False
 def handle_starttag(self,tag,attrs):
  attrs=dict(attrs)
  if tag=='a' and '/doctor/' in attrs.get('href',''):self.link={'images':[],'name':[]}
  if self.link and tag in ['h2','h3','h4']:self.heading=True
  if tag=='img':
   self.images.append(attrs)
   if self.link:self.link['images'].append(attrs)
 def handle_data(self,text):
  if self.link and self.heading:self.link['name'].append(text)
 def handle_endtag(self,tag):
  if tag in ['h2','h3','h4']:self.heading=False
  if tag=='a' and self.link:
   name=' '.join(' '.join(self.link['name']).split())
   if name:
    for image in self.link['images']:
     if not image.get('alt'):image['alt']=name;image['name-evidence']='same-doctor-link-heading'
   self.link=None
async def fetch(url):
 host=urlparse(url).netloc
 async with hosts[host]:
  await asyncio.sleep(.25)
  async with session.get(url,timeout=aiohttp.ClientTimeout(total=15)) as response:
   response.raise_for_status()
   raw=await response.read()
   if len(raw)>8*1024*1024:raise ValueError('Asset exceeds size limit')
   return raw,response.headers.get('Content-Type',''),str(response.url)
async def getpage(url):
 file=cache/(hashlib.sha256(url.encode()).hexdigest()+'.html')
 try:
  if file.exists():raw=file.read_bytes()
  elif args.cached_pages_only:raise ValueError('Source page unavailable in previous retrieval')
  else:raw,_,_=await fetch(url);file.write_bytes(raw)
  parser=Images();parser.feed(raw.decode('utf8',errors='replace'));return url,parser.images
 except Exception as e:return url,{'error':str(e)[:180]}
byurl=defaultdict(list)
for doctor in doctors:
 if doctor['id'] in manifest and (root/'public'/manifest[doctor['id']]['path'].lstrip('/')).exists():continue
 for url in doctor['sources']:byurl[url].append(doctor)
async def prepare_pages():
 tasks=[asyncio.create_task(getpage(url)) for url in byurl]
 for index,task in enumerate(asyncio.as_completed(tasks),1):
  url,images=await task
  pages[url]=images
  if isinstance(images,dict):failures.append({'sourcePage':url,**images})
  if index%10==0:print(json.dumps({'pages':index,'total':len(byurl),'failedPages':len(failures)}),flush=True)
async def download(item):
 id,choices=item
 if id in manifest and (root/'public'/manifest[id]['path'].lstrip('/')).exists():return id,manifest[id]
 errors=[]
 for choice in choices:
  try:
   raw,contentType,resolved=await fetch(choice['imageUrl'])
   image=Image.open(io.BytesIO(raw));image.verify();image=Image.open(io.BytesIO(raw));w,h=image.size
   if w<80 or h<80 or w>6000 or h>6000:raise ValueError('Unusable portrait dimensions')
   ext={'JPEG':'jpg','PNG':'png','WEBP':'webp','GIF':'gif'}.get(image.format)
   if not ext:raise ValueError('Unsupported image format')
   file=assets/(id+'.'+ext);file.write_bytes(raw)
   return id,{**choice,'path':'/assets/doctors/'+file.name,'width':w,'height':h,'bytes':len(raw),'sha256':hashlib.sha256(raw).hexdigest(),'collectedAt':collected,'resolvedImageUrl':resolved}
  except Exception as e:errors.append(str(e)[:160])
 return id,{'error':'; '.join(errors)}
async def collect_images():
 tasks=[asyncio.create_task(download(item)) for item in candidates.items()]
 for count,task in enumerate(asyncio.as_completed(tasks),1):
  id,result=await task
  if 'path' in result:manifest[id]=result
  else:failures.append({'doctorId':id,**result})
  if count%25==0:
   manifestfile.write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
   print(json.dumps({'downloaded':len(manifest),'processed':count,'total':len(candidates)}),flush=True)
async def main():
 global session,candidates
 async with aiohttp.ClientSession(trust_env=True,connector=aiohttp.TCPConnector(limit=12,limit_per_host=6),headers={'User-Agent':'Mozilla/5.0 (compatible; DoclistImageCollector/1.0)','Accept':'image/*,text/html;q=0.9,*/*;q=0.8'}) as client:
  session=client
  await prepare_pages()
  candidates=defaultdict(list)
  for url,images in pages.items():
   if isinstance(images,dict):continue
   index=defaultdict(list)
   for doctor in byurl[url]:
    for name in set([doctor['name'],*doctor.get('nameVariants',[])]):
     if doctor['id'] not in index[norm(name)]:index[norm(name)].append(doctor['id'])
   for image in images:
    alt=image.get('alt','');key=norm(alt)
    if not key:continue
    matching=index.get(key,[])
    if len(matching)!=1:continue
    source=image.get('data-src') or image.get('src') or ''
    if not source or source.startswith('data:'):continue
    source=urljoin(url,source)
    if source in rejected_urls:continue
    if re.search(r'dr[-_]male|dr[-_]female|male[-_]doctor|female[-_]doctor|placeholder|(?:^|/)default(?:[._-]|$)|default[-_](?:avatar|doctor)|no[-_]image|dummy',source,re.I):continue
    # Preserve the actual observed URL; image optimizer variants are downloaded,
    # not hotlinked. Do not invent image paths from a person's name.
    candidates[matching[0]].append({'sourcePage':url,'imageUrl':source,'matchedName':alt,'matchMethod':'exact-source-name','nameEvidence':image.get('name-evidence','image-alt')})
  print(json.dumps({'candidateDoctors':len(candidates),'sourcePages':len(byurl),'failedPages':len(failures)}),flush=True)
  await collect_images()
 manifestfile.write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
 report={'collectedAt':collected,'doctorsTotal':len(doctors),'sourcePages':len(byurl),'matchedCandidates':len(candidates),'localPhotos':len(manifest),'missingPhotos':len(doctors)-len(manifest),'bytes':sum(x['bytes'] for x in manifest.values()),'failures':failures}
 (root/'data/image-collection-report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
 print(json.dumps({k:v for k,v in report.items() if k!='failures'}),flush=True)

if __name__=='__main__':asyncio.run(main())
