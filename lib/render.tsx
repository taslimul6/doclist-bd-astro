import {renderToString} from 'react-dom/server';
import type {ReactNode} from 'react';
import {PagePath} from './island';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {type Locale,t,localizedPath} from './i18n';

export function renderPage(children:ReactNode,lang:Locale,pathname:string) {
  return renderToString(<PagePath.Provider value={pathname}>
    <a href="#main-content" className="skip-link">{t(lang,'Skip to content')}</a>
    <Header lang={lang}/>
    <main id="main-content">{children}</main>
    <Footer lang={lang}/>
  </PagePath.Provider>);
}
export function missingPage(lang:Locale) {
  return <div className="container section empty-state"><span className="eyebrow">404</span><h1>{t(lang,'This directory page was not found')}</h1><p>{t(lang,'The doctor, provider or specialty/location combination may not be in this dataset.')}</p><a className="btn btn-primary" href={localizedPath(lang,'/doctors')}>{t(lang,'Find a Doctor')}</a></div>;
}
export function errorPage(lang:Locale) {
  return <div className="container section empty-state"><h1>{t(lang,'We couldn’t load this page')}</h1><p>{t(lang,'Please try again.')}</p><button className="btn btn-primary" data-retry type="button">{t(lang,'Try Again')}</button><a className="btn btn-secondary" href={localizedPath(lang,'/doctors')}>{t(lang,'Doctor Directory')}</a></div>;
}
