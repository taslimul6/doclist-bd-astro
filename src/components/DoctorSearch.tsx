import {useEffect,useMemo,useRef,useState,type ReactNode} from 'react';
import GeographyFields from './GeographyFields';
import SaveDoctor from './SaveDoctor';
import {type Locale,t,pick,num,specialty as specialtyName,provider,medicalText,institution,schedule as scheduleText} from '../../lib/i18n';
import {phoneHref} from '../../lib/utils';

// In-browser search/filters for doctor listings. The statically generated list (children) is what crawlers and
// first paint see; once a filter is used (or the URL carries ?q=, ?specialty=, ...), results come from
// /search/index.json instead.

type Chamber={h:string;n:string;l:string[];p:string;sc:string;f:string|null};
type Row={i:string;s:string;n:string;im:string|null;q:string;d:string;e:number|null;g:string|null;sp:string[];lc:string[];rs:string[];ft:number;vf:number;ch:Chamber[];rel:[string,string,string[]][];t:string};
type Meta={specialties:{slug:string;name:string}[];locations:{slug:string;name:string;kind:string;parent:string|null}[];hospitals:{slug:string;name:string}[]};
type Scope={specialty?:string;location?:string;hospital?:string;fixedDivision?:string;fixedDistrict?:string;path:string};
type Filters={q:string;specialty:string;division:string;district:string;hospital:string;experience:string;gender:string;maxFee:string;sort:string};
const empty:Filters={q:'',specialty:'',division:'',district:'',hospital:'',experience:'',gender:'',maxFee:'',sort:''};
const keys=Object.keys(empty) as (keyof Filters)[];
const pageSize=24;
let loading:Promise<{meta:Meta;rows:Row[]}>|undefined;
const load=()=>loading??=fetch('/search/index.json').then(r=>{if(!r.ok)throw new Error('index');return r.json();}).catch(e=>{loading=undefined;throw e;});

export function filterRows(rows:Row[],f:Filters,scope:Scope){
  const sp=scope.specialty||f.specialty,hospital=scope.hospital||f.hospital;
  const geo=[scope.location,f.division,f.district].filter((x):x is string=>!!x);
  let r=rows;
  if(sp||geo.length||hospital)r=r.filter(d=>sp?d.rel.some(x=>x[0]===sp&&geo.every(l=>x[2].includes(l))&&(!hospital||x[1]===hospital)):d.ch.some(c=>geo.every(l=>c.l.includes(l))&&(!hospital||c.h===hospital)));
  const words=f.q.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean).slice(0,12);
  if(words.length)r=r.filter(d=>words.every(w=>d.t.includes(w)));
  const min=Number(f.experience);if(Number.isFinite(min)&&min>0)r=r.filter(d=>d.e!==null&&d.e>=min);
  if(f.gender)r=r.filter(d=>d.g?.toLowerCase()===f.gender.toLowerCase());
  if(f.maxFee){const max=Number(f.maxFee);r=r.filter(d=>d.ch.some(c=>c.f&&Number(c.f)<=max));}
  if(f.sort==='name')r=[...r].sort((a,b)=>a.n.localeCompare(b.n));
  else if(f.sort==='experience')r=[...r].sort((a,b)=>(b.e??-1)-(a.e??-1));
  else r=[...r].sort((a,b)=>b.ft-a.ft);
  return r;
}

