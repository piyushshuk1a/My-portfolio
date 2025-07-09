import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Edit3, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/portfolio/navigation";
import HeroSection from "@/components/portfolio/hero-section";
import AboutSection from "@/components/portfolio/about-section";
import SkillsSection from "@/components/portfolio/skills-section";
import ProjectsSection from "@/components/portfolio/projects-section";
import ExperienceSection from "@/components/portfolio/experience-section";
import ContactSection from "@/components/portfolio/contact-section";
import Footer from "@/components/portfolio/footer";
import ProjectModal from "@/components/portfolio/project-modal";
import ProfileSettings from "@/components/portfolio/profile-settings";

export default function Portfolio() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toast } = useToast();
  const [profileData, setProfileData] = useState({
    name: "Piyush Shukla",
    title: "Frontend Developer & DSA Enthusiast",
    description: "Passionate Frontend Developer & DSA Enthusiast crafting beautiful, responsive web experiences with clean code and innovative solutions.",
    github: "https://github.com/piyushshuk1a",
    linkedin: "https://www.linkedin.com/in/piyush-shukla-791238298/",
    email: "piyushshukla6396@gmail.com",
    cgpa: "7.6",
    problemsSolved: "200+",
    about1: "I'm a motivated and detail-oriented third-year B.Tech student in Electronics and Communication Engineering (2023–2027) with a CGPA of 7.6. I have a strong interest in frontend development and artificial intelligence.",
    about2: "I've solved 200+ DSA questions across platforms like LeetCode, CodeChef, Codeforces, GFG, and InterviewPrep, constantly improving my problem-solving skills.",
    about3: "I enjoy building clean, responsive interfaces and optimizing user experience. My expertise spans across multiple programming languages and modern web development frameworks."
  });

  useEffect(() => {
    document.title = `${profileData.name} - ${profileData.title}`;
  }, [profileData.name, profileData.title]);

  const handleEditClick = () => {
    if (isAuthenticated) {
      setIsSettingsOpen(true);
      return;
    }

    const password = prompt('Enter password to edit:');
    if (password === 'admin123') { // You can change this password
      setIsAuthenticated(true);
      setIsSettingsOpen(true);
      toast({
        title: "Authentication successful",
        description: "You can now edit the portfolio.",
      });
    } else if (password !== null) {
      toast({
        title: "Authentication failed",
        description: "Incorrect password. Access denied.",
        variant: "destructive",
      });
    }
  };

  const handleProfileSave = (newData: typeof profileData) => {
    setProfileData(newData);
    localStorage.setItem('portfolioProfile', JSON.stringify(newData));
  };

  // Load saved profile data on mount
  useEffect(() => {
    const saved = localStorage.getItem('portfolioProfile');
    if (saved) {
      setProfileData(JSON.parse(saved));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-slate-50 font-sans overflow-x-hidden">
      {/* Edit Profile Button */}
      <Button
        onClick={handleEditClick}
        className="fixed top-20 right-6 z-40 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-lg hover:shadow-purple-500/25"
        size="sm"
      >
        {isAuthenticated ? (
          <Edit3 className="h-4 w-4 mr-2" />
        ) : (
          <Lock className="h-4 w-4 mr-2" />
        )}
        {isAuthenticated ? 'Edit Profile' : 'Edit Profile'}
      </Button>

      <Navigation />
      <HeroSection profileData={profileData} />
      <AboutSection profileData={profileData} isAuthenticated={isAuthenticated} />
      <SkillsSection profileData={profileData} />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection profileData={profileData} />
      <Footer profileData={profileData} />
      <ProjectModal />
      
      <ProfileSettings
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        onSave={handleProfileSave}
        initialData={profileData}
      />
    </div>
  );
}
