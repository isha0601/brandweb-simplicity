
import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    name: "Alex Thompson",
    position: "CEO, TechStart",
    content: "Working with this team has been a game-changer for our business. Their strategic insights and dedicated approach helped us achieve our goals faster than expected.",
    rating: 5
  },
  {
    id: 2,
    name: "Jennifer Martinez",
    position: "Marketing VP, GrowthMakers",
    content: "The level of professionalism and expertise is unmatched. They took the time to understand our needs and delivered solutions that perfectly aligned with our vision.",
    rating: 5
  },
  {
    id: 3,
    name: "Robert Kim",
    position: "Founder, InnovateX",
    content: "I've worked with many agencies over the years, but this team stands out for their creativity and commitment to excellence. Highly recommended!",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="border-none shadow-lg bg-white hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {Array(testimonial.rating).fill(0).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
