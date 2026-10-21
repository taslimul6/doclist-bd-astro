// Full-dataset invariants; publication timing has dedicated boundary tests.
process.env.DOCLIST_RELEASE_START='1970-01-01';
import assert from 'node:assert/strict';import fs from 'node:fs';import path from 'node:path';import {createRequire} from 'node:module';import ts from 'typescript';
const root=path.resolve(import.meta.dirname,'..'),source=path.join(root,'lib/directory.ts');
const cache=new Map();
function loadTs(file){if(cache.has(file))return cache.get(file);const result={};cache.set(file,result);const code=ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,esModuleInterop:true}}).outputText;const baseRequire=createRequire(file);new Function('exports','require',code)(result,name=>{if(name.startsWith('.')&&!name.endsWith('.json')){const target=path.resolve(path.dirname(file),name)+'.ts';if(fs.existsSync(target))return loadTs(target);}return baseRequire(name);});return result;}
const api=loadTs(source);
const {doctors,hospitals,specialties,locations,specialtyLocation,hospitalSpecialty,searchDoctors,allPaths,getDoctorBySlug}=api;
const audit=JSON.parse(fs.readFileSync(path.join(root,'data/audit.json'),'utf8'));
assert.equal(doctors.length,audit.uniqueDoctors);assert.equal(new Set(doctors.map(d=>d.slug)).size,doctors.length);assert.equal(new Set(allPaths()).size,allPaths().length);
const ids=new Set(doctors.map(d=>d.id));
for(const d of doctors){assert.equal(getDoctorBySlug(d.slug).id,d.id);assert.ok(d.chambers.length);for(const c of d.chambers)assert.ok(hospitals.some(h=>h.slug===c.hospitalSlug));}
for(const [k,list] of Object.entries(specialtyLocation)){assert.ok(list.length);const [s,l]=k.split('/');assert.ok(specialties.some(x=>x.slug===s));assert.ok(locations.some(x=>x.slug===l));assert.ok(list.every(id=>ids.has(id)));assert.equal(searchDoctors(list,{specialty:s,location:l}).total,list.length);}
for(const [k,list] of Object.entries(hospitalSpecialty)){assert.ok(list.length);const [h,s]=k.split('/');assert.ok(hospitals.some(x=>x.slug===h));assert.ok(specialties.some(x=>x.slug===s));assert.equal(searchDoctors(list,{hospital:h,specialty:s}).total,list.length);}
assert.equal(searchDoctors(undefined,{}).total,doctors.length);assert.equal(searchDoctors(undefined,{}).items.length,24);assert.equal(searchDoctors(undefined,{page:'2'}).items[0].id,doctors[24].id);
for(const page of ['999999','0','1.5','abc'])assert.ok(searchDoctors(undefined,{page}).invalidPage);
assert.equal(searchDoctors(undefined,{specialty:'unknown'}).total,0);assert.equal(searchDoctors(undefined,{q:'no-such-doctor-zzzzz'}).total,0);assert.ok(searchDoctors(undefined,{q:doctors[0].name}).items.some(d=>d.id===doctors[0].id));
assert.equal(api.getSpecialtyBySlug('nephrologist').slug,'nephrology');assert.equal(api.getLocationBySlug('chittagong').slug,'chattogram');
const sorted=searchDoctors(undefined,{sort:'name'}).items;assert.ok(sorted.every((d,i)=>i===0||sorted[i-1].name.localeCompare(d.name)<=0));
const relations=JSON.parse(fs.readFileSync(path.join(root,'data/combinations.json'),'utf8')).relations;
for(const h of hospitals){const s=h.specialtySlugs[0],l=h.locations[0];if(s&&l){const result=searchDoctors(undefined,{specialty:s,location:l,hospital:h.slug});assert.ok(result.items.every(d=>relations[d.id].some(r=>r.specialty===s&&r.hospital===h.slug&&r.locations.includes(l))));}}
const i18n=loadTs(path.join(root,'lib/i18n.ts'));
for(const sp of specialties)assert.ok(i18n.specialty('bn',sp.name),'Missing specialty display: '+sp.name);
for(const h of hospitals)assert.ok(i18n.provider('bn',h.name),'Missing provider display: '+h.name);
for(const l of locations)assert.notEqual(i18n.place('bn',l.name),l.name,'Missing location: '+l.name);
const namesBefore=doctors.map(d=>d.name);assert.deepEqual(namesBefore,JSON.parse(fs.readFileSync(path.join(root,'data/doctors.json'),'utf8')).map(d=>d.name));
assert.ok(searchDoctors(undefined,{q:'কিডনি'}).total>0);assert.ok(searchDoctors(undefined,{q:'ঢাকা'}).total>0);assert.ok(searchDoctors(undefined,{q:'ইবনে সিনা'}).total>0);
assert.equal(i18n.specialty('en','Nephrology'),'Nephrology');assert.equal(i18n.specialty('bn','Nephrology'),'কিডনি রোগ');
console.log(JSON.stringify({status:'passed',doctorProfiles:doctors.length,specialtyLocationPairs:Object.keys(specialtyLocation).length,hospitalSpecialtyPairs:Object.keys(hospitalSpecialty).length,canonicalPaths:allPaths().length,checks:'slug uniqueness, complete coverage, pair membership, triple filters, pagination, search, unknown filters, aliases and name sorting'}));
export {api,i18n};

for(const division of locations.filter(l=>l.kind==='division')){
 assert.equal(searchDoctors(undefined,{division:division.slug}).total,division.doctorIds.length);
 for(const district of locations.filter(l=>l.kind==='district'&&l.parent===division.slug)){
  assert.equal(searchDoctors(undefined,{division:division.slug,district:district.slug}).total,district.doctorIds.length);
  for(const specialty of specialties.slice(0,8)){
   const filtered=searchDoctors(undefined,{division:division.slug,district:district.slug,specialty:specialty.slug});
   assert.equal(filtered.total,(specialtyLocation[specialty.slug+'/'+district.slug]||[]).length);
   assert.ok(filtered.items.every(d=>relations[d.id].some(r=>r.specialty===specialty.slug&&r.locations.includes(division.slug)&&r.locations.includes(district.slug))));
  }
 }
}
assert.equal(searchDoctors(undefined,{division:'dhaka-division',district:'sylhet'}).total,0);
assert.equal(searchDoctors(undefined,{division:'unknown'}).total,0);
assert.equal(searchDoctors(undefined,{district:'dhanmondi'}).total,0);
console.log('Division/district parent matching and relation filters passed.');

for(const loc of locations.filter(l=>l.kind==='district')){assert.equal(searchDoctors(undefined,{division:loc.parent,district:loc.slug}).total,loc.doctorIds.length);assert.ok(searchDoctors(undefined,{q:loc.name}).total>0);}
