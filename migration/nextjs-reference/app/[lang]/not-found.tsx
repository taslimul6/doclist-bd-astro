"use client";
import {useParams} from 'next/navigation';import {t,localizedPath} from '../../lib/i18n';
export default function NotFound(){const params=useParams();const lang=params?.lang==='en'?'en':'bn';return <div className="container section empty-state"><span className="eyebrow">404</span><h1>{t(lang,'This directory page was not found')}</h1><p>{t(lang,'The doctor, provider or specialty/location combination may not be in this dataset.')}</p><a className="btn btn-primary" href={localizedPath(lang,'/doctors')}>{t(lang,'Find a Doctor')}</a></div>;}
