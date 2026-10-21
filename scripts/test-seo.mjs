import assert from 'node:assert/strict';import fs from 'node:fs';import path from 'node:path';import {createRequire} from 'node:module';import ts from 'typescript';
const root=path.resolve(import.meta.dirname,'..'),source=path.join(root,'lib/directory.ts');
const cache=new Map();
function loadTs(file){if(cache.has(file))return cache.get(file);const result={};cache.set(file,result);const code=ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,esModuleInterop:true}}).outputText;const baseRequire=createRequire(file);new Function('exports','require',code)(result,name=>{if(name.startsWith('.')&&!name.endsWith('.json')){const target=path.resolve(path.dirname(file),name)+'.ts';if(fs.existsSync(target))return loadTs(target);}return baseRequire(name);});return result;}

const policy=loadTs(path.join(root,'lib/indexability.ts'));
const seo=loadTs(path.join(root,'lib/seo.ts'));
const directory=loadTs(path.join(root,'lib/directory.ts'));
const records=policy.indexabilityAudit(), included=policy.indexablePaths();
assert.equal(records.length,directory.allPaths().length);
assert.ok(included.length>0&&included.length<records.length);
for(const r of records){
 for(const lang of ['bn','en']){
  const m=seo.metadata('Sample title','Sample description',r.path,{},lang);
  assert.equal(m.robots.index,!!r.canonical||r.index,r.path);
  assert.ok(!m.other,'Synthetic dates must not be emitted');
  if(r.index){assert.ok(included.includes(r.path));assert.ok(m.alternates.languages);}
  else assert.ok(!included.includes(r.path));
  if(r.canonical)assert.ok(policy.pageDecision(r.canonical).index,'Canonical target must be indexable');
 }
}
for(const q of [{q:'kidney'},{division:'dhaka-division'},{sort:'name'},{page:'0'},{page:'abc'},{page:'2',gender:'Female'}])assert.equal(seo.metadata('Title','Description','/doctors',q).robots.index,false);
const paginated=seo.metadata('Title','Description','/doctors',{page:'2'});
assert.equal(paginated.alternates.canonical,'https://doclist-bd.com/doctors?page=2');
assert.equal(paginated.robots.index,true);
const counts={};for(const r of records){const key=r.path.startsWith('/doctor/')?'Doctor profiles':r.path.startsWith('/hospital/')?'Hospitals and hospital directories':r.path.startsWith('/doctors/')?'Location and specialty-location directories':r.path.startsWith('/specialty/')?'Specialty directories':'Main hubs';counts[key]??={total:0,indexable:0,excluded:0};counts[key].total++;counts[key][r.index?'indexable':'excluded']++;}
const report={policyVersion:1,basePages:records.length,indexableBasePages:included.length,sitemapUrls:included.length*2,excludedUrls:(records.length-included.length)*2,counts,notes:['Thresholds are editorial launch settings, not Google requirements.','Excluded pages stay accessible. Thin pages use noindex,follow; equivalent rosters use canonical consolidation.','Pagination is self-canonical and crawlable but not submitted in sitemap.','Synthetic historical dates are omitted from metadata and structured data.'],pages:records};
fs.writeFileSync(path.join(root,'data/seo-audit.json'),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({status:'passed',...report,pages:undefined},null,2));
