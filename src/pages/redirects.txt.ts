import type {APIRoute} from 'astro';
import {doctorRedirectEntries,specialtyAliases,locationAliasesMap} from '../../lib/directory';

// Becomes dist/_redirects (scripts/postbuild.mjs renames it). Cloudflare static assets cap: 2,000 static + 100 dynamic rules.
export const GET:APIRoute=()=>{
  const rules:string[]=['/bn / 301','/bn/* /:splat 301'];
  // Merged duplicate doctor profiles -> canonical profile.
  for(const [from,to] of doctorRedirectEntries())rules.push(`/doctor/${from} /doctor/${to} 301`,`/en/doctor/${from} /doctor/${to} 301`);
  for(const [from,to] of Object.entries(specialtyAliases))rules.push(`/specialty/${from} /specialty/${to} 301`);
  for(const [from,to] of Object.entries(locationAliasesMap))rules.push(`/doctors/${from} /doctors/${to} 301`);
  // English is built only for the main pages; deeper English URLs go to the Bengali page.
  rules.push('/en/doctor/* /doctor/:splat 302','/en/hospital/* /hospital/:splat 302','/en/specialty/* /specialty/:splat 302');
  return new Response(rules.join('\n')+'\n',{headers:{'Content-Type':'text/plain; charset=utf-8'}});
};
