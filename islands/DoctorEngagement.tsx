import {useEffect,useRef,useState} from 'react';
import {type Locale,pick,num,localizedPath} from '../lib/i18n';
type Counts={loves:number;impressions:number;loved:boolean};
const cache=new Map<string,Counts>(),listeners=new Map<string,Set<(c:Counts)=>void>>();
let visitorReady:Promise<void>|undefined;
function publish(id:string,c:Counts){const previous=cache.get(id);const next=previous?{loves:Math.max(previous.loves,c.loves),impressions:Math.max(previous.impressions,c.impressions),loved:previous.loved||c.loved}:c;cache.set(id,next);listeners.get(id)?.forEach(fn=>fn(next));}
function Icon({kind,filled=false}:{kind:'love'|'eye'|'share';filled?:boolean}){return <svg width="19" height="19" viewBox="0 0 24 24" fill={filled?'currentColor':'none'} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{kind==='love'?<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>:kind==='eye'?<><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></>:<><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 10.5 6.8-4m-6.8 7 6.8 4"/></>}</svg>;}
export default function DoctorEngagement({id,slug,name,lang}:{id:string;slug:string;name:string;lang:Locale}){
 const [counts,setCounts]=useState<Counts|null>(null),[busy,setBusy]=useState(false),[message,setMessage]=useState(''),[sharing,setSharing]=useState(false),[explain,setExplain]=useState(false);
 const ref=useRef<HTMLDivElement>(null),mounted=useRef(false);
 const endpoint='/api/doctors/'+encodeURIComponent(id)+'/engagement';
 useEffect(()=>{
  mounted.current=true;let cancelled=false;const subscribers=listeners.get(id)||new Set();subscribers.add(setCounts);listeners.set(id,subscribers);if(cache.has(id))setCounts(cache.get(id)!);
  const request=async(body?:object)=>{if(!visitorReady)visitorReady=fetch(endpoint,{cache:'no-store'}).then(async r=>{if(!r.ok)throw new Error('unavailable');publish(id,await r.json() as Counts);}).catch(e=>{visitorReady=undefined;throw e;});await visitorReady;const response=await fetch(endpoint,{method:body?'POST':'GET',headers:body?{'Content-Type':'application/json'}:undefined,body:body?JSON.stringify(body):undefined,cache:'no-store'});if(!response.ok)throw new Error('unavailable');const c=await response.json() as Counts;if(!cancelled)publish(id,c);};
  let timer:ReturnType<typeof setTimeout>|undefined,visible=false,ready=false;
  const impression=()=>{if(timer)clearTimeout(timer);if(visible&&ready&&document.visibilityState==='visible')timer=setTimeout(()=>{const event=crypto.randomUUID();request({action:'impression',event}).catch(()=>{if(!cancelled)setMessage(pick(lang,'Counts unavailable. Try again later.','কাউন্ট পাওয়া যাচ্ছে না। পরে আবার চেষ্টা করুন।'));});},1000);};
  request().then(()=>{ready=true;impression();}).catch(()=>{if(!cancelled)setMessage(pick(lang,'Counts unavailable. Try again later.','কাউন্ট পাওয়া যাচ্ছে না। পরে আবার চেষ্টা করুন।'));});
  const target=ref.current?.closest('article, .profile-head')||ref.current;
  const observer=new IntersectionObserver(entries=>{const next=entries[0].isIntersecting&&entries[0].intersectionRatio>=0.25;if(next!==visible){visible=next;impression();}},{threshold:[0,0.25]});if(target)observer.observe(target);
  const visibility=()=>impression();document.addEventListener('visibilitychange',visibility);
  return ()=>{cancelled=true;mounted.current=false;subscribers.delete(setCounts);observer.disconnect();if(timer)clearTimeout(timer);document.removeEventListener('visibilitychange',visibility);};
 },[id,endpoint,lang]);
 async function love(){if(!counts||counts.loved||busy)return;setBusy(true);setMessage('');try{const r=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({action:'love'})});if(!r.ok)throw new Error();const c=await r.json() as Counts;publish(id,c);}catch{setMessage(pick(lang,'Could not save. Please try again.','সংরক্ষণ করা যায়নি। আবার চেষ্টা করুন।'));}finally{if(mounted.current)setBusy(false);}}
 const profilePath=localizedPath(lang,'/doctor/'+slug);
 async function share(){const url=window.location.origin+profilePath;if(navigator.share){try{await navigator.share({title:name+' | Doclist Bd',url});return;}catch(e){if(e instanceof Error&&e.name==='AbortError')return;}}setSharing(s=>!s);}
 async function copy(){try{const url=window.location.origin+profilePath;if(navigator.clipboard)await navigator.clipboard.writeText(url);else{const input=document.createElement('textarea');input.value=url;document.body.appendChild(input);input.select();if(!document.execCommand('copy'))throw new Error();input.remove();}setMessage(pick(lang,'Link copied','লিংক কপি হয়েছে'));setSharing(false);}catch{setMessage(pick(lang,'Could not copy. Use the profile link.','কপি করা যায়নি। প্রোফাইলের লিংক ব্যবহার করুন।'));}}
 return <div className="doctor-engagement" ref={ref}>
  <div className="engagement-controls">
   <button type="button" className={'engagement-button love-button'+(counts?.loved?' loved':'')} disabled={!counts||counts.loved||busy} onClick={love} aria-pressed={counts?.loved||false} aria-label={pick(lang,counts?.loved?'Loved this doctor':'Love this doctor',counts?.loved?'লাভ দেওয়া হয়েছে':'এই ডাক্তারকে লাভ দিন')} title={pick(lang,'One love per browser','এক browser থেকে একবার লাভ')}><Icon kind="love" filled={counts?.loved}/><span>{counts?num(lang,counts.loves):'—'}</span></button>
   <button type="button" className="engagement-button" onClick={()=>setExplain(s=>!s)} aria-expanded={explain} aria-label={pick(lang,'View impression information','ভিউ সম্পর্কে জানুন')}><Icon kind="eye"/><span>{counts?num(lang,counts.impressions):'—'}</span></button>
   <button type="button" className="engagement-button share-button" onClick={share} aria-label={pick(lang,'Share doctor profile','ডাক্তারের প্রোফাইল শেয়ার করুন')}><Icon kind="share"/><span>{pick(lang,'Share','শেয়ার')}</span></button>
  </div>
  {explain&&<p className="engagement-note">{pick(lang,'Views across cards and profiles. Each visible visit counts; this is not a count of unique people.','কার্ড ও প্রোফাইলের মোট ভিউ। প্রতিবার দৃশ্যমান হলে গণনা হয়; এটি আলাদা মানুষের সংখ্যা নয়।')}</p>}
  {sharing&&<div className="share-options"><button type="button" onClick={copy}>{pick(lang,'Copy link','লিংক কপি')}</button><a target="_blank" rel="noopener noreferrer" href={'https://wa.me/?text='+encodeURIComponent(name+' '+(typeof window==='undefined'?'':window.location.origin)+profilePath)}>WhatsApp</a><a target="_blank" rel="noopener noreferrer" href={'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent((typeof window==='undefined'?'':window.location.origin)+profilePath)}>Facebook</a><button type="button" onClick={()=>setSharing(false)}>{pick(lang,'Close','বন্ধ')}</button></div>}
  <span className="engagement-feedback" role="status">{message}</span>
 </div>;
}
