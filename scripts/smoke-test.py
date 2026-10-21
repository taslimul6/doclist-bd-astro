"""Production SEO checks; run npm run test:seo and npm run build first."""
import subprocess,time,urllib.request,urllib.error,json,re,tempfile,xml.etree.ElementTree as ET
from pathlib import Path
root=Path(__file__).resolve().parents[1];base='http://127.0.0.1:3101'
client=urllib.request.build_opener(urllib.request.ProxyHandler({}));log=tempfile.TemporaryFile(mode='w+')
process=subprocess.Popen(['node','node_modules/next/dist/bin/next','start','--hostname','127.0.0.1','--port','3101'],cwd=root,stdout=log,stderr=log)
audit=json.loads((root/'data/seo-audit.json').read_text());count=0

def get(path,status=200):
 global count
 count+=1
 try:
  with client.open(base+path,timeout=30) as r:code=r.status;body=r.read().decode();url=r.url
 except urllib.error.HTTPError as e:code=e.code;body=e.read().decode();url=base+path
 assert code==status,(path,code,body[-200:]);return body,url

def localized(path,lang):return ('' if lang=='bn' else '/en')+('' if path=='/' else path) or '/'
try:
 for _ in range(100):
  try:get('/');break
  except urllib.error.URLError:
   if process.poll() is not None:log.seek(0);raise RuntimeError(log.read())
   time.sleep(.2)
 else:raise RuntimeError('Server did not become ready')
 # Pick approved, thin and equivalent-roster samples in every route family.
 samples=[]
 for family in ['doctor','doctors','specialty','hospital']:
  for mode in ['index','thin','duplicate']:
   match=next((r for r in audit['pages'] if r.get('reason')!='Scheduled for future publication' and r['path'].startswith('/'+family+'/') and (r['index'] if mode=='index' else bool(r.get('canonical')) if mode=='duplicate' else not r['index'] and not r.get('canonical'))),None)
   if match:samples.append(match)
 samples += [r for r in audit['pages'] if r['path'] in ['/','/doctors','/hospitals','/specialties','/locations']]
 for lang in ['bn','en']:
  for record in samples:
   path=localized(record['path'],lang);body,_=get(path)
   assert f'<html lang="{lang}"' in body,path
   assert '<h1' in body,path
   expected='https://doclist-bd.com'+localized(record.get('canonical',record['path']),lang)
   actual=re.search(r'<link rel="canonical" href="([^"]+)"',body);assert actual and actual[1].rstrip('/')==expected.rstrip('/'),(path,expected,actual[1] if actual else None)
   robots=re.search(r'<meta name="robots" content="([^"]+)"',body);assert robots,path
   assert ('noindex' not in robots[1]) == bool(record['index'] or record.get('canonical')),(path,robots[1])
   assert 'created_at' not in body and 'synthetic-owner-assigned' not in body,path
   schemas=[json.loads(x) for x in re.findall(r'<script type="application/ld\+json">(.*?)</script>',body)]
   for schema in schemas:
    assert 'dateCreated' not in schema and 'datePublished' not in schema
   if record['index']:
    assert 'hrefLang="bn-BD"' in body or 'hreflang="bn-BD"' in body,path
    assert 'hrefLang="en-BD"' in body or 'hreflang="en-BD"' in body,path
  for suffix in ['?q=washim','?division=dhaka-division','?sort=name']:
   body,_=get(localized('/doctors',lang)+suffix);assert re.search(r'name="robots" content="noindex',body)
  body,_=get(localized('/doctors',lang)+'?page=2');assert f'rel="canonical" href="https://doclist-bd.com{localized("/doctors",lang)}?page=2"' in body
  for path in ['/doctor/no-such-doctor','/hospital/no-such-hospital','/doctors?page=999999']:get(localized(path,lang),404)
  body,_=get(localized('/doctor/dr-washim-ahmed',lang));assert '<h1 lang="en">Dr. Washim Ahmed</h1>' in body
  _,url=get('/bn/doctors');assert url.endswith('/doctors')
 xml,_=get('/sitemap.xml');ns={'s':'http://www.sitemaps.org/schemas/sitemap/0.9'};shards=ET.fromstring(xml).findall('s:sitemap/s:loc',ns);urls=[]
 for shard in shards:
  xml,_=get(shard.text.removeprefix('https://doclist-bd.com'))
  shard_urls=[x.text for x in ET.fromstring(xml).findall('s:url/s:loc',ns)]
  assert 0<len(shard_urls)<=1000
  urls += shard_urls
 expected={'https://doclist-bd.com'+localized(r['path'],lang) for r in audit['pages'] if r['index'] for lang in ['bn','en']}
 assert set(urls)==expected and len(urls)==len(expected)==audit['sitemapUrls']
 assert len(shards)==(len(urls)+999)//1000
 get('/sitemaps/'+str(len(shards))+'.xml',404);get('/sitemaps/00.xml',404)
 robots,_=get('/robots.txt');assert 'Sitemap: https://doclist-bd.com/sitemap.xml' in robots
 print(json.dumps({'status':'passed','httpRequests':count,'sitemapUrls':len(urls),'samplePagesPerLanguage':len(samples),'checks':'canonical, hreflang, index/noindex, duplicate consolidation, JSON-LD, dates omitted, both locales, doctor names, filters, pagination, 404s and exact sitemap membership'}))
finally:
 process.terminate()
 try:process.wait(timeout=10)
 except subprocess.TimeoutExpired:process.kill()
 log.close()
