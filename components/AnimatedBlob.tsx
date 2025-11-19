
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedBlobProps {
  className?: string;
  animationDuration?: number;
}

const AnimatedBlob: React.FC<AnimatedBlobProps> = ({ className, animationDuration = 30 }) => {
  return (
    <motion.div
      className={`rounded-full filter blur-3xl opacity-50 transform-gpu ${className}`}
      animate={{
        scale: [1, 1.1, 1], // Reduced scale range for better performance
        x: ['0%', '5%', '-5%', '0%'], // Reduced movement range
        y: ['0%', '-5%', '5%', '0%'],
      }}
      transition={{
        duration: animationDuration,
        ease: 'linear', // Linear is less computationally expensive than complex beziers
        repeat: Infinity,
        repeatType: 'mirror',
      }}
      style={{
        willChange: 'transform', // Hint to browser to promote to own layer
      }}
    />
  );
};

export default AnimatedBlob;
