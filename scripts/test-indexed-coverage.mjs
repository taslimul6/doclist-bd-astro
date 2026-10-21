import assert from 'node:assert/strict';import fs from 'node:fs';import path from 'node:path';import ts from 'typescript';import {createRequire} from 'node:module';
const root=path.resolve(import.meta.dirname,'..');const cache=new Map();
function load(file){if(cache.has(file))return cache.get(file);const exports={};cache.set(file,exports);const req=createRequire(file);const code=ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,esModuleInterop:true}}).outputText;new Function('exports','require',code)(exports,name=>name.startsWith('.')&&!name.endsWith('.json')?load(path.resolve(path.dirname(file),name)+'.ts'):req(name));return exports;}

const coverage=JSON.parse(fs.readFileSync(path.join(root,'data/indexed-coverage.json'))),pub=load(path.join(root,'lib/publication.ts')),policy=load(path.join(root,'lib/indexability.ts')),directory=load(path.join(root,'lib/directory.ts')),seo=load(path.join(root,'lib/seo.ts'));
const all=new Set(directory.allPaths());
for(const p of coverage.paths){assert.ok(all.has(p),'Unknown path '+p);assert.ok(pub.isPublished(p,0));assert.ok(policy.pageDecision(p).index);assert.equal(policy.pageDecision(p).canonical,undefined);for(const lang of ['bn','en'])assert.equal(seo.metadata('Test','Test',p,{},lang).robots.index,true);}
const scheduled=Object.keys(JSON.parse(fs.readFileSync(path.join(root,'data/release-schedule.json'))).paths).filter(p=>!pub.isProtectedIndexedPath(p));assert.ok(scheduled.length);assert.equal(pub.isPublished(scheduled[0],0),false);
console.log({status:'passed',urls:coverage.urls.length,protectedPages:coverage.paths.length,allRoutesExist:true,unlistedPagesStillScheduled:true});
