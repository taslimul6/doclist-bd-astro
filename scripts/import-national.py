"""Conservative, incremental national adapter; no network calls or history imports."""
import json,re,hashlib,collections,sys
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]; DATA=ROOT/'data'
SRC=Path(sys.argv[1]) if len(sys.argv)>1 else DATA/'import-source/final'
def read(p):return json.loads(p.read_text())
def write(p,v):p.parent.mkdir(parents=True,exist_ok=True);p.write_text(json.dumps(v,ensure_ascii=False,indent=2)+'\n')
def norm(v):return re.sub(r'[^\w]+','',str(v or '').lower())
def slug(v):return re.sub('[^a-z0-9]+','-',str(v or '').lower()).strip('-')
def uid(v):return hashlib.sha256(v.encode()).hexdigest()[:14]
def add(a,v):
 if v and v not in a:a.append(v)
def text(v):return str(v).strip() if v is not None else ''
def phone(v):return re.sub(r'^(?:0088|88)(?=01)','',re.sub(r'\D','',text(v)))
# Reuse the established specialty aliases without executing the legacy CSV importer.
legacy=(ROOT/'scripts/normalize-data.py').read_text(); env={'re':re};exec(legacy[legacy.index('alias={}'):legacy.index('areas=')],env)
alias=env['alias'];excluded=env['excluded']
alias.update({'kidney disease specialist':'Nephrology','surgery specialist':'General Surgery','vuscular surgery specialist':'Vascular Surgery','general practitioner':'General Practice','plastic and burn surgery specialist':'Plastic Surgery','biochemistry specialist':'Biochemistry','ইএনটি বিশেষজ্ঞ ও সার্জন':'ENT','স্ত্রী রোগ':'Gynecology','গাইনি':'Gynecology','শিশু':'Pediatrics','মেডিসিন':'Medicine','হৃদরোগ':'Cardiology','চর্ম':'Dermatology'})
excluded.update({'uncategorized','ট্রেইনড ইন মিনিমাম এক্স সার্জারী (আমেরিকান কলেজ অব সার্জন্স)','pain doctor joypurhat','neck pain joypurhat'})
doctors=read(DATA/'doctors.json'); hospitals=read(DATA/'hospitals.json');specialties=read(DATA/'specialties.json');locations=read(DATA/'locations.json');combo=read(DATA/'combinations.json')
before={'doctors':len(doctors),'chambers':sum(len(d['chambers']) for d in doctors)}
D={d['id']:d for d in doctors};H={h['slug']:h for h in hospitals};S={s['slug']:s for s in specialties};L={l['slug']:l for l in locations}
rows=read(SRC/'bangladesh_doctors_master.json')['records']; index=read(SRC/'doctor_specialty_chamber_index.json')['records']
review=read(DATA/'reports/import-review.json') if (DATA/'reports/import-review.json').exists() else [];conflicts=[];mapping={};stats=collections.Counter(); usedslugs={d['slug'] for d in doctors}
prior=read(DATA/'import-mapping.json') if (DATA/'import-mapping.json').exists() else {}
chindex=collections.defaultdict(list)
for d in doctors:
 for c in d['chambers']:chindex[c['id']].append((d,c))
nameindex=collections.defaultdict(list)
for d in doctors:nameindex[norm(d['name'])].append(d)
def merge(obj,key,value,ref):
 if value is None or value=='':return
 if not obj.get(key):obj[key]=value;stats['fieldsFilled']+=1
 elif obj[key]!=value:conflicts.append({'reference':ref,'field':key,'kept':obj[key],'incoming':value})
def location(name,kind,parent=None):
 name={'Bogra':'Bogura','Barisal':'Barishal','Chittagong':'Chattogram'}.get(name,name);k=slug(name)+('-division' if kind=='division' else '')
 if k not in L:L[k]={'slug':k,'name':name+(' Division' if kind=='division' else ''),'kind':kind,'parent':parent,'doctorIds':[],'hospitalSlugs':[]}
 return k
def evidence(d,r):
 return norm(d['name'])==norm(r['doctor_name']) and ((r.get('bmdc_reg_no') and norm(d.get('registration'))==norm(r['bmdc_reg_no'])) or any(norm(c['name'])==norm(r['clinic']) and slug(r['district']) in c['locations'] and ((phone(c['phone']) and phone(c['phone'])==phone(r.get('appointment_phone'))) or (norm(c['address']) and norm(c['address'])==norm(r.get('clinic_address')))) for c in d['chambers']))
