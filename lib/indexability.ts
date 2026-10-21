import {isPublished,isProtectedIndexedPath,normalizePublicationPath} from './publication';
// Editorial launch policy, not a Google rule. Re-evaluate after data enrichment.
import {allPaths, doctors, hospitals, specialties, locations, specialtyLocation, hospitalSpecialty} from './directory';
import type {Doctor} from './types';
export type PageDecision = {index:boolean; reason:string; canonical?:string};
const useful=(s:string|undefined|null)=>!!s?.trim()&&!/^(n\/?a|unknown|not available|not provided|-)$/i.test(s.trim());
export function doctorIsComplete(d:Doctor) {
 const identityIssue=d.flags.some(f=>/verify_identity|duplicated_from_previous_profile/.test(f));
 return !identityIssue && useful(d.name) && useful(d.qualifications) && d.specialtySlugs.length>0 && d.sources.some(s=>/^https?:\/\//.test(s)) && d.chambers.some(c=>useful(c.name)&&useful(c.address)&&c.locations.length>0&&(useful(c.phone)||useful(c.schedule)));
}
const eligible=new Set(doctors.filter(doctorIsComplete).map(d=>d.id));
const decisionMap=new Map<string,PageDecision>();
const approve=(path:string)=>decisionMap.set(path,{index:true,reason:'Meets launch completeness policy'});
const listing=(path:string,ids:string[],minimum:number)=>{
 const complete=ids.filter(id=>eligible.has(id)).length;
 decisionMap.set(path,{index:complete>=minimum&&complete>=ids.length/2,reason:`${complete}/${ids.length} complete doctor profiles; minimum ${minimum} and at least half required`});
};
for(const p of ['/','/doctors','/specialties','/locations','/hospitals'])approve(p);
for(const d of doctors)decisionMap.set('/doctor/'+d.slug,{index:eligible.has(d.id),reason:eligible.has(d.id)?'Qualifications, specialty, source and actionable chamber present':'Incomplete profile or unresolved identity note'});
for(const l of locations)listing('/doctors/'+l.slug,l.doctorIds,5);
for(const s of specialties)listing('/specialty/'+s.slug,s.doctorIds,5);
for(const [key,ids] of Object.entries(specialtyLocation))listing('/doctors/'+key,ids,5);
for(const h of hospitals){
 const p='/hospital/'+h.slug;
 listing(p,h.doctorIds,3);
 if(!h.addresses.some(useful)||!h.sources.length)decisionMap.set(p,{index:false,reason:'Missing hospital address or source'});
 // The full list remains a separate user-facing page only for larger rosters.
 if(h.doctorIds.length<=4)decisionMap.set(p+'/doctors',{index:false,reason:'Same complete roster already displayed on hospital profile',canonical:p});
 else {listing(p+'/doctors',h.doctorIds,5);if(!decisionMap.get(p)?.index)decisionMap.set(p+'/doctors',{index:false,reason:'Parent hospital lacks sufficient information'});}
}
for(const [key,ids] of Object.entries(hospitalSpecialty)){
 const p='/hospital/'+key;listing(p,ids,5);
 const [hospital]=key.split('/');const h=hospitals.find(h=>h.slug===hospital);
 if(h&&ids.length===h.doctorIds.length)decisionMap.set(p,{index:false,reason:'Same roster as full hospital directory',canonical:'/hospital/'+hospital+(h.doctorIds.length>4?'/doctors':'')});
 else if(!decisionMap.get('/hospital/'+hospital)?.index)decisionMap.set(p,{index:false,reason:'Parent hospital lacks sufficient information'});
}
// Never consolidate to a page that is itself excluded.
for(const [path,d] of decisionMap)if(d.canonical&&!decisionMap.get(d.canonical)?.index)decisionMap.set(path,{index:false,reason:'Equivalent roster exists but its target is incomplete'});
export const normalizePath=(path:string)=>path.split(/[?#]/)[0].replace(/^\/(bn|en)(?=\/|$)/,'').replace(/\/$/,'')||'/';
export const pageDecision=(path:string):PageDecision=>(isProtectedIndexedPath(path)?{index:true,reason:'Previously indexed URL explicitly preserved'}:!isPublished(path)?{index:false,reason:'Scheduled for future publication'}:(()=>{const d=decisionMap.get(normalizePath(path));return d?.canonical&&!isPublished(d.canonical)?{index:false,reason:'Canonical target scheduled for future publication'}:d||{index:false,reason:'Unknown directory route'};})());
export const indexablePaths=()=>allPaths().filter(p=>pageDecision(p).index);
export const indexabilityAudit=()=>allPaths().map(path=>({path,...pageDecision(path)}));
