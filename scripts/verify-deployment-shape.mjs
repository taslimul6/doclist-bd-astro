import fs from 'node:fs';

const required = [
  'package.json',
  'package-lock.json',
  'next.config.ts',
  'vercel.json',
  'app/(entry)/page.tsx',
  'app/(entry)/layout.tsx',
  'app/[lang]/page.tsx',
  'app/[lang]/layout.tsx',
  'lib/i18n.ts',
  'components/Preferences.tsx',
];

for (const file of required) {
  if (!fs.existsSync(file)) throw new Error(`Missing required deployment file: ${file}`);
}

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
if (pkg.scripts?.build !== 'next build --webpack') throw new Error('Unexpected build command');
if (pkg.engines?.node !== '22.x') throw new Error('Node must be pinned to 22.x');

const vercel = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
if (vercel.framework !== 'nextjs') throw new Error('Vercel framework must be nextjs');
if ('outputDirectory' in vercel) throw new Error('Do not override Vercel outputDirectory for this Next.js app');

const config = fs.readFileSync('next.config.ts', 'utf8');
for (const route of ['doctors','doctor','specialty','specialties','locations','hospitals','hospital']) {
  if (!config.includes(`'${route}'`)) throw new Error(`Missing Bangla rewrite route: ${route}`);
}
if (!config.includes("source: '/bn/:path*'")) throw new Error('Legacy /bn redirect missing');
if (!config.includes('beforeFiles')) throw new Error('Bangla rewrites must run before filesystem routes');

const i18n = fs.readFileSync('lib/i18n.ts', 'utf8');
if (!i18n.includes("return lang==='bn'?(clean||'/'):'/en'+clean")) {
  throw new Error('localizedPath must generate unprefixed Bangla and /en-prefixed English URLs');
}

const prefs = fs.readFileSync('components/Preferences.tsx', 'utf8');
if (!prefs.includes("pathname==='/'?'/en':'/en'+pathname")) throw new Error('Bangla -> English switch is not clean-prefix aware');
if (!prefs.includes("pathname.replace(/^\\/en(?=\\/|$)/,'')||'/'")) throw new Error('English -> Bangla switch is not clean-prefix aware');

console.log('Deployment shape OK');
console.log('Expected: / = Bangla, /en = English, /doctors = Bangla, /en/doctors = English');
