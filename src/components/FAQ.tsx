import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: 'What is your booking process?',
      answer: "Our booking process is simple. Contact us through the form or phone, we will discuss your needs, select a package, and secure your date with a deposit. The remaining balance is due before the event.",
    },
    {
      question: 'How long does it take to receive the photos?',
      answer: "For most sessions, you'll receive your fully edited photos within 2-3 weeks. Wedding collections may take 4-6 weeks. We'll provide some preview shots within 48 hours.",
    },
    {
      question: 'Do you travel for photo shoots?',
      answer: "Yes, we do! We're available for travel both domestically and internationally. Travel fees may apply depending on the location.",
    },
    {
      question: 'What happens if it rains on our outdoor shoot?',
      answer: 'We monitor weather conditions and will work with you to either plan around it or reschedule if necessary. We also have creative solutions for rainy day photography.',
    },
    {
      question: 'Do you provide raw files?',
      answer: "We provide fully edited high-resolution images but don't provide RAW files. Our editing style is part of our artistic vision and final product.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about our photography services.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 bg-gray-800/50 backdrop-blur-sm rounded-lg flex items-center justify-between hover:bg-gray-800/70 transition-colors"
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-purple-500" />
                ) : (
                  <Plus className="w-5 h-5 text-purple-500" />
                )}
              </button>
              
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 py-4 bg-gray-800/30 rounded-b-lg mt-1"
                >
                  <p className="text-gray-300">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;