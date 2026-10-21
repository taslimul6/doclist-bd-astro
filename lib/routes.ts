import * as home from '../views/[lang]/page';
import * as doctors from '../views/[lang]/doctors/page';
import * as location from '../views/[lang]/doctors/[segment]/page';
import * as combination from '../views/[lang]/doctors/[segment]/[location]/page';
import * as doctor from '../views/[lang]/doctor/[slug]/page';
import * as specialties from '../views/[lang]/specialties/page';
import * as specialty from '../views/[lang]/specialty/[slug]/page';
import * as hospitals from '../views/[lang]/hospitals/page';
import * as hospital from '../views/[lang]/hospital/[slug]/page';
import * as section from '../views/[lang]/hospital/[slug]/[section]/page';
import * as locations from '../views/[lang]/locations/page';
import * as saved from '../views/[lang]/my-doc/page';
import * as privacy from '../views/[lang]/privacy-policy/page';
import * as terms from '../views/[lang]/terms-of-use/page';
import * as contact from '../views/[lang]/contact/page';
import * as sponsorship from '../views/[lang]/sponsorship/page';
import {notFound} from './navigation';
import type {Metadata} from './metadata-types';
import type {Query} from './types';
import type {Locale} from './i18n';
import type {ReactNode} from 'react';

export type RouteModule = {
  default: (props: any) => Promise<ReactNode>;
  generateMetadata: (props: any) => Promise<Metadata>;
};
export function resolveRoute(pathname: string): {module: RouteModule; params: Record<string,string> & {lang:Locale}} {
  let path: string;
  try { path = decodeURI(pathname).replace(/\/+$/, '') || '/'; } catch { return notFound(); }
  const lang: Locale = /^\/en(?:\/|$)/.test(path) ? 'en' : 'bn';
  const base = path.replace(/^\/en(?=\/|$)/,'') || '/';
  const params: Record<string,string> & {lang:Locale} = {lang};
  const fixed: Record<string,RouteModule> = {
    '/':home, '/doctors':doctors, '/specialties':specialties, '/hospitals':hospitals,
    '/locations':locations, '/my-doc':saved, '/privacy-policy':privacy,
    '/terms-of-use':terms, '/contact':contact, '/sponsorship':sponsorship,
  };
  if (fixed[base]) return {module:fixed[base], params};
  const patterns: Array<[RegExp,RouteModule,string[]]> = [
    [/^\/doctor\/([^/]+)$/,doctor,['slug']],
    [/^\/doctors\/([^/]+)\/([^/]+)$/,combination,['segment','location']],
    [/^\/doctors\/([^/]+)$/,location,['segment']],
    [/^\/specialty\/([^/]+)$/,specialty,['slug']],
    [/^\/hospital\/([^/]+)\/([^/]+)$/,section,['slug','section']],
    [/^\/hospital\/([^/]+)$/,hospital,['slug']],
  ];
  for (const [pattern,module,keys] of patterns) {
    const match=base.match(pattern);
    if (match) { keys.forEach((key,i)=>params[key]=match[i+1]); return {module,params}; }
  }
  return notFound();
}
export function requestQuery(url:URL): Query {
  const result:Query={};
  for (const key of new Set(url.searchParams.keys())) {
    const values=url.searchParams.getAll(key);
    result[key]=values.length>1?values:values[0];
  }
  return result;
}
