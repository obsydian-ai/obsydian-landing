
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedComponentProps {
  projectId: number;
}

const AnimatedComponent: React.FC<AnimatedComponentProps> = ({ projectId }) => {
  // Different animation styles based on project ID
  const animations = [
    // Pulsing circles
    <motion.div 
      key="circles"
      className="relative h-16 w-full"
    >
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{ 
            width: 40 - i * 10, 
            height: 40 - i * 10,
            background: `rgba(0, 0, 0, ${0.2 - i * 0.05})`,
            left: 20 + i * 20,
            top: '50%',
            y: '-50%'
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0.5,
            delay: i * 0.3
          }}
        />
      ))}
    </motion.div>,
    
    // Animated wavy lines
    <motion.div 
      key="waves"
      className="relative h-16 w-full overflow-hidden"
    >
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-black/20 w-full"
          style={{ top: 20 + i * 12 }}
          animate={{
            x: ["-10%", "10%", "-10%"]
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            delay: i * 0.5
          }}
        />
      ))}
    </motion.div>,
    
    // Animated dots grid
    <motion.div 
      key="dots"
      className="relative h-16 w-full"
    >
      <div className="grid grid-cols-4 gap-3">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="h-2 w-2 rounded-full bg-black/20"
            animate={{
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: (i % 4) * 0.2
            }}
          />
        ))}
      </div>
    </motion.div>
  ];
  
  // Select animation based on project ID
  const animationIndex = (projectId - 1) % animations.length;
  
  return animations[animationIndex];
};

export default AnimatedComponent;
