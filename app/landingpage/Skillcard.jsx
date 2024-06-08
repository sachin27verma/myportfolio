"use client"
import Image from 'next/image';
import React, { useState } from 'react';

export default function SkillCard({ badge, level }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    //glowing effect on hover
    <div
      className="h-[125px] w-[125px] relative flex justify-center items-center  rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:rotate-12 bg-gradient-radial from-gray-400 via-gray-500 to-gray-600 dark:from-[#FFD700] dark:via-[#c196d6] dark:to-[#8442cb] dark:bg-[#89739f]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* <Image src={"/tradbc.png"} fill className="hover:animate-spin" /> */}
      {!isHovered && <div className="absolute z-6">{badge}</div>}
      {isHovered && (
        <div className=" rounded-full p-3 aspect-square flex justify-center items-center text-center font-extrabold hover:z-9 absolute text-md  text-white dark:text-black">
          {level}
        </div>
      )}
    </div>
  );
}

