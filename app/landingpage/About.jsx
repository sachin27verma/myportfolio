'use client'
import React,{useRef} from "react";
import "../../styles/fonts.css";
import Image from "next/image";
import {motion,useScroll} from 'framer-motion'

export default function About() {
  const ref=useRef(null);
  const {scrollYProgress}= useScroll({
    target:ref,
    offset:["0 1","0 1"],
  })
  return (
    <>
      <div id='aboutme' className=" bg-[#1d0039] py-4 ">
        <div className=" digital-font text-3xl text-center text-[#FFD700]">
          About Me
        </div>
        <motion.div ref={ref}
         style={{scale:scrollYProgress,opacity:scrollYProgress}}
          className=" flex flex-col-reverse md:flex-row w-4/5 mx-auto my-2 ">
          <div className=" w-full md:w-[50%] flex justify-center items-center">
            <p className="  tracking-wider  text-md break-all leading-9 first-letter:text-6xl first-letter:inline-block first-letter:float-left first-letter:mr-15 ">
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
        </motion.div>
      </div>
    </>
  );
}
