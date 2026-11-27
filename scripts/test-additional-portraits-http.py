"""Check every additional portrait is served intact and used in current app responses."""
import json,hashlib,os,subprocess,tempfile,time,urllib.request,urllib.error
from pathlib import Path
R=Path(__file__).resolve().parents[1];manifest=json.loads((R/'data/doctor-images.json').read_text());report=json.loads((R/'data/reports/additional-portraits-report.json').read_text());ids=report['addedDoctorIds'];D={d['id']:d for d in json.loads((R/'data/doctors.json').read_text())};client=urllib.request.build_opener(urllib.request.ProxyHandler({}));base='http://127.0.0.1:3123'
with tempfile.TemporaryFile(mode='w+') as log:
 server=subprocess.Popen(['node','node_modules/next/dist/bin/next','start','--hostname','127.0.0.1','--port','3123'],cwd=R,env={**os.environ,'DOCLIST_RELEASE_START':'2099-01-01'},stdout=log,stderr=log)
 try:
  for _ in range(100):
   try:client.open(base+'/en/my-doc',timeout=5).close();break
   except urllib.error.URLError:
    if server.poll() is not None:log.seek(0);raise AssertionError(log.read())
    time.sleep(.2)
  for id in ids:
   with client.open(base+manifest[id]['path'],timeout=20) as r:assert r.headers['Content-Type'].startswith('image/');assert hashlib.sha256(r.read()).hexdigest()==manifest[id]['sha256']
  req=urllib.request.Request(base+'/api/my-doc',data=json.dumps(ids).encode(),headers={'Content-Type':'application/json'});returned=json.load(client.open(req));assert len(returned)==len(ids)
  for item in returned:assert item['image']==manifest[item['id']]['path']
  for id in ids[:2]:
   html=client.open(base+'/en/doctor/'+D[id]['slug']).read().decode();assert manifest[id]['path'] in html
  output={'status':'passed','newPortraitsServedIntact':len(ids),'myDocApiImages':True,'representativeProfileImages':True};(R/'data/reports/additional-portraits-http-validation.json').write_text(json.dumps(output,indent=2)+'\n');print(json.dumps(output))
 finally:server.terminate();server.wait(timeout=20)
