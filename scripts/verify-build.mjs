import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const manifest=JSON.parse(fs.readFileSync(path.join(root,'build-manifest.json'),'utf8'));
let checked=0;
for(const [name,expected] of Object.entries(manifest)) {
  const file=path.join(root,'dist',name);
  if(!fs.existsSync(file))throw new Error(`Missing prebuilt file: dist/${name}. Upload the complete ZIP contents, including dist, to the repository.`);
  const actual=createHash('sha256').update(fs.readFileSync(file)).digest('hex');
  if(actual!==expected)throw new Error(`Incomplete or changed prebuilt file: dist/${name}. Restore it from the ZIP.`);
  checked++;
}
console.log(`Production build already included. Verified ${checked} files; no source compilation required.`);
console.log('Cloudflare deployment package is ready.');
