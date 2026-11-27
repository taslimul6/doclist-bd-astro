import {isPublished} from './publication';
// Imported by Server Components / route handlers only. Never import into a Client Component.
import {specialty,place,provider,address,medicalText} from './i18n';
import doctorData from '../data/doctors.json';
import imageManifest from '../data/doctor-images.json';
import hospitalData from '../data/hospitals.json';
import specialtyData from '../data/specialties.json';
import locationData from '../data/locations.json';
import combinations from '../data/combinations.json';
import mergeData from '../data/doctor-merges.json';
import featuredData from '../data/featured-doctors.json';
import type {Doctor,Hospital,Specialty,Location,Query} from './types';
const portraitPaths=imageManifest as Record<string,{path:string}>;
// Duplicate profiles (data/doctor-merges.json, built by scripts/build-doctor-merges.mjs) fold into their
// canonical profile: chambers and sources are combined, and the alias URL 301s to the canonical one.
const merges=mergeData as Record<string,string>;
export const canonicalDoctorId=(id:string)=>merges[id]||id;
// Hand-curated profiles (data/featured-doctors.json) are merged here, so re-running the importer keeps them.
// Each one is registered in its specialty, locations, hospital and specialty/location + hospital/specialty rosters.
type Featured=Doctor&{hospital:Hospital};
const featured=featuredData as unknown as Featured[];
const featuredDoctors:Doctor[]=featured.map(({hospital:_h,...doc})=>doc);
const rawDoctors=([...(doctorData as Doctor[]),...featuredDoctors]).map(d=>({...d,image:portraitPaths[d.id]?.path||d.image||null}));
const aliasesOf=new Map<string,Doctor[]>();for(const d of rawDoctors)if(merges[d.id])(aliasesOf.get(merges[d.id])??aliasesOf.set(merges[d.id],[]).get(merges[d.id])!).push(d);
const union=<T,>(items:T[],key:(x:T)=>string)=>[...new Map(items.map(x=>[key(x),x])).values()];
const mergeProfile=(d:Doctor):Doctor=>{const extra=aliasesOf.get(d.id);if(!extra)return d;const all=[d,...extra];return {...d,
 specialtySlugs:union(all.flatMap(x=>x.specialtySlugs),x=>x),locationSlugs:union(all.flatMap(x=>x.locationSlugs),x=>x),rawSpecialties:union(all.flatMap(x=>x.rawSpecialties),x=>x.toLowerCase()),
 chambers:union(all.flatMap(x=>x.chambers),c=>c.hospitalSlug||c.id),sources:union(all.flatMap(x=>x.sources),x=>x),flags:union(all.flatMap(x=>x.flags),x=>x),
 image:d.image||extra.find(x=>x.image)?.image||null,registration:d.registration||extra.find(x=>x.registration)?.registration||'',experience:d.experience??extra.find(x=>x.experience!=null)?.experience??null};};
