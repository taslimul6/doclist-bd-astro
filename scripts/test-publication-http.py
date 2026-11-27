"""Production checks at three publication stages, using only server configuration."""
import json,os,datetime,time,tempfile,subprocess,urllib.request,urllib.error,re,xml.etree.ElementTree as ET
from pathlib import Path
R=Path(__file__).resolve().parents[1];read=lambda n:json.loads((R/'data'/n).read_text());schedule=read('release-schedule.json');queue=schedule['paths'];new=read('doctors.json');baseline=read('release-baseline.json');client=urllib.request.build_opener(urllib.request.ProxyHandler({}));port='3104';calls=0
first=next(p for p,s in queue.items() if s==0);later=next(p for p,s in queue.items() if s==30);last=next(p for p,s in queue.items() if s==max(queue.values()));old=next(p for p in baseline if p.startswith('/doctor/'));newdoctor=next(d for d in new if '/doctor/'+d['slug'] not in baseline);newid=newdoctor['id']
local=datetime.datetime.now(datetime.timezone(datetime.timedelta(hours=6))).date()
def get(path,status=200):
 global calls
 try:
  with client.open('http://127.0.0.1:'+port+path,timeout=45) as r:code=r.status;body=r.read().decode();headers=r.headers
 except urllib.error.HTTPError as e:code=e.code;body=e.read().decode();headers=e.headers
 calls+=1;assert code==status,(path,code,body[-400:]);return body,headers
for stage,start in [('future',str(local+datetime.timedelta(days=1))),('first',str(local)),('mature','1970-01-01')]:
 with tempfile.TemporaryFile(mode='w+') as log:
  process=subprocess.Popen(['node','node_modules/next/dist/bin/next','start','--hostname','127.0.0.1','--port',port],cwd=R,env={**os.environ,'DOCLIST_RELEASE_START':start},stdout=log,stderr=log)
  try:
   for _ in range(150):
    try:get('/en');break
    except (urllib.error.URLError,ConnectionError):
     if process.poll() is not None:log.seek(0);raise AssertionError(log.read())
     time.sleep(.2)
   else:raise AssertionError('Server not ready')
   for prefix in ['', '/en','/bn']:
    # /bn is a legacy redirect for released pages, so only test its blocked future path.
    if prefix!='/bn':get(prefix+old)
    if stage=='future':
     for p in [first,later,last]:
      _,headers=get(prefix+p,404);assert 'noindex' in headers.get('X-Robots-Tag','');assert 'no-store' in headers.get('Cache-Control','')
    elif prefix!='/bn':
     get(prefix+first)
     get(prefix+later,404 if stage=='first' else 200)
   get('/en/doctor/'+newdoctor['slug'])
   get('/api/doctors/'+newid+'/engagement')
   page,_=get('/en/doctors');hidden=first if stage=='future' else later if stage=='first' else None
   if hidden:assert ('href="/en'+hidden+'"') not in page
   # Sitemap entries always respect the publication gate, while retaining SEO quality filtering.
   xml,headers=get('/sitemap.xml');assert headers.get('Cache-Control')=='no-store';index=ET.fromstring(xml);ns={'s':'http://www.sitemaps.org/schemas/sitemap/0.9'};urls=[]
   for item in index.findall('s:sitemap/s:loc',ns):
    body,h=get('/'+item.text.split('/',3)[3]);assert h.get('Cache-Control')=='no-store';shard_urls=[x.text for x in ET.fromstring(body).findall('s:url/s:loc',ns)];assert 0<len(shard_urls)<=1000;urls += shard_urls
   for url in urls:
    path='/'+url.split('/',3)[3] if '/' in url.split('://',1)[1] else '/';path=re.sub(r'^/(en|bn)(?=/|$)','',path) or '/'
    if path in queue:assert stage=='mature' or (stage=='first' and queue[path]<30)
   if stage=='future':assert all('/en'+p not in page for p in [first,later])
  finally:process.terminate();process.wait(timeout=20)
report={'status':'passed','stages':['before first release','first 30 pages','all due pages'],'requests':calls,'checks':['old URLs','future 404/noindex/no-store','Bangla/English/legacy bn','all doctor profiles live','HTML links','uncached sitemap membership']}
(R/'data/reports/publication-http-validation.json').write_text(json.dumps(report,indent=2)+'\n');print(json.dumps(report,indent=2))
