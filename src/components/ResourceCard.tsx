
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface ResourceCardProps {
  title: string;
  description: string;
  languages?: string[];
  downloadUrl?: string; // New prop for download URL
}

const ResourceCard: React.FC<ResourceCardProps> = ({ 
  title, 
  description, 
  languages = [],
  downloadUrl
}) => {
  const { toast } = useToast();

  const handleDownload = () => {
    toast({
      title: "Download started",
      description: `Downloading: ${title}`,
    });
    
    // If URL is provided, open it in a new tab or trigger download
    if (downloadUrl) {
      window.open(downloadUrl, '_blank');
    }
  };

  return (
    <div className="resource-card rounded-lg border bg-card shadow-sm p-4 flex flex-col">
      <h3 className="text-lg font-semibold mb-2 text-primary">{title}</h3>
      <p className="text-sm text-gray-600 mb-3 flex-grow">{description}</p>
      
      {languages.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-1">
          {languages.includes('hindi') && (
            <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">Hindi</span>
          )}
          {languages.includes('english') && (
            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">English</span>
          )}
        </div>
      )}
      
      <Button 
        onClick={handleDownload}
        className="w-full"
        variant="default"
      >
        <Download className="h-4 w-4 mr-2" /> Download
      </Button>
    </div>
  );
};

export default ResourceCard;
