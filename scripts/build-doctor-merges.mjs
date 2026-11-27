// Duplicate doctor profiles: review list + validation of the curated merge map.
//
// data/doctor-merges.json ({aliasId: canonicalId}) is GENERATED: an alias profile 301s to its canonical
// profile and drops out of listings and sitemaps; its id and slug keep resolving.
// It is the union of
//  - automatic high-confidence pairs: same name (titles ignored), a shared specialty, identical
//    non-empty qualifications AND a shared hospital, phone or area; and
//  - pairs confirmed by hand in data/doctor-merges-manual.json (same shape).
// Name alone is never enough: "Md. Nazrul Islam" is several different doctors.
// Every other same-name + same-specialty pair goes to data/doctor-merge-candidates.csv for review.
//
//   node scripts/build-doctor-merges.mjs           regenerate merges + candidate list
//   node scripts/build-doctor-merges.mjs --check   fail if data/doctor-merges.json is stale or invalid
import fs from 'node:fs';import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..');
const read=f=>JSON.parse(fs.readFileSync(path.join(root,f),'utf8'));
const doctors=read('data/doctors.json'),images=read('data/doctor-images.json'),manual=read('data/doctor-merges-manual.json');
const byId=new Map(doctors.map(d=>[d.id,d]));

const useful=s=>!!(s&&String(s).trim()&&!/^(n\/?a|unknown|not available|not provided|-)$/i.test(String(s).trim()));
const title=/^(?:(?:dr|prof|professor|assoc|associate|asst|assistant|lt|col|brig|gen|maj|major|colonel|brigadier|general|ডাঃ|ডা|ডাক্তার|প্রফেসর|অধ্যাপক|সহযোগী|সহকারী)\.?\s+)+/iu;
const norm=name=>name.trim().replace(title,'').toLowerCase().replace(/[^a-zঀ-৿]/gu,'');
const phones=d=>new Set(d.chambers.map(c=>String(c.phone||'').replace(/\D/g,'').slice(-10)).filter(p=>p.length>=7));
const overlap=(a,b)=>[...a].some(x=>b.has(x));
const richness=d=>[useful(d.qualifications),useful(d.designation),useful(d.institute),useful(d.registration),d.experience!=null,!!images[d.id],d.chambers.some(c=>useful(c.schedule)),d.chambers.length>1].filter(Boolean).length;
const groups=new Map();for(const d of doctors){const k=norm(d.name);if(k.length>=6)(groups.get(k)??groups.set(k,[]).get(k)).push(d);}

// High-confidence pairs -> union-find clusters -> richest profile is canonical.
const sameText=(x,y)=>useful(x)&&String(x).replace(/\s+/g,' ').trim().toLowerCase()===String(y||'').replace(/\s+/g,' ').trim().toLowerCase();
const high=(a,b)=>a.specialtySlugs.some(s=>b.specialtySlugs.includes(s))&&sameText(a.qualifications,b.qualifications)&&(overlap(new Set(a.chambers.map(c=>c.hospitalSlug)),new Set(b.chambers.map(c=>c.hospitalSlug)))||overlap(phones(a),phones(b))||overlap(new Set(a.locationSlugs),new Set(b.locationSlugs)));
const rank=(x,y)=>richness(y)-richness(x)||y.chambers.length-x.chambers.length||Number(x.id.startsWith('doc_import_'))-Number(y.id.startsWith('doc_import_'))||x.id.localeCompare(y.id);
const merges={};
for(const group of groups.values()){
 if(group.length<2)continue;
 const parent=group.map((_,i)=>i),find=i=>parent[i]===i?i:(parent[i]=find(parent[i]));
 for(let i=0;i<group.length;i++)for(let j=i+1;j<group.length;j++)if(high(group[i],group[j]))parent[find(i)]=find(j);
 const clusters=new Map();group.forEach((d,i)=>(clusters.get(find(i))??clusters.set(find(i),[]).get(find(i))).push(d));
 for(const c of clusters.values())if(c.length>1){const [keep,...rest]=[...c].sort(rank);for(const a of rest)merges[a.id]=keep.id;}
}
Object.assign(merges,manual);
// Validate the curated map: known ids, no self-merge, no chains.
const errors=[];
for(const [alias,canonical] of Object.entries(merges)){
 if(!byId.has(alias))errors.push('Unknown alias id '+alias);
 if(!byId.has(canonical))errors.push('Unknown canonical id '+canonical);
 if(alias===canonical)errors.push('Self merge '+alias);
 if(merges[canonical])errors.push(`Chain ${alias} -> ${canonical} -> ${merges[canonical]}; point the alias at the final profile`);
}
if(errors.length){console.error(errors.join('\n'));process.exit(1);}

const out=path.join(root,'data/doctor-merges.json'),text=JSON.stringify(Object.fromEntries(Object.entries(merges).sort(([a],[b])=>a.localeCompare(b))),null,1)+'\n';
if(process.argv.includes('--check')){if(!fs.existsSync(out)||fs.readFileSync(out,'utf8')!==text){console.error('data/doctor-merges.json is stale; run node scripts/build-doctor-merges.mjs');process.exit(1);}console.log({status:'passed',aliases:Object.keys(merges).length});process.exit(0);}
fs.writeFileSync(out,text);

// Candidate = same name (titles ignored) + shared specialty. Evidence column helps the reviewer.
const rows=[];
for(const group of groups.values())for(let i=0;i<group.length;i++)for(let j=i+1;j<group.length;j++){
 const [a,b]=[group[i],group[j]].sort(rank);
 const specialties=a.specialtySlugs.filter(s=>b.specialtySlugs.includes(s));if(!specialties.length)continue;
 const evidence=[overlap(new Set(a.chambers.map(c=>c.hospitalSlug)),new Set(b.chambers.map(c=>c.hospitalSlug)))&&'same hospital',overlap(phones(a),phones(b))&&'same phone',overlap(new Set(a.locationSlugs),new Set(b.locationSlugs))&&'same area',useful(a.qualifications)&&a.qualifications===b.qualifications&&'same qualifications'].filter(Boolean);
 const status=merges[b.id]?(manual[b.id]?'merged (manual)':'merged (auto)'):merges[a.id]?'merged (other way)':'';
 rows.push([status,evidence.join('; '),specialties.join(' '),a.id,a.slug,a.name,a.chambers.map(c=>c.hospitalSlug).join(' '),b.id,b.slug,b.name,b.chambers.map(c=>c.hospitalSlug).join(' ')]);
}
rows.sort((x,y)=>Number(!!x[0])-Number(!!y[0])||y[1].split(';').filter(Boolean).length-x[1].split(';').filter(Boolean).length||x[5].localeCompare(y[5]));
const csv=v=>/[",\n]/.test(v)?'"'+v.replace(/"/g,'""')+'"':v;
const header=['status','evidence','shared_specialties','keep_id','keep_slug','keep_name','keep_hospitals','alias_id','alias_slug','alias_name','alias_hospitals'];
fs.writeFileSync(path.join(root,'data/doctor-merge-candidates.csv'),[header,...rows].map(r=>r.map(csv).join(',')).join('\n')+'\n');
console.log({candidates:rows.length,withEvidence:rows.filter(r=>r[1]).length,merged:Object.keys(merges).length,file:'data/doctor-merge-candidates.csv'});
