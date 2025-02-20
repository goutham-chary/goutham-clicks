import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.0015,
  });

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      content: '+91 4653098434',
      link: 'tel:+91 4653098434',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'hello@gouthamclicks.com',
      link: 'mailto:hello@gouthamclicks.com',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Studio Location',
      content: 'Hyderabad, Telangana',
      link: 'https://maps.google.com',
    },
  ];

  const socialLinks = [
    {
      icon: <Instagram className="w-6 h-6" />,
      name: 'Instagram',
      link: '#',
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      name: 'Facebook',
      link: '#',
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      name: 'Twitter',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get in{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ready to capture your special moments? Reach out to us and let's create something beautiful together.
          </p>
        </motion.div>

        <div className="flex flex-col-reverse lg:flex-row lg:items-start gap-12">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 space-y-8"
          >
            {contactInfo.map((info) => (
              <a
                key={info.title}
                href={info.link}
                className="flex items-start p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg hover:bg-gray-800/70 transition-colors"
              >
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg mr-4">
                  {info.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{info.title}</h3>
                  <p className="text-gray-300">{info.content}</p>
                </div>
              </a>
            ))}

            {/* Social Links */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    className="bg-gray-700/50 p-3 rounded-lg hover:bg-gray-700 transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