function Result({d,lang,names,scope}:{d:Row;lang:Locale;names:{sp:Map<string,string>}; scope:Scope}){
  const c=d.ch.find(c=>(!scope.hospital||c.h===scope.hospital)&&(!scope.location||c.l.includes(scope.location)))||d.ch[0];
  const specs=d.sp.slice(0,3).map(s=>specialtyName(lang,names.sp.get(s)||'')).filter(Boolean).join(' · ')||medicalText(lang,d.rs[0]||'Doctor');
  const initials=d.n.replace(/^(prof\.?\s*)?(dr\.?\s*)/i,'').split(/\s+/).slice(0,2).map(x=>x[0]).join('');
  const profile='/doctor/'+d.s;
  return <article className={'card doctor-card list card-hover'+(d.ft?' is-featured':'')}>
    {d.im?<img className="doctor-photo local-portrait" src={d.im} alt={d.n} width={90} height={114} loading="lazy" decoding="async" data-initials={initials}/>:<div className="doctor-photo initials" aria-hidden="true">{initials}</div>}
    <div className="doctor-main">
      {(d.ft||d.vf)?<span className="doctor-badges">{d.ft?<span className="badge badge-featured">★ {pick(lang,'Featured','ফিচার্ড')}</span>:null}{d.vf?<span className="badge badge-verified">✔ {pick(lang,'Verified','ভেরিফায়েড')}</span>:null}</span>:null}
      <h3><a href={profile} lang="en">{d.n}</a></h3>
      <div className="specialty">{specs}</div>
      {d.q&&<div className="qualifications">{medicalText(lang,d.q)}</div>}
      {d.d&&<div className="designation">{institution(lang,d.d)}</div>}
      <div className="meta-row">{d.e!==null&&<span>{pick(lang,`${num(lang,d.e)} years of experience`,`${num(lang,d.e)} বছরের অভিজ্ঞতা`)}</span>}{c&&<a href={'/hospital/'+c.h}>{provider(lang,c.n)}</a>}{d.ch.length>1&&<span>{pick(lang,`${num(lang,d.ch.length)} chambers`,`${num(lang,d.ch.length)}টি চেম্বার`)}</span>}</div>
      {c?.sc&&<p className="schedule">{scheduleText(lang,c.sc)}</p>}
    </div>
    <div className="doctor-actions">
      <SaveDoctor id={d.i} lang={lang}/>
      {c?.f&&<div className="fee"><strong>৳{num(lang,Number(c.f))}</strong><span>{t(lang,'Listed consultation fee')}</span></div>}
      <a className="btn btn-secondary" href={profile}>{t(lang,'View Profile')}</a>
      {c?.p&&<a className="btn btn-primary" href={phoneHref(c.p)}>{t(lang,'Call Chamber')}</a>}
      {c&&<a className="btn btn-soft" href={'/hospital/'+c.h}>{t(lang,'View Hospital')}</a>}
    </div>
  </article>;
}

