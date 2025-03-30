
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';

interface HeaderProps {
  showMobileMenu: boolean;
  toggleMobileMenu: () => void;
  activeSection: string;
}

const Header = ({ showMobileMenu, toggleMobileMenu, activeSection }: HeaderProps) => {
  const isMobile = useIsMobile();
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const getLinkClass = (section: string) => {
    const baseClass = "transition-colors duration-300";
    const normalClass = "text-gray-700 hover:text-blue-600";
    const activeClass = "text-blue-600 font-medium";
    
    return `${baseClass} ${section === activeSection ? activeClass : normalClass}`;
  };
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-xl font-bold">
            Your<span className="text-blue-600">Brand</span>
          </div>
        </div>
        
        {!isMobile ? (
          <nav className="flex gap-8">
            <a href="#home" className={getLinkClass('home')}>Home</a>
            <a href="#about" className={getLinkClass('about')}>About</a>
            <a href="#services" className={getLinkClass('services')}>Services</a>
            <a href="#team" className={getLinkClass('team')}>Team</a>
            <a href="#testimonials" className={getLinkClass('testimonials')}>Testimonials</a>
            <a href="#contact" className={getLinkClass('contact')}>Contact</a>
          </nav>
        ) : (
          <button 
            onClick={toggleMobileMenu} 
            className="text-gray-600 focus:outline-none"
          >
            {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
        
        {!isMobile && (
          <Button variant="default" className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105">
            Get in Touch
          </Button>
        )}
      </div>
      
      {isMobile && showMobileMenu && (
        <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg">
          <nav className="flex flex-col">
            <a href="#home" className={`px-4 py-3 hover:bg-blue-50 ${activeSection === 'home' ? 'text-blue-600' : 'text-gray-700'}`} onClick={toggleMobileMenu}>Home</a>
            <a href="#about" className={`px-4 py-3 hover:bg-blue-50 ${activeSection === 'about' ? 'text-blue-600' : 'text-gray-700'}`} onClick={toggleMobileMenu}>About</a>
            <a href="#services" className={`px-4 py-3 hover:bg-blue-50 ${activeSection === 'services' ? 'text-blue-600' : 'text-gray-700'}`} onClick={toggleMobileMenu}>Services</a>
            <a href="#team" className={`px-4 py-3 hover:bg-blue-50 ${activeSection === 'team' ? 'text-blue-600' : 'text-gray-700'}`} onClick={toggleMobileMenu}>Team</a>
            <a href="#testimonials" className={`px-4 py-3 hover:bg-blue-50 ${activeSection === 'testimonials' ? 'text-blue-600' : 'text-gray-700'}`} onClick={toggleMobileMenu}>Testimonials</a>
            <a href="#contact" className={`px-4 py-3 hover:bg-blue-50 ${activeSection === 'contact' ? 'text-blue-600' : 'text-gray-700'}`} onClick={toggleMobileMenu}>Contact</a>
            <div className="px-4 py-3">
              <Button variant="default" className="w-full bg-blue-600 hover:bg-blue-700">
                Get in Touch
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
