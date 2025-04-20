"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaMemory } from "react-icons/fa";
import Section from '../../components/Section/Section';
import { Monoton } from 'next/font/google';

const monoton = Monoton({ subsets: ['latin'], weight: '400' });

export default function Memories() {
  return (
    <div id="memories" className="fancy-border h-auto transition-transform">
      <div className={`text-xl md:text-4xl text-center tracking-wide my-4 mb-6 ${monoton.className}`}>
        MEMORIES
      </div>
      <Section>
        <div className="w-full md:w-5/6 mx-auto flex flex-col items-center justify-center py-8">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative"
          >
            <Link href="/memories">
              <div className="flex flex-col items-center justify-center cursor-pointer">
                <FaMemory className="text-8xl md:text-9xl text-gray-400 dark:text-[#FFD700] button" />
                <p className="mt-4 text-xl md:text-2xl font-semibold text-gray-400 dark:text-[#FFD700]">
                  Our Journey
                </p>
                <p className="mt-2 text-sm md:text-base text-gray-500 dark:text-gray-300 max-w-md text-center">
                  Click to explore the memories we've created together over the past four years
                </p>
              </div>
            </Link>
          </motion.div>
        </div>
      </Section>
      <hr className="mt-3 w-full md:w-5/6 mx-auto bg-[#1d0039] dark:bg-[#FFD700]" />
    </div>
  );
}
