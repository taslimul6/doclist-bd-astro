import {sitemapPageSize} from '../../lib/sitemap-config';
import {indexablePaths} from '../../lib/indexability';import {absolute,escapeXml} from '../../lib/seo';
export const dynamic='force-dynamic';
export function GET(){const count=Math.ceil(indexablePaths().length*2/sitemapPageSize);const xml='<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+Array.from({length:count},(_,i)=>'<sitemap><loc>'+escapeXml(absolute('/sitemaps/'+i+'.xml'))+'</loc></sitemap>').join('')+'<sitemap><loc>'+escapeXml(absolute('/sitemaps/100.xml'))+'</loc></sitemap></sitemapindex>';return new Response(xml,{headers:{'Content-Type':'application/xml; charset=utf-8','Cache-Control':'no-store'}});}
