
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedBlobProps {
  className?: string;
  animationDuration?: number;
}

const AnimatedBlob: React.FC<AnimatedBlobProps> = ({ className, animationDuration = 30 }) => {
  return (
    <motion.div
      className={`rounded-full filter blur-3xl opacity-50 ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 90, 0],
        x: ['0%', '10%', '-10%', '0%'],
        y: ['0%', '-10%', '10%', '0%'],
      }}
      transition={{
        duration: animationDuration,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'mirror',
      }}
    />
  );
};

export default AnimatedBlob;
