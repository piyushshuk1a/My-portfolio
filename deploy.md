# Deployment Guide - Portfolio Website

## 🚀 Export to GitHub

### Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click "New Repository" (green button)
3. Name it: `portfolio-website` or `piyush-portfolio`
4. Make it **Public** (for GitHub Pages)
5. Don't initialize with README (we already have files)
6. Click "Create repository"

### Step 2: Upload Your Files

**Option A: Upload via GitHub Web Interface**
1. In your new repository, click "uploading an existing file"
2. Drag and drop ALL files from your Replit project
3. Write commit message: "Initial portfolio website upload"
4. Click "Commit new files"

**Option B: Use Git Commands (if you have Git)**
```bash
git init
git add .
git commit -m "Initial portfolio website upload"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio-website.git
git push -u origin main
```

### Step 3: Deploy with GitHub Pages

1. Go to your repository settings
2. Scroll down to "Pages" section
3. Under "Source", select "Deploy from a branch"
4. Choose "main" branch
5. Choose "/ (root)" folder
6. Click "Save"

**Important**: Your site will be available at:
`https://YOUR-USERNAME.github.io/portfolio-website`

### Step 4: Configure for GitHub Pages

Since this is a full-stack app, you'll need to modify it for static hosting:

1. **Build the frontend only**:
   ```bash
   npm run build
   ```

2. **Upload only the `dist/public` folder contents** to a new repository
3. **Or** create a `gh-pages` branch with just the built files

## 🌐 Alternative Deployment Options

### Vercel (Recommended for Full-Stack)
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Set build command: `npm run build`
6. Set output directory: `dist/public`
7. Deploy!

### Netlify
1. Go to [netlify.com](https://netlify.com)
2. Sign in with GitHub
3. Click "New site from Git"
4. Choose your repository
5. Set build command: `npm run build`
6. Set publish directory: `dist/public`
7. Deploy!

## 📝 Important Notes

### For Static Hosting (GitHub Pages):
- Contact form won't work without backend
- Consider using form services like Formspree or Netlify Forms
- Remove database dependencies

### For Full-Stack Hosting (Vercel/Netlify):
- Add environment variables in deployment settings
- Set up database (Neon, PlanetScale, etc.)
- Configure build settings

## 🔧 Quick Static Version

If you want a simple static version for GitHub Pages:

1. Remove backend dependencies
2. Use local storage instead of database
3. Replace contact form with mailto link
4. Build and deploy just the frontend

## 📞 Need Help?

- Check the README.md for detailed setup instructions
- Make sure all your personal information is updated
- Test the contact form before deploying
- Your website is ready to showcase your skills!

## 🎉 Your Portfolio Features

✓ Professional design with smooth animations
✓ Fully customizable profile information
✓ Responsive mobile-friendly layout
✓ Interactive project showcase
✓ Skills visualization
✓ Contact form integration
✓ Modern dark theme

Ready to impress employers and clients with your professional portfolio!