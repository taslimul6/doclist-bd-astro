// In-browser listing search (src/components/DoctorSearch.tsx filterRows) must return the same doctors as the
// server-side searchDoctors() it replaces, using the built dist/search/index.json (run `npm run build` first).
import assert from 'node:assert/strict';import fs from 'node:fs';import path from 'node:path';import {createRequire} from 'node:module';import ts from 'typescript';
const root=path.resolve(import.meta.dirname,'..'),cache=new Map();
function loadTs(file,stubs={}){if(cache.has(file))return cache.get(file);const out={};cache.set(file,out);const code=ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText;const base=createRequire(file);new Function('exports','require',code)(out,name=>{if(name in stubs)return stubs[name];if(name.startsWith('.')&&!name.endsWith('.json')){const t=path.resolve(path.dirname(file),name);for(const ext of ['.ts','.tsx'])if(fs.existsSync(t+ext))return loadTs(t+ext,stubs);}return base(name);});return out;}
const directory=loadTs(path.join(root,'lib/directory.ts'));
const stubs={'./GeographyFields':{default:()=>null},'./SaveDoctor':{default:()=>null}};
const {filterRows}=loadTs(path.join(root,'src/components/DoctorSearch.tsx'),stubs);
const index=JSON.parse(fs.readFileSync(path.join(root,'dist/search/index.json'),'utf8'));
const blank={q:'',specialty:'',division:'',district:'',hospital:'',experience:'',gender:'',maxFee:'',sort:''};
const cases=[
 [{}, {q:'kidney'}],
 [{}, {specialty:'cardiology'}],
 [{}, {specialty:'medicine',district:'mymensingh'}],
 [{}, {division:'dhaka-division',experience:'10'}],
 [{}, {hospital:'dh-lab-and-hospital-mymensingh'}],
 [{location:'dhaka'}, {specialty:'neurology'}],
 [{location:'dhaka'}, {q:'rahman',sort:'name'}],
 [{specialty:'medicine',location:'mymensingh'}, {}],
 [{hospital:'dh-lab-and-hospital-mymensingh'}, {}],
 [{}, {gender:'female',sort:'experience'}],
];
const ids=r=>r.map(d=>d.i??d.id).sort().join();
for(const [scope,f] of cases){
 const server=directory.searchDoctors(undefined,{...scope,...f,page:'1'});
 // The server paginates; compare full membership by walking pages.
 const all=[];for(let p=1;p<=server.pages;p++)all.push(...directory.searchDoctors(undefined,{...scope,...f,page:String(p)}).items);
 const client=filterRows(index.rows,{...blank,...f},{path:'/',...scope});
 assert.equal(client.length,all.length,JSON.stringify([scope,f])+' count');
 assert.equal(ids(client),ids(all),JSON.stringify([scope,f])+' members');
}
console.log(JSON.stringify({status:'passed',rows:index.rows.length,cases:cases.length,checks:'client filterRows matches server searchDoctors for text, specialty, geography, hospital, experience, gender, sort and scoped rosters'}));
