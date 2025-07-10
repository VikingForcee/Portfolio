import { motion } from "framer-motion";
import React from "react";

const FloatingParticles = () => {
  const particles = Array.from({ length: 25 }, (_, i) => {
    // Generate random starting positions
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;

    return (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-blue-400 shadow-amber-100 dark:bg-blue-300 rounded-full opacity-10"
        style={{
          left: `${startX}%`,
          top: `${startY}%`,
        }}
        animate={{
          // Animate to a new, random position relative to its start for continuous drift
          x: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0], // Larger random movement
          y: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0], // Larger random movement
          opacity: [0.1, 0.3, 0.1], // Slight fade in/out for subtlety
          scale: [1, 1.1, 1], // Subtle scaling
        }}
        transition={{
          duration: 30 + Math.random() * 20, // Much longer duration for slow movement (30-50 seconds)
          repeat: Infinity,
          repeatType: "reverse", // Ensures smooth back and forth movement without popping
          delay: Math.random() * 15, // Longer stagger delay to spread out animation starts
          ease: "linear", // Linear ease for constant speed, or 'easeInOut' for gentle acceleration/deceleration
        }}
      />
    );
  });

  return <>{particles}</>;
};

export default FloatingParticles;