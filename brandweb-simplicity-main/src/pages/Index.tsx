
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import TeamSection from '@/components/TeamSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { ChevronUp } from 'lucide-react';

const Index = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Determine active section for menu highlighting
      const sections = document.querySelectorAll('section[id]');
      let currentSection = 'home';
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id') || 'home';
        }
      });
      
      setActiveSection(currentSection);
    };

    // Initialize smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
          // Close mobile menu after clicking
          setShowMobileMenu(false);
        }
      });
    });

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header 
        showMobileMenu={showMobileMenu} 
        toggleMobileMenu={toggleMobileMenu} 
        activeSection={activeSection}
      />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all z-50 hover:scale-110"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
};

export default Index;
