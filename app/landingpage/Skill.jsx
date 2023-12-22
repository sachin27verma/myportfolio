"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  Cpp,
  javascript,
  tailwind,
  Html,
  Mongodb,
  express,
  react,
  figma,
  canva,
  nextjs,
  firebase,
  nodejs,
  vscode,
  github,
} from "./skillbadge";
import technologies from "./skillbadge";
import SkillCard from "./Skillcard";

export default function Skill() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className="bg-[#1d0039] py-4  ">
        <div className=" digital-font text-3xl text-center text-[#FFD700]">
          Tools & Skills
        </div>
        <div className="w-full md:w-[50%] mx-auto flex  justify-center items-center flex-wrap gap-6 my-3">
          {technologies.map((el) => (
            <SkillCard key={el.id} badge={el.name} level={`${el.level}%`} />

          ))}
        </div>
      </div>
    </>
  );
}
