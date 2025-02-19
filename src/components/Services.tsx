import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Camera, Users, Building2, Heart, Mountain, Video } from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Wedding Photography',
      description: 'Capture your special day with our professional wedding photography services.',
      price: 'Starting from $1,999',
      features: ['8 Hours Coverage', 'Digital Gallery', 'Edited Photos', '2 Photographers'],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Portrait Sessions',
      description: 'Professional portrait photography for individuals, couples, and families.',
      price: 'Starting from $299',
      features: ['1 Hour Session', 'Multiple Locations', '20 Edited Photos', 'Digital Delivery'],
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Corporate Events',
      description: 'Professional coverage for your corporate events and conferences.',
      price: 'Starting from $799',
      features: ['4 Hours Coverage', 'Same-Day Preview', 'Corporate License', 'Express Delivery'],
    },
    {
      icon: <Mountain className="w-8 h-8" />,
      title: 'Landscape & Nature',
      description: 'Stunning landscape and nature photography for your space.',
      price: 'Starting from $459',
      features: ['Custom Sizes', 'Fine Art Prints', 'Location Scouting', 'Framing Options'],
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Product Photography',
      description: 'Showcase your products with professional product photography.',
      price: 'Starting from $349',
      features: ['White Background', 'Multiple Angles', 'Retouching', 'E-commerce Ready'],
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Video Production',
      description: 'Professional video production services for events and marketing.',
      price: 'Starting from $1,499',
      features: ['4K Recording', 'Drone Footage', 'Professional Editing', 'Music Licensing'],
    },
  ];

  const nextService = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevService = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We offer a wide range of professional photography services to meet your needs.
            Each package is customizable to ensure we capture your vision perfectly.
          </p>
        </motion.div>

        {/* Carousel for small devices */}
        <div className="md:hidden relative">
          {/* Service Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden p-8"
          >
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              {services[currentIndex].icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{services[currentIndex].title}</h3>
            <p className="text-gray-300 mb-6">{services[currentIndex].description}</p>
            <p className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
              {services[currentIndex].price}
            </p>
            <ul className="space-y-3 mb-8">
              {services[currentIndex].features.map((feature, i) => (
                <li key={i} className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity">
              Book Now
            </button>
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={prevService}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800/70 hover:bg-purple-500 text-white w-10 h-10 rounded-full flex items-center justify-center"
          >
            &#8249;
          </button>
          <button
            onClick={nextService}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800/70 hover:bg-purple-500 text-white w-10 h-10 rounded-full flex items-center justify-center"
          >
            &#8250;
          </button>
        </div>

        {/* Grid for larger screens */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden group hover:bg-gray-800/70 transition-colors"
            >
              <div className="p-8">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
                  {service.price}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity">
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;