import type {Metadata} from 'next';
import {getLocale} from '../../../lib/locale';
import MyDoctors from '../../../components/MyDoctors';
export async function generateMetadata({params}: {params: Promise<{lang:string}>}):Promise<Metadata>{const lang=getLocale((await params).lang);return {title:lang==='en'?'Saved Docs':'আমার ডাক্তার',robots:{index:false,follow:true}};}
export default async function Page({params}: {params: Promise<{lang: string}>}) {
  const lang = getLocale((await params).lang);
  return <><section className="page-hero"><div className="container"><h1>{lang==='en'?'Saved Docs':'আমার ডাক্তার'}</h1><p>{lang === 'en' ? 'Your personal doctor list. Saved on this browser for 365 days from each save. Clearing browser data removes this list; it does not sync to other devices.' : 'আপনার ব্যক্তিগত ডাক্তার তালিকা। সেভ করার পর ৩৬৫ দিন এই ব্রাউজারে থাকবে। ব্রাউজারের ডেটা মুছলে তালিকা মুছে যাবে; অন্য ডিভাইসে তালিকা পাওয়া যাবে না।'}</p></div></section><section className="section"><div className="container"><MyDoctors lang={lang}/></div></section></>;
}
