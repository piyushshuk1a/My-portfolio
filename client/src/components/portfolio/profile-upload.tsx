import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, User, X } from "lucide-react";

interface ProfileUploadProps {
  onPhotoChange?: (photoUrl: string | null) => void;
  profileData?: {
    name: string;
    title: string;
  };
  isAuthenticated?: boolean;
}

export default function ProfileUpload({ onPhotoChange, profileData, isAuthenticated }: ProfileUploadProps) {
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  // Load saved profile photo on mount
  useEffect(() => {
    const savedPhoto = localStorage.getItem('portfolioProfilePhoto');
    if (savedPhoto) {
      setProfilePhoto(savedPhoto);
      onPhotoChange?.(savedPhoto);
    } else {
      // Set default profile picture
      setProfilePhoto('/profile.jpeg');
      onPhotoChange?.('/profile.jpeg');
    }
  }, [onPhotoChange]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsUploading(true);
      
      // Create a URL for the uploaded file
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setProfilePhoto(result);
        localStorage.setItem('portfolioProfilePhoto', result);
        onPhotoChange?.(result);
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const removePhoto = () => {
    setProfilePhoto('/profile.jpeg');
    localStorage.removeItem('portfolioProfilePhoto');
    onPhotoChange?.('/profile.jpeg');
  };

  return (
    <div className="relative">
      <Card className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-slate-700/50 overflow-hidden">
        <CardContent className="h-full flex items-center justify-center p-0 relative">
          {profilePhoto ? (
            <div className="w-full h-full relative">
              <img
                src={profilePhoto}
                alt="Profile"
                className="w-full h-full object-cover"
              />
              {isAuthenticated && profilePhoto !== '/profile.jpeg' && (
                <Button
                  onClick={removePhoto}
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 w-8 h-8 rounded-full"
                  title="Reset to default photo"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          ) : (
            <div className="text-center w-full h-full flex flex-col items-center justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mb-4">
                <span className="text-4xl font-bold text-slate-900">
                  {profileData?.name?.split(' ').map(n => n[0]).join('') || 'PS'}
                </span>
              </div>
              <p className="text-slate-300 font-medium mb-2">{profileData?.name || 'Piyush Shukla'}</p>
              <p className="text-slate-500 text-sm mb-4">{profileData?.title || 'Frontend Developer'}</p>
              
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  disabled={!isAuthenticated || isUploading}
                />
                <Button
                  variant="outline"
                  size="sm"
                  disabled={!isAuthenticated || isUploading}
                  className="bg-slate-800/50 border-slate-600 hover:bg-slate-700/50"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  {isUploading ? "Uploading..." : isAuthenticated ? "Add Photo" : "Login to Add Photo"}
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}