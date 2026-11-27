"""Lossless source import. Re-run after replacing CSVs in data/source/."""
import csv, json, re, hashlib, collections
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
read=lambda p:list(csv.DictReader(p.open(encoding='utf-8-sig',newline='')))
canonical=read(next((ROOT/'data/source').glob('bangladesh*.csv')))
listings=read(next((ROOT/'data/source').glob('doctor_specialty*.csv')))
slug=lambda s: re.sub(r'[^a-z0-9]+','-',s.lower()).strip('-')
clean=lambda s: re.sub(r'\s+',' ',s or '').strip()
location_alias={'Chittagong':'Chattogram','Barisal':'Barishal','Bogra':'Bogura'}
alias={}
def group(name,*values):
 for x in (name,*values): alias[x.lower()]=name
group('Gynecology','Gynaecology','Gyne');group('Pediatrics','Paediatrics','Child Diseases','Pediatric')
group('Orthopedics','Orthopaedics','Orthopedic Specialist','Orthopedic Surgery','Traumatology')
group('Dentistry','Dental','Dental Surgery');group('Respiratory Medicine','Chest','Chest Diseases','Chest Medicine','Respiratory','Pulmonology')
group('Neurology','Neuromedicine');group('Dermatology','Skin');group('Venereology','VD');group('Anesthesiology','Anaesthesia','Anesthesia')
group('Endocrinology','Endocrine','Hormonal Diseases');group('Diabetes','Diabetology');group('Hepatology','Liver','Liver Medicine')
group('General Practice','General Physician');group('General Surgery','Surgeon','Surgery')
group('Laparoscopic Surgery','Advanced Laparoscopic','Advanced Laparoscopic Surgery','Laparoscopic','Laparoscopy')
group('Endo-Laparoscopic Surgery','Endo-Laparoscopic');group('Colorectal Surgery','Colorectal');group('Plastic Surgery','Plastic')
group('Reconstructive Surgery','Reconstructive');group('Cardiac Surgery','Cardiovascular Surgery','Cardiothoracic','Congenital Cardiac Surgery')
group('Vascular Surgery','Vascular');group('Endovascular Surgery','Endovascular');group('Thoracic Surgery','Thoracic')
group('Maxillofacial Surgery','Oral');group('Critical Care','Critical Care Units','CCU','ICU','Intensive Care Medicine')
group('Neonatology','NICU');group('Pediatric Critical Care','PICU','Paediatric ICU','Paediatric IC​U');group('Psychiatry','Mental Health')
group('Pain Medicine','Pain','Pain Management');group('Physical Medicine & Rehabilitation','Physical Medicine','Rehabilitation')
group('Bone Marrow Transplant','BMT','Stem Cell Transplant');group('Radiation Oncology','Radiotherapy');group('Surgical Oncology','Oncosurgery','Oncological Surgery','Cancer Surgery')
group('Radiology','Imaging');group('Ultrasonography','Ultrasound','Sonology');group('Laboratory Medicine','Lab Medicine')
group('Hepatobiliary Surgery','Hepatobiliary');group('Pancreatic Surgery','Pancreatic');group('Hernia Surgery','Hernia')
group('Breast Surgery','Breast');group('Spine Surgery','Spine');group('Aesthetic Medicine','Aesthetic');group('Cosmetic Surgery','Cosmetic')
group('Infertility','Fertility Centre');group('Urology','Urological');group('Oncology','Cancer');group('Cardiology','Cardiac','Cardiovascular');group('Cardiac Anesthesiology','Cardiothoracic Anaesthesia')
group('Pediatric Surgery','Paediatric Surgery');group('Pediatric Cardiology','Paediatric Cardiology');group('Pediatric Neurology','Paediatrics Neurology')
group('Pediatric Urology','Paediatric Urology');group('Pediatric Nephrology','Paediatric Nephrology');group('Tuberculosis','TB')
# Category fragments cannot reliably establish a medical specialty. Retain them in the raw records.
excluded={'general','medical','clinical','diagnostic','gi','gastro-liver','laser','accident','tumor','knee','hand','sleep','wellness centre','pancreas','skull base'}
areas=['Uttara','Dhanmondi','Mirpur','Gulshan','Banani','Mohammadpur','Badda','Shantinagar','Panthapath','Shyamoli','Kallyanpur','Akhalia','Kajolshah']
doctors={}; hospitals={}; specialties={}; locations={}; unmapped=collections.Counter()
def loc(name,kind,parent=None):
 name=location_alias.get(clean(name),clean(name)); key=slug(name)+('-division' if kind=='division' else '')
 if not name:return None
 if key not in locations:locations[key]={'slug':key,'name':name+(' Division' if kind=='division' else ''),'kind':kind,'parent':parent,'doctorIds':set(),'hospitalSlugs':set()}
 return key
