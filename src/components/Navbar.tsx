import React, { useState, useEffect } from 'react';
import { Menu, X, Mountain } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
 
  { label: 'About', href: '#about' },
 
  { label: 'Schedule', href: '#schedule' },
  { label: 'Gallery', href: '#gallery' },
 
  { label: 'Register', href: '#register' },

];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2">
          <Mountain 
            size={32} 
            className={`transition-colors duration-300 ${
              isScrolled ? 'text-green-800' : 'text-white'
            }`} 
          />
          <span 
            className={`font-bold text-xl md:text-2xl transition-colors duration-300 ${
              isScrolled ? 'text-green-800' : 'text-white'
            }`}
          >
            Footslog
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`font-medium transition-colors duration-300 hover:text-green-500 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X 
              size={24} 
              className={isScrolled ? 'text-gray-800' : 'text-white'} 
            />
          ) : (
            <Menu 
              size={24} 
              className={isScrolled ? 'text-gray-800' : 'text-white'} 
            />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-800 font-medium py-2 hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;