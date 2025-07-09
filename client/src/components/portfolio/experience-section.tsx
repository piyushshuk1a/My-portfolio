import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, GraduationCap, Languages } from "lucide-react";

export default function ExperienceSection() {
  const timelineItems = [
    {
      id: "experience-1",
      type: "experience",
      icon: Bot,
      iconBg: "bg-blue-500/20",
      iconColor: "text-blue-400",
      title: "Freelance Contributor",
      company: "Outlier AI",
      companyColor: "text-emerald-400",
      period: "Dec 2024 – Mar 2025",
      description: "Trained AI models using Reinforcement Learning from Human Feedback (RLHF). Evaluated model responses, ranked outputs, and provided human-like feedback to optimize AI behavior and improve model performance.",
      tags: ["RLHF", "AI Training", "Model Evaluation"],
      position: "left"
    },
    {
      id: "education-1",
      type: "education",
      icon: GraduationCap,
      iconBg: "bg-emerald-500/20",
      iconColor: "text-emerald-400",
      title: "B.Tech ECE",
      company: "Electronics & Communication",
      companyColor: "text-blue-400",
      period: "2023 – 2027",
      description: "Currently pursuing Bachelor of Technology in Electronics and Communication Engineering with a CGPA of 7.6. Focusing on digital systems, communication technologies, and software development.",
      tags: ["CGPA: 7.6", "ECE", "2023-2027"],
      position: "right"
    },
    {
      id: "languages-1",
      type: "languages",
      icon: Languages,
      iconBg: "bg-purple-500/20",
      iconColor: "text-purple-400",
      title: "Languages",
      company: "Communication Skills",
      companyColor: "text-purple-400",
      period: "",
      description: "",
      languages: [
        { name: "Hindi", level: "Fluent", color: "text-emerald-400" },
        { name: "English", level: "Professional", color: "text-blue-400" }
      ],
      position: "left"
    }
  ];

  const getTagColor = (tag: string) => {
    const colorMap: { [key: string]: string } = {
      "RLHF": "bg-blue-500/20 text-blue-400",
      "AI Training": "bg-purple-500/20 text-purple-400",
      "Model Evaluation": "bg-green-500/20 text-green-400",
      "CGPA: 7.6": "bg-emerald-500/20 text-emerald-400",
      "ECE": "bg-blue-500/20 text-blue-400",
      "2023-2027": "bg-purple-500/20 text-purple-400",
    };
    return colorMap[tag] || "bg-slate-500/20 text-slate-400";
  };

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-emerald-400 rounded-full"></div>
          
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="flex items-center justify-between"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {item.position === "left" ? (
                  <>
                    <div className="w-5/12">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="transition-all duration-300"
                      >
                        <Card className="bg-slate-800/80 border-slate-700/50 hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/10">
                          <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-3">
                              <div className={`w-12 h-12 ${item.iconBg} rounded-full flex items-center justify-center`}>
                                <item.icon className={`h-6 w-6 ${item.iconColor}`} />
                              </div>
                              <div>
                                <h3 className="font-bold text-lg">{item.title}</h3>
                                <p className={`${item.companyColor} font-medium`}>{item.company}</p>
                              </div>
                            </div>
                            {item.period && <p className="text-slate-400 text-sm mb-3">{item.period}</p>}
                            {item.description && (
                              <p className="text-slate-300 leading-relaxed mb-4">
                                {item.description}
                              </p>
                            )}
                            {item.languages ? (
                              <div className="space-y-3">
                                {item.languages.map((lang) => (
                                  <div key={lang.name} className="flex justify-between items-center">
                                    <span className="text-slate-300">{lang.name}</span>
                                    <span className={`${lang.color} font-semibold`}>{lang.level}</span>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <div className="flex flex-wrap gap-2">
                                {item.tags?.map((tag) => (
                                  <span
                                    key={tag}
                                    className={`px-3 py-1 text-xs rounded-full ${getTagColor(tag)}`}
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      </motion.div>
                    </div>
                    
                    {/* Timeline dot */}
                    <motion.div 
                      className={`w-6 h-6 ${item.iconColor === 'text-blue-400' ? 'bg-blue-500' : item.iconColor === 'text-emerald-400' ? 'bg-emerald-500' : 'bg-purple-500'} rounded-full border-4 border-slate-900 relative z-10`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
                    />
                    
                    <div className="w-5/12"></div>
                  </>
                ) : (
                  <>
                    <div className="w-5/12"></div>
                    
                    {/* Timeline dot */}
                    <motion.div 
                      className={`w-6 h-6 ${item.iconColor === 'text-blue-400' ? 'bg-blue-500' : item.iconColor === 'text-emerald-400' ? 'bg-emerald-500' : 'bg-purple-500'} rounded-full border-4 border-slate-900 relative z-10`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
                    />
                    
                    <div className="w-5/12">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="transition-all duration-300"
                      >
                        <Card className="bg-slate-800/80 border-slate-700/50 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/10">
                          <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-3">
                              <div className={`w-12 h-12 ${item.iconBg} rounded-full flex items-center justify-center`}>
                                <item.icon className={`h-6 w-6 ${item.iconColor}`} />
                              </div>
                              <div>
                                <h3 className="font-bold text-lg">{item.title}</h3>
                                <p className={`${item.companyColor} font-medium`}>{item.company}</p>
                              </div>
                            </div>
                            {item.period && <p className="text-slate-400 text-sm mb-3">{item.period}</p>}
                            <p className="text-slate-300 leading-relaxed mb-4">
                              {item.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {item.tags?.map((tag) => (
                                <span
                                  key={tag}
                                  className={`px-3 py-1 text-xs rounded-full ${getTagColor(tag)}`}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
