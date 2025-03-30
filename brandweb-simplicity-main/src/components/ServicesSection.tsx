
import React, { useState } from 'react';
import { TrendingUp, PenTool, Layers, BarChart, Users, Smartphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Business Strategy",
    description: "We help you define clear goals and develop actionable strategies that align with your vision.",
    icon: <TrendingUp className="h-10 w-10 text-blue-600 mb-4" />
  },
  {
    title: "Digital Marketing",
    description: "Drive growth through targeted digital campaigns that increase visibility and engagement.",
    icon: <BarChart className="h-10 w-10 text-blue-600 mb-4" />
  },
  {
    title: "UX/UI Design",
    description: "Create seamless digital experiences that delight users and achieve your business objectives.",
    icon: <PenTool className="h-10 w-10 text-blue-600 mb-4" />
  },
  {
    title: "Product Development",
    description: "Transform ideas into market-ready products using our proven development methodology.",
    icon: <Layers className="h-10 w-10 text-blue-600 mb-4" />
  },
  {
    title: "Team Building",
    description: "Strengthen your organization with our team building and leadership development programs.",
    icon: <Users className="h-10 w-10 text-blue-600 mb-4" />
  },
  {
    title: "Mobile Solutions",
    description: "Custom mobile applications designed to solve specific business challenges.",
    icon: <Smartphone className="h-10 w-10 text-blue-600 mb-4" />
  }
];

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-medium mb-2 inline-block">WHAT WE OFFER</span>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Services</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            We offer a comprehensive range of services designed to help your business thrive in today's competitive landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`border-none shadow-lg hover:shadow-xl transition-all duration-300 ${hoveredIndex === index ? 'transform -translate-y-2 scale-105' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center p-6">
                  <div className={`flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 mb-6 transition-all duration-300 ${hoveredIndex === index ? 'bg-blue-200' : ''}`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold mb-4">{service.title}</CardTitle>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
