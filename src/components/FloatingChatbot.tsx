import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const FloatingChatbot: React.FC = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          boxShadow: [
            '0 0 0 0 rgba(59, 130, 246, 0.7)',
            '0 0 0 10px rgba(59, 130, 246, 0)',
            '0 0 0 20px rgba(59, 130, 246, 0)'
          ]
        }}
        transition={{ 
          boxShadow: { duration: 2, repeat: Infinity },
          scale: { duration: 0.2 }
        }}
        className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl"
        onClick={() => alert('Chat feature coming soon!')}
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>
    </motion.div>
  );
};

export default FloatingChatbot;