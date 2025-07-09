import { motion } from "framer-motion";
import { GraduationCap, Code, Brain } from "lucide-react";
import ProfileUpload from "./profile-upload";

interface ProfileData {
  name: string;
  title: string;
  about1: string;
  about2: string;
  about3: string;
}

export default function AboutSection({ profileData, isAuthenticated }: { profileData: ProfileData, isAuthenticated?: boolean }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 bg-slate-800/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p 
              className="text-lg text-slate-300 leading-relaxed"
              variants={itemVariants}
            >
              {profileData.about1}
            </motion.p>
            <motion.p 
              className="text-lg text-slate-300 leading-relaxed"
              variants={itemVariants}
            >
              {profileData.about2}
            </motion.p>
            <motion.p 
              className="text-lg text-slate-300 leading-relaxed"
              variants={itemVariants}
            >
              {profileData.about3}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 pt-4"
              variants={itemVariants}
            >
              <div className="bg-slate-700/50 px-4 py-2 rounded-full text-sm flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-blue-400" />
                B.Tech ECE Student
              </div>
              <div className="bg-slate-700/50 px-4 py-2 rounded-full text-sm flex items-center gap-2">
                <Code className="h-4 w-4 text-emerald-400" />
                200+ DSA Problems
              </div>
              <div className="bg-slate-700/50 px-4 py-2 rounded-full text-sm flex items-center gap-2">
                <Brain className="h-4 w-4 text-purple-400" />
                AI Enthusiast
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ProfileUpload profileData={profileData} isAuthenticated={isAuthenticated} />
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Code className="h-6 w-6 text-purple-400" />
              </motion.div>
              <motion.div 
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-500/20 rounded-xl flex items-center justify-center"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -10, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
              >
                <Brain className="h-6 w-6 text-pink-400" />
              </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
