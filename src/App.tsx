import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Testimonials />
      <Blog />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;