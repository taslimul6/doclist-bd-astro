import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {DatabaseSync} from 'node:sqlite';
import {allPaths,doctors,locations,searchDoctors} from '../lib/directory';
import {resolveRoute} from '../lib/routes';
import {runtime} from '../lib/runtime';
import {engagement,type EngagementDb,type Statement} from '../lib/engagement';
import {isPublished,releaseAt,publicationStart} from '../lib/publication';
import {parseSavedDoctors,retentionMs} from '../lib/saved-doctors';
import type {Locale} from '../lib/i18n';

const integrity=JSON.parse(fs.readFileSync('migration/source-integrity.json','utf8')) as Record<string,string>;
for(const [path,hash] of Object.entries(integrity)) {
  assert.equal(createHash('sha256').update(fs.readFileSync(path)).digest('hex'),hash,path+' changed');
}
const paths=allPaths();
assert.equal(new Set(paths).size,paths.length);
let checked=0;
for(const lang of ['bn','en'] as Locale[]) {
  for(const path of [...paths,'/my-doc','/privacy-policy','/terms-of-use','/contact','/sponsorship']) {
    const url=lang==='en'?(path==='/'?'/en':'/en'+path):path;
    const route=resolveRoute(url);
    const m=await route.module.generateMetadata({params:Promise.resolve(route.params),searchParams:Promise.resolve({})});
    assert.ok(m.title,url);checked++;
  }
}
for(const district of locations.filter(x=>x.kind==='district')) {
  assert.equal(searchDoctors(undefined,{district:district.slug}).total,district.doctorIds.length,district.slug);
}
assert.equal(retentionMs,365*86400000);
assert.deepEqual(parseSavedDoctors(JSON.stringify([{id:'one',expiresAt:100},{id:'two',expiresAt:200}]),100),[{id:'two',expiresAt:200}]);
await runtime.run({env:{DOCLIST_RELEASE_START:'2099-01-01'}},async()=>{
  assert.equal(publicationStart(),Date.parse('2099-01-01T00:00:00+06:00'));
  for(const d of doctors)assert.equal(isPublished('/doctor/'+d.slug),true);
  for(const d of locations.filter(x=>['district','division'].includes(x.kind)))assert.equal(isPublished('/doctors/'+d.slug),true);
  const schedule=JSON.parse(fs.readFileSync('data/release-schedule.json','utf8'));
  const path=Object.keys(schedule.paths)[0];assert.equal(isPublished(path),false);assert.ok(releaseAt(path));
});

// The same SQL statements run on Cloudflare D1. Check idempotency and counts against SQLite.
const sqlite=new DatabaseSync(':memory:');
sqlite.exec(fs.readFileSync('migrations/0001_engagement.sql','utf8'));
class Query implements Statement {
  args:any[]=[];
  constructor(public sql:string){}
  bind(...args:any[]){this.args=args;return this;}
  async first<T>(){return sqlite.prepare(this.sql).get(...this.args) as T||null;}
  async run(){return sqlite.prepare(this.sql).run(...this.args);}
}
const db:EngagementDb={prepare:sql=>new Query(sql),batch:async statements=>{
  sqlite.exec('BEGIN');try{for(const s of statements)await s.run();sqlite.exec('COMMIT');}catch(e){sqlite.exec('ROLLBACK');throw e;}
}};
await runtime.run({env:{DB:db}},async()=>{
  const id=doctors[0].id;
  assert.deepEqual(await engagement(id,'visitor'),{loves:0,impressions:0,loved:false});
  await engagement(id,'visitor','love');await engagement(id,'visitor','love');
  await engagement(id,'visitor','impression','event1');await engagement(id,'visitor','impression','event1');
  assert.deepEqual(await engagement(id,'visitor'),{loves:1,impressions:1,loved:true});
  await engagement(id,'other','love');
  assert.deepEqual(await engagement(id,'third'),{loves:2,impressions:1,loved:false});
});
sqlite.close();
const report={status:'passed',sourceFilesUnchanged:Object.keys(integrity).length,baseDirectoryPages:paths.length,bilingualPagesChecked:checked,doctorProfiles:doctors.length,districts:64,savedRetentionDays:365,sqlIdempotency:'passed',schedulePreserved:true};
fs.writeFileSync('migration/validation-unit.json',JSON.stringify(report,null,2)+'\n');
console.log(report);
