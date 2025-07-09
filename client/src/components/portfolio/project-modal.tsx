import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, Github, ExternalLink, Check } from "lucide-react";

export default function ProjectModal() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projectData = {
    "tic-tac-toe": {
      title: "Tic Tac Toe Game",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
      features: [
        "Two-player gameplay",
        "Responsive design",
        "Win detection algorithm",
        "Game reset functionality",
        "Interactive animations"
      ],
      technologies: ["JavaScript", "HTML5", "CSS3", "DOM Manipulation"],
      description: "A classic Tic Tac Toe game built with vanilla JavaScript, featuring a clean and responsive design. The game includes intelligent win detection, smooth animations, and an intuitive user interface that works seamlessly across all devices.",
      github: "https://github.com/piyushshuk1a/Tic-Tac-Toe-game",
      demo: "#"
    },
    "currency-converter": {
      title: "Currency Converter",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
      features: [
        "Real-time exchange rates",
        "Multiple currency support",
        "API integration",
        "Historical data tracking",
        "Responsive interface"
      ],
      technologies: ["JavaScript", "REST API", "Fetch API", "JSON"],
      description: "A real-time currency converter application that fetches live exchange rates from a public API. Users can convert between multiple currencies with up-to-date rates, making it perfect for travelers and international transactions.",
      github: "https://github.com/piyushshuk1a",
      demo: "#"
    }
  };

  const getTechColor = (tech: string) => {
    const colorMap: { [key: string]: string } = {
      "JavaScript": "bg-yellow-500/20 text-yellow-400",
      "HTML5": "bg-blue-500/20 text-blue-400",
      "CSS3": "bg-purple-500/20 text-purple-400",
      "DOM Manipulation": "bg-green-500/20 text-green-400",
      "REST API": "bg-blue-500/20 text-blue-400",
      "Fetch API": "bg-green-500/20 text-green-400",
      "JSON": "bg-purple-500/20 text-purple-400",
    };
    return colorMap[tech] || "bg-slate-500/20 text-slate-400";
  };

  // Listen for project view events
  useEffect(() => {
    const handleProjectView = (event: CustomEvent) => {
      setSelectedProject(event.detail.projectId);
    };

    window.addEventListener('viewProject', handleProjectView as EventListener);
    return () => window.removeEventListener('viewProject', handleProjectView as EventListener);
  }, []);

  const closeModal = () => {
    setSelectedProject(null);
  };

  const project = selectedProject ? projectData[selectedProject as keyof typeof projectData] : null;

  return (
    <AnimatePresence>
      {selectedProject && project && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-slate-700/50 flex justify-between items-center">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <Button
                onClick={closeModal}
                variant="ghost"
                size="icon"
                className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-full"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="p-6 space-y-6">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full rounded-xl"
              />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold mb-4">Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <motion.li
                        key={feature}
                        className="flex items-center gap-2 text-slate-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Check className="h-4 w-4 text-emerald-400" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-4">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        className={`px-3 py-1 text-sm rounded-full ${getTechColor(tech)}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-4">Description</h4>
                <p className="text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="flex gap-4">
                <Button
                  asChild
                  variant="outline"
                  className="bg-slate-700 hover:bg-slate-600 border-slate-600"
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                </Button>
                <Button
                  asChild
                  className="bg-blue-600 hover:bg-blue-500"
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
