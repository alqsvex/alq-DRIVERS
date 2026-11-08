import { mkdir, rm, cp } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const root = fileURLToPath(new URL('../', import.meta.url));
const out = path.join(root, 'dist');
await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
for (const file of ['index.html','style.css','pages.css','company.css','script.js','favicon.svg','robots.txt','sitemap.xml','.nojekyll','images','francisco','shirley']) {
  await cp(path.join(root,file),path.join(out,file),{recursive:true});
}
console.log('ALQ: Home, Francisco e Shirley preparados em dist/');
