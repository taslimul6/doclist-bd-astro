import {allPaths,hospitals,doctors,pageSize,getLocationBySlug,getSpecialtyBySlug,getHospitalBySlug,specialtyLocation,hospitalSpecialty,doctorsFromIds} from './directory';
import {isPublished} from './publication';
import type {Locale} from './i18n';

/** Props handed to a page view by the catch-all route (src/pages/[...path].astro). */
export type ViewKind='home'|'doctors'|'location'|'specialty'|'specialtyLocation'|'specialties'|'locations'|'hospitals'|'doctor'|'hospital'|'hospitalSection'|'essential'|'myDoc';
export type RouteProps={kind:ViewKind;lang:Locale;a?:string;b?:string;page?:number};
export type Route={path:string|undefined;props:RouteProps};

const essentials=['privacy-policy','terms-of-use','contact','sponsorship'];
/** English is built only for these top-level pages (a free static host caps files at 20,000). */
const englishBases=new Set(['/','/specialties','/locations','/hospitals','/doctors','/my-doc',...essentials.map(e=>'/'+e)]);
export const isEnglishBase=(base:string)=>englishBases.has(base);

const pageCount=(n:number)=>Math.max(1,Math.ceil(n/pageSize));
const rosterSize=(ids:string[]|undefined)=>doctorsFromIds(ids||[]).length;
const join=(lang:Locale,base:string,page=1)=>{const p=(base==='/'?'':base)+(page>1?'/page/'+page:'');const full=(lang==='en'?'/en':'')+p;return full.replace(/^\//,'')||undefined;};

/** Every page of the static site that is released at build time (see lib/publication.ts). */
export function allRoutes():Route[]{
  const out:Route[]=[];
  const add=(lang:Locale,base:string,props:Omit<RouteProps,'lang'>,pages=1)=>{
    if(!isPublished(base))return;
    if(lang==='en'&&!isEnglishBase(base))return;
    for(let page=1;page<=pages;page++)out.push({path:join(lang,base,page),props:{...props,lang,page}});
  };
  for(const lang of ['bn','en'] as Locale[]){
    add(lang,'/',{kind:'home'});
    add(lang,'/specialties',{kind:'specialties'});
    add(lang,'/locations',{kind:'locations'});
    add(lang,'/hospitals',{kind:'hospitals'},pageCount(hospitals.length));
    add(lang,'/doctors',{kind:'doctors'},pageCount(doctors.length));
    add(lang,'/my-doc',{kind:'myDoc'});
    for(const e of essentials)add(lang,'/'+e,{kind:'essential',a:e});
  }
  // Bengali only from here on.
  for(const p of allPaths()){
    const s=p.split('/').filter(Boolean);
    if(s[0]==='doctor'&&s.length===2)add('bn',p,{kind:'doctor',a:s[1]});
    else if(s[0]==='doctors'&&s.length===2)add('bn',p,{kind:'location',a:s[1]},pageCount(rosterSize(getLocationBySlug(s[1])?.doctorIds)));
    else if(s[0]==='doctors'&&s.length===3)add('bn',p,{kind:'specialtyLocation',a:s[1],b:s[2]},pageCount(rosterSize(specialtyLocation[s[1]+'/'+s[2]])));
    else if(s[0]==='specialty'&&s.length===2)add('bn',p,{kind:'specialty',a:s[1]},pageCount(rosterSize(getSpecialtyBySlug(s[1])?.doctorIds)));
    else if(s[0]==='hospital'&&s.length===2)add('bn',p,{kind:'hospital',a:s[1]});
    else if(s[0]==='hospital'&&s.length===3){
      const h=getHospitalBySlug(s[1]);
      const ids=s[2]==='doctors'?h?.doctorIds:hospitalSpecialty[s[1]+'/'+s[2]];
      add('bn',p,{kind:'hospitalSection',a:s[1],b:s[2]},pageCount(rosterSize(ids)));
    }
  }
  return out;
}
