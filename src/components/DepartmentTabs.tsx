
import React from 'react';
import { Button } from '@/components/ui/button';

interface DepartmentTabsProps {
  activeDepartment: string;
  setActiveDepartment: (dept: string) => void;
}

const DepartmentTabs: React.FC<DepartmentTabsProps> = ({ 
  activeDepartment, 
  setActiveDepartment 
}) => {
  const departments = [
    { id: 'civil', label: 'Civil Engineering' },
    { id: 'mechanical', label: 'Mechanical Engineering' },
    { id: 'computer', label: 'Computer Science' }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
      {departments.map((dept) => (
        <Button
          key={dept.id}
          variant={activeDepartment === dept.id ? "default" : "outline"}
          onClick={() => setActiveDepartment(dept.id)}
          className={`text-base py-2 px-4 font-medium ${
            activeDepartment === dept.id ? '' : 'hover:bg-accent'
          }`}
        >
          {dept.label}
        </Button>
      ))}
    </div>
  );
};

export default DepartmentTabs;
