import type {APIRoute} from 'astro';
import coverage from '../../../data/indexed-coverage.json';
import {sitemapPageSize,indexedLocales} from '../../../lib/sitemap-config';
import {indexablePaths,pageDecision,normalizePath} from '../../../lib/indexability';
import {absolute,escapeXml} from '../../../lib/seo';
import {localizedPath} from '../../../lib/i18n';

const headers={'Content-Type':'application/xml; charset=utf-8','Cache-Control':'no-store'};

export function getStaticPaths(){
  const count=Math.ceil(indexablePaths().length*indexedLocales.length/sitemapPageSize);
  return [...Array.from({length:count},(_,i)=>i),100].map(i=>({params:{file:i+'.xml'}}));
}

export const GET:APIRoute=({params})=>{
  const file=params.file||'';
  if(!/^(0|[1-9]\d*)\.xml$/.test(file))return new Response('Not found',{status:404});
  // 100.xml: previously indexed URLs, minus any that now fail the quality rules (never submit noindex URLs).
  if(file==='100.xml'){
    const xml='<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+coverage.urls.filter(url=>{const p=new URL(url).pathname;return !p.startsWith('/en/')&&p!=='/en'&&pageDecision(normalizePath(p)).index;}).map(url=>'<url><loc>'+escapeXml(url)+'</loc></url>').join('')+'</urlset>';
    return new Response(xml,{headers});
  }
  const i=Number(file.replace('.xml','')),paths=indexablePaths().flatMap(base=>indexedLocales.map(lang=>({base,path:localizedPath(lang,base)}))).slice(i*sitemapPageSize,(i+1)*sitemapPageSize);
  if(!paths.length)return new Response('Not found',{status:404});
  const xml='<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">'+paths.map(({base,path})=>'<url><loc>'+escapeXml(absolute(path))+'</loc>'+(indexedLocales.length>1?indexedLocales.map(lang=>'<xhtml:link rel="alternate" hreflang="'+lang+'-BD" href="'+escapeXml(absolute(localizedPath(lang,base)))+'"/>').join('')+'<xhtml:link rel="alternate" hreflang="x-default" href="'+escapeXml(absolute(localizedPath('bn',base)))+'"/>':'')+'</url>').join('')+'</urlset>';
  return new Response(xml,{headers});
};
