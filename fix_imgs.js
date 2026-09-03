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
  content = content.replace(/<img(?![^>]*\bwidth=)([^>]+)>/g, '<img width="800" height="600" loading="lazy">');
  fs.writeFileSync(file, content);
}
console.log('Images updated');
