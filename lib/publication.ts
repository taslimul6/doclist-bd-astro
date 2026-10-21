import {getEnv} from './runtime';
import liveGeography from '../data/live-geography-pages.json';
import coverage from '../data/indexed-coverage.json';
import schedule from '../data/release-schedule.json';
const slots=schedule.paths as Record<string,number>;
const day=86400000;
const liveGeographyPaths=new Set(liveGeography);
const protectedPaths=new Set(coverage.paths);
export const isProtectedIndexedPath=(path:string)=>protectedPaths.has(normalizePublicationPath(path));
export const normalizePublicationPath=(path:string)=>{try{path=decodeURI(path);}catch{}return path.split(/[?#]/)[0].replace(/^\/(bn|en)(?=\/|$)/,'').replace(/\/+$/,'')||'/';};
export function publicationStart(){const value=getEnv('DOCLIST_RELEASE_START')||schedule.startDate;if(!/^\d{4}-\d{2}-\d{2}$/.test(value)||!Number.isFinite(Date.parse(value+'T00:00:00+06:00')))throw new Error('Invalid DOCLIST_RELEASE_START date');return Date.parse(value+'T00:00:00+06:00');}
export function releaseAt(path:string){if(normalizePublicationPath(path).startsWith('/doctor/')||liveGeographyPaths.has(normalizePublicationPath(path))||isProtectedIndexedPath(path))return null;const slot=slots[normalizePublicationPath(path)];return slot===undefined?null:publicationStart()+Math.floor(slot/schedule.pagesPerDay)*day;}
export function isPublished(path:string,now=Date.now()){const date=releaseAt(path);return date===null||now>=date;}
export function isPublishedHref(href:string,now=Date.now()){
 if(href.startsWith('/')&&!href.startsWith('//'))return isPublished(href,now);
 try{const url=new URL(href);const own=new URL(getEnv('NEXT_PUBLIC_SITE_URL')||'https://doclist-bd.com');return url.origin!==own.origin||isPublished(url.pathname,now);}catch{return true;}
}
// All releases are computed per request, never from a module-load timestamp.
