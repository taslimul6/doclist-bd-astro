globalThis.process ??= {}; globalThis.process.env ??= {};
import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BxUxCjbj.mjs';
import { manifest } from './manifest_C9Pttw0o.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/doctors/_id_/engagement.astro.mjs');
const _page2 = () => import('./pages/api/my-doc.astro.mjs');
const _page3 = () => import('./pages/robots.txt.astro.mjs');
const _page4 = () => import('./pages/sitemap.xml.astro.mjs');
const _page5 = () => import('./pages/sitemaps/_file_.astro.mjs');
const _page6 = () => import('./pages/_---path_.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/doctors/[id]/engagement.ts", _page1],
    ["src/pages/api/my-doc.ts", _page2],
    ["src/pages/robots.txt.ts", _page3],
    ["src/pages/sitemap.xml.ts", _page4],
    ["src/pages/sitemaps/[file].ts", _page5],
    ["src/pages/[...path].astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = undefined;
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
