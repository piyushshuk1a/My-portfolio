import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

interface ProfileData {
  name: string;
  title: string;
  github: string;
  linkedin: string;
  email: string;
}

export default function Footer({ profileData }: { profileData: ProfileData }) {
  const socialLinks = [
    {
      icon: Github,
      href: profileData.github,
      label: "GitHub",
      color: "hover:bg-slate-700",
    },
    {
      icon: Linkedin,
      href: profileData.linkedin,
      label: "LinkedIn",
      color: "hover:bg-blue-500",
    },
    {
      icon: Mail,
      href: `mailto:${profileData.email}`,
      label: "Email",
      color: "hover:bg-emerald-500",
    },
  ];

  return (
    <footer className="py-12 border-t border-slate-700/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-4">
            {profileData.name}
          </div>
          <p className="text-slate-400 mb-6">
            {profileData.title}
          </p>
          
          <motion.div 
            className="flex justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Button
                  asChild
                  size="icon"
                  variant="outline"
                  className={`w-12 h-12 bg-slate-800 border-slate-700 ${link.color} transition-all duration-300 hover:shadow-lg`}
                >
                  <a 
                    href={link.href} 
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={link.label}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-slate-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p>&copy; 2024 Piyush Shukla. All rights reserved.</p>
            <p className="mt-2">Built with passion and modern web technologies.</p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
