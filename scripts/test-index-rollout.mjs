// Gradual indexing: 100 most-searched pages first, then 10 more per Asia/Dhaka day; pages stay live.
import assert from 'node:assert/strict';import fs from 'node:fs';import path from 'node:path';import {createRequire} from 'node:module';import ts from 'typescript';
const root=path.resolve(import.meta.dirname,'..');const cache=new Map();
function load(file){if(cache.has(file))return cache.get(file);const exports={};cache.set(file,exports);const req=createRequire(file);const code=ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,esModuleInterop:true}}).outputText;new Function('exports','require',code)(exports,name=>name.startsWith('.')&&!name.endsWith('.json')?load(path.resolve(path.dirname(file),name)+'.ts'):req(name));return exports;}
const plan=JSON.parse(fs.readFileSync(path.join(root,'data/index-rollout.json'),'utf8'));
const rollout=load(path.join(root,'lib/index-rollout.ts')),policy=load(path.join(root,'lib/indexability.ts')),pub=load(path.join(root,'lib/publication.ts'));
const start=Date.parse(plan.startDate+'T00:00:00+06:00'),day=86400000;
// The plan covers exactly the pages that pass the quality rules, once each.
const quality=policy.qualityIndexablePaths();assert.equal(new Set(plan.paths).size,plan.paths.length);assert.deepEqual([...plan.paths].sort(),[...quality].sort());
for(const p of ['/','/doctors','/specialties','/locations','/hospitals'])assert.ok(plan.paths.indexOf(p)<plan.initial,p+' must be in the first batch');
// Counts over time, including the Dhaka-midnight boundary and before the start date.
const count=now=>policy.indexablePaths(now).length;
assert.equal(count(start-5*day),plan.initial);assert.equal(count(start),plan.initial);assert.equal(count(start+day-1),plan.initial);
assert.equal(count(start+day),plan.initial+plan.perDay);assert.equal(count(start+7*day),plan.initial+7*plan.perDay);
assert.equal(count(start+400*day),quality.length);
// The released set is exactly a prefix of the plan, and released pages never drop out later.
const released=new Set(policy.indexablePaths(start+3*day));assert.deepEqual(plan.paths.filter(p=>released.has(p)),plan.paths.slice(0,plan.initial+3*plan.perDay));
for(const p of released)assert.ok(policy.pageDecision(p,start+10*day).index,p);
// Unreleased pages are live (published) but noindex, with a release date.
const waiting=plan.paths[plan.initial+5*plan.perDay];assert.ok(pub.isPublished(waiting,start));assert.equal(policy.pageDecision(waiting,start).index,false);
assert.equal(rollout.indexReleaseAt(waiting,start),start+6*day);assert.equal(rollout.indexReleaseAt(plan.paths[0],start),null);
// Consolidated pages never point at a target that is not released yet.
for(const p of policy.indexabilityAudit().map(r=>r.path)){const d=policy.pageDecision(p,start);if(d.canonical)assert.ok(policy.pageDecision(d.canonical,start).index,p);}
console.log({status:'passed',planned:plan.paths.length,initial:plan.initial,perDay:plan.perDay,openToday:count(Date.now()),daysToFull:Math.ceil((plan.paths.length-plan.initial)/plan.perDay)});
