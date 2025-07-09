import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Trophy, Medal, Code } from "lucide-react";

interface ProfileData {
  problemsSolved: string;
  cgpa: string;
}

export default function SkillsSection({ profileData }: { profileData: ProfileData }) {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { name: "C++", level: 85, color: "from-purple-400 to-pink-500" },
    { name: "JavaScript", level: 80, color: "from-yellow-400 to-orange-500" },
    { name: "HTML/CSS", level: 90, color: "from-blue-400 to-cyan-500" },
    { name: "Bootstrap", level: 75, color: "from-indigo-400 to-purple-500" },
  ];

  const platforms = [
    { name: "GitHub", icon: Github, color: "text-gray-400" },
    { name: "LeetCode", icon: Code, color: "text-blue-400" },
    { name: "CodeChef", icon: Trophy, color: "text-yellow-400" },
    { name: "Codeforces", icon: Medal, color: "text-orange-400" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById("skills");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-center">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="skill-item">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-purple-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                    <motion.div 
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1.5, delay: index * 0.2, ease: "easeInOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Platforms & Tools */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-center">Platforms & Tools</h3>
            <div className="grid grid-cols-2 gap-6">
              {platforms.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="bg-slate-800/50 border-slate-700/50 hover:bg-slate-700/50 transition-colors duration-300 cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <platform.icon className={`h-12 w-12 ${platform.color} mx-auto mb-3`} />
                      <h4 className="font-semibold">{platform.name}</h4>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-slate-700/50">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4 text-center">Coding Stats</h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <motion.div 
                        className="text-2xl font-bold text-purple-400"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        {profileData.problemsSolved}
                      </motion.div>
                      <div className="text-sm text-slate-400">DSA Problems</div>
                    </div>
                    <div>
                      <motion.div 
                        className="text-2xl font-bold text-blue-400"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        {profileData.cgpa}
                      </motion.div>
                      <div className="text-sm text-slate-400">CGPA</div>
                    </div>
                    <div>
                      <motion.div 
                        className="text-2xl font-bold text-pink-400"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                      >
                        5+
                      </motion.div>
                      <div className="text-sm text-slate-400">Platforms</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
