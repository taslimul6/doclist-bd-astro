import {defineMiddleware} from 'astro:middleware';
import {runtime, type RuntimeEnv} from '../lib/runtime';
import {isPublished, normalizePublicationPath, releaseAt} from '../lib/publication';

export const onRequest = defineMiddleware((context, next) => {
  const locals = context.locals as {runtime?: {env?: RuntimeEnv}};
  return runtime.run({env: locals.runtime?.env || {}}, async () => {
    const {pathname, search} = context.url;
    if (pathname === '/bn' || pathname.startsWith('/bn/')) {
      return context.redirect((pathname.slice(3) || '/') + search, 308);
    }
    const path = normalizePublicationPath(pathname);
    if (!isPublished(path)) return new Response('Not found', {
      status: 404,
      headers: {'X-Robots-Tag':'noindex, nofollow', 'Cache-Control':'private, no-store', 'Retry-After':new Date(releaseAt(path)!).toUTCString()},
    });
    const response = await next();
    // Scheduled releases and filters must be evaluated using the current request.
    if (response.headers.get('content-type')?.includes('text/html')) response.headers.set('Cache-Control','private, no-store');
    return response;
  });
});
