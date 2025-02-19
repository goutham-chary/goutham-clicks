import { Camera, Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Wedding Photography',
    'Portrait Sessions',
    'Corporate Events',
    'Product Photography',
    'Real Estate',
    'Video Production',
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: '#', name: 'Instagram' },
    { icon: <Facebook className="w-5 h-5" />, href: '#', name: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', name: 'Twitter' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:hello@gouthamclicks.com', name: 'Email' },
  ];

  return (
    <footer className="bg-gray-900 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Camera className="w-8 h-8 text-purple-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Goutham Clicks
              </span>
            </div>
            <p className="text-gray-300 mb-6">
              Capturing life's precious moments with artistic vision and technical excellence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-purple-500 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-purple-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-purple-500 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for photography tips and special offers.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>


        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col justify-center items-center space-y-4">
            <p className="text-gray-400 text-sm text-center">
              <span>© 2024</span>
              <span className="mx-2">Goutham Clicks Photography.   </span>
              <span>All rights reserved.</span>
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-purple-500 text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 text-sm transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;