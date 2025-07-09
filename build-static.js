const fs = require('fs');
const path = require('path');

// Create a static build script for GitHub Pages deployment
console.log('Building static version for GitHub Pages...');

// Read the current package.json
const packagePath = path.join(__dirname, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

// Add homepage field for GitHub Pages
packageJson.homepage = "https://piyushshuk1a.github.io/portfolio-website";

// Add static build script
packageJson.scripts = {
  ...packageJson.scripts,
  "build:static": "vite build --outDir dist/static && cp -r dist/static/* dist/public/",
  "predeploy": "npm run build:static",
  "deploy": "gh-pages -d dist/public"
};

// Write updated package.json
fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));

console.log('✅ Static build configuration added!');
console.log('Run: npm run build:static to create deployable files');