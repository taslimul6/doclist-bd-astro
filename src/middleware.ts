import {defineMiddleware} from 'astro:middleware';
import {isPublished,normalizePublicationPath,releaseAt} from '../lib/publication';
import {isIndexedLocale} from '../lib/sitemap-config';
import doctors from '../data/doctors.json';

// Bengali is the default language at unprefixed paths; the pages live under /[lang]/... so these are
// rewritten to /bn/... (English stays at /en/...).
const bengaliRoots=new Set(['doctors','doctor','specialty','specialties','locations','hospitals','hospital','my-doc','privacy-policy','terms-of-use','contact','sponsorship']);
const doctorPaths=new Map(doctors.map(d=>[d.id,'/doctor/'+d.slug]));

export const onRequest=defineMiddleware(async (context,next)=>{
  const url=new URL(context.request.url);
  const pathname=url.pathname.length>1?url.pathname.replace(/\/+$/,'')||'/':url.pathname;

  // /bn/... is the same as the unprefixed path.
  const bn=pathname.match(/^\/bn(\/.*)?$/);
  if(bn)return context.redirect((bn[1]||'/')+url.search,301);

  context.locals.originalPath=pathname;

  // Publication schedule: unreleased pages answer 404 + Retry-After. Engagement API calls are checked
  // against the doctor's page path.
  let path=normalizePublicationPath(pathname);
  const engagement=path.match(/^\/api\/doctors\/([^/]+)\/engagement$/);
  if(engagement)path=doctorPaths.get(engagement[1])||path;
  if(!isPublished(path)){
    return new Response('Not found',{status:404,headers:{'X-Robots-Tag':'noindex, nofollow','Cache-Control':'private, no-store','Retry-After':new Date(releaseAt(path)!).toUTCString()}});
  }

  const root=pathname.split('/')[1];
  const response=await (pathname==='/'||bengaliRoots.has(root)?next('/bn'+(pathname==='/'?'':pathname)+url.search):next());

  // English is live for visitors but not indexed (lib/sitemap-config.ts indexedLocales).
  if(!isIndexedLocale('en')&&/^\/en(\/|$)/.test(pathname)){
    const headers=new Headers(response.headers);
    headers.set('X-Robots-Tag','noindex, follow');
    return new Response(response.body,{status:response.status,statusText:response.statusText,headers});
  }
  return response;
});
