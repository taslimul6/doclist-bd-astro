globalThis.process ??= {}; globalThis.process.env ??= {};
import { o as doctors } from '../../chunks/directory_DgmtDqBB.mjs';
import { a as isPublished } from '../../chunks/publication_1rfaHzAh.mjs';
export { renderers } from '../../renderers.mjs';

async function saved(request) {
  const headers = { "Cache-Control": "private, no-store" };
  try {
    const text = await request.text();
    if (text.length > 1e6) return new Response("Too large", { status: 413, headers });
    const ids = JSON.parse(text);
    if (!Array.isArray(ids) || ids.length > 1e4 || ids.some((id) => typeof id !== "string")) return new Response("Invalid IDs", { status: 400, headers });
    const wanted = new Set(ids);
    return Response.json(doctors.filter((d) => wanted.has(d.id) && isPublished("/doctor/" + d.slug)).map((d) => ({
      id: d.id,
      name: d.name,
      slug: d.slug,
      image: d.image,
      qualifications: d.qualifications,
      specialties: d.rawSpecialties,
      phone: d.chambers.find((c) => c.phone)?.phone || null
    })), { headers });
  } catch {
    return new Response("Invalid request", { status: 400, headers });
  }
}
const POST = ({ request }) => saved(request);

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
