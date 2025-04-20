'use client'
import React, { useState, useEffect, useRef } from "react";
import "../../styles/fonts.css";
import Image from "next/image";
import { Monoton } from 'next/font/google';
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import TypingEffect from '../../components/TypingEffect';
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { FaGraduationCap, FaAward, FaCode, FaUniversity } from "react-icons/fa";

const monoton = Monoton({ subsets: ['latin'], weight: '400' });

import Section from '../../components/Section/Section';
import Link from "next/link";

export default function About() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <Section id="about" className="about">
      <div ref={ref}>
        <div id='aboutme' className="relative py-8 block">
          <div className="relative mb-12">
          <div className={`text-xl md:text-4xl text-center tracking-wide my-4 mb-6 ${monoton.className}`}>
          About Me
        </div>
            <motion.div 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-[#FFD700] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: isVisible ? "100px" : 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>

          <div className="flex text-gray-400 dark:text-[#FFD700] flex-col md:flex-row items-center justify-center gap-8 p-6 md:p-12 bg-gray-800/20 dark:bg-purple-900/10 rounded-xl shadow-lg backdrop-blur-sm">
            <div className="w-full flex justify-center items-center md:w-2/5 lg:w-1/3">
              <div className="relative">
                {/* Decorative elements */}
                <motion.div 
                  className="absolute -top-4 -left-4 w-full h-full border-2 border-[#FFD700] rounded-md z-0"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
                <motion.div 
                  className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#FFD700] rounded-md z-0"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                />
                
                {/* Profile image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                  transition={{ duration: 0.8 }}
                  className="relative z-10 bg-gray-800 dark:bg-purple-900/30 p-2 rounded-md shadow-xl"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="overflow-hidden rounded-md">
                    <Image
                      src="/profile.jpg"
                      alt="Profile Image"
                      width={300}
                      height={300}
                      className="rounded-md transition-all duration-700 hover:grayscale-0 grayscale hover:scale-110"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="w-full md:w-3/5 lg:w-2/3 grid gap-6">
              <motion.div 
                className="grid text-center md:text-left gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-[#FFD700] pb-1">
                  <TypingEffect text="Sachin Verma" isVisible={isVisible} />
                </h2>
                <p className="text-lg text-gray-400">
                  <TypingEffect text="Final Year Computer Science Student" isVisible={isVisible} />
                </p>
              </motion.div>
              
              <motion.hr 
                className="border-gray-600 dark:border-purple-800"
                initial={{ width: 0 }}
                animate={{ width: isVisible ? "100%" : 0 }}
                transition={{ duration: 0.8 }}
              />
              <motion.div 
                className="grid gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center gap-3">
                  <FaGraduationCap className="text-2xl text-[#FFD700]" />
                  <h3 className="text-xl font-semibold">Academic Details</h3>
                </div>
                
                <div className="bg-gray-800/40 dark:bg-purple-900/20 rounded-lg p-4 shadow-inner">
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-3 text-gray-300">
                    <div className="flex items-center gap-2 font-medium">
                      <span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>
                      <span>Degree:</span>
                    </div>
                    <div>Bachelor of Technology in Computer Science</div>
                    
                    <div className="flex items-center gap-2 font-medium">
                      <span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>
                      <span>University:</span>
                    </div>
                    <div>Sardar Vallabhbhai National Institute of Technology, Surat (SVNIT)</div>
                    
                    <div className="flex items-center gap-2 font-medium">
                      <span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>
                      <span>Graduation Year:</span>
                    </div>
                    <div>2025</div>
                    
                    <div className="flex items-center gap-2 font-medium">
                      <span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>
                      <span>CGPA:</span>
                    </div>
                    <div>8.01 / 10.0</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.hr 
                className="border-gray-600 dark:border-purple-800"
                initial={{ width: 0 }}
                animate={{ width: isVisible ? "100%" : 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              <motion.div 
                className="grid gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex items-center gap-3">
                  <FaAward className="text-2xl text-[#FFD700]" />
                  <h3 className="text-xl font-semibold">Achievements & Certifications</h3>
                </div>
                
                <div className="bg-gray-800/40 dark:bg-purple-900/20 rounded-lg p-4 shadow-inner">
                  <div className="grid gap-4">
                    <div className="achievement-card">
                      <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                        <h4 className="font-medium text-gray-300">Airbus Aerothon 6.0</h4>
                        <div className="flex-grow"></div>
                        <Link 
                          href="https://github.com/sachin27verma/Aerothon" 
                          className="flex items-center gap-1 text-sm bg-gray-700 dark:bg-purple-900/50 px-3 py-1 rounded-full hover:bg-gray-600 dark:hover:bg-purple-800 transition-colors"
                        >
                          <GitHubIcon className="text-sm" />
                          <span>View Project</span>
                        </Link>
                      </div>
                      <p className="text-sm text-gray-400">Selected among 20,000+ participants. Shortlisted in top 800 individuals.</p>
                    </div>
                    
                    <div className="achievement-card">
                      <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                        <h4 className="font-medium text-gray-300">Dotshash 7.0</h4>
                        <div className="flex-grow"></div>
                        <Link 
                          href="https://github.com/XFRCSD45/DevDots" 
                          className="flex items-center gap-1 text-sm bg-gray-700 dark:bg-purple-900/50 px-3 py-1 rounded-full hover:bg-gray-600 dark:hover:bg-purple-800 transition-colors"
                        >
                          <GitHubIcon className="text-sm" />
                          <span>View Project</span>
                        </Link>
                      </div>
                      <p className="text-sm text-gray-400">Out of 1300+ applicants, our team secured a spot among the elite 50 selected teams.</p>
                    </div>
                    
                    <div className="achievement-card">
                      <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                        <h4 className="font-medium text-gray-300">Google Cloud Skills Boost Challenge</h4>
                        <div className="flex-grow"></div>
                        <Link 
                          href="https://drive.google.com/file/d/1GC9D7QZ52hL4fwW1BAO3bHSJgvw4ixHO/view" 
                          className="flex items-center gap-1 text-sm bg-gray-700 dark:bg-purple-900/50 px-3 py-1 rounded-full hover:bg-gray-600 dark:hover:bg-purple-800 transition-colors"
                        >
                          <LinkIcon className="text-sm" />
                          <span>View Certificate</span>
                        </Link>
                      </div>
                      <p className="text-sm text-gray-400">Successfully completed the Google Cloud Skills Boost Challenge program.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
