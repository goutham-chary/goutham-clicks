import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1551524164-687a55dd1126?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1516724562728-afc824a36e84?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    'https://media.istockphoto.com/id/843408508/photo/photography-camera-lens-concept.jpg?s=612x612&w=0&k=20&c=-tm5TKrPDMakrT1vcOE-4Rlyj-iBVdzKuX4viFkd7Vo='
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2300);

    return () => clearInterval(interval);
  }, []);
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      {images.map((image, index) => (
        index === currentImage && (
          <div
            key={index}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute inset-0 bg-black/35" />
          </div>
        )
      ))}


      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Capturing Moments That
          <span className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Last Forever
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          We specialize in turning your precious moments into timeless memories through the art of photography.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#portfolio" className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:opacity-90 transition-opacity">
            Explore Portfolio
          </a>
          <a href="#contact" className="px-8 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm">
            Contact Us
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;