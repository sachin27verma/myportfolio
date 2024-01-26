'use client'
import React,{useRef} from "react";
import "../../styles/fonts.css";
import Image from "next/image";

import Section from '../../components/Section/Section'

export default function About() {
  
  return (
    <Section>
    <div>
      <div id='aboutme' className=" relative py-4 block ">
        <div className=" digital-font text-3xl text-center  text-gray-400 dark:text-[#FFD700]">
          About Me
        </div>
        <div 
          className=" flex flex-col-reverse md:flex-row justify-center md:w-4/5 w-full   items-center md:mx-auto  my-2 ">
          <div className=" w-full md:w-[50%] flex justify-center items-center">
            <p className="  tracking-wider  text-md  break-all  leading-9 first-letter:text-6xl first-letter:inline-block first-letter:float-left first-letter:mr-15 text-gray-400 dark:text-[#ffffff] ">
            👋 Hello there! I'm <strong className=" text-[#FFD700]">Sachin Verma</strong>, a passionate third-year Computer
              Science student at Sardar Vallabhbhai National Institute of
              Technology <strong className=" text-[#FFD700]">(SVNIT)</strong> in Surat. Originally from the vibrant city of 
              <strong className=" text-[#FFD700]"> Gaya</strong> in Bihar, I'm on an exciting journey to explore the
              ever-evolving world of technology
            </p>
          </div>
          <div className=" relative h-[300px] w-full md:w-[50%]">
            <Image src={"/p5.jpg"} fill className=" object-contain object-bottom  contrast-125 brightness-90 saturate-125" alt='/' />
          </div>
        </div>
      </div>
      </div>
    </Section>
  );
}
