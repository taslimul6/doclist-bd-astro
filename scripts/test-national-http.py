"""Production rendering of newly imported profiles and national geography."""
import json,subprocess,time,tempfile,urllib.request,urllib.error,html
from pathlib import Path
R=Path(__file__).resolve().parents[1];D=json.loads((R/'data/doctors.json').read_text());L=json.loads((R/'data/locations.json').read_text());base=json.loads((R/'data/reports/baseline-references.json').read_text());old={d['id'] for d in base['doctors']};new=[d for d in D if d['id'] not in old]
log=tempfile.TemporaryFile(mode='w+');p=subprocess.Popen(['node','node_modules/next/dist/bin/next','start','--hostname','127.0.0.1','--port','3103'],cwd=R,stdout=log,stderr=log);client=urllib.request.build_opener(urllib.request.ProxyHandler({}));count=0

def get(path):
 global count
 with client.open('http://127.0.0.1:3103'+path,timeout=45) as r:assert r.status==200;body=r.read().decode()
 count+=1;assert 'application/ld+json' in body;return body
try:
 for _ in range(150):
  try:get('/en');break
  except (urllib.error.URLError,ConnectionError):time.sleep(.2)
 else:raise AssertionError('Server failed to start')
 divs=[l for l in L if l['kind']=='division']
 for div in divs:
  dist=next(l for l in L if l['kind']=='district' and l['parent']==div['slug'])
  d=next(d for d in new if dist['slug'] in d['locationSlugs'])
  for prefix in ['', '/en']:
   body=get(prefix+'/doctors/'+dist['slug']);assert 'canonical' in body
   body=get(prefix+'/doctor/'+d['slug']);assert html.escape(d['name']) in body or d['name'] in body
 # Newly imported profile with absent optional fields, filters, non-first pagination.
 missing=next(d for d in new if not d['registration'] and not d['chambers'][0]['schedule'])
 get('/en/doctor/'+missing['slug']);get('/en/doctors?division=rajshahi-division&district=bogura&page=2');get('/en/doctors?q=cardiology&page=2')
 report={'status':'passed','requests':count,'newProfileAndDistrictSamplesPerLanguage':8,'missingOptionalFields':True,'paginationAndFilters':True}
 (R/'data/reports/national-http-validation.json').write_text(json.dumps(report,indent=2)+'\n');print(report)
finally:p.terminate();p.wait(timeout=15);log.close()
