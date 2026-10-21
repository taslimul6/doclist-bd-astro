"""Verify final pages/API against a production server, with all profiles live."""
import json,os,subprocess,tempfile,time,urllib.request,urllib.error
from pathlib import Path
R=Path(__file__).resolve().parents[1]
client=urllib.request.build_opener(urllib.request.ProxyHandler({}))
port=3117
with tempfile.TemporaryDirectory() as temp:
 with open(Path(temp)/'server.log','w+') as log:
  server=subprocess.Popen(['node','node_modules/next/dist/bin/next','start','--hostname','127.0.0.1','--port',str(port)],cwd=R,env={**os.environ,'DOCLIST_RELEASE_START':'2099-01-01','DOCLIST_DB_PATH':str(Path(temp)/'test.sqlite')},stdout=log,stderr=log)
  def get(path):
   with client.open(f'http://127.0.0.1:{port}'+path,timeout=30) as response:return response.read().decode(),response.headers
  try:
   for _ in range(100):
    try:get('/en/my-doc');break
    except urllib.error.URLError:
     if server.poll() is not None:log.seek(0);raise AssertionError(log.read())
     time.sleep(.2)
   docs=json.loads((R/'data/doctors.json').read_text());locations=json.loads((R/'data/locations.json').read_text())
   for slug,division in [('joypurhat','rajshahi-division'),('narayanganj','dhaka-division')]:
    loc=next(l for l in locations if l['slug']==slug);d=next(d for d in docs if d['id'] in loc['doctorIds'])
    for prefix in ['', '/en']:
     html,_=get(prefix+'/doctors/'+slug);assert d['name'] in html
     html,_=get(prefix+'/doctors?division='+division+'&district='+slug);assert d['name'] in html
     html,_=get(prefix+'/doctor/'+d['slug']);assert 'save-doc-control' in html
   for p in ['/my-doc','/en/my-doc']:
    html,_=get(p);assert ('Saved Docs' if p.startswith('/en') else 'আমার ডাক্তার') in html and 'noindex' in html
   d=docs[0];request=urllib.request.Request(f'http://127.0.0.1:{port}/api/my-doc',data=json.dumps([d['id'],d['id'],'unknown']).encode(),headers={'Content-Type':'application/json'})
   with client.open(request) as r:items=json.load(r);assert len(items)==1 and items[0]['id']==d['id'];assert 'no-store' in r.headers['Cache-Control']
   assert '/sitemaps/100.xml' in get('/sitemap.xml')[0];assert get('/sitemaps/100.xml')[0].count('<url>')==1000
   manifest=json.loads((R/'data/doctor-images.json').read_text());base={d['id'] for d in json.loads((R/'data/reports/baseline-references.json').read_text())['doctors']};added=[item for id,item in manifest.items() if id not in base]
   for item in added[:3]:
    with client.open(f'http://127.0.0.1:{port}'+item['path']) as r:assert r.headers['Content-Type'].startswith('image/') and len(r.read())>0
   result={'status':'passed','districtPagesAndFilters':['joypurhat','narayanganj'],'bilingualProfilesLiveBeforeSchedule':True,'myDocNoindexAndApi':True,'specialSitemapUrls':1000,'newLocalImagesHttpChecked':min(3,len(added))}
   (R/'data/reports/final-http-validation.json').write_text(json.dumps(result,indent=2)+'\n');print(json.dumps(result,indent=2))
  finally:server.terminate();server.wait(timeout=20)
