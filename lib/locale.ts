import {notFound} from './navigation';import {isLocale,type Locale} from './i18n';
export function getLocale(lang:string):Locale{if(!isLocale(lang))notFound();return lang;}
