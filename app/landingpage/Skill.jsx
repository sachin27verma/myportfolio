"use client";
import React,{useState} from "react";
import { motion } from "framer-motion";
import technologies from "./skillbadge";
import SkillCard from "./Skillcard";
import Section from '../../components/Section/Section';
import { Monoton } from 'next/font/google';

const monoton = Monoton({ subsets: ['latin'], weight: '400' });

const generateFloatingAnimation = () => {
  const getRandomPosition = () => Math.random() * 20 - 10; // generates a random number between -10 and 10
  return {
    animate: {
      y: [0, getRandomPosition(), getRandomPosition(), getRandomPosition(), getRandomPosition(), 0],
      x: [0, getRandomPosition(), getRandomPosition(), getRandomPosition(), getRandomPosition(), 0],
      transition: {
        duration: Math.random() * 5 + 5, // random duration between 5 and 10 seconds
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay: Math.random() * 2, // random delay up to 2 seconds
      },
    },
  };
};





export default function Skill() {

 

  return (
    <Section>
      <div className="py-4">
        <div className={`text-xl md:text-4xl text-center tracking-wide my-4 mb-6 ${monoton.className}`}>
          Tools & Skills
        </div>
        <div className="w-full md:w-3/6 p-4 overflow-hidden mx-auto flex flex-wrap justify-center items-center gap-6 my-3">
          {technologies.map((el) => (
            <motion.div
              key={el.id}
              className="flex gap-6"
              {...generateFloatingAnimation()}
              
              // animate={hovered === el.id ? collisionEffect : {}}
            >
              <SkillCard badge={el.name} />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
