
import React, { useState } from 'react';
import ResourceCard from './ResourceCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface Subject {
  id: string;
  title: string;
  description: string;
  languages: string[];
  downloadUrl?: string; // Added downloadUrl property
}

interface SemesterData {
  id: string;
  name: string;
  subjects: Subject[];
}

interface SemesterSectionProps {
  semestersData: SemesterData[];
  searchQuery: string;
}

const SemesterSection: React.FC<SemesterSectionProps> = ({ semestersData, searchQuery }) => {
  const [activeTab, setActiveTab] = useState<string>(semestersData[0]?.id || "semester-1");

  const filteredSubjects = (subjects: Subject[]) => {
    if (!searchQuery) return subjects;
    
    return subjects.filter(subject => 
      subject.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      subject.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Notes</CardTitle>
        <p className="text-sm text-gray-500">Semester-wise study materials and notes</p>
        <Separator className="mt-2" />
      </CardHeader>
      
      <CardContent>
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-6 flex flex-wrap justify-start w-full h-auto">
            {semestersData.map((semester) => (
              <TabsTrigger 
                key={semester.id} 
                value={semester.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {semester.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {semestersData.map((semester) => {
            const filtered = filteredSubjects(semester.subjects);
            
            return (
              <TabsContent 
                key={semester.id} 
                value={semester.id}
                className={`fade-in ${filtered.length === 0 ? 'block' : ''}`}
              >
                {filtered.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filtered.map((subject) => (
                      <ResourceCard
                        key={subject.id}
                        title={subject.title}
                        description={subject.description}
                        languages={subject.languages}
                        downloadUrl={subject.downloadUrl}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    No subjects match your search in this semester.
                  </div>
                )}
              </TabsContent>
            );
          })}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default SemesterSection;
