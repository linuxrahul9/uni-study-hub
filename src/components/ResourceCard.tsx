
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface ResourceCardProps {
  title: string;
  description: string;
  languages?: string[];
}

const ResourceCard: React.FC<ResourceCardProps> = ({ 
  title, 
  description, 
  languages = [] 
}) => {
  const { toast } = useToast();

  const handleDownload = () => {
    toast({
      title: "Download started",
      description: `Downloading: ${title}`,
    });
  };

  return (
    <div className="resource-card flex flex-col">
      <h3 className="text-lg font-semibold mb-2 text-primary">{title}</h3>
      <p className="text-sm text-gray-600 mb-3 flex-grow">{description}</p>
      
      {languages.length > 0 && (
        <div className="mb-3 flex flex-wrap">
          {languages.includes('hindi') && (
            <span className="hindi-tag">Hindi</span>
          )}
          {languages.includes('english') && (
            <span className="english-tag">English</span>
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
