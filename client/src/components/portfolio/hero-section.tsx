import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Eye, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProfileData {
  name: string;
  title: string;
  description: string;
  github: string;
  linkedin: string;
  email: string;
}

export default function HeroSection({ profileData }: { profileData: ProfileData }) {
  const [typedText, setTypedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const targetText = "Frontend Developer";

  useEffect(() => {
    let currentIndex = 0;
    
    const typeText = () => {
      if (currentIndex < targetText.length) {
        setTypedText(targetText.substring(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeText, 100);
      } else {
        setIsComplete(true);
      }
    };

    const timer = setTimeout(typeText, 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const viewResume = () => {
    // Check if user has uploaded a custom resume
    const uploadedResume = localStorage.getItem('portfolioResume');
    if (uploadedResume) {
      // Open the uploaded PDF in a new tab
      const pdfWindow = window.open('', '_blank', 'width=900,height=700,scrollbars=yes,resizable=yes');
      if (pdfWindow) {
        pdfWindow.document.write(`
          <html>
            <head><title>Resume</title></head>
            <body style="margin:0;padding:0;">
              <iframe src="${uploadedResume}" width="100%" height="100%" style="border:none;"></iframe>
            </body>
          </html>
        `);
      }
    } else {
      // Open the default PDF resume
      window.open('/Piyush\'sResume.pdf', '_blank', 'width=900,height=700,scrollbars=yes,resizable=yes');
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
      
      <div className="text-center px-6 relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center mb-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <img
                src="/profile.jpeg"
                alt="Piyush Shukla"
                className="w-32 h-32 rounded-full object-cover border-4 border-purple-400/50 shadow-xl"
              />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{profileData.name.split(' ')[0]}</span>
            </h1>
          </div>
          <div className="text-xl md:text-2xl text-slate-300 mb-8 h-8">
            <span className={`pr-1 ${!isComplete ? 'border-r-2 border-purple-400 animate-pulse' : ''}`}>
              {typedText}
            </span>
          </div>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            {profileData.description}
          </p>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button 
            asChild
            variant="outline"
            className="group bg-slate-800 hover:bg-slate-700 border-slate-700 hover:border-slate-600"
          >
            <a href={profileData.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              GitHub
            </a>
          </Button>
          
          <Button 
            asChild
            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500"
          >
            <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              LinkedIn
            </a>
          </Button>
          
          <Button 
            asChild
            className="group bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500"
          >
            <a href={`mailto:${profileData.email}`}>
              <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              Email
            </a>
          </Button>
          
          <Button 
            onClick={viewResume}
            className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500"
          >
            <Eye className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
            View Resume
          </Button>
        </motion.div>
        
        <motion.div 
          className="mt-16"
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToAbout}
            className="text-slate-400 hover:text-emerald-400"
          >
            <ChevronDown size={32} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
