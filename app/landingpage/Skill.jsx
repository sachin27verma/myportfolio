"use client";
import React, { useState } from "react";
import technologies from "./skillbadge";
import SkillCard from "./Skillcard";
import Section from '../../components/Section/Section'

export default function Skill() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Section>
      <div 
 className=" py-4  ">
        <div className=" digital-font text-3xl text-center text-gray-400 dark:text-[#FFD700]">
          Tools & Skills
        </div>
        <div className="w-full md:w-[50%] mx-auto flex  justify-center items-center flex-wrap gap-6 md:gap-6 my-3">
          {technologies.map((el) => (
            <SkillCard key={el.id} badge={el.name} level={`${el.level}%`} />
          ))}
        </div>
      </div>
    </Section>
  );
}
