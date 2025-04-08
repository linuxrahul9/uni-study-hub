
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-primary py-8 px-4 text-center shadow-md">
      <div className="container mx-auto">
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-2">College Resources Hub</h1>
        <p className="text-primary-foreground text-lg">
          Access notes, important topics, syllabus, and previous papers for your department
        </p>
      </div>
    </header>
  );
};

export default Header;