def ensure_doctor(row):
 key=row['doctor_id']
 if key not in doctors:doctors[key]={'id':key,'name':clean(row['doctor_name']),'nameVariants':[],'specialtySlugs':set(),'locationSlugs':set(),'chambers':{},'qualifications':'','designation':'','institute':'','registration':'','experience':None,'gender':None,'image':None,'description':None,'rawSpecialties':set(),'flags':set(),'sources':set(),'lastChecked':''}
 d=doctors[key]
 if row['doctor_name']!=d['name'] and row['doctor_name'] not in d['nameVariants']: d['nameVariants'].append(row['doctor_name'])
 for target,field in [('qualifications','qualifications'),('designation','designation'),('institute','institute'),('registration','bmdc_reg_no')]:
  if not d[target] and row.get(field):d[target]=clean(row[field])
 if row.get('experience_years') and re.fullmatch(r'\d+(\.\d+)?',row['experience_years']):d['experience']=float(row['experience_years'])
 if row.get('source_url'):d['sources'].add(row['source_url'])
 if row.get('data_quality_flags'):d['flags'].add(row['data_quality_flags'])
 d['lastChecked']=max(d['lastChecked'],row.get('last_checked',''))
 if row.get('raw_specialty') or row.get('specialty'):d['rawSpecialties'].add(row.get('raw_specialty') or row.get('specialty'))
 district=loc(row['district'],'district',loc(row['division'],'division'))
 division=loc(row['division'],'division')
 area_keys=[loc(a,'area',district) for a in areas if re.search(r'\b'+a+r'\b',row['clinic']+' '+row['clinic_address'],re.I)]
 ls=set(filter(None,[district,division,*area_keys]));d['locationSlugs'].update(ls)
 hn=clean(row['clinic']);hs=slug(hn)
 if hs not in hospitals:hospitals[hs]={'slug':hs,'name':hn,'type':row['clinic_type'],'district':district,'locations':set(),'addresses':set(),'phones':set(),'doctorIds':set(),'specialtySlugs':set(),'sources':set()}
 h=hospitals[hs];h['locations'].update(ls);h['doctorIds'].add(key)
 if row['clinic_address']:h['addresses'].add(clean(row['clinic_address']))
 if row['appointment_phone']:h['phones'].add(row['appointment_phone'])
 if row.get('source_url'):h['sources'].add(row['source_url'])
 ck=row['chamber_id']
 if ck not in d['chambers']:d['chambers'][ck]={'id':ck,'hospitalSlug':hs,'name':hn,'address':clean(row['clinic_address']),'locations':sorted(ls),'phone':row['appointment_phone'],'schedule':clean(row['visiting_schedule']),'fee':row['visit_fee_bdt'] or None,'flags':row['data_quality_flags'],'source':row['source_url']}
 else:
  for target,field in [('address','clinic_address'),('phone','appointment_phone'),('schedule','visiting_schedule')]:
   if not d['chambers'][ck][target]:d['chambers'][ck][target]=row[field]
 for l in ls:locations[l]['doctorIds'].add(key);locations[l]['hospitalSlugs'].add(hs)
 return d,h,ls
for row in canonical:ensure_doctor(row)
for row in listings:
 d,h,ls=ensure_doctor(row); raw=clean(row['specialty_category']);name=alias.get(raw.lower(),raw)
 if raw.lower() in excluded:unmapped[raw]+=1;continue
 s=slug(name)
 if s not in specialties:specialties[s]={'slug':s,'name':name,'doctorIds':set(),'locationSlugs':set(),'hospitalSlugs':set(),'rawCategories':set()}
 t=specialties[s];t['doctorIds'].add(d['id']);t['locationSlugs'].update(ls);t['hospitalSlugs'].add(h['slug']);t['rawCategories'].add(raw)
 d['specialtySlugs'].add(s);h['specialtySlugs'].add(s)
# Stable uniqueness without merging distinct doctor IDs with the same name.
counts=collections.Counter(slug(d['name']) for d in doctors.values())
for d in doctors.values():
 base=slug(d['name']) or 'doctor';d['slug']=base+('-'+d['id'].removeprefix('doc_') if counts[base]>1 else '')
 d['chambers']=list(d['chambers'].values())
def encode(o):
 if isinstance(o,set):return sorted(o)
 raise TypeError(type(o).__name__)
write=lambda name,obj:(ROOT/'data'/name).write_text(json.dumps(obj,ensure_ascii=False,indent=2,default=encode)+'\n')
write('doctors.json',list(doctors.values()));write('hospitals.json',list(hospitals.values()));write('specialties.json',list(specialties.values()));write('locations.json',list(locations.values()))
# Combination membership is derived per source row/chamber, never from a cross-product of a doctor's locations and specialties.
pairs=collections.defaultdict(set);hpairs=collections.defaultdict(set)
for row in listings:
 raw=clean(row['specialty_category'])
 if raw.lower() in excluded:continue
 sp=slug(alias.get(raw.lower(),raw)); hs=slug(clean(row['clinic']));ls=[slug(location_alias.get(row['district'],row['district'])),slug(location_alias.get(row['division'],row['division']))+'-division']
 ls += [slug(a) for a in areas if re.search(r'\b'+a+r'\b',row['clinic']+' '+row['clinic_address'],re.I)]
 for l in ls:pairs[sp+'/'+l].add(row['doctor_id'])
 hpairs[hs+'/'+sp].add(row['doctor_id'])
relations=collections.defaultdict(list)
for row in listings:
 raw=clean(row['specialty_category'])
 if raw.lower() in excluded:continue
 sp=slug(alias.get(raw.lower(),raw));hs=slug(clean(row['clinic']))
 ls=[slug(location_alias.get(row['district'],row['district'])),slug(location_alias.get(row['division'],row['division']))+'-division']
 ls += [slug(a) for a in areas if re.search(r'\b'+a+r'\b',row['clinic']+' '+row['clinic_address'],re.I)]
 relation={'specialty':sp,'hospital':hs,'locations':ls}
 if relation not in relations[row['doctor_id']]:relations[row['doctor_id']].append(relation)
write('combinations.json',{'specialtyLocation':pairs,'hospitalSpecialty':hpairs,'relations':relations})
report={'canonicalRows':len(canonical),'listingRows':len(listings),'uniqueListingIds':len(set(r['listing_id'] for r in listings)),'duplicateListingRows':len(listings)-len(set(r['listing_id'] for r in listings)),'uniqueDoctors':len(doctors),'uniqueChamberIds':len(set(r['chamber_id'] for r in canonical+listings)),'doctorChamberAssociations':sum(len(d['chambers']) for d in doctors.values()),'hospitals':len(hospitals),'specialties':len(specialties),'locations':len(locations),'districts':len([l for l in locations.values() if l['kind']=='district']),'specialtyLocationPages':len(pairs),'hospitalSpecialtyPages':len(hpairs),'categoryFragmentsNotUsedForSEO':dict(unmapped),'rawRecordsPreserved':True,'normalizationPolicy':'Same doctor ID aggregates chambers and specialties. Separate IDs never merged. Raw CSVs retained unchanged. Area labels are explicit matches in supplied clinic names/addresses. Division pages are distinct from district pages. No fee, photo, gender, rating or availability invented.'}
write('audit.json',report);print(json.dumps(report,indent=2))
