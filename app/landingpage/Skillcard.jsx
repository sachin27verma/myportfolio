"use client"
import Image from 'next/image';
import React, { useState } from 'react';

export default function SkillCard({ badge, level }) {
  const [isHovered, setIsHovered] = useState(false);

  

  return (
    <div
      className={`h-[100px] w-[100px] relative flex justify-center items-center rounded-full shadow-lg transition-transform duration-300 ease-in-out transform bg-gradient-radial from-gray-400 via-gray-500 to-gray-600 dark:from-[#FFD700] dark:via-[#c196d6] dark:to-[#8442cb] dark:bg-[#89739f] ring-4 ${
        isHovered ? 'shadow-xl ring-6 ring-white -translate-y-1 scale-110 rotate-12' : 'ring-white'
      }`}
      style={{
        boxShadow: isHovered ? '0 0 20px rgba(255, 255, 255, 0.6)' : '0 0 0 rgba(255, 255, 255, 0)',
        transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out, border 0.3s ease-in-out',
        border: isHovered ? '4px solid white' : 'none',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* <Image src={"/tradbc.png"} fill className="hover:animate-spin" /> */}
      { <div className="absolute z-6">{badge}</div>}
      {/* {isHovered && (
        <div className="rounded-full p-3 aspect-square flex justify-center items-center text-center font-extrabold absolute text-md text-white dark:text-black">
          {level}
        </div>
      )} */}
    </div>
  );
};

