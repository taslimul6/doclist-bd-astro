// Post-build step for the static site: turn the generated redirects.txt into Cloudflare's _redirects file and
// sanity-check the output (file count limit on the free plan is 20,000 per deployment).
import fs from 'node:fs';
import path from 'node:path';
const dist='dist';
const src=path.join(dist,'redirects.txt');
if(!fs.existsSync(src))throw new Error('dist/redirects.txt missing; did astro build run?');
fs.renameSync(src,path.join(dist,'_redirects'));
let files=0;
(function walk(d){for(const e of fs.readdirSync(d,{withFileTypes:true}))e.isDirectory()?walk(path.join(d,e.name)):files++;})(dist);
console.log('static files in dist:',files);
if(files>20000)throw new Error(`dist has ${files} files; the Cloudflare free plan allows 20,000 per deployment`);
