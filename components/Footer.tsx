
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; {currentYear} Candrelia Farma. All Rights Reserved.</p>
        <p className="text-sm text-gray-400 mt-1">Health, Quality, Trust</p>
      </div>
    </footer>
  );
};

export default Footer;
