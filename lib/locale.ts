import {isLocale,type Locale} from './i18n';
/** Returns the locale, or null when the segment is not a supported language (caller responds 404). */
export function getLocale(lang:string|undefined):Locale|null{return lang&&isLocale(lang)?lang:null;}