for r in rows:
 key=r['doctor_id']+'|'+r['chamber_id'];ref=key
 div=location(r['division'],'division');dist=location(r['district'],'district',div)
 candidates=[(d,c) for d,c in chindex[r['chamber_id']] if norm(d['name'])==norm(r['doctor_name']) and norm(c['name'])==norm(r['clinic']) and dist in c['locations']]
 d=None;c=None
 if key in prior and prior[key]['doctorId'] in D:
  d=D[prior[key]['doctorId']];c=next((c for c in d['chambers'] if c['id']==prior[key]['chamberId']),None)
 elif len(candidates)==1:d,c=candidates[0]
 else:
  matches=[x for x in nameindex[norm(r['doctor_name'])] if evidence(x,r)]
  if len(matches)==1:d=matches[0]
 if d is None:
  proposed=r['doctor_id']; did=proposed if proposed not in D else 'doc_import_'+uid(key)
  base=slug(r['doctor_name']) or 'doctor';ds=base if base not in usedslugs else base+'-'+uid(key)
  usedslugs.add(ds)
  d=dict(id=did,slug=ds,name=r['doctor_name'],nameVariants=[],specialtySlugs=[],locationSlugs=[],chambers=[],qualifications='',designation='',institute='',registration='',experience=None,gender=None,image=None,description=None,rawSpecialties=[],flags=[],sources=[],lastChecked='')
  if nameindex[norm(r['doctor_name'])] or proposed in D:
   review.append({'reference':key,'reason':'Approximate ID/name collision; separate profile retained','candidates':[x['id'] for x in nameindex[norm(r['doctor_name'])]]});add(d['flags'],'verify_identity: unresolved name/ID collision')
  D[did]=d;nameindex[norm(r['doctor_name'])].append(d);stats['addedDoctors']+=1
 else:stats['matchedRecords']+=1
 old=json.dumps(d,sort_keys=True)
 for a,b in [('qualifications','qualifications'),('designation','designation'),('institute','institute'),('registration','bmdc_reg_no')]:merge(d,a,text(r.get(b)),ref)
 # Source claims are retained verbatim; no independent verification is inferred.
 d['lastChecked']=max(d['lastChecked'],text(r.get('last_checked')));add(d['sources'],r.get('source_url'));add(d['rawSpecialties'],r.get('specialty'));add(d['flags'],text(r.get('data_quality_flags')))
 if c is None:
  # Scope identical facility names to their district; never merge branches by name alone.
  hs=slug(r['clinic']) or 'facility-'+uid(key)
  if hs in H and (H[hs]['district']!=dist or (H[hs]['addresses'] and r.get('clinic_address') and norm(r['clinic_address']) not in [norm(x) for x in H[hs]['addresses']])):
   hs+='-'+dist+'-'+uid(text(r.get('clinic_address')))
   review.append({'reference':key,'reason':'Facility branch/address ambiguity; distinct node retained','hospitalSlug':hs})
  if hs not in H:H[hs]=dict(slug=hs,name=r['clinic'],type=text(r.get('clinic_type')),district=dist,locations=[],addresses=[],phones=[],doctorIds=[],specialtySlugs=[],sources=[])
  c=dict(id=r['chamber_id'],hospitalSlug=hs,name=r['clinic'],address='',locations=[dist,div],phone='',schedule='',fee=None,flags='',source=text(r.get('source_url')))
  d['chambers'].append(c);chindex[c['id']].append((d,c));stats['addedChambers']+=1
 for a,b in [('address','clinic_address'),('phone','appointment_phone'),('schedule','visiting_schedule')]:merge(c,a,text(r.get(b)),ref)
 merge(c,'fee',text(r['visit_fee_bdt']) if r.get('visit_fee_bdt') is not None else None,ref)
 merge(c,'flags',text(r.get('data_quality_flags')),ref)
 for l in [dist,div]:add(c['locations'],l)
 for l in c['locations']:add(d['locationSlugs'],l)
 observation={k:v for k,v in r.items() if k not in ['doctor_id','chamber_id']}
 if observation not in c.setdefault('provenance',[]):c['provenance'].append(observation)
 add(c.setdefault('sources',[]),r.get('source_url'));c['sourceObservedAt']=text(r.get('last_checked'))
 if json.dumps(d,sort_keys=True)!=old:stats['updatedRecords']+=1
 mapping[key]={'doctorId':d['id'],'chamberId':c['id'],'hospitalSlug':c['hospitalSlug']}
# Archive review notes remain available and mark affected profiles for editorial review.
for reviewfile in ['identity_review.json','national_bmdc_identity_review.json']:
 for case in read(SRC/'enrichment'/reviewfile):
  entry={'archiveReport':reviewfile,'case':case}
  if entry not in review:review.append(entry)
  for record in case.get('records',[]):
   m=mapping.get(text(record.get('doctor_id'))+'|'+text(record.get('chamber_id')))
   if m:add(D[m['doctorId']]['flags'],'verify_identity: archive identity review pending')
# Retain existing relation objects, enrich with chamber-specific associations.
for r in index:
 key=r['doctor_id']+'|'+r['chamber_id'];m=mapping.get(key)
 if not m:review.append({'reference':key,'reason':'Orphan incoming specialty row'});stats['skipped']+=1;continue
 raw=text(r.get('specialty_category'));name=alias.get(raw.lower(),raw)
 if not raw or raw.lower() in excluded:stats['excludedSpecialtyFragments']+=1;continue
 sp=slug(name)
 if not sp:sp='specialty-'+uid(name)
 if sp not in S:S[sp]=dict(slug=sp,name=name,doctorIds=[],locationSlugs=[],hospitalSlugs=[],rawCategories=[])
 d=D[m['doctorId']];c=next(c for c in d['chambers'] if c['id']==m['chamberId']);add(c.setdefault('specialtySlugs',[]),sp);add(d['specialtySlugs'],sp);add(S[sp]['rawCategories'],raw)
 rel={'specialty':sp,'hospital':c['hospitalSlug'],'locations':c['locations'],'chamberId':c['id']}
 rels=combo['relations'].setdefault(d['id'],[])
 if rel not in rels:rels.append(rel)
