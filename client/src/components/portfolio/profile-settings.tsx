import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Settings, Save, Edit3, Upload, FileText } from "lucide-react";

interface ProfileData {
  name: string;
  title: string;
  description: string;
  github: string;
  linkedin: string;
  email: string;
  cgpa: string;
  problemsSolved: string;
  about1: string;
  about2: string;
  about3: string;
}

interface ProfileSettingsProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: ProfileData) => void;
  initialData: ProfileData;
}

export default function ProfileSettings({ isOpen, onClose, onSave, initialData }: ProfileSettingsProps) {
  const [formData, setFormData] = useState<ProfileData>(initialData);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isUploadingResume, setIsUploadingResume] = useState(false);

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  const handleChange = (field: keyof ProfileData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleResumeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setResumeFile(file);
      setIsUploadingResume(true);
      
      // Create a URL for the uploaded file and save it
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (result) {
          // Save the PDF data to localStorage (in production, you'd upload to a server)
          localStorage.setItem('portfolioResume', result as string);
          localStorage.setItem('portfolioResumeFileName', file.name);
          setIsUploadingResume(false);
        }
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please upload a PDF file only.');
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="border-b border-slate-700">
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Portfolio Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="bg-slate-700 border-slate-600"
                  />
                </div>
                
                <div>
                  <Label htmlFor="title">Professional Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleChange('title', e.target.value)}
                    className="bg-slate-700 border-slate-600"
                  />
                </div>
                
                <div>
                  <Label htmlFor="description">Hero Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleChange('description', e.target.value)}
                    className="bg-slate-700 border-slate-600"
                    rows={3}
                  />
                </div>
                
                <div>
                  <Label htmlFor="cgpa">CGPA</Label>
                  <Input
                    id="cgpa"
                    value={formData.cgpa}
                    onChange={(e) => handleChange('cgpa', e.target.value)}
                    className="bg-slate-700 border-slate-600"
                  />
                </div>
                
                <div>
                  <Label htmlFor="problemsSolved">Problems Solved</Label>
                  <Input
                    id="problemsSolved"
                    value={formData.problemsSolved}
                    onChange={(e) => handleChange('problemsSolved', e.target.value)}
                    className="bg-slate-700 border-slate-600"
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="github">GitHub URL</Label>
                  <Input
                    id="github"
                    value={formData.github}
                    onChange={(e) => handleChange('github', e.target.value)}
                    className="bg-slate-700 border-slate-600"
                  />
                </div>
                
                <div>
                  <Label htmlFor="linkedin">LinkedIn URL</Label>
                  <Input
                    id="linkedin"
                    value={formData.linkedin}
                    onChange={(e) => handleChange('linkedin', e.target.value)}
                    className="bg-slate-700 border-slate-600"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="bg-slate-700 border-slate-600"
                  />
                </div>
                
                <div>
                  <Label htmlFor="about1">About Paragraph 1</Label>
                  <Textarea
                    id="about1"
                    value={formData.about1}
                    onChange={(e) => handleChange('about1', e.target.value)}
                    className="bg-slate-700 border-slate-600"
                    rows={2}
                  />
                </div>
                
                <div>
                  <Label htmlFor="about2">About Paragraph 2</Label>
                  <Textarea
                    id="about2"
                    value={formData.about2}
                    onChange={(e) => handleChange('about2', e.target.value)}
                    className="bg-slate-700 border-slate-600"
                    rows={2}
                  />
                </div>
                
                <div>
                  <Label htmlFor="about3">About Paragraph 3</Label>
                  <Textarea
                    id="about3"
                    value={formData.about3}
                    onChange={(e) => handleChange('about3', e.target.value)}
                    className="bg-slate-700 border-slate-600"
                    rows={2}
                  />
                </div>
              </div>
            </div>
            
            {/* Resume Upload Section */}
            <div className="border-t border-slate-700 pt-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Resume Upload
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={handleResumeUpload}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      disabled={isUploadingResume}
                    />
                    <Button
                      variant="outline"
                      disabled={isUploadingResume}
                      className="bg-slate-700 border-slate-600 hover:bg-slate-600"
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      {isUploadingResume ? 'Uploading...' : 'Upload Resume (PDF)'}
                    </Button>
                  </div>
                  {resumeFile && (
                    <span className="text-sm text-green-400">
                      ✓ {resumeFile.name} uploaded successfully
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-400">
                  Upload your resume in PDF format. This will replace the current resume that opens when visitors click "View Resume".
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 justify-end pt-4 border-t border-slate-700">
              <Button
                onClick={onClose}
                variant="outline"
                className="bg-slate-700 border-slate-600 hover:bg-slate-600"
              >
                Cancel
              </Button>
              <Button
                onClick={handleSave}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500"
              >
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}