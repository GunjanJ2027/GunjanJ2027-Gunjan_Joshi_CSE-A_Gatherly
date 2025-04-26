import React from 'react';

const statsData = [
  { value: '1,000+', label: 'Events Organized' },
  { value: '200+', label: 'Partner Venues' },
  { value: '50+', label: 'Food Menus' },
  { value: '99%', label: 'Client Satisfaction' },
];

const Stats: React.FC = () => {
  return (
    <section className="bg-purple-700 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {statsData.map((stat, index) => (
            <div key={index} className="transform transition-transform hover:scale-105 duration-300">
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-purple-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;