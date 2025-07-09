# Piyush Shukla - Portfolio Website

A modern, interactive portfolio website built with React and TypeScript, featuring smooth animations, dynamic content, and profile customization.

## ✨ Features

- **Interactive Design**: Smooth animations and transitions with Framer Motion
- **Profile Customization**: Edit personal information, skills, and contact details
- **Responsive Layout**: Mobile-first design that works on all devices
- **Contact Form**: Functional contact form with backend integration
- **Modern UI**: Built with Tailwind CSS and Shadcn components
- **Dark Theme**: Professional dark theme with gradient accents

## 🚀 Live Demo

[View Live Website](https://your-username.github.io/portfolio-website)

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS, Shadcn/ui
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form + Zod
- **Icons**: Lucide React

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Add your database URL and other environment variables
```

4. Start the development server:
```bash
npm run dev
```

## 🏗️ Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   └── lib/            # Utilities and configurations
├── server/                 # Express.js backend
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API routes
│   └── storage.ts          # Database interface
├── shared/                 # Shared types and schemas
└── public/                 # Static assets
```

## 📱 Sections

- **Hero**: Introduction with typing animation
- **About**: Personal background and photo upload
- **Skills**: Technical skills with animated progress bars
- **Projects**: Portfolio projects with filtering
- **Experience**: Work experience and education
- **Contact**: Contact form with backend integration

## 🎨 Customization

The website supports full customization through the profile settings:

1. Click "Edit Profile" in the top-right corner
2. Update your personal information
3. Add your projects and skills
4. Upload your profile photo
5. Save changes

## 🚀 Deployment

### GitHub Pages
1. Build the project: `npm run build`
2. Deploy to GitHub Pages using the build files

### Vercel/Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist/public`

## 👨‍💻 About

Built by Piyush Shukla - Frontend Developer & DSA Enthusiast

- **GitHub**: [github.com/piyushshuk1a](https://github.com/piyushshuk1a)
- **LinkedIn**: [linkedin.com/in/piyush-shukla-791238298](https://www.linkedin.com/in/piyush-shukla-791238298/)
- **Email**: piyushshukla6396@gmail.com

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request