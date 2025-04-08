
import React from 'react';
import ResourceCard from './ResourceCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface Resource {
  id: string;
  title: string;
  description: string;
  languages?: string[];
  downloadUrl?: string; // Added downloadUrl property
}

interface ResourceCategoryProps {
  title: string;
  description: string;
  resources: Resource[];
  searchQuery: string;
}

const ResourceCategory: React.FC<ResourceCategoryProps> = ({ 
  title, 
  description, 
  resources,
  searchQuery 
}) => {
  const filteredResources = resources.filter(resource => 
    !searchQuery || 
    resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    resource.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">{title}</CardTitle>
        <p className="text-sm text-gray-500">{description}</p>
        <Separator className="mt-2" />
      </CardHeader>
      
      <CardContent>
        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredResources.map((resource) => (
              <ResourceCard
                key={resource.id}
                title={resource.title}
                description={resource.description}
                languages={resource.languages}
                downloadUrl={resource.downloadUrl}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            No resources match your search in this category.
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ResourceCategory;
