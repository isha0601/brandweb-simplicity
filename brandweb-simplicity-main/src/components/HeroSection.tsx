
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple fade-in and slide-up animations
    const elements = [headingRef.current, textRef.current, buttonsRef.current, imageRef.current];
    elements.forEach((el, index) => {
      if (el) {
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, 200 * index);
      }
    });
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 pt-16">
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h1 
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 opacity-0 transform translate-y-8 transition-all duration-700"
          >
            Transforming Business Through <span className="text-blue-600">Innovation</span>
          </h1>
          <p 
            ref={textRef}
            className="text-lg text-gray-600 mb-8 max-w-lg opacity-0 transform translate-y-8 transition-all duration-700"
          >
            We help businesses grow and achieve their goals through strategic planning, innovative solutions, and exceptional service delivery.
          </p>
          <div 
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-4 opacity-0 transform translate-y-8 transition-all duration-700"
          >
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105">
              Get Started
            </Button>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg group transition-all duration-300 hover:scale-105">
              Learn More <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
        <div 
          ref={imageRef}
          className="lg:w-1/2 flex justify-center opacity-0 transform translate-y-8 transition-all duration-700"
        >
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-300 rounded-full opacity-30 mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-blue-500 rounded-full opacity-30 mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Business Team" 
                className="rounded-xl max-w-md w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
