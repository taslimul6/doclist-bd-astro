import assert from 'node:assert/strict';import fs from 'node:fs';import path from 'node:path';import ts from 'typescript';import {createRequire} from 'node:module';
const root=path.resolve(import.meta.dirname,'..');const cache=new Map();
function load(file){if(cache.has(file))return cache.get(file);const exports={};cache.set(file,exports);const req=createRequire(file);const code=ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,esModuleInterop:true}}).outputText;new Function('exports','require',code)(exports,name=>name.startsWith('.')&&!name.endsWith('.json')?load(path.resolve(path.dirname(file),name)+'.ts'):req(name));return exports;}

const api=load(path.join(root,'lib/saved-doctors.ts')),now=1000000;
assert.deepEqual(api.parseSavedDoctors('broken',now),[]);assert.deepEqual(api.parseSavedDoctors('{}',now),[]);
assert.deepEqual(api.parseSavedDoctors(JSON.stringify([{id:'a',expiresAt:now},{id:'b',expiresAt:now+1},{id:'b',expiresAt:now+2},{id:4,expiresAt:now+3}]),now),[{id:'b',expiresAt:now+2}]);
const saved=[{id:'original-id',expiresAt:now+api.retentionMs}];assert.equal(api.parseSavedDoctors(JSON.stringify(saved),now+api.retentionMs-1).length,1);assert.equal(api.parseSavedDoctors(JSON.stringify(saved),now+api.retentionMs).length,0);
console.log('PASS: invalid storage, deduplication, stable IDs and exact 365-day expiry');
