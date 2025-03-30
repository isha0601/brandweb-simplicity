
import React from 'react';
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-100 rounded-full opacity-50 mix-blend-multiply filter blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="About Us" 
                className="rounded-lg shadow-lg relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-blue-200 rounded-full opacity-50 mix-blend-multiply filter blur-xl"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">About Our Company</h2>
            <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            <p className="text-gray-600 mb-6">
              Founded in 2010, our company has established itself as a leader in providing innovative business solutions. 
              We combine expertise, creativity, and technology to deliver exceptional results for our clients.
            </p>
            <p className="text-gray-600 mb-8">
              Our mission is to empower businesses to reach their full potential through strategic partnerships and cutting-edge solutions tailored to their specific needs and goals.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-700">Experienced Team</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-700">Innovative Solutions</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-700">Client-Focused Approach</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-700">Quality Assurance</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-700">24/7 Support</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-700">Affordable Pricing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
