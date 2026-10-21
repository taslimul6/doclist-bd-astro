import {useEffect, useState} from 'react';
import {readSavedDoctors, savedDoctorsEvent, savedDoctorsKey} from '../lib/saved-doctors';
import {localizedPath, type Locale} from '../lib/i18n';
import DoctorAvatar from './DoctorAvatar';
import SaveDoctor from './SaveDoctor';
type Doc = {id: string; name: string; slug: string; image: string | null; qualifications: string | null; specialties: string[]; phone: string | null};
export default function MyDoctors({lang}: {lang: Locale}) {
  const [docs, setDocs] = useState<Doc[]>([]), [loading, setLoading] = useState(true), [error, setError] = useState(''), [retry, setRetry] = useState(0);
  useEffect(() => {
    let alive = true;
    let controller: AbortController | undefined;
    async function sync() {
      controller?.abort(); controller = new AbortController(); const signal = controller.signal;
      try {
        const items = readSavedDoctors();
        const clean = JSON.stringify(items);
        if (localStorage.getItem(savedDoctorsKey) !== clean) localStorage.setItem(savedDoctorsKey, clean);
        setLoading(true); setError('');
        if (!items.length) { setDocs([]); setLoading(false); return; }
        const response = await fetch('/api/my-doc', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(items.map(x => x.id)), signal});
        if (!response.ok) throw new Error();
        const data: Doc[] = await response.json();
        if (alive && !signal.aborted) { const byId = new Map(data.map(d => [d.id, d])); setDocs(items.flatMap(x => byId.has(x.id) ? [byId.get(x.id)!] : [])); setLoading(false); }
      } catch {
        if (alive && !signal.aborted) { setError(lang === 'en' ? 'Could not load your saved doctors. Allow browser storage and try again.' : 'তালিকা লোড হয়নি। ব্রাউজারের স্টোরেজ চালু রেখে আবার চেষ্টা করুন।'); setLoading(false); }
      }
    }
    const storage = (e: StorageEvent) => { if (e.key === savedDoctorsKey || e.key === null) void sync(); };
    void sync(); window.addEventListener(savedDoctorsEvent, sync); window.addEventListener('storage', storage); window.addEventListener('focus', sync);
    const timer = window.setInterval(sync, 60000);
    return () => { alive = false; controller?.abort(); window.clearInterval(timer); window.removeEventListener(savedDoctorsEvent, sync); window.removeEventListener('storage', storage); window.removeEventListener('focus', sync); };
  }, [lang, retry]);
  return <div aria-live="polite">{loading ? <p>{lang === 'en' ? 'Loading your doctors…' : 'আপনার ডাক্তার তালিকা লোড হচ্ছে…'}</p> : error ? <div role="alert"><p>{error}</p><button className="btn btn-secondary" onClick={() => setRetry(x => x + 1)}>{lang === 'en' ? 'Try again' : 'আবার চেষ্টা করুন'}</button></div> : docs.length ? <><p className="small">{lang === 'en' ? `${docs.length} saved doctors` : `${new Intl.NumberFormat('bn-BD').format(docs.length)} জন সেভ করা ডাক্তার`}</p><div className="stack">{docs.map(d => <article className="card doctor-card" key={d.id}><DoctorAvatar name={d.name} image={d.image}/><div className="doctor-main"><h3><a href={localizedPath(lang, '/doctor/' + d.slug)}>{d.name}</a></h3><p className="specialty">{d.specialties.slice(0, 3).join(' · ')}</p>{d.qualifications && <p className="qualifications">{d.qualifications}</p>}</div><div className="doctor-actions"><SaveDoctor id={d.id} lang={lang}/><a className="btn btn-secondary" href={localizedPath(lang, '/doctor/' + d.slug)}>{lang === 'en' ? 'View Profile' : 'প্রোফাইল দেখুন'}</a>{d.phone && <a className="btn btn-primary" href={'tel:' + d.phone.split(/[,/;|]/)[0].replace(/[^+\d]/g, '')}>{lang === 'en' ? 'Call Chamber' : 'চেম্বারে কল করুন'}</a>}</div></article>)}</div></> : <div className="content-card empty-state"><h2>{lang === 'en' ? 'No saved doctors yet' : 'এখনো কোনো ডাক্তার সেভ করেননি'}</h2><p>{lang === 'en' ? 'Use Save Doc on a doctor card to build your personal list.' : 'ডাক্তার কার্ডের সেভ বাটন দিয়ে নিজের তালিকা তৈরি করুন।'}</p><a className="btn btn-primary" href={localizedPath(lang, '/doctors')}>{lang === 'en' ? 'Browse Doctors' : 'ডাক্তার খুঁজুন'}</a></div>}</div>;
}
