const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.astro') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Fix syntax error first if present
      content = content.replace(/<\/section[\n\r\s]*<\/div>/g, '</section>\n    </div>');
      
      // Reskin colors
      content = content.replace(/emerald-/g, 'cyan-');
      content = content.replace(/slate-/g, 'zinc-');
      content = content.replace(/#0f172a/g, '#09090b'); // bg dark
      content = content.replace(/#1e293b/g, '#18181b'); // bg card
      content = content.replace(/from-emerald-400 to-blue-500/g, 'from-cyan-400 to-indigo-500'); // gradient
      
      fs.writeFileSync(fullPath, content);
      console.log('Updated:', fullPath);
    }
  }
}

replaceInDir(path.join(process.cwd(), 'src'));
