import { createServer } from 'http';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = createServer((req, res) => {
  const publicDir = join(__dirname, 'dist/public');
  
  // Handle route paths
  if (req.url === '/' || req.url === '/index.html') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(readFileSync(join(publicDir, 'index.html')));
  } else if (req.url === '/profile.jpeg') {
    res.writeHead(200, { 'Content-Type': 'image/jpeg' });
    res.end(readFileSync(join(publicDir, 'profile.jpeg')));
  } else if (req.url === '/Piyush\'sResume.pdf') {
    res.writeHead(200, { 'Content-Type': 'application/pdf' });
    res.end(readFileSync(join(publicDir, 'Piyush\'sResume.pdf')));
  } else if (req.url.startsWith('/assets/')) {
    const filePath = join(publicDir, req.url);
    try {
      const content = readFileSync(filePath);
      const contentType = req.url.endsWith('.css') ? 'text/css' : 'application/javascript';
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    } catch (error) {
      res.writeHead(404);
      res.end('Not found');
    }
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(8080, () => {
  console.log('Production server running at http://localhost:8080');
});
