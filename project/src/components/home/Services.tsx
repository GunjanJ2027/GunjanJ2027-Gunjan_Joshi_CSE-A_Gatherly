import React from 'react';
import { Calendar, MapPin, Utensils, Music } from 'lucide-react';

const servicesData = [
  {
    icon: <Calendar className="h-8 w-8 text-purple-600" />,
    title: 'Event Planning',
    description: 'Our experienced team will guide you through the entire event planning process, ensuring every detail is perfect.',
  },
  {
    icon: <MapPin className="h-8 w-8 text-purple-600" />,
    title: 'Venue Selection',
    description: 'Choose from our curated selection of premium venues to find the perfect setting for your special occasion.',
  },
  {
    icon: <Utensils className="h-8 w-8 text-purple-600" />,
    title: 'Catering Services',
    description: 'Select from a variety of gourmet food options that can be customized to match your event theme and dietary requirements.',
  },
  {
    icon: <Music className="h-8 w-8 text-purple-600" />,
    title: 'Custom Decorations',
    description: 'Transform your venue with stunning decorations that reflect your vision and create a memorable atmosphere.',
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive event planning solutions to make your special occasions truly unforgettable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center items-center h-16 w-16 rounded-full bg-purple-100 mx-auto mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;