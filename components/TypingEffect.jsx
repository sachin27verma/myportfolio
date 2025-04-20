'use client'
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const typingEffect = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const typingCharacter = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const TypingEffect = ({ text, className, isVisible }) => {
  // Extract font class (assuming it contains 'monoton' if it's the Monoton font)
  const [fontClass, setFontClass] = useState('');
  
  useEffect(() => {
    if (className) {
      // Find the class that contains 'monoton' (case insensitive)
      const classes = className.split(' ');
      const monotonClass = classes.find(cls => cls.toLowerCase().includes('monoton'));
      setFontClass(monotonClass || '');
    }
  }, [className]);

  return (
    <motion.div 
      initial="hidden" 
      animate={isVisible ? "visible" : "hidden"} 
      variants={typingEffect} 
      className={className}
    >
      {text.split("").map((char, index) => (
        <motion.span 
          key={index} 
          variants={typingCharacter}
          // Apply the Monoton font class to each character span
          className={fontClass}
          style={{ fontFamily: 'inherit' }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TypingEffect;