export default function DoctorSearch({lang,scope,children}:{lang:Locale;scope:Scope;children?:ReactNode}){
  const [f,setF]=useState<Filters>(empty);
  const [data,setData]=useState<{meta:Meta;rows:Row[]}|null>(null);
  const [failed,setFailed]=useState(false);
  const [page,setPage]=useState(1);
  const [resets,setResets]=useState(0);
  const noop=()=>{};
  const formRef=useRef<HTMLFormElement>(null);
  const active=keys.some(k=>!!f[k]);

  const fetchIndex=()=>{load().then(setData).catch(()=>setFailed(true));};
  useEffect(()=>{
    const params=new URLSearchParams(window.location.search);
    const initial={...empty};let any=false;
    for(const k of keys){const v=params.get(k)||(k==='district'?params.get('location')||'':'');if(v){initial[k]=v;any=true;}}
    if(any){setF(initial);fetchIndex();}
  },[]);

  const apply=(next:Filters)=>{
    setF(next);setPage(1);
    const params=new URLSearchParams();for(const k of keys)if(next[k])params.set(k,next[k]);
    window.history.replaceState(null,'',window.location.pathname+(params.size?'?'+params.toString():''));
    fetchIndex();
  };
  const read=()=>{const form=formRef.current;if(!form)return;const fd=new FormData(form);const next={...empty};for(const k of keys)next[k]=String(fd.get(k)||'');apply(next);};
  const onChange=()=>{window.setTimeout(read,0);};

  const names=useMemo(()=>({sp:new Map((data?.meta.specialties||[]).map(s=>[s.slug,s.name]))}),[data]);
  const results=useMemo(()=>data&&active?filterRows(data.rows,f,scope):[],[data,active,f,scope]);
  const pages=Math.max(1,Math.ceil(results.length/pageSize));
  const current=Math.min(page,pages);
  const shown=results.slice((current-1)*pageSize,current*pageSize);
  const opts=data?.meta;
  const geoOptions=opts?opts.locations:[];

  const select=(name:'specialty'|'hospital',label:string,list:{slug:string;name:string}[],display:(n:string)=>string)=>
    <div className="filter-group field"><label htmlFor={'filter-'+name}>{t(lang,label)}</label><select id={'filter-'+name} name={name} value={f[name]} onChange={noop}><option value="">{pick(lang,'All '+label.toLowerCase(),'সব '+t(lang,label))}</option>{list.map(o=><option key={o.slug} value={o.slug}>{display(o.name)}</option>)}</select></div>;

  return <div className="page-layout">
    <details className="filter-panel" open onFocus={()=>{if(!data)fetchIndex();}}>
      <summary>{t(lang,'Refine your search')}</summary>
      <form ref={formRef} className="filters card" onChange={onChange} onSubmit={e=>{e.preventDefault();read();}}>
        <div className="filter-group field"><label htmlFor="filter-q">{t(lang,'Search')}</label><input id="filter-q" name="q" value={f.q} onChange={e=>setF({...f,q:e.target.value})} placeholder={t(lang,'Name, hospital or keyword')} maxLength={200}/></div>
        {!scope.specialty&&select('specialty','Specialties',opts?.specialties||[],n=>specialtyName(lang,n))}
        <GeographyFields lang={lang} key={'geo'+geoOptions.length+'-'+resets} options={geoOptions} initialDivision={f.division} initialDistrict={f.district} fixedDivision={scope.fixedDivision||''} fixedDistrict={scope.fixedDistrict||''}/>
        {!scope.hospital&&select('hospital','Hospitals',opts?.hospitals||[],n=>provider(lang,n))}
        <div className="filter-group field"><label htmlFor="filter-exp">{t(lang,'Minimum experience')}</label><select id="filter-exp" name="experience" value={f.experience} onChange={noop}><option value="">{t(lang,'Any experience')}</option>{[5,10,15].map(n=><option key={n} value={n}>{pick(lang,`${n}+ years (where listed)`,`${num(lang,n)}+ বছর (তথ্য থাকলে)`)}</option>)}</select></div>
        <div className="filter-group field"><label htmlFor="filter-gender">{t(lang,'Gender')}</label><select id="filter-gender" name="gender" value={f.gender} onChange={noop}><option value="">{pick(lang,'All gender','সব Gender')}</option><option value="male">{t(lang,'Male')}</option><option value="female">{t(lang,'Female')}</option></select></div>
        <div className="filter-group field"><label htmlFor="filter-fee">{t(lang,'Maximum fee (BDT)')}</label><input id="filter-fee" type="number" min="0" name="maxFee" value={f.maxFee} onChange={e=>setF({...f,maxFee:e.target.value})}/></div>
        <div className="filter-group field"><label htmlFor="filter-sort">{t(lang,'Sort by')}</label><select id="filter-sort" name="sort" value={f.sort} onChange={noop}><option value="">{t(lang,'Directory order')}</option><option value="name">{t(lang,'Name A–Z')}</option><option value="experience">{t(lang,'Listed experience')}</option></select></div>
        <button className="btn btn-primary" type="submit">{t(lang,'Apply Filters')}</button>
        <a className="reset-link" href={scope.path} onClick={e=>{e.preventDefault();setResets(n=>n+1);apply(empty);}}>{t(lang,'Clear filters')}</a>
      </form>
    </details>
    <div>
      {!active?children:failed?<div className="content-card empty-state" role="alert"><h2>{pick(lang,'Search is unavailable','সার্চ এখন পাওয়া যাচ্ছে না')}</h2><p>{pick(lang,'Please reload the page and try again.','পেজ রিলোড করে আবার চেষ্টা করুন।')}</p></div>:!data?<p aria-live="polite">{pick(lang,'Searching…','খোঁজা হচ্ছে…')}</p>:<>
        <div className="toolbar"><p className="count" aria-live="polite">{results.length?pick(lang,`Showing ${(current-1)*pageSize+1}–${Math.min(current*pageSize,results.length)} of ${results.length} doctors`,`মোট ${num(lang,results.length)} জনের মধ্যে ${num(lang,(current-1)*pageSize+1)}–${num(lang,Math.min(current*pageSize,results.length))} জন দেখানো হচ্ছে`):t(lang,'No matching doctors')}</p><span className="small">{pick(lang,`Page ${current} of ${pages}`,`পৃষ্ঠা ${num(lang,current)} / ${num(lang,pages)}`)}</span></div>
        <div className="stack">{shown.map(d=><Result key={d.i} d={d} lang={lang} names={names} scope={scope}/>)}{!results.length&&<div className="content-card empty-state"><h2>{t(lang,'No matching doctors')}</h2><p>{t(lang,'Try a different keyword or clear your filters.')}</p><a className="btn btn-primary" href={scope.path} onClick={e=>{e.preventDefault();setResets(n=>n+1);apply(empty);}}>{t(lang,'Reset Search')}</a></div>}</div>
        {pages>1&&<nav className="pagination" aria-label={t(lang,'Pagination')}>{current>1&&<a href="#" aria-label={t(lang,'Previous page')} onClick={e=>{e.preventDefault();setPage(current-1);}}>‹</a>}<span>{num(lang,current)} / {num(lang,pages)}</span>{current<pages&&<a href="#" aria-label={t(lang,'Next page')} onClick={e=>{e.preventDefault();setPage(current+1);}}>›</a>}</nav>}
      </>}
    </div>
  </div>;
}
