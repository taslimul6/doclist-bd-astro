"use client";
import {useParams} from 'next/navigation';import {t,localizedPath} from '../../lib/i18n';
export default function Error({reset}:{error:Error;reset:()=>void}){const params=useParams();const lang=params?.lang==='en'?'en':'bn';return <div className="container section empty-state"><h1>{t(lang,'We couldn’t load this page')}</h1><p>{t(lang,'Please try again.')}</p><button className="btn btn-primary" onClick={reset}>{t(lang,'Try Again')}</button><a className="btn btn-secondary" href={localizedPath(lang,'/doctors')}>{t(lang,'Doctor Directory')}</a></div>;}
