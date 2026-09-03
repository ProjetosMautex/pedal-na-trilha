import fs from 'fs';
import path from 'path';

function walkDir(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walkDir(file));
        } else if (file.endsWith('.tsx') || file.endsWith('.astro')) {
            results.push(file);
        }
    });
    return results;
}

const files = walkDir('src');
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  // First image in the article is the hero. Let's find images that have "w-full h-full object-cover opacity-20 blur-sm" or similar and make them eager
  content = content.replace(/<img width="800" height="600" loading="lazy"([^>]+opacity-20 blur-sm[^>]+)>/g, '<img width="1200" height="800" fetchpriority="high">');
  content = content.replace(/<img width="800" height="600" loading="lazy"([^>]+absolute inset-0 w-full h-full object-cover[^>]+)>/g, '<img width="1200" height="800" fetchpriority="high">');
  // And the hero image in index.astro (principal.webp)
  content = content.replace(/<img width="800" height="600" loading="lazy"([^>]+principal\.webp[^>]+)>/g, '<img width="1200" height="800" fetchpriority="high">');
  fs.writeFileSync(file, content);
}
console.log('LCP Images updated');
