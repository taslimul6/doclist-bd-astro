globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as defineMiddleware, s as sequence } from './chunks/render-context_C2T-LtNI.mjs';
import { r as runtime } from './chunks/runtime_BF6Ue2r1.mjs';
import { n as normalizePublicationPath, a as isPublished, r as releaseAt } from './chunks/publication_1rfaHzAh.mjs';
import './chunks/astro-designed-error-pages_CSrZX-en.mjs';
import './chunks/astro/server_CEjs15bK.mjs';

const onRequest$2 = defineMiddleware((context, next) => {
  const locals = context.locals;
  return runtime.run({ env: locals.runtime?.env || {} }, async () => {
    const { pathname, search } = context.url;
    if (pathname === "/bn" || pathname.startsWith("/bn/")) {
      return context.redirect((pathname.slice(3) || "/") + search, 308);
    }
    const path = normalizePublicationPath(pathname);
    if (!isPublished(path)) return new Response("Not found", {
      status: 404,
      headers: { "X-Robots-Tag": "noindex, nofollow", "Cache-Control": "private, no-store", "Retry-After": new Date(releaseAt(path)).toUTCString() }
    });
    const response = await next();
    if (response.headers.get("content-type")?.includes("text/html")) response.headers.set("Cache-Control", "private, no-store");
    return response;
  });
});

const onRequest$1 = (context, next) => {
  if (context.isPrerendered) {
    context.locals.runtime ??= {
      env: process.env
    };
  }
  return next();
};

const onRequest = sequence(
	onRequest$1,
	onRequest$2
	
);

export { onRequest };
