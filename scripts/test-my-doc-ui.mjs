import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';import ts from 'typescript';import {createRequire} from 'node:module';
const root=path.resolve(import.meta.dirname,'..');let state=[],index=0,effect;
const hooks={useState(init){const i=index++;if(!(i in state))state[i]=init;return [state[i],v=>state[i]=typeof v==='function'?v(state[i]):v];},useEffect(fn){effect=fn;}};
const modules=new Map();
function load(relative){const file=path.join(root,relative);if(modules.has(file))return modules.get(file);const out={};modules.set(file,out);const req=createRequire(file);const code=ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText;new Function('exports','require',code)(out,n=>n==='react'?hooks:n==='../lib/i18n'?{localizedPath:(lang,p)=>lang==='en'?'/en'+p:p}:n==='../lib/saved-doctors'?load('lib/saved-doctors.ts'):n==='./SaveDoctor'?load('components/SaveDoctor.tsx'):n==='./DoctorAvatar'?{default:()=>null}:req(n));return out;}
function nodes(t){return !t||typeof t!=='object'?[]:[t,...[t.props?.children].flat(Infinity).flatMap(nodes)];}
const stored=new Map();let blocked=false;
globalThis.localStorage={getItem:k=>{if(blocked)throw Error('blocked');return stored.get(k)||null;},setItem:(k,v)=>{if(blocked)throw Error('blocked');stored.set(k,v);}};
globalThis.window=new EventTarget();window.setInterval=()=>1;window.clearInterval=()=>{};
const storage=load('lib/saved-doctors.ts'),Save=load('components/SaveDoctor.tsx').default;
const renderSave=()=>{index=0;return nodes(Save({id:'doctor-1',lang:'en'}));};
renderSave();let cleanup=effect();let button=renderSave().find(n=>n.type==='button');assert.equal(button.props.disabled,false);button.props.onClick();assert.equal(storage.readSavedDoctors().length,1);assert.equal(renderSave().find(n=>n.type==='button').props['aria-pressed'],true);assert.ok(storage.readSavedDoctors()[0].expiresAt>Date.now()+storage.retentionMs-1000);
renderSave().find(n=>n.type==='button').props.onClick();assert.equal(storage.readSavedDoctors().length,0);
stored.set(storage.savedDoctorsKey,JSON.stringify([{id:'doctor-1',expiresAt:Date.now()+10000}]));const ev=new Event('storage');Object.defineProperty(ev,'key',{value:storage.savedDoctorsKey});window.dispatchEvent(ev);assert.equal(renderSave().find(n=>n.type==='button').props['aria-pressed'],true);
blocked=true;renderSave().find(n=>n.type==='button').props.onClick();assert.ok(renderSave().some(n=>n.props?.role==='alert'));blocked=false;cleanup();
state=[];const My=load('components/MyDoctors.tsx').default;let calls=0;
globalThis.fetch=async(url,init)=>{calls++;assert.equal(url,'/api/my-doc');assert.deepEqual(JSON.parse(init.body),['doctor-1']);return {ok:true,json:async()=>[{id:'doctor-1',name:'Dr Example',slug:'dr-example',image:null,qualifications:'MBBS',specialties:['Medicine'],phone:null}]};};
const renderMy=()=>{index=0;return nodes(My({lang:'en'}));};const flush=async()=>{for(let i=0;i<15;i++)await Promise.resolve();};
renderMy();cleanup=effect();await flush();assert.equal(calls,1);assert.ok(renderMy().some(n=>n.type==='a'&&n.props.href==='/en/doctor/dr-example'));
storage.writeSavedDoctors([]);await flush();assert.ok(renderMy().some(n=>n.type==='h2'&&n.props.children==='No saved doctors yet'));cleanup();
console.log('PASS: save/remove, persisted expiry, cross-tab storage event, blocked storage feedback, My Doc fetch/render and empty state');
