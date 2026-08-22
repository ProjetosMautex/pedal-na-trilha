const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.astro')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      let modified = false;
      if (content.includes('tranzinc')) {
        content = content.replace(/tranzinc/g, 'translate');
        modified = true;
      }
      
      if (fullPath.endsWith('.astro') && content.includes('className=')) {
        content = content.replace(/className=/g, 'class=');
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(fullPath, content);
        console.log('Fixed:', fullPath);
      }
    }
  }
}

replaceInDir(path.join(process.cwd(), 'src'));
