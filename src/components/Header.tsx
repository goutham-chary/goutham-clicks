import { useState } from 'react';
import { Camera, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Portfolio', href: '#portfolio' },
    { title: 'Services', href: '#services' },
    { title: 'Testimonials', href: '#testimonials' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <Camera className="w-8 h-8 text-purple-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Gouhtam Clicks
            </span>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-300 hover:text-purple-500 transition-colors"
              >
                {item.title}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:opacity-90 transition-opacity"
            >
              Book a Session
            </motion.button>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/95 backdrop-blur-lg"
        >
          <div className="container mx-auto px-4 py-4">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="block py-3 text-gray-300 hover:text-purple-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </a>
            ))}
            <button className="w-full mt-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:opacity-90 transition-opacity">
              Book a Session
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;