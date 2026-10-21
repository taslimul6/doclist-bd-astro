import {useEffect,useState} from 'react';
import {type Locale,t} from '../lib/i18n';

export default function Preferences({lang,pathname="/"}:{lang:Locale;pathname?:string}){
  const [theme,setTheme]=useState('light');
  const [query,setQuery]=useState('');

  useEffect(()=>{
    setTheme(document.documentElement.dataset.theme||'light');
    setQuery(window.location.search);
  },[pathname]);

  const other=lang==='bn'?'en':'bn';
  const basePath=pathname.replace(/^\/(bn|en)(?=\/|$)/,'')||'/';
  const switchPath=other==='en'?(basePath==='/'?'/en':'/en'+basePath):basePath;

  function toggle(){
    const next=document.documentElement.dataset.theme==='dark'?'light':'dark';
    document.documentElement.dataset.theme=next;
    setTheme(next);
    try{localStorage.setItem('doclist-theme',next);}catch{}
  }

  return <div className="preferences"><a className="language-switch" href={switchPath+query} hrefLang={other} lang={other} aria-label={lang==='bn'?'Switch to English':'বাংলায় দেখুন'} onClick={()=>{try{localStorage.setItem('doclist-language',other);}catch{}}}>{lang==='bn'?'English':'বাংলা'}</a><button className="theme-toggle" type="button" onClick={toggle} aria-pressed={theme==='dark'} aria-label={t(lang,theme==='dark'?'Switch to light mode':'Switch to dark mode')} title={t(lang,theme==='dark'?'Light mode':'Dark mode')}><span aria-hidden="true">{theme==='dark'?'☀':'☾'}</span><span className="theme-label">{t(lang,theme==='dark'?'Light mode':'Dark mode')}</span></button></div>;
}
