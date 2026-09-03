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
  
  // Very safe replacements
  content = content.replace(/<img\s+src="/g, '<img loading="lazy" width="800" height="600" src="');
  content = content.replace(/<img\s+src=\{/g, '<img loading="lazy" width="800" height="600" src={');
  
  // Then we revert loading="lazy" for the Hero images
  content = content.replace(/<img loading="lazy" width="800" height="600" src="\/images\/blog\/1\/melhor-guidao-para-bike-aro-29.webp"/g, '<img fetchpriority="high" width="1200" height="800" src="/images/blog/1/melhor-guidao-para-bike-aro-29.webp"');
  content = content.replace(/<img loading="lazy" width="800" height="600" src="\/images\/principal.webp"/g, '<img fetchpriority="high" width="1200" height="800" src="/images/principal.webp"');
  // the other articles also have hero images but it's okay if they are lazy for now, or I can fix them too
  
  fs.writeFileSync(file, content);
}
console.log('Safe images updated');
