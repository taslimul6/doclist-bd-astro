import fs from 'node:fs';
// One wildcard keeps all 1,638 local portraits on the asset CDN and stays below the 100-rule limit.
fs.writeFileSync('dist/_routes.json', JSON.stringify({version:1,include:['/*'],exclude:['/_astro/*','/assets/*','/favicon.svg','/file.svg','/globe.svg','/window.svg']},null,2)+'\n');
