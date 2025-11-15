import { motion, AnimatePresence } from 'framer-motion';
import { Download, X } from 'lucide-react';
import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function FloatingCV() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-8 right-8 z-40"
    >
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute bottom-0 right-20 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 mb-2 whitespace-nowrap"
          >
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              Download my resume
            </p>
            <motion.a
              href={personalInfo.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="block px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg text-center font-medium"
            >
              Open Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full shadow-2xl flex items-center justify-center text-white hover:shadow-3xl transition-shadow"
      >
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isExpanded ? <X size={28} /> : <Download size={28} />}
        </motion.div>
      </motion.button>
    </motion.div>
  );
}
