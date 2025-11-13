
import React from 'react';
import { motion } from 'framer-motion';
import useScrollProgress from '../hooks/useScrollProgress';

const ScrollProgress: React.FC = () => {
  const completion = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-red-500 transform origin-left z-50"
      style={{ scaleX: completion }}
    />
  );
};

export default ScrollProgress;
