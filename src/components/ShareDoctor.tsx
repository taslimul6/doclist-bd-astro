import {useState} from 'react';
import {type Locale,pick,localizedPath} from '../../lib/i18n';
// Share / copy-link / WhatsApp / Facebook for a profile (replaces the share part of the old engagement widget).
export default function ShareDoctor({slug,name,lang}:{slug:string;name:string;lang:Locale}){
 const [sharing,setSharing]=useState(false),[message,setMessage]=useState('');
 const profilePath=localizedPath(lang,'/doctor/'+slug);
 const origin=()=>typeof window==='undefined'?'':window.location.origin;
 async function share(){const url=origin()+profilePath;if(navigator.share){try{await navigator.share({title:name+' | Doclist Bd',url});return;}catch(e){if(e instanceof Error&&e.name==='AbortError')return;}}setSharing(s=>!s);}
 async function copy(){try{const url=origin()+profilePath;if(navigator.clipboard)await navigator.clipboard.writeText(url);else{const input=document.createElement('textarea');input.value=url;document.body.appendChild(input);input.select();if(!document.execCommand('copy'))throw new Error();input.remove();}setMessage(pick(lang,'Link copied','লিংক কপি হয়েছে'));setSharing(false);}catch{setMessage(pick(lang,'Could not copy. Use the profile link.','কপি করা যায়নি। প্রোফাইলের লিংক ব্যবহার করুন।'));}}
 return <div className="doctor-engagement">
  <div className="engagement-controls"><button type="button" className="engagement-button share-button" onClick={share} aria-label={pick(lang,'Share doctor profile','ডাক্তারের প্রোফাইল শেয়ার করুন')}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 10.5 6.8-4m-6.8 7 6.8 4"/></svg><span>{pick(lang,'Share','শেয়ার')}</span></button></div>
  {sharing&&<div className="share-options"><button type="button" onClick={copy}>{pick(lang,'Copy link','লিংক কপি')}</button><a target="_blank" rel="noopener noreferrer" href={'https://wa.me/?text='+encodeURIComponent(name+' '+origin()+profilePath)}>WhatsApp</a><a target="_blank" rel="noopener noreferrer" href={'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(origin()+profilePath)}>Facebook</a><button type="button" onClick={()=>setSharing(false)}>{pick(lang,'Close','বন্ধ')}</button></div>}
  <span className="engagement-feedback" role="status">{message}</span>
 </div>;
}
