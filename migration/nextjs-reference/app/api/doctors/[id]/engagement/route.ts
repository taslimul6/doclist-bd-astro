import {engagement} from '../../../../../lib/engagement';
export const dynamic='force-dynamic';
const uuid=/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
async function handle(request:Request,params:Promise<{id:string}>,write:boolean){
 const headers=new Headers({'Cache-Control':'private, no-store','Vary':'Cookie'});
 const existing=request.headers.get('cookie')?.split(';').map(s=>s.trim()).find(s=>s.startsWith('doclist-visitor='))?.slice('doclist-visitor='.length);
 const visitor=existing&&uuid.test(existing)?existing:crypto.randomUUID();
 if(visitor!==existing)headers.append('Set-Cookie',`doclist-visitor=${visitor}; Path=/; Max-Age=31536000; HttpOnly; SameSite=Lax${new URL(request.url).protocol==='https:'?'; Secure':''}`);
 try{
  let action:'love'|'impression'|undefined,event:string|undefined;
  if(write){
   const origin=request.headers.get('origin');if(origin&&origin!==new URL(request.url).origin)return Response.json({error:'Invalid origin'},{status:403,headers});
   if(Number(request.headers.get('content-length'))>1024)return Response.json({error:'Invalid request'},{status:413,headers});
   let body:Record<string,unknown>;try{body=await request.json() as Record<string,unknown>;}catch{return Response.json({error:'Invalid request'},{status:400,headers});}
   if(!body||!['love','impression'].includes(String(body.action))||(body.action==='impression'&&(typeof body.event!=='string'||!uuid.test(body.event))))return Response.json({error:'Invalid request'},{status:400,headers});
   action=body.action as 'love'|'impression';event=body.event as string|undefined;
  }
  return Response.json(await engagement((await params).id,visitor,action,event),{headers});
 }catch(error){
  if(error instanceof Error&&error.message==='UNKNOWN_DOCTOR')return Response.json({error:'Doctor not found'},{status:404,headers});
  console.error('Doctor engagement unavailable',error);return Response.json({error:error instanceof Error&&error.message==='ENGAGEMENT_STORE_NOT_CONFIGURED'?'Engagement storage is not configured':'Counts are temporarily unavailable'},{status:503,headers});
 }
}
export function GET(request:Request,{params}:{params:Promise<{id:string}>}){return handle(request,params,false);}
export function POST(request:Request,{params}:{params:Promise<{id:string}>}){return handle(request,params,true);}
