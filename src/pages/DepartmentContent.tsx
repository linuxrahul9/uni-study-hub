
import React, { useState } from 'react';
import SemesterSection from '../components/SemesterSection';
import ResourceCategory from '../components/ResourceCategory';
import departments from '../data/resources';

interface DepartmentContentProps {
  departmentId: string;
  searchQuery: string;
}

const DepartmentContent: React.FC<DepartmentContentProps> = ({ departmentId, searchQuery }) => {
  const department = departments[departmentId];
  
  if (!department) {
    return <div className="text-center py-8">Department not found</div>;
  }

  return (
    <div className="fade-in">
      <SemesterSection 
        semestersData={department.semesters}
        searchQuery={searchQuery}
      />
      
      <ResourceCategory
        title="Important Topics"
        description="Key concepts and formulas to master"
        resources={department.importantTopics}
        searchQuery={searchQuery}
      />
      
      <ResourceCategory
        title="Syllabus"
        description="Official curriculum and course outlines"
        resources={department.syllabus}
        searchQuery={searchQuery}
      />
      
      <ResourceCategory
        title="Previous Papers"
        description="Past exam papers with solutions"
        resources={department.previousPapers}
        searchQuery={searchQuery}
      />
    </div>
  );
};

export default DepartmentContent;
