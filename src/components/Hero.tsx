import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.5);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('https://snaptoro.com/wp-content/uploads/2023/02/Serene-View-of-Kothaligad-Fort-from-far.jpeg')",
          transform: `translateY(${offset}px)`,
          backgroundPositionY: '30%',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          <span className="block animate-fade-in-down">FOOTSLOG 2025</span>
          <span className="block text-xl md:text-3xl mt-2 text-green-300">
            Rotaract Club FRCRCE's Annual Trek Adventure
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto animate-fade-in">
          Join us for an unforgettable journey through nature's finest trails.
          Challenge yourself, make memories, and embrace the adventure!
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up">
          <a 
            href="#register" 
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Register Now
          </a>
          <a 
            href="#details" 
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-800 font-bold py-3 px-8 rounded-lg transition-all duration-300"
          >
            Event Details
          </a>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </a>
    </section>
  );
};

export default Hero;