globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as coverage } from '../../chunks/publication_1rfaHzAh.mjs';
import { s as sitemapPageSize } from '../../chunks/sitemap-config_H2Fc90rK.mjs';
import { i as indexablePaths, e as escapeXml, a as absolute } from '../../chunks/seo_DvYtajgg.mjs';
import { H as locales, l as localizedPath } from '../../chunks/directory_DgmtDqBB.mjs';
export { renderers } from '../../renderers.mjs';

function generateStaticParams() {
  return Array.from({ length: Math.ceil(indexablePaths().length * 2 / sitemapPageSize) }, (_, i) => ({ file: i + ".xml" }));
}
async function sitemap(_request, { params }) {
  const { file } = await params;
  if (!/^(0|[1-9]\d*)\.xml$/.test(file)) return new Response("Not found", { status: 404 });
  if (file === "100.xml") {
    const xml2 = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + coverage.urls.map((url) => "<url><loc>" + escapeXml(url) + "</loc></url>").join("") + "</urlset>";
    return new Response(xml2, { headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "no-store" } });
  }
  const i = Number(file.replace(".xml", "")), paths = indexablePaths().flatMap((base) => locales.map((lang) => ({ base, path: localizedPath(lang, base) }))).slice(i * sitemapPageSize, (i + 1) * sitemapPageSize);
  if (!paths.length) return new Response("Not found", { status: 404 });
  const xml = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">' + paths.map(({ base, path }) => "<url><loc>" + escapeXml(absolute(path)) + "</loc>" + locales.map((lang) => '<xhtml:link rel="alternate" hreflang="' + lang + '-BD" href="' + escapeXml(absolute(localizedPath(lang, base))) + '"/>').join("") + '<xhtml:link rel="alternate" hreflang="x-default" href="' + escapeXml(absolute(localizedPath("bn", base))) + '"/></url>').join("") + "</urlset>";
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "no-store" } });
}
const GET = ({ request, params }) => sitemap(request, { params: Promise.resolve({ file: params.file || "" }) });

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET,
	generateStaticParams
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