export const doctors=rawDoctors.filter(d=>!merges[d.id]).map(mergeProfile);
const addId=(list:string[],id:string)=>{if(!list.includes(id))list.push(id);};
const hospitalRows=hospitalData as Hospital[];
for(const f of featured){
 let h=hospitalRows.find(x=>x.slug===f.hospital.slug);
 if(!h){h={...f.hospital,doctorIds:[],specialtySlugs:[],sources:[]};hospitalRows.push(h);}
 addId(h.doctorIds,f.id);for(const s of f.specialtySlugs)if(!h.specialtySlugs.includes(s))h.specialtySlugs.push(s);
 for(const s of f.specialtySlugs){
  const sp=(specialtyData as Specialty[]).find(x=>x.slug===s);
  if(sp){addId(sp.doctorIds,f.id);for(const l of f.locationSlugs)if(!sp.locationSlugs.includes(l))sp.locationSlugs.push(l);if(!sp.hospitalSlugs.includes(h.slug))sp.hospitalSlugs.push(h.slug);}
  for(const l of f.locationSlugs)addId((combinations.specialtyLocation as Record<string,string[]>)[s+'/'+l]??=[],f.id);
  addId((combinations.hospitalSpecialty as Record<string,string[]>)[h.slug+'/'+s]??=[],f.id);
  ((combinations.relations as Record<string,unknown[]>)[f.id]??=[]).push({specialty:s,hospital:h.slug,locations:f.locationSlugs});
 }
 for(const l of f.locationSlugs){const loc=(locationData as Location[]).find(x=>x.slug===l);if(loc){addId(loc.doctorIds,f.id);if(!loc.hospitalSlugs.includes(h.slug))loc.hospitalSlugs.push(h.slug);}}
}
export const hospitals=hospitalRows.sort((a,b)=>b.doctorIds.length-a.doctorIds.length);
export const specialties=(specialtyData as Specialty[]).sort((a,b)=>b.doctorIds.length-a.doctorIds.length);
export const locations=(locationData as Location[]).sort((a,b)=>b.doctorIds.length-a.doctorIds.length);
const byId=new Map(doctors.map(d=>[d.id,d]));
const bySlug=new Map(doctors.map(d=>[d.slug,d]));
const redirectSlugs=new Map(rawDoctors.filter(d=>merges[d.id]).map(d=>[d.slug,byId.get(merges[d.id])!.slug]));
/** Unique canonical ids, in first-seen order. */
export const canonicalDoctorIds=(ids:string[])=>[...new Set(ids.map(canonicalDoctorId))];
const hospitalMap=new Map(hospitals.map(h=>[h.slug,h]));
const specialtyMap=new Map(specialties.map(s=>[s.slug,s]));
const locationMap=new Map(locations.map(l=>[l.slug,l]));
export const specialtyLocation=combinations.specialtyLocation as Record<string,string[]>;
export const hospitalSpecialty=combinations.hospitalSpecialty as Record<string,string[]>;
const aliases:Record<string,string>={cardiologist:'cardiology',nephrologist:'nephrology','kidney-doctor':'nephrology',neurologist:'neurology',gynecologist:'gynecology',gynaecologist:'gynecology',pediatrician:'pediatrics',dermatologist:'dermatology',urologist:'urology','medicine-specialist':'medicine',orthopaedics:'orthopedics'};
const locationAliases:Record<string,string>={chittagong:'chattogram',barisal:'barishal',bogra:'bogura'};
export const resolveSpecialtySlug=(slug:string)=>aliases[slug]||slug;
export const resolveLocationSlug=(slug:string)=>locationAliases[slug]||slug;
export const getDoctorBySlug=(slug:string)=>bySlug.get(slug);
/** Canonical slug when this slug belongs to a merged duplicate profile. */
export const getDoctorRedirect=(slug:string)=>redirectSlugs.get(slug);
export const getDoctorById=(id:string)=>byId.get(canonicalDoctorId(id));
export const getHospitalBySlug=(slug:string)=>hospitalMap.get(slug);
export const getSpecialtyBySlug=(slug:string)=>specialtyMap.get(resolveSpecialtySlug(slug));
export const getLocationBySlug=(slug:string)=>locationMap.get(resolveLocationSlug(slug));
export const getAllDoctors=()=>doctors;
export const getHospitals=()=>hospitals;
export const getSpecialties=()=>specialties;
export const getLocations=()=>locations;
export const doctorsFromIds=(ids:string[])=>canonicalDoctorIds(ids).map(id=>byId.get(id)).filter((d):d is Doctor=>!!d&&isPublished('/doctor/'+d.slug)).sort((a,b)=>Number(!!b.featured)-Number(!!a.featured));
export const getDoctorsByLocation=(slug:string)=>doctorsFromIds(getLocationBySlug(slug)?.doctorIds||[]);
export const getDoctorsBySpecialty=(slug:string)=>doctorsFromIds(getSpecialtyBySlug(slug)?.doctorIds||[]);
export const getDoctorsByHospital=(slug:string)=>doctorsFromIds(getHospitalBySlug(slug)?.doctorIds||[]);
export const getDoctorsBySpecialtyAndLocation=(s:string,l:string)=>doctorsFromIds(specialtyLocation[resolveSpecialtySlug(s)+'/'+resolveLocationSlug(l)]||[]);
export const getRelatedDoctors=(d:Doctor,limit=4)=>{
 const candidates=doctorsFromIds(d.specialtySlugs.flatMap(s=>specialtyMap.get(s)?.doctorIds||[]));
 return [...new Map(candidates.filter(x=>x.id!==d.id&&isPublished('/doctor/'+x.slug)).map(x=>[x.id,x])).values()].sort((a,b)=>Number(b.locationSlugs.some(l=>d.locationSlugs.includes(l)))-Number(a.locationSlugs.some(l=>d.locationSlugs.includes(l)))).slice(0,limit);
};
export const getRelatedLocations=(s?:string,l?:string)=>locations.filter(x=>isPublished(s?'/doctors/'+s+'/'+x.slug:'/doctors/'+x.slug)&&x.slug!==l&&(!s||!!specialtyLocation[s+'/'+x.slug])).slice(0,8);
export const getRelatedSpecialties=(l?:string,s?:string,h?:string)=>specialties.filter(x=>isPublished(h?'/hospital/'+h+'/'+x.slug:l?'/doctors/'+x.slug+'/'+l:'/specialty/'+x.slug)&&x.slug!==s&&(!l||!!specialtyLocation[x.slug+'/'+l])&&(!h||!!hospitalSpecialty[h+'/'+x.slug])).slice(0,8);
export const value=(q:Query,k:string)=>Array.isArray(q[k])?q[k]![0]:q[k]||'';
export const pageSize=24;
const searchIndex=new Map(doctors.map(d=>[d.id,[d.name,d.qualifications,d.designation,...d.rawSpecialties,...d.specialtySlugs.map(s=>specialtyMap.get(s)?.name||''),...d.chambers.map(c=>c.name+' '+c.address),...d.locationSlugs.map(l=>locationMap.get(l)?.name||''),...d.specialtySlugs.map(s=>specialty('bn',specialtyMap.get(s)?.name||'')),...d.locationSlugs.map(l=>place('bn',locationMap.get(l)?.name||'')),...d.chambers.map(c=>provider('bn',c.name)+' '+address('bn',c.address)),...d.rawSpecialties.map(s=>medicalText('bn',s))].join(' ').toLocaleLowerCase()]));
type Relation={specialty:string;hospital:string;locations:string[]};
const relationsFor=(id:string)=>[id,...(aliasesOf.get(id)||[]).map(x=>x.id)].flatMap(x=>(combinations.relations as Record<string,Relation[]>)[x]||[]);
export function searchDoctors(ids:string[]|undefined,q:Query) {
 let result=ids?doctorsFromIds(ids):doctors.filter(d=>isPublished('/doctor/'+d.slug)).sort((a,b)=>Number(!!b.featured)-Number(!!a.featured));
 const specialty=getSpecialtyBySlug(value(q,'specialty'));const location=getLocationBySlug(value(q,'location'));const hospital=getHospitalBySlug(value(q,'hospital'));
 const division=getLocationBySlug(value(q,'division')),district=getLocationBySlug(value(q,'district'));
 if((value(q,'division')&&division?.kind!=='division')||(value(q,'district')&&district?.kind!=='district')||(district&&division&&district.parent!==division.slug))result=[];
 const geography=[location,division,district].filter((l):l is Location=>!!l);

 // An explicit nonexistent filter produces no matches, not an unfiltered list.
 if ((value(q,'specialty')&&!specialty)||(value(q,'location')&&!location)||(value(q,'hospital')&&!hospital))result=[];
 const intersection=(allowed:string[])=>{const set=new Set(allowed.map(canonicalDoctorId));result=result.filter(d=>set.has(d.id));};
 if(specialty&&location)intersection(specialtyLocation[specialty.slug+'/'+location.slug]||[]);
 else {if(specialty)intersection(specialty.doctorIds);if(location)intersection(location.doctorIds);}
 if(hospital&&specialty)intersection(hospitalSpecialty[hospital.slug+'/'+specialty.slug]||[]);
 else if(hospital)intersection(hospital.doctorIds);
 if(specialty||geography.length||hospital)result=result.filter(d=>{const relations=relationsFor(d.id);if(specialty)return relations.some(r=>r.specialty===specialty.slug&&geography.every(l=>r.locations.includes(l.slug))&&(!hospital||r.hospital===hospital.slug));return d.chambers.some(c=>geography.every(l=>c.locations.includes(l.slug))&&(!hospital||c.hospitalSlug===hospital.slug));});
 const words=value(q,'q').trim().toLocaleLowerCase().split(/\s+/).filter(Boolean).slice(0,12);
 if(words.length)result=result.filter(d=>words.every(w=>searchIndex.get(d.id)!.includes(w)));
 const min=Number(value(q,'experience'));
 if(Number.isFinite(min)&&min>0)result=result.filter(d=>d.experience!==null&&d.experience>=min);
 if(value(q,'gender'))result=result.filter(d=>d.gender?.toLowerCase()===value(q,'gender').toLowerCase());
 if(value(q,'maxFee')){const max=Number(value(q,'maxFee'));result=result.filter(d=>d.chambers.some(c=>c.fee&&Number(c.fee)<=max));}
 const sort=value(q,'sort');
 if(sort==='name')result=[...result].sort((a,b)=>a.name.localeCompare(b.name));
 if(sort==='experience')result=[...result].sort((a,b)=>(b.experience??-1)-(a.experience??-1));
 const pages=Math.max(1,Math.ceil(result.length/pageSize));const raw=value(q,'page');
 const page=raw?Number(raw):1;const invalidPage=!Number.isSafeInteger(page)||page<1||page>pages;
 return {total:result.length,pages,page,invalidPage,items:invalidPage?[]:result.slice((page-1)*pageSize,page*pageSize)};
}
export function allPaths(){return ['/', '/doctors','/specialties','/locations','/hospitals',...doctors.map(d=>'/doctor/'+d.slug),...locations.map(l=>'/doctors/'+l.slug),...specialties.map(s=>'/specialty/'+s.slug),...Object.keys(specialtyLocation).map(k=>'/doctors/'+k),...hospitals.flatMap(h=>['/hospital/'+h.slug,'/hospital/'+h.slug+'/doctors']),...Object.keys(hospitalSpecialty).map(k=>'/hospital/'+k)];}
