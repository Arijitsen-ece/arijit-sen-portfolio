import { motion } from 'framer-motion';
import { Code2, Globe, Cpu, Heart, Coffee, Music } from 'lucide-react';
import { aboutHighlights } from '../data/portfolioData';

const iconMap: Record<string, any> = {
  Code2,
  Globe,
  Cpu
};

const hobbies = [
  { icon: Heart, name: 'Problem Solving', color: 'text-red-600' },
  { icon: Coffee, name: 'Coffee Enthusiast', color: 'text-amber-600' },
  { icon: Music, name: 'Music Lover', color: 'text-purple-600' }
  
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Getting to know the person behind the code
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {aboutHighlights.map((highlight, index) => {
            const Icon = iconMap[highlight.icon];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {highlight.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-6">My Journey</h3>
          <p className="text-lg leading-relaxed mb-6">
            As an ECE student, I focus on embedded systems, arduino project, IoT, frontend development and Web Technology. I like understanding how hardware and software connect to create useful applications. I keep learning new tools and applying them in small, real-world projects. Focused on growing my skills through real-world projects.
          </p>
          <p className="text-lg leading-relaxed">
            I'm constantly learning and adapting to new technologies, always seeking opportunities to apply my knowledge in real-world scenarios. Whether it's building a smart automation system or developing a web application, I approach every project with enthusiasm and dedication.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Hobbies & Interests
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-md"
              >
                <hobby.icon className={hobby.color} size={24} />
                <span className="font-medium text-gray-800 dark:text-gray-200">
                  {hobby.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
