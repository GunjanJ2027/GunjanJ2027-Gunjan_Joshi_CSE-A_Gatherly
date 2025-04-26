import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Stats from '../components/home/Stats';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <Hero />
        
        {/* Services Section */}
        <Services />
        
        {/* Stats Section */}
        <Stats />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;