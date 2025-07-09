import { useState, useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { FileText, Upload, Lock } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

interface ResumeUploadProps {
  resumeUrl?: string;
}

export default function ResumeUpload({ resumeUrl }: ResumeUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [showAuthMessage, setShowAuthMessage] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { isAuthenticated, token } = useAuth();
  const { toast } = useToast();

  // Upload resume mutation
  const uploadResumeMutation = useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.append('resume', file);

      const response = await fetch('/api/upload/resume', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error('Failed to upload resume');
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/profile"] });
      toast({
        title: "Success",
        description: "Resume uploaded successfully!",
      });
      setIsUploading(false);
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to upload resume",
        variant: "destructive",
      });
      setIsUploading(false);
    }
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && isAuthenticated) {
      setIsUploading(true);
      uploadResumeMutation.mutate(file);
    } else if (file && !isAuthenticated) {
      setShowAuthMessage(true);
      setTimeout(() => setShowAuthMessage(false), 3000);
      event.target.value = '';
    }
  };

  const handleUploadClick = () => {
    if (!isAuthenticated) {
      setShowAuthMessage(true);
      setTimeout(() => setShowAuthMessage(false), 3000);
      return;
    }
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-3">
      <h4 className="text-lg font-semibold text-slate-300">Resume</h4>
      
      {showAuthMessage && (
        <div className="p-3 bg-orange-600/20 border border-orange-500/30 rounded-lg">
          <div className="flex items-center text-orange-300 text-sm">
            <Lock className="h-4 w-4 mr-2" />
            Only the owner can upload files
          </div>
        </div>
      )}

      <div className="flex items-center gap-3">
        {resumeUrl ? (
          <div className="flex items-center gap-2 flex-1">
            <FileText className="h-5 w-5 text-emerald-400" />
            <span className="text-slate-300 text-sm">Resume uploaded</span>
          </div>
        ) : (
          <span className="text-slate-500 text-sm">No resume uploaded</span>
        )}

        <div className="relative">
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            disabled={isUploading}
          />
          <Button
            variant="outline"
            size="sm"
            disabled={isUploading}
            onClick={handleUploadClick}
            className="bg-slate-800/50 border-slate-600 hover:bg-slate-700/50"
          >
            {isAuthenticated ? (
              <>
                <Upload className="h-4 w-4 mr-2" />
                {isUploading ? "Uploading..." : resumeUrl ? "Update" : "Upload"}
              </>
            ) : (
              <>
                <Lock className="h-4 w-4 mr-2" />
                Upload Resume
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}