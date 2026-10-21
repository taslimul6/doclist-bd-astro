globalThis.process ??= {}; globalThis.process.env ??= {};
import { a as absolute } from '../chunks/seo_DvYtajgg.mjs';
export { renderers } from '../renderers.mjs';

function GET() {
  return new Response("User-Agent: *\nAllow: /\nDisallow: /api/\nDisallow: /dev/\n\nSitemap: " + absolute("/sitemap.xml") + "\n", { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
