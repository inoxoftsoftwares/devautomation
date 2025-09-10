import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Upload, FileText, X } from 'lucide-react';

interface ResumeUploadProps {
  onFileUploaded?: (filePath: string) => void;
  currentFile?: string | null;
}

const ResumeUpload = ({ onFileUploaded, currentFile }: ResumeUploadProps) => {
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type (PDF, DOC, DOCX)
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF, DOC, or DOCX file.",
          variant: "destructive",
        });
        return;
      }

      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 5MB.",
          variant: "destructive",
        });
        return;
      }

      setSelectedFile(file);
    }
  };

  const uploadFile = async () => {
    if (!selectedFile) return;

    setUploading(true);
    try {
      const fileExt = selectedFile.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `resumes/${fileName}`;

      const { error } = await supabase.storage
        .from('resumes')
        .upload(filePath, selectedFile);

      if (error) throw error;

      toast({
        title: "Resume uploaded successfully",
        description: "Your resume has been attached to your message.",
      });

      onFileUploaded?.(filePath);
      setSelectedFile(null);
    } catch (error: any) {
      toast({
        title: "Upload failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    onFileUploaded?.('');
  };

  return (
    <div className="space-y-4">
      <Label>Resume (Optional)</Label>
      
      {!selectedFile && !currentFile ? (
        <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
          <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Upload your resume (PDF, DOC, DOCX)
            </p>
            <Input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileSelect}
              className="hidden"
              id="resume-upload"
            />
            <Button variant="outline" asChild>
              <label htmlFor="resume-upload" className="cursor-pointer">
                Choose File
              </label>
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/50">
          <div className="flex items-center space-x-3">
            <FileText className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">
              {selectedFile ? selectedFile.name : 'Resume uploaded'}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            {selectedFile && (
              <Button 
                onClick={uploadFile} 
                disabled={uploading}
                size="sm"
              >
                {uploading ? 'Uploading...' : 'Upload'}
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={removeFile}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeUpload;