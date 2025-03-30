
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: "Sarah Johnson",
    position: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    bio: "With over 15 years of industry experience, Sarah leads our team with vision and strategic insight."
  },
  {
    name: "Michael Chen",
    position: "CTO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    bio: "Michael brings technical expertise and innovative thinking to drive our technology initiatives."
  },
  {
    name: "Emily Rodriguez",
    position: "Marketing Director",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    bio: "Emily specializes in creating compelling marketing strategies that deliver measurable results."
  },
  {
    name: "David Wilson",
    position: "Operations Manager",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    bio: "David ensures that our operations run smoothly and efficiently to meet client expectations."
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Team</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Meet our talented team of professionals who are dedicated to delivering excellence in everything we do.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-none shadow-lg overflow-hidden group">
              <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full flex justify-center space-x-4">
                    <a href="#" className="text-white hover:text-blue-300 transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a href="#" className="text-white hover:text-blue-300 transition-colors">
                      <Twitter size={20} />
                    </a>
                    <a href="#" className="text-white hover:text-blue-300 transition-colors">
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <CardContent className="text-center p-6">
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-blue-600 mb-2">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
