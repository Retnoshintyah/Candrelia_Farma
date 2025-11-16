
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeLinkClass = "text-teal-600 font-semibold";
  const inactiveLinkClass = "text-gray-600 hover:text-teal-600 transition-colors";
  
  const getLinkClass = ({ isActive }: { isActive: boolean }) => isActive ? activeLinkClass : inactiveLinkClass;
  

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center space-x-3">
              <img src="./logofarmasii.png" alt="Candrelia Farma Logo" className="h-20 w-20 object-contain" />
              <span className="text-2xl font-bold text-gray-800 hidden sm:inline">Candrelia Farma</span>
            </NavLink>
          </div>
          <div className="hidden md:block">
            <nav className="flex items-center space-x-8">
              <NavLink to="/" className={getLinkClass}>Beranda</NavLink>
              <NavLink to="/products" className={getLinkClass}>Produk</NavLink>
              <NavLink to="/profile" className={getLinkClass}>Profil Perusahaan</NavLink>
            </nav>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-teal-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className={({isActive}) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-teal-50 text-teal-700' : 'text-gray-600 hover:bg-gray-50 hover:text-teal-600'}`}>Beranda</NavLink>
            <NavLink to="/products" className={({isActive}) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-teal-50 text-teal-700' : 'text-gray-600 hover:bg-gray-50 hover:text-teal-600'}`}>Produk</NavLink>
            <NavLink to="/profile" className={({isActive}) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-teal-50 text-teal-700' : 'text-gray-600 hover:bg-gray-50 hover:text-teal-600'}`}>Profil Perusahaan</NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
