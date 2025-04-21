import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import EventDetails from './components/EventDetails';
import Schedule from './components/Schedule';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import RegistrationForm from './components/RegistrationForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/animations.css';

function App() {
  useEffect(() => {
    // Update the page title
    document.title = 'Footslog 2025 | Rotaract Club FRCRCE Annual Trek';
    
    // Update favicon (optional)
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.setAttribute('href', '/mountain-icon.svg');
    }
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <EventDetails />
      <Schedule />
      <Gallery />
      <FAQ />
      <RegistrationForm />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;