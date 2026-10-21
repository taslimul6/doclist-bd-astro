"""Integration invariants and byte-stable reimport, against the shipped baseline."""
import json,hashlib,subprocess
from pathlib import Path
R=Path(__file__).resolve().parents[1];P=R/'data'
def load(n):return json.loads((P/(n+'.json')).read_text())
ns=['doctors','hospitals','specialties','locations','combinations','import-mapping','audit']
old={n:hashlib.sha256((P/(n+'.json')).read_bytes()).hexdigest() for n in ns}
subprocess.run(['python3',str(R/'scripts/import-national.py')],cwd=R,check=True,capture_output=True)
assert old=={n:hashlib.sha256((P/(n+'.json')).read_bytes()).hexdigest() for n in ns},'Reimport changed application data'
d=load('doctors');h={x['slug']:x for x in load('hospitals')};l={x['slug']:x for x in load('locations')};s={x['slug']:x for x in load('specialties')};ids={x['id'] for x in d}
assert len(ids)==len(d)==len({x['slug'] for x in d})
assert sum(x['kind']=='district' for x in l.values())==64
assert sum(x['kind']=='division' for x in l.values())==8
for x in l.values():
 assert set(x['doctorIds'])<=ids
 if x['kind']=='district':assert l[x['parent']]['kind']=='division' and x['doctorIds']
for doc in d:
 for c in doc['chambers']:
  assert c['hospitalSlug'] in h
  assert set(c['locations'])<=l.keys()
  assert set(c.get('specialtySlugs',[]))<=s.keys()
  for loc in c['locations']:assert doc['id'] in l[loc]['doctorIds']
for loc in l.values():
 assert set(loc['doctorIds'])=={x['id'] for x in d if any(loc['slug'] in c['locations'] for c in x['chambers'])}
for did,rels in load('combinations')['relations'].items():
 assert did in ids
 for rel in rels:assert rel['specialty'] in s and rel['hospital'] in h and set(rel['locations'])<=l.keys()
source=P/'import-source/final'
master=json.loads((source/'bangladesh_doctors_master.json').read_text())['records']
for folder,key in [('districts','district'),('divisions','division')]:
 files=list((source/folder).rglob('*.json'))
 assert len(files)==(64 if key=='district' else 8)
 for f in files:
  partition=json.loads(f.read_text());subset=[r for r in master if r[key]==partition[key]]
  assert len(subset)==len(partition['doctors'])==partition['canonical_chamber_records']
  assert sorted((r['doctor_id'],r['chamber_id']) for r in subset)==sorted((r['doctor_id'],r['chamber_id']) for r in partition['doctors'])
base=load('reports/baseline-references')
by={x['id']:x for x in d}
for x in base['doctors']:
 assert by[x['id']]['slug']==x['slug']
 assert set(x['chamberIds'])<={c['id'] for c in by[x['id']]['chambers']}
for kind,items in [('hospitals',h),('specialties',s),('locations',l)]:assert set(base[kind])<=items.keys()
report={'idempotent':True,'preservedDoctorIdsAndSlugs':len(base['doctors']),'districts':64,'divisions':8,'orphanReferences':0,'geographyMemberships':'exact match to merged chambers','counts':load('reports/first-import')['after']}
(P/'reports/import-validation.json').write_text(json.dumps(report,indent=2)+'\n');print(json.dumps(report,indent=2))
