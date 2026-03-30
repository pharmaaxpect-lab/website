import axpectLogo from '../asset-library/brand/axpect-logo.png';
import React, { useState, useEffect } from 'react';
import { Menu, X, Image as ImageIcon } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-4 ${isScrolled ? 'pt-2' : 'pt-6'}`}>
      <div className={`max-w-7xl mx-auto rounded-full transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2 px-6' : 'bg-transparent py-4 px-4'}`}>
        <div className="flex justify-between items-center">
          {/* Logo & Brand Section */}
          <div className="flex items-center space-x-3">
            <img src={axpectLogo} alt="Axpect Logo" className="w-12 h-12" />
            {/* Brand Name */}
            <div className="flex flex-col">
                <span className={`text-xl font-bold leading-none ${isScrolled ? 'text-blue-900' : 'text-blue-900'}`}>
                    Axpect
                </span>
                <span className={`text-sm font-medium tracking-wide ${isScrolled ? 'text-green-600' : 'text-green-600'}`}>
                    Pharma
                </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-blue-700 font-medium text-sm uppercase tracking-wide transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-24 left-4 right-4 bg-white rounded-2xl shadow-xl p-6 md:hidden flex flex-col space-y-4 border border-gray-100 animate-fade-in-down">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-800 hover:text-blue-600 font-semibold text-lg py-2 border-b border-gray-100 last:border-0"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;