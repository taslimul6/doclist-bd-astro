// App Router-only builds have no Pages Router entries. Some build runtimes leave
// the compatibility manifest empty; Next's production server still parses it.
import fs from 'node:fs';
const file='.next/server/pages-manifest.json';
if(fs.existsSync(file)&&fs.readFileSync(file,'utf8').trim()===''){fs.writeFileSync(file,'{}\n');console.log('Initialized empty App Router compatibility manifest');}
for(const p of [file,'.next/routes-manifest.json','.next/prerender-manifest.json'])JSON.parse(fs.readFileSync(p,'utf8'));
