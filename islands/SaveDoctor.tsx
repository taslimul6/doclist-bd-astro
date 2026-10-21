import {useEffect, useState} from 'react';
import type {Locale} from '../lib/i18n';
import {readSavedDoctors, writeSavedDoctors, savedDoctorsKey, savedDoctorsEvent, retentionMs} from '../lib/saved-doctors';
export default function SaveDoctor({id, lang}: {id: string; lang: Locale}) {
  const [saved, setSaved] = useState(false);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    const sync = () => { try { setSaved(readSavedDoctors().some(x => x.id === id)); } catch {} setReady(true); };
    const storage = (e: StorageEvent) => { if (e.key === savedDoctorsKey || e.key === null) sync(); };
    sync();
    window.addEventListener(savedDoctorsEvent, sync);
    window.addEventListener('storage', storage);
    window.addEventListener('focus', sync);
    return () => { window.removeEventListener(savedDoctorsEvent, sync); window.removeEventListener('storage', storage); window.removeEventListener('focus', sync); };
  }, [id]);
  function toggle() {
    try {
      const items = readSavedDoctors(), exists = items.some(x => x.id === id);
      writeSavedDoctors(exists ? items.filter(x => x.id !== id) : [...items, {id, expiresAt: Date.now() + retentionMs}]);
      setError('');
    } catch { setError(lang === 'en' ? 'Unable to save. Allow browser storage and try again.' : 'সেভ করা যায়নি। ব্রাউজারের স্টোরেজ চালু করে আবার চেষ্টা করুন।'); }
  }
  return <div className="save-doc-control"><button type="button" className={'btn btn-secondary save-doc' + (saved ? ' is-saved' : '')} aria-pressed={saved} disabled={!ready} onClick={toggle}>{saved ? (lang === 'en' ? '✓ Saved · Remove' : '✓ সেভ হয়েছে · সরান') : (lang === 'en' ? 'Save Doc' : 'ডাক্তার সেভ করুন')}</button>{error && <span className="small" role="alert">{error}</span>}</div>;
}
