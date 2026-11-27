import type {APIRoute} from 'astro';
import {getDoctorById} from '../../../lib/directory';
import {isPublished} from '../../../lib/publication';

export const POST:APIRoute=async ({request})=>{
  const headers={'Cache-Control':'private, no-store'};
  try {
    const text=await request.text();
    if(text.length>1000000)return new Response('Too large',{status:413,headers});
    const ids:unknown=JSON.parse(text);
    if(!Array.isArray(ids)||ids.length>10000||ids.some(id=>typeof id!=='string'))return new Response('Invalid IDs',{status:400,headers});
    // A bookmark saved under a merged duplicate's id resolves to the canonical profile but keeps
    // the requested id, so the client can match it to the saved entry.
    const found=[...new Set(ids as string[])].flatMap(id=>{const d=getDoctorById(id);return d&&isPublished('/doctor/'+d.slug)?[[id,d] as const]:[];});
    return Response.json(found.map(([id,d])=>({
      id,name:d.name,slug:d.slug,image:d.image,qualifications:d.qualifications,
      specialties:d.rawSpecialties,phone:d.chambers.find(c=>c.phone)?.phone||null
    })),{headers});
  } catch { return new Response('Invalid request',{status:400,headers}); }
};
