'use client'
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

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
  return (
    <motion.div initial="hidden" animate={isVisible ? "visible" : "hidden"} variants={typingEffect} className={className}>
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={typingCharacter}>
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TypingEffect;
