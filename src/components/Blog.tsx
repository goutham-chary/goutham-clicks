import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const blogPosts = [
    {
      title: 'Essential Tips for Wedding Photography',
      excerpt: 'Learn the key techniques and moments to capture during wedding photography...',
      image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      date: 'Mar 15, 2024',
      category: 'Wedding',
    },
    {
      title: 'The Art of Portrait Photography',
      excerpt: 'Discover the secrets to capturing stunning portrait photographs that tell a story...',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      date: 'Mar 10, 2024',
      category: 'Portrait',
    },
    {
      title: 'Mastering Natural Light Photography',
      excerpt: 'Tips and techniques for using natural light to create beautiful photographs...',
      image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      date: 'Mar 5, 2024',
      category: 'Tutorial',
    },
  ];

  return (
    <section id="blog" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Latest from the <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Blog</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Stay updated with our latest photography tips, tricks, and behind-the-scenes stories.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-purple-500 text-white text-sm rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="text-gray-400 text-sm mb-2">{post.date}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-purple-500 hover:text-purple-400 transition-colors"
                >
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:opacity-90 transition-opacity"
          >
            View All Posts <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;