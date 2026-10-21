globalThis.process ??= {}; globalThis.process.env ??= {};
import { s as sitemapPageSize } from '../chunks/sitemap-config_H2Fc90rK.mjs';
import { i as indexablePaths, e as escapeXml, a as absolute } from '../chunks/seo_DvYtajgg.mjs';
export { renderers } from '../renderers.mjs';

function GET() {
  const count = Math.ceil(indexablePaths().length * 2 / sitemapPageSize);
  const xml = '<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + Array.from({ length: count }, (_, i) => "<sitemap><loc>" + escapeXml(absolute("/sitemaps/" + i + ".xml")) + "</loc></sitemap>").join("") + "<sitemap><loc>" + escapeXml(absolute("/sitemaps/100.xml")) + "</loc></sitemap></sitemapindex>";
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "no-store" } });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
