import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = path.join(process.cwd(), 'public', 'images');

// Certifica de que a pasta existe
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
  console.log('Pasta public/images criada.');
}

const getAllFiles = (dirPath, arrayOfFiles = []) => {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
};

const optimizeImages = async () => {
  try {
    const allFiles = getAllFiles(publicDir);
    const imageFiles = allFiles.filter(file => /\.(jpg|jpeg|png)$/i.test(file));

    if (imageFiles.length === 0) {
      console.log('Nenhuma imagem .jpg ou .png encontrada para otimizar em', publicDir);
      return;
    }

    for (const inputPath of imageFiles) {
      const outputPath = inputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');

      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);

      console.log(`Imagem otimizada: ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);
    }
  } catch (error) {
    console.error('Erro ao otimizar imagens:', error);
  }
};

optimizeImages();
