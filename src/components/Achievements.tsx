import { motion } from 'framer-motion';
import { Trophy, Star, Award } from 'lucide-react';
import { achievements } from '../data/portfolioData';

const icons = [Trophy, Star, Award, Trophy];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements & <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Recognition and accomplishments along my journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0"
                  >
                    <Icon className="text-white" size={28} />
                  </motion.div>

                  <div className="flex-1">
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {achievement.title}
                      </h3>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-sm font-medium whitespace-nowrap">
                        {achievement.date}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center"
        >
          <Trophy size={48} className="mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Continuous Achievement 🎯</h3>
          <p className="text-lg max-w-3xl mx-auto">
            These achievements represent my commitment to excellence and continuous learning. Each milestone has taught me valuable lessons and pushed me to reach higher goals.
                                 Focused on learning and improving.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
