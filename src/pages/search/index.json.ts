import type {APIRoute} from 'astro';
import {doctors,specialties,locations,hospitals,searchTextOf,relationsOf} from '../../../lib/directory';
import mergeData from '../../../data/doctor-merges.json';
import {isPublished} from '../../../lib/publication';

// Compact doctor index for the in-browser search/filters on listing pages (replaces server-side ?q= queries).
const aliasesOf=new Map<string,string[]>();
for(const [alias,canonical] of Object.entries(mergeData as Record<string,string>))aliasesOf.set(canonical,[...(aliasesOf.get(canonical)||[]),alias]);

export const GET:APIRoute=()=>{
  const rows=doctors.filter(d=>isPublished('/doctor/'+d.slug)).map(d=>({
    i:d.id,al:aliasesOf.get(d.id),s:d.slug,n:d.name,im:d.image,q:d.qualifications,d:d.designation,e:d.experience,g:d.gender,
    sp:d.specialtySlugs,lc:d.locationSlugs,rs:d.rawSpecialties,ft:d.featured?1:0,vf:d.verified?1:0,
    ch:d.chambers.map(c=>({h:c.hospitalSlug,n:c.name,l:c.locations,p:c.phone,sc:c.schedule,f:c.fee})),
    rel:relationsOf(d.id).map(r=>[r.specialty,r.hospital,r.locations]),
    t:searchTextOf(d.id)
  }));
  const meta={
    specialties:specialties.map(({slug,name})=>({slug,name})),
    locations:locations.map(({slug,name,kind,parent})=>({slug,name,kind,parent})),
    hospitals:hospitals.map(({slug,name})=>({slug,name}))
  };
  return new Response(JSON.stringify({meta,rows}),{headers:{'Content-Type':'application/json; charset=utf-8'}});
};
