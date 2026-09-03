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
  
  // Button contrast
  content = content.replace(/bg-cyan-600 hover:bg-cyan-500 text-white/g, 'bg-cyan-500 hover:bg-cyan-400 text-zinc-950');
  content = content.replace(/bg-cyan-600 group-hover:bg-cyan-500 text-white/g, 'bg-cyan-500 group-hover:bg-cyan-400 text-zinc-950');
  content = content.replace(/bg-cyan-600 text-white hover:bg-cyan-500/g, 'bg-cyan-500 text-zinc-950 hover:bg-cyan-400');
  content = content.replace(/bg-cyan-600 text-white/g, 'bg-cyan-500 text-zinc-950');
  
  // Text contrast
  content = content.replace(/text-yellow-700/g, 'text-yellow-400');
  
  // Aria labels for Ver Preco links
  // <a href={product.affiliateUrl}
  content = content.replace(/<a\s+href=\{product\.affiliateUrl\}(?![^>]+aria-label)/g, '<a href={product.affiliateUrl} aria-label={`Ver oferta de ${product.name}`}');
  content = content.replace(/<a\s+href=\{item\.affiliateUrl\}(?![^>]+aria-label)/g, '<a href={item.affiliateUrl} aria-label={`Ver oferta de ${item.name}`}');
  content = content.replace(/<a\s+href=\{p\.affiliateUrl\}(?![^>]+aria-label)/g, '<a href={p.affiliateUrl} aria-label={`Ver oferta de ${p.name}`}');
  
  // If there's a newline between <a and href (we use [\s\S]*? to safely find href= but that's risky. Let's just catch the \s+ before href)
  content = content.replace(/<a(\s+)href=\{product\.affiliateUrl\}(?![^>]+aria-label)/g, '<a$1href={product.affiliateUrl} aria-label={`Ver oferta de ${product.name}`}');
  content = content.replace(/<a(\s+)href=\{item\.affiliateUrl\}(?![^>]+aria-label)/g, '<a$1href={item.affiliateUrl} aria-label={`Ver oferta de ${item.name}`}');
  content = content.replace(/<a(\s+)href=\{p\.affiliateUrl\}(?![^>]+aria-label)/g, '<a$1href={p.affiliateUrl} aria-label={`Ver oferta de ${p.name}`}');
  
  // Also sometimes href is on a new line and key is before it:
  // href={item.affiliateUrl}
  content = content.replace(/href=\{item\.affiliateUrl\}(\s+)/g, 'href={item.affiliateUrl}$1aria-label={`Ver oferta de ${item.name}`}$1');
  content = content.replace(/href=\{p\.affiliateUrl\}(\s+)/g, 'href={p.affiliateUrl}$1aria-label={`Ver oferta de ${p.name}`}$1');

  // And let's fix the duplicates that this might introduce: if it added aria-label twice because of the two regexes, let's clean it up:
  content = content.replace(/aria-label=\{`Ver oferta de \$\{item\.name\}`\}(\s+)aria-label=\{`Ver oferta de \$\{item\.name\}`\}/g, 'aria-label={`Ver oferta de ${item.name}`}');
  content = content.replace(/aria-label=\{`Ver oferta de \$\{p\.name\}`\}(\s+)aria-label=\{`Ver oferta de \$\{p\.name\}`\}/g, 'aria-label={`Ver oferta de ${p.name}`}');
  content = content.replace(/aria-label=\{`Ver oferta de \$\{product\.name\}`\}(\s+)aria-label=\{`Ver oferta de \$\{product\.name\}`\}/g, 'aria-label={`Ver oferta de ${product.name}`}');

  fs.writeFileSync(file, content, 'utf8');
}
console.log('Fixed contrast and aria labels correctly with Node!');
