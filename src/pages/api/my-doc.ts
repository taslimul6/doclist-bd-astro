import {doctors} from '../../../lib/directory';
import {isPublished} from '../../../lib/publication';
async function saved(request: Request) {
  const headers = {'Cache-Control': 'private, no-store'};
  try {
    const text = await request.text();
    if (text.length > 1000000) return new Response('Too large', {status: 413, headers});
    const ids: unknown = JSON.parse(text);
    if (!Array.isArray(ids) || ids.length > 10000 || ids.some(id => typeof id !== 'string')) return new Response('Invalid IDs', {status: 400, headers});
    const wanted = new Set(ids);
    return Response.json(doctors.filter(d => wanted.has(d.id) && isPublished('/doctor/' + d.slug)).map(d => ({
      id: d.id, name: d.name, slug: d.slug, image: d.image, qualifications: d.qualifications,
      specialties: d.rawSpecialties, phone: d.chambers.find(c => c.phone)?.phone || null
    })), {headers});
  } catch { return new Response('Invalid request', {status: 400, headers}); }
}

export const POST = ({request}:import('astro').APIContext) => saved(request);
