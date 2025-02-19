import { motion } from 'framer-motion';
import { Camera, Award, Users } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      icon: <Camera className="w-8 h-8" />,
      number: "1000+",
      text: "Photo Sessions",
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "500+",
      text: "Happy Clients",
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "15+",
      text: "Awards Won",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Goutham Clicks</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Founded in 2020, Goutham Clicks Photography has been at the forefront of capturing life's most precious moments. 
            Our passion for photography goes beyond just taking pictures – we create timeless memories that tell your unique story.
          </p>
        </motion.div>

        {/* Team Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1556103255-4443dbae8e5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Chief Photographer"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold mb-4">Meet Our Lead Photographer</h3>
            <p className="text-gray-300 mb-6">
              With over a decade of experience in professional photography, our lead photographer brings creativity, 
              technical expertise, and a unique perspective to every shoot. Specializing in portrait and event photography, 
              they have developed a signature style that combines natural light with dramatic composition.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:opacity-90 transition-opacity">
                View Portfolio
              </button>
              <button className="px-6 py-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors">
                Read More
              </button>
            </div>
          </motion.div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.text}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg text-center"
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {achievement.icon}
              </div>
              <h4 className="text-3xl font-bold mb-2">{achievement.number}</h4>
              <p className="text-gray-300">{achievement.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;