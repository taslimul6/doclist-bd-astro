// Maximum page URLs per sitemap shard; language variants each count as a URL.
export const sitemapPageSize=1000;
import type {Locale} from './i18n';
/**
 * Languages submitted to search engines. English (/en) stays live for visitors but is noindex and kept
 * out of sitemaps and hreflang, so Google evaluates one Bengali copy of each page (decision 2026-11-18).
 * To index English again, add 'en' here.
 */
export const indexedLocales:readonly Locale[]=['bn'];
export const isIndexedLocale=(lang:Locale)=>indexedLocales.includes(lang);
