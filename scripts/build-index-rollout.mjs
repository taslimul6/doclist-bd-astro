// Builds the gradual-indexing order in data/index-rollout.json (see lib/index-rollout.ts).
//
// Order: the 5 main hubs, then pages by Search Console impressions (bn/en and merged duplicate slugs
// are combined onto the canonical Bengali path), then the rest round-robin by page type, larger
// rosters / richer profiles first. Only pages that pass the quality rules are listed.
//
//   node scripts/build-index-rollout.mjs [pages.csv]           keep existing order, append new pages
//   node scripts/build-index-rollout.mjs [pages.csv] --reset   re-rank everything (only before launch!)
//   node scripts/build-index-rollout.mjs --check               fail if the list is stale
// Re-run after `npm run data:import` / `npm run data:merges`. Without --reset, already-released pages
// keep their slot, so nothing that is indexed today drops out tomorrow.
import fs from 'node:fs';import path from 'node:path';import {createRequire} from 'node:module';import ts from 'typescript';
const root=path.resolve(import.meta.dirname,'..');const cache=new Map();
function load(file){if(cache.has(file))return cache.get(file);const exports={};cache.set(file,exports);const req=createRequire(file);const code=ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,esModuleInterop:true}}).outputText;new Function('exports','require',code)(exports,name=>name.startsWith('.')&&!name.endsWith('.json')?load(path.resolve(path.dirname(file),name)+'.ts'):req(name));return exports;}
const args=process.argv.slice(2),check=args.includes('--check'),reset=args.includes('--reset');
const csvPath=args.find(a=>!a.startsWith('--'))||path.join(root,'data/search-console/pages-2026-11-18.csv');
const out=path.join(root,'data/index-rollout.json'),current=JSON.parse(fs.readFileSync(out,'utf8'));
const policy=load(path.join(root,'lib/indexability.ts')),directory=load(path.join(root,'lib/directory.ts'));
const eligible=policy.qualityIndexablePaths(),eligibleSet=new Set(eligible);

// Search Console demand per canonical base path.
const demand=new Map();
for(const line of fs.readFileSync(csvPath,'utf8').trim().split(/\r?\n/).slice(1)){
 const [url,clicks,impressions]=line.split(',');let p;try{p=policy.normalizePath(decodeURI(new URL(url).pathname));}catch{continue;}
 const m=p.match(/^\/doctor\/([^/]+)$/);if(m){const target=directory.getDoctorRedirect(m[1]);if(target)p='/doctor/'+target;}
 const d=demand.get(p)||{clicks:0,impressions:0};d.clicks+=Number(clicks)||0;d.impressions+=Number(String(impressions).replace(/,/g,''))||0;demand.set(p,d);
}
const hubs=['/','/doctors','/specialties','/locations','/hospitals'].filter(p=>eligibleSet.has(p));
const searched=eligible.filter(p=>!hubs.includes(p)&&demand.get(p)?.impressions).sort((a,b)=>demand.get(b).impressions-demand.get(a).impressions||demand.get(b).clicks-demand.get(a).clicks||a.localeCompare(b));
// Everything else: round-robin across page types so each day mixes doctors and directories.
const roster=p=>{const doc=p.match(/^\/doctor\/(.+)$/);if(doc){const d=directory.getDoctorBySlug(doc[1]);return d?d.chambers.length*10+(d.image?5:0)+(d.registration?3:0)+(d.experience!=null?2:0):0;}
 const seg=p.split('/').filter(Boolean);
 if(seg[0]==='specialty')return directory.getDoctorsBySpecialty(seg[1]).length;
 if(seg[0]==='doctors'&&seg.length===2)return directory.getDoctorsByLocation(seg[1]).length;
 if(seg[0]==='doctors'&&seg.length===3)return directory.getDoctorsBySpecialtyAndLocation(seg[1],seg[2]).length;
 if(seg[0]==='hospital')return directory.getDoctorsByHospital(seg[1]).length;return 0;};
const type=p=>{const s=p.split('/').filter(Boolean);return s[0]==='doctors'?'doctors-'+s.length:s[0]==='hospital'?'hospital-'+s.length:s[0];};
const rest=eligible.filter(p=>!hubs.includes(p)&&!demand.get(p)?.impressions),buckets=new Map();
for(const p of rest)(buckets.get(type(p))??buckets.set(type(p),[]).get(type(p))).push(p);
for(const list of buckets.values())list.sort((a,b)=>roster(b)-roster(a)||a.localeCompare(b));
const order=['doctor','specialty','doctors-2','doctors-3','hospital-2','hospital-3'],queues=[...order.filter(k=>buckets.has(k)),...[...buckets.keys()].filter(k=>!order.includes(k))].map(k=>buckets.get(k)),mixed=[];
while(queues.some(q=>q.length))for(const q of queues)if(q.length)mixed.push(q.shift());
const ranked=[...hubs,...searched,...mixed];

// Keep released history unless --reset: existing still-eligible paths keep their relative order.
const paths=reset||!current.paths.length?ranked:[...current.paths.filter(p=>eligibleSet.has(p)),...ranked.filter(p=>!current.paths.includes(p))];
const next={...current,paths};const text=JSON.stringify(next,null,1)+'\n';
if(check){const ok=paths.length===current.paths.length&&paths.every((p,i)=>p===current.paths[i]);if(!ok){console.error('data/index-rollout.json is stale; run node scripts/build-index-rollout.mjs');process.exit(1);}console.log({status:'passed',planned:paths.length});process.exit(0);}
fs.writeFileSync(out,text);
const days=Math.ceil(Math.max(0,paths.length-next.initial)/next.perDay);
console.log({planned:paths.length,initial:next.initial,perDay:next.perDay,withSearchDemand:hubs.length+searched.length,startDate:next.startDate,daysToFullRollout:days,first10:paths.slice(0,10)});
