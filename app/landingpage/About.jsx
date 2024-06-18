'use client'
import React,{useRef,useState} from "react";
import "../../styles/fonts.css";
import Image from "next/image";
import { Monoton } from 'next/font/google';
const monoton = Monoton({ subsets: ['latin'], weight: '400' });

import Section from '../../components/Section/Section'

export default function About() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Section>
    <div>
      <div id='aboutme' className=" relative py-4 block ">
        <div className={`text-xl md:text-4xl text-center tracking-wide my-4 mb-6 ${monoton.className} `}>
          About Me
        </div>
        <div 
          className=" flex flex-col-reverse md:flex-row justify-center md:w-4/5 w-full gap-3   items-center md:mx-auto  my-2 ">
          <div className=" w-full md:w-[50%] flex justify-center items-center">
            <p className="  tracking-wider  text-md  break-all  leading-9 first-letter:text-6xl first-letter:inline-block first-letter:float-left first-letter:mr-15 text-gray-400 dark:text-[#ffffff] ">
            👋 Hello there! I'm <strong className=" text-[#FFD700]">Sachin Verma</strong>, a passionate third-year Computer
              Science student at Sardar Vallabhbhai National Institute of
              Technology <strong className=" text-[#FFD700]">(SVNIT)</strong> in Surat. Originally from the vibrant city of 
              <strong className=" text-[#FFD700]"> Gaya</strong> in Bihar, I'm on an exciting journey to explore the
              ever-evolving world of technology
            </p>
          </div>
          <div
      className="relative h-[300px] w-full md:w-[48%] transition-transform duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered ? '0px 0px 0px rgba(255, 255, 255, 0)' : '10px 10px 5px rgba(255, 255, 255, 0.5)',
        transform: isHovered ? 'translateY(-10px) scale(0.9) ' : 'none',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
      }}
    >
      <Image
        src="/og.jpg"
        fill
        className={`object-cover aspect-square contrast-125 brightness-90 saturate-125 grayscale rounded-md ${
          isHovered ? 'filter-none scale-90' : ''
        }`}
        alt="/"
      />
    </div>
        </div>
      </div>
      </div>
    </Section>
  );
}
