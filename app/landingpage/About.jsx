'use client'
import React, { useState, useEffect, useRef } from "react";
import "../../styles/fonts.css";
import Image from "next/image";
import { Monoton } from 'next/font/google';
import { motion, useAnimation } from "framer-motion";
import TypingEffect from '../../components/TypingEffect'; // Import the custom TypingEffect component
import LinkIcon from "@mui/icons-material/Link";
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
        <div id='aboutme' className="relative py-4 block " style={{
          // backgroundImage: 'url("/straw.png")',
          // backgroundRepeat: "no-repeat",
          // // backgroundSize: "cover",
          // backgroundPosition: "center",
          // // backgroundAttachment: "fixed",
          // backdropFilter: "blur(10px)",
          // backgroundSize: "10% 10%",
          // backgroundBlendMode: "darken",
          // backgroundPosition:"up 10px right 10px"
        }}>
          <TypingEffect 
            text="About Me"
            className={`text-xl md:text-4xl text-center tracking-wide my-4 mb-6 ${monoton.className}`}
            isVisible={isVisible}
          />

          <div className="flex text-gray-400 dark:text-[#FFD700] flex-col md:flex-row items-center justify-center gap-8 p-6 md:p-12 bg-background rounded-lg shadow-lg">
            <div className="w-full flex justify-center items-center md:w-1/2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                

                
                className={`rounded-md aspect-square contrast-125 brightness-90 saturate-125  object-center object-scale-down   ring-8 ring-offset-gray-200 ring-gray-500 `}
              >
                <Image
                  src="/profile.jpg"
                  alt="Profile Image"
                  width={300}
                  height={300}
                  className="rounded-md grayscale "

                />
              </motion.div>
            </div>
            <div className="w-full md:w-1/2 grid gap-4">
              <div className="grid text-center md:text-left gap-2">
                <TypingEffect text="Sachin Verma" className="text-2xl font-bold" isVisible={isVisible} />
                <TypingEffect text="(Final Year)" className="text-muted-foreground" isVisible={isVisible} />
              </div>
              <hr />
              <div className="grid gap-2">
                <TypingEffect text="Academic Details" className="text-xl font-semibold" isVisible={isVisible} />
                <div className="grid gap-2 text-muted-foreground">
                  <div className="grid grid-cols-[1fr_2fr] gap-2">
                    <TypingEffect text="Degree:" isVisible={isVisible} />
                    <TypingEffect text="Bachelor of Technology in Computer Science" isVisible={isVisible} />
                  </div>
                  <div className="grid grid-cols-[1fr_2fr] gap-2">
                    <TypingEffect text="University:" isVisible={isVisible} />
                    <TypingEffect text="Sardar Vallabhbhai National Institute of Technology, Surat (SVNIT)" isVisible={isVisible} />
                  </div>
                  <div className="grid grid-cols-[1fr_2fr] gap-2">
                    <TypingEffect text="Graduation Year:" isVisible={isVisible} />
                    <TypingEffect text="2025" isVisible={isVisible} />
                  </div>
                  <div className="grid grid-cols-[1fr_2fr] gap-2">
                    <TypingEffect text="CGPA:" isVisible={isVisible} />
                    <TypingEffect text="8.04 / 10.0" isVisible={isVisible} />
                  </div>
                </div>
              </div>
              <hr />
              <div className="grid gap-2">
                <TypingEffect text="Achievements & Certifications" className="text-xl font-semibold" isVisible={isVisible} />
                <div className="grid gap-2 text-muted-foreground">
                <ul className="list-disc pl-5">
  <li className=" list-disc whitespace-normal break-words">
    <TypingEffect 
      text="Selected for Airbus Aerothon 6.0 among 20,000+ participants. Shortlisted in top 800 individuals." 
      isVisible={isVisible} 
    />
    
  </li>
  <Link href="https://github.com/sachin27verma/Aerothon"> <LinkIcon className="rotate-0 text-white" /></Link>
  
</ul>



<ul className="list-disc pl-5">
  <li className=" list-disc whitespace-normal break-words">
    <TypingEffect 
      text="Out of a competitive pool of 1300+ applicants, our team was honored to secure a coveted spot in
Dotshash 7.0, standing among the elite 50 selected teams." 
      isVisible={isVisible} 
    />
  </li>
  <Link href="https://github.com/XFRCSD45/DevDots"> <LinkIcon className="rotate-0 text-white" /></Link>
</ul>

<ul className="list-disc pl-5">
  <li className=" list-disc whitespace-normal break-words">
    <TypingEffect 
      text="Google Cloud Skills Boost Challange" 
      isVisible={isVisible} 
    />
  </li>
  <Link href="https://drive.google.com/file/d/1GC9D7QZ52hL4fwW1BAO3bHSJgvw4ixHO/view"> <LinkIcon className="rotate-0 text-white" /></Link>
</ul>



                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
