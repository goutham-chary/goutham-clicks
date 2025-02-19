import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: 'John',
      role: 'Wedding Couple',
      image: 'https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      quote: 'They captured our wedding day perfectly! Every moment was beautifully documented, and the photos exceeded our expectations.',
      rating: 5,
    },
    {
      name: 'Mike',
      role: 'Corporate Client',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      quote: 'Professional, punctual, and produced amazing photos for our corporate event. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Mowa Bro',
      role: 'Portrait Client',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      quote: 'The portrait session was so much fun, and the results were stunning. They really know how to make you feel comfortable.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Client <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg relative"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 rounded-full overflow-hidden border-4 border-purple-500">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="pt-8">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>

                <blockquote className="text-gray-300 text-center mb-6">
                  "{testimonial.quote}"
                </blockquote>

                <div className="text-center">
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;