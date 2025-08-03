import React from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 origin-bottom z-50"
      />
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ 
          duration: 0.6, 
          ease: [0.22, 1, 0.36, 1],
          delay: 0.2 
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageTransition;