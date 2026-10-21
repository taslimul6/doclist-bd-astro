globalThis.process ??= {}; globalThis.process.env ??= {};
import { o as doctors, c as locations, s as specialties, k as specialtyLocation, q as hospitals, y as hospitalSpecialty, I as allPaths, v as value, p as pick, n as num, l as localizedPath } from './directory_DgmtDqBB.mjs';
import { b as isProtectedIndexedPath, a as isPublished } from './publication_1rfaHzAh.mjs';

const useful = (s) => !!s?.trim() && !/^(n\/?a|unknown|not available|not provided|-)$/i.test(s.trim());
function doctorIsComplete(d) {
  const identityIssue = d.flags.some((f) => /verify_identity|duplicated_from_previous_profile/.test(f));
  return !identityIssue && useful(d.name) && useful(d.qualifications) && d.specialtySlugs.length > 0 && d.sources.some((s) => /^https?:\/\//.test(s)) && d.chambers.some((c) => useful(c.name) && useful(c.address) && c.locations.length > 0 && (useful(c.phone) || useful(c.schedule)));
}
const eligible = new Set(doctors.filter(doctorIsComplete).map((d) => d.id));
const decisionMap = /* @__PURE__ */ new Map();
const approve = (path) => decisionMap.set(path, { index: true, reason: "Meets launch completeness policy" });
const listing = (path, ids, minimum) => {
  const complete = ids.filter((id) => eligible.has(id)).length;
  decisionMap.set(path, { index: complete >= minimum && complete >= ids.length / 2, reason: `${complete}/${ids.length} complete doctor profiles; minimum ${minimum} and at least half required` });
};
for (const p of ["/", "/doctors", "/specialties", "/locations", "/hospitals"]) approve(p);
for (const d of doctors) decisionMap.set("/doctor/" + d.slug, { index: eligible.has(d.id), reason: eligible.has(d.id) ? "Qualifications, specialty, source and actionable chamber present" : "Incomplete profile or unresolved identity note" });
for (const l of locations) listing("/doctors/" + l.slug, l.doctorIds, 5);
for (const s of specialties) listing("/specialty/" + s.slug, s.doctorIds, 5);
for (const [key, ids] of Object.entries(specialtyLocation)) listing("/doctors/" + key, ids, 5);
for (const h of hospitals) {
  const p = "/hospital/" + h.slug;
  listing(p, h.doctorIds, 3);
  if (!h.addresses.some(useful) || !h.sources.length) decisionMap.set(p, { index: false, reason: "Missing hospital address or source" });
  if (h.doctorIds.length <= 4) decisionMap.set(p + "/doctors", { index: false, reason: "Same complete roster already displayed on hospital profile", canonical: p });
  else {
    listing(p + "/doctors", h.doctorIds, 5);
    if (!decisionMap.get(p)?.index) decisionMap.set(p + "/doctors", { index: false, reason: "Parent hospital lacks sufficient information" });
  }
}
for (const [key, ids] of Object.entries(hospitalSpecialty)) {
  const p = "/hospital/" + key;
  listing(p, ids, 5);
  const [hospital] = key.split("/");
  const h = hospitals.find((h2) => h2.slug === hospital);
  if (h && ids.length === h.doctorIds.length) decisionMap.set(p, { index: false, reason: "Same roster as full hospital directory", canonical: "/hospital/" + hospital + (h.doctorIds.length > 4 ? "/doctors" : "") });
  else if (!decisionMap.get("/hospital/" + hospital)?.index) decisionMap.set(p, { index: false, reason: "Parent hospital lacks sufficient information" });
}
for (const [path, d] of decisionMap) if (d.canonical && !decisionMap.get(d.canonical)?.index) decisionMap.set(path, { index: false, reason: "Equivalent roster exists but its target is incomplete" });
const normalizePath = (path) => path.split(/[?#]/)[0].replace(/^\/(bn|en)(?=\/|$)/, "").replace(/\/$/, "") || "/";
const pageDecision = (path) => isProtectedIndexedPath(path) ? { index: true, reason: "Previously indexed URL explicitly preserved" } : !isPublished(path) ? { index: false, reason: "Scheduled for future publication" } : (() => {
  const d = decisionMap.get(normalizePath(path));
  return d?.canonical && !isPublished(d.canonical) ? { index: false, reason: "Canonical target scheduled for future publication" } : d || { index: false, reason: "Unknown directory route" };
})();
const indexablePaths = () => allPaths().filter((p) => pageDecision(p).index);

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://doclist-bd.com", "SSR": true};
const siteName = "Doclist Bd";
const siteUrl = (Object.assign(__vite_import_meta_env__, { _: process.env._ })?.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || "https://doclist-bd.com").replace(/\/$/, "");
const absolute = (path) => siteUrl + path;
function metadata(title, description, path, q = {}, lang = "bn") {
  const utility = Object.keys(q).some((k) => k !== "page" && !!value(q, k));
  const p = value(q, "page"), validPage = /^[1-9]\d*$/.test(p) && Number.isSafeInteger(Number(p));
  const page = validPage && Number(p) > 1 ? "?page=" + Number(p) : "";
  const suffix = page ? pick(lang, " — Page ", " — পৃষ্ঠা ") + num(lang, Number(p)) : "";
  const base = normalizePath(path), decision = pageDecision(base);
  const target = !page && !utility && decision.canonical ? decision.canonical : base;
  const canonical = absolute(localizedPath(lang, target) + page);
  const cleanTitle = (title + suffix).replace(/\s+/g, " ").trim();
  const cleanDescription = (description + suffix).replace(/\s+/g, " ").trim();
  const index = decision.index && !utility && (!p || validPage);
  return {
    title: cleanTitle,
    description: cleanDescription,
    applicationName: siteName,
    alternates: { canonical, ...index ? { languages: { "bn-BD": absolute(localizedPath("bn", base) + page), "en-BD": absolute(localizedPath("en", base) + page), "x-default": absolute(localizedPath("bn", base) + page) } } : {} },
    openGraph: { title: cleanTitle, description: cleanDescription, url: canonical, siteName, type: "website", locale: lang === "bn" ? "bn_BD" : "en_BD", alternateLocale: [lang === "bn" ? "en_BD" : "bn_BD"] },
    twitter: { card: "summary", title: cleanTitle, description: cleanDescription },
    robots: { index: decision.canonical && !page && !utility ? true : index, follow: true, googleBot: { index: decision.canonical && !page && !utility ? true : index, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } }
  };
}
const escapeXml = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export { absolute as a, escapeXml as e, indexablePaths as i, metadata as m, siteName as s };
