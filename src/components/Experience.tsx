import { motion } from 'framer-motion';
import { Briefcase, CheckCircle } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Work <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and contributions
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <Briefcase className="text-white" size={24} />
                  </motion.div>
                  {index < experiences.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-blue-600 to-cyan-600 mt-4" />
                  )}
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex-1 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-cyan-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="px-4 py-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-sm font-medium">
                      {exp.duration}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                      >
                        <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-4">Seeking Opportunities</h3>
          <p className="text-lg">
            I'm actively looking for internship and full-time opportunities where I can contribute my skills and continue learning. Let's connect! Looking for new opportunities to contribute, collaborate, and continue improving as a developer. 💼
          </p>
        </motion.div>
      </div>
    </section>
  );
}