# Seed per-chamber specialties from old relations (do not cross product doctor specialties).
for d in D.values():
 for c in d['chambers']:
  for rel in combo['relations'].get(d['id'],[]):
   if (not rel.get('chamberId') or rel['chamberId']==c['id']) and rel['hospital']==c['hospitalSlug'] and set(rel['locations']) & set(c['locations']):add(c.setdefault('specialtySlugs',[]),rel['specialty'])
# Rebuild all memberships from preserved + imported chambers and relation tuples.
for h in H.values():
 for k in ['doctorIds','specialtySlugs','locations']:h[k]=[]
for l in L.values():l['doctorIds']=[];l['hospitalSlugs']=[]
for s in S.values():
 for k in ['doctorIds','locationSlugs','hospitalSlugs']:s[k]=[]
combo['specialtyLocation']={};combo['hospitalSpecialty']={};listing=set()
for d in D.values():
 for c in d['chambers']:
  h=H[c['hospitalSlug']];add(h['doctorIds'],d['id']);add(h['addresses'],c['address']);add(h['phones'],c['phone']);add(h['sources'],c['source'])
  for l in c['locations']:
   add(h['locations'],l);add(L[l]['doctorIds'],d['id']);add(L[l]['hospitalSlugs'],h['slug'])
  for sp in c.get('specialtySlugs',[]):
   s=S[sp];listing.add((d['id'],c['id'],sp));add(s['doctorIds'],d['id']);add(s['hospitalSlugs'],h['slug']);add(h['specialtySlugs'],sp)
   add(combo['hospitalSpecialty'].setdefault(h['slug']+'/'+sp,[]),d['id'])
   for l in c['locations']:add(s['locationSlugs'],l);add(combo['specialtyLocation'].setdefault(sp+'/'+l,[]),d['id'])
for name,data in [('doctors',list(D.values())),('hospitals',list(H.values())),('specialties',list(S.values())),('locations',list(L.values())),('combinations',combo),('import-mapping',mapping)]:write(DATA/(name+'.json'),data)
counts={'doctors':len(D),'chambers':sum(len(d['chambers']) for d in D.values()),'specialtyListings':len(listing),'districts':sum(l['kind']=='district' for l in L.values()),'divisions':sum(l['kind']=='division' for l in L.values())}
report={'before':before,'incoming':{'masterRecords':len(rows),'specialtyRows':len(index)},'actions':{k:stats[k] for k in ['addedDoctors','addedChambers','matchedRecords','updatedRecords','fieldsFilled','skipped','excludedSpecialtyFragments']},'after':counts,'reviewCases':len(review),'conflictingValues':len(conflicts),'identityPolicy':'Counts describe profiles, not independently verified unique people. Names/approximate IDs alone never merge profiles.'}
write(DATA/'reports/import-report.json',report);write(DATA/'reports/import-review.json',review);write(DATA/'reports/import-conflicts.json',conflicts)
write(DATA/'reports/geography-counts.json',[{'slug':l['slug'],'kind':l['kind'],'parent':l['parent'],'doctorProfiles':len(l['doctorIds']),'chambers':sum(l['slug'] in c['locations'] for d in D.values() for c in d['chambers'])} for l in L.values() if l['kind'] in ['district','division']])
audit=read(DATA/'audit.json');audit['categoryFragmentsNotUsedForSEO']=dict(collections.Counter(text(r.get('specialty_category')) for r in index if text(r.get('specialty_category')).lower() in excluded));audit.update(canonicalRows=len(rows),incomingSpecialtyRows=len(index),uniqueListingIds=len(listing),duplicateListingRows=0,uniqueChamberIds=len({c['id'] for d in D.values() for c in d['chambers']}),specialtyLocationPages=len(combo['specialtyLocation']),hospitalSpecialtyPages=len(combo['hospitalSpecialty']),normalizationPolicy='Incremental evidence-based adapter. Existing identities and slugs preserved. Approximate IDs/names alone do not merge new chambers. Counts are profiles, not verified unique people.',uniqueDoctors=counts['doctors'],doctorChamberAssociations=counts['chambers'],listingRows=counts['specialtyListings'],districts=counts['districts'],hospitals=len(H),specialties=len(S),locations=len(L));write(DATA/'audit.json',audit)
print(json.dumps(report,indent=2))

# Append new routes to the established release queue; never reschedule existing slots.
if (DATA/'release-baseline.json').exists():
 import subprocess
 subprocess.run([sys.executable,str(ROOT/'scripts/generate-release-schedule.py')],check=True)
