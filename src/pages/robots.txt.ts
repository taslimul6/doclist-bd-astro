import type {APIRoute} from 'astro';
import {absolute} from '../../lib/seo';

export const GET:APIRoute=()=>new Response(`User-Agent: *\nAllow: /\nDisallow: /api/\nDisallow: /dev/\n\nSitemap: ${absolute('/sitemap.xml')}\n`,{headers:{'Content-Type':'text/plain; charset=utf-8'}});
