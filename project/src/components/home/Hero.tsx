import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleBookEvent = () => {
    navigate('/book');
  };

  const handleViewDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div className="relative bg-gray-900 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg"
          alt="Event venue"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
            Create Unforgettable Events with Gatherly
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-lg">
            Your one-stop platform for planning and customizing exceptional events. From venue selection to decoration and catering, we've got you covered.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              variant="primary" 
              className="shadow-xl"
              onClick={handleBookEvent}
            >
              Book Your Event
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white hover:bg-white hover:bg-opacity-10"
              onClick={handleViewDashboard}
            >
              View Dashboard
            </Button>
          </div>
        </div>
      </div>
      
      {/* Curved design element */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path 
            fill="#f9fafb" 
            fillOpacity="1" 
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,176C960,171,1056,213,1152,208C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;