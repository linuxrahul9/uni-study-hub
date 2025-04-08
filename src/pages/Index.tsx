
import React, { useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import DepartmentTabs from '../components/DepartmentTabs';
import DepartmentContent from './DepartmentContent';
import Footer from '../components/Footer';

const Index = () => {
  const [activeDepartment, setActiveDepartment] = useState('civil');
  const [searchQuery, setSearchQuery] = useState('');
  const [appliedSearch, setAppliedSearch] = useState('');

  const handleSearch = () => {
    setAppliedSearch(searchQuery);
  };

  const handleDepartmentChange = (dept: string) => {
    setActiveDepartment(dept);
    setSearchQuery('');
    setAppliedSearch('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        <SearchBar 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
        />
        
        <DepartmentTabs 
          activeDepartment={activeDepartment}
          setActiveDepartment={handleDepartmentChange}
        />
        
        <DepartmentContent 
          departmentId={activeDepartment}
          searchQuery={appliedSearch}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
