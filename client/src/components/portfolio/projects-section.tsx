import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Eye } from "lucide-react";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "game", label: "Games" },
    { id: "tool", label: "Tools" },
  ];

  const projects = [
    {
      id: "tic-tac-toe",
      title: "Tic Tac Toe Game",
      description: "A classic two-player game implemented with clean UI and responsive design, featuring smart game logic and interactive animations.",
      category: "game",
      technologies: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/piyushshuk1a/Tic-Tac-Toe-game",
      demo: "#",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450"
    },
    {
      id: "currency-converter",
      title: "Currency Converter",
      description: "A real-time currency converter using public API integration to convert between multiple currencies with live exchange rates.",
      category: "tool",
      technologies: ["JavaScript", "API", "Real-time"],
      github: "https://github.com/piyushshuk1a",
      demo: "#",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450"
    },
    {
      id: "portfolio-v2",
      title: "Portfolio Website v2",
      description: "An enhanced version of this portfolio with React, advanced animations, and more interactive features.",
      category: "web",
      technologies: ["React", "Framer Motion", "Three.js"],
      github: "#",
      demo: "#",
      isComingSoon: true
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getTechColor = (tech: string) => {
    const colorMap: { [key: string]: string } = {
      "JavaScript": "bg-yellow-500/20 text-yellow-400",
      "HTML": "bg-blue-500/20 text-blue-400",
      "CSS": "bg-purple-500/20 text-purple-400",
      "API": "bg-blue-500/20 text-blue-400",
      "Real-time": "bg-green-500/20 text-green-400",
      "React": "bg-blue-500/20 text-blue-400",
      "Framer Motion": "bg-purple-500/20 text-purple-400",
      "Three.js": "bg-green-500/20 text-green-400",
    };
    return colorMap[tech] || "bg-slate-500/20 text-slate-400";
  };

  return (
    <section id="projects" className="py-20 bg-slate-800/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </motion.div>
        
        {/* Project filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500"
                  : "bg-slate-700 hover:bg-slate-600 border-slate-600"
              } transition-all duration-300`}
            >
              {filter.label}
            </Button>
          ))}
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="bg-slate-800/80 border-slate-700/50 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
                  <div className="aspect-video relative overflow-hidden">
                    {project.isComingSoon ? (
                      <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                        <div className="text-center">
                          <Eye className="h-16 w-16 text-purple-400 mx-auto mb-4" />
                          <h4 className="text-xl font-semibold text-purple-400">Coming Soon</h4>
                        </div>
                      </div>
                    ) : (
                      <>
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Button
                            onClick={() => {
                              const event = new CustomEvent('viewProject', {
                                detail: { projectId: project.id }
                              });
                              window.dispatchEvent(event);
                            }}
                            className="bg-white text-slate-900 hover:bg-slate-100"
                          >
                            View Details
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-2 group-hover:text-purple-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 text-xs rounded-full ${getTechColor(tech)}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {!project.isComingSoon ? (
                        <>
                          <Button
                            asChild
                            variant="ghost"
                            size="sm"
                            className="text-slate-400 hover:text-emerald-400"
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-1" />
                              Code
                            </a>
                          </Button>
                          <Button
                            asChild
                            variant="ghost"
                            size="sm"
                            className="text-slate-400 hover:text-blue-400"
                          >
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-1" />
                              Live Demo
                            </a>
                          </Button>
                        </>
                      ) : (
                        <span className="text-slate-500 text-sm flex items-center gap-1">
                          <Github className="h-4 w-4" />
                          In Development
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
