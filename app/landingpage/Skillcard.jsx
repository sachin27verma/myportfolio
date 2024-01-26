"use client"
import Image from 'next/image';
import React, { useState } from 'react';

export default function SkillCard({ badge, level }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="h-[125px] w-[125px] relative flex justify-center items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image src={"/tradbc.png"} fill className="hover:animate-spin" />
      {!isHovered && <div className="absolute z-6">{badge}</div>}
      {isHovered && (
        <div className=" rounded-full p-3 aspect-square flex justify-center items-center text-center font-extrabold hover:z-9 absolute text-md text-gray-400 dark:text-white">
          {level}
        </div>
      )}
    </div>
  );
}

