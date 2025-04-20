"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import Link from "next/link";
import FastForwardIcon from "@mui/icons-material/FastForward";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { db } from "../../firebase/Firebase";
import { collection, query, onSnapshot } from "firebase/firestore";
import Section from '../../components/Section/Section';
import { Monoton } from 'next/font/google';
const monoton = Monoton({ subsets: ['latin'], weight: '400' });


export default function Project() {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  // Auto-slide interval (in milliseconds)
  const autoSlideInterval = 5000;
  
  const variants = {
    show: {
      opacity: 1,
      x: 0,
      // X:0,
      transition: {
        ease: "easeIn",
        duration: 0.7
      }
    },
    hide: {
      x: -150,
      // x:-20,
      opacity: 0
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "project_details"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let itemsArr = [];

        querySnapshot.forEach((doc) => {
          itemsArr.push({ ...doc.data(), id: doc.id });
        });

        setItem(itemsArr);
        setLoading(false);
      });

      return () => unsubscribe();
    };

    fetchData();
  }, []);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0 1"],
  });

  const n = item.length;

  // Auto-slide effect
  useEffect(() => {
    let interval;
    if (autoPlay && n > 0) {
      interval = setInterval(() => {
        setState((prevState) => (prevState + 1) % n);
      }, autoSlideInterval);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoPlay, n]);

  const handleClickForward = () => {
    setState((prevState) => (prevState + 1) % n);
  };

  const handleClickBackward = () => {
    setState((prevState) => (prevState - 1 + n) % n);
  };
  
  const toggleAutoPlay = () => {
    setAutoPlay(!autoPlay);
  };
  
  // Go to a specific slide
  const goToSlide = (index) => {
    setState(index);
  };
  
  // Touch handlers for swipe functionality
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      // Swipe left, go to next slide
      handleClickForward();
    }
    
    if (touchEnd - touchStart > 100) {
      // Swipe right, go to previous slide
      handleClickBackward();
    }
  };

  return (
    <>
      <div id='project' className="fancy-border h-auto transition-transform relative overflow-hidden">
        <div className={`text-xl md:text-4xl text-center tracking-wide my-4 mb-6 ${monoton.className}`}>
          PROJECTs
        </div>
        <div className="w-full mx-auto  gap-3 relative">
          {loading || item.length === 0 ? (
            // <h1 className="flex justify-center items-center">Loading....</h1>
            
      <div className=" flex justify-center items-center h-19 w-19 text-3xl text-violet-700">

    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" ><g><path fill="#888888" d="M7 3H17V7.2L12 12L7 7.2V3Z"><animate id="eosIconsHourglass0" fill="freeze" attributeName="opacity" begin="0;eosIconsHourglass1.end" dur="2s" from="1" to="0"></animate></path><path fill="#888888" d="M17 21H7V16.8L12 12L17 16.8V21Z"><animate fill="freeze" attributeName="opacity" begin="0;eosIconsHourglass1.end" dur="2s" from="0" to="1"></animate></path><path fill="#888888" d="M6 2V8H6.01L6 8.01L10 12L6 16L6.01 16.01H6V22H18V16.01H17.99L18 16L14 12L18 8.01L17.99 8H18V2H6ZM16 16.5V20H8V16.5L12 12.5L16 16.5ZM12 11.5L8 7.5V4H16V7.5L12 11.5Z"></path><animateTransform id="eosIconsHourglass1" attributeName="transform" attributeType="XML" begin="eosIconsHourglass0.end" dur="0.5s" from="0 12 12" to="180 12 12" type="rotate"></animateTransform></g></svg></div>

          ) : (
            <Section>
            <AnimatePresence mode="wait">
              <motion.div
                key={item[state].id}
                variants={variants}
                animate="show"
                initial="hide"
                exit="hide"
                className="w-full md:min-w-[300px]"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
              <p className="text-3xl font-bold text-gray-400 dark:text-[#FFD700] tracking-wider mb-5 text-center drop-shadow-lg">
                <span className="relative inline-block">
                  {item[state].name}
                  <motion.span 
                    className="absolute -bottom-2 left-0 w-full h-1 bg-[#FFD700]"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1 }}
                  />
                </span>
              </p>
              <div className="flex flex-row">
              <div className="w-full md:w-5/6 mx-auto h-auto rounded-lg relative flex flex-col md:flex-row gap-4 bg-gray-800/20 dark:bg-purple-900/10 p-4 md:p-6 rounded-xl shadow-lg">
                <div className="h-[300px] sm:h-[400px] md:h-auto w-full md:w-1/2 relative group">
                  <Image
                    key={item[state].id}
                    src={item[state].image1}
                    fill
                    // objectFit="cover"
                    className="object-full z-10 rounded-lg"
                    alt="project image"
                  />
                  <Image
                    key={item[state].id}
                    src={item[state].image2}
                    fill
                    className="object-contain scale-75 z-20 rounded-lg transition-transform transform group-hover:scale-50 group-hover:translate-x-2/4 group-hover:translate-y-2/4 group-hover:rotate-12 "
                    alt="project image"
                  />
                </div>

                <div className="w-full md:w-1/2 flex flex-col justify-between mt-4 md:mt-0">
                  <div>
                    <div className="italic bg-gray-800/30 dark:bg-purple-900/20 p-4 rounded-lg shadow-inner">
                      <svg
                        class="w-8 h-8 text-gray-400 dark:text-[#FFD700] rotate-180 inline-block mb-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 14">
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                      </svg>
                      <p
                        key={item[state].id}
                        className="tracking-wider text-md break-words leading-7 md:leading-9 text-gray-400 dark:text-[#FFD700]">
                        {item[state].description1}
                      </p>
                      <br />
                      {/* <p
                        key={item[state].id}
                        className="hidden md:flex  tracking-wider text-gray-400 dark:text-[#FFD700]  text-md break-all leading-9">
                        {item[state].description2}
                      </p> */}
                      <br className="hidden md:flex" />
                    </div>
                    <div className="tag flex gap-2 md:gap-4 flex-wrap mt-4">
                      {item[state].tags.map((el, index) => (
                        <span
                          key={index}
                          className="dark:bg-[#FFD700] bg-gray-400   px-2 rounded-xl font-semibold text-md text-gray-900 dark:text-[#1d0039]">
                          {el}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="py-3 flex gap-4 text-gray-400 dark:text-white">
                    <Link href={item[state].link1} className="bg-gray-700 dark:bg-purple-900/50 p-2 rounded-lg hover:bg-gray-600 dark:hover:bg-purple-800 transition-colors">
                      <GitHubIcon className="text-3xl" />
                    </Link>
                    <Link href={item[state].link2} className="bg-gray-700 dark:bg-purple-900/50 p-2 rounded-lg hover:bg-gray-600 dark:hover:bg-purple-800 transition-colors">
                      <LinkIcon className="text-3xl" />
                    </Link>
                  </div>
                </div>
              </div>
              </div>
             
              </motion.div>
            </AnimatePresence>
            </Section>
             
          )}

        </div>
        <hr className="mt-6 w-full md:w-5/6 mx-auto bg-[#1d0039] dark:bg-[#FFD700]" />
        
        {/* Carousel Controls */}
        <div className="flex flex-col items-center mt-4 gap-4">
          <div className="flex justify-center gap-4 text-gray-400 dark:text-[#FFD700]">
            <button 
              className="bg-gray-800 dark:bg-purple-900/50 p-2 rounded-full hover:bg-gray-700 dark:hover:bg-purple-800 transition-colors"
              onClick={handleClickBackward}
              aria-label="Previous project"
            >
              <FastRewindIcon className="text-2xl md:text-3xl" />
            </button>
            
            <button 
              className="bg-gray-800 dark:bg-purple-900/50 p-2 rounded-full hover:bg-gray-700 dark:hover:bg-purple-800 transition-colors"
              onClick={toggleAutoPlay}
              aria-label={autoPlay ? "Pause autoplay" : "Start autoplay"}
            >
              {autoPlay ? <PauseIcon className="text-2xl md:text-3xl" /> : <PlayArrowIcon className="text-2xl md:text-3xl" />}
            </button>
            
            <button 
              className="bg-gray-800 dark:bg-purple-900/50 p-2 rounded-full hover:bg-gray-700 dark:hover:bg-purple-800 transition-colors"
              onClick={handleClickForward}
              aria-label="Next project"
            >
              <FastForwardIcon className="text-2xl md:text-3xl" />
            </button>
          </div>
          
          {/* Slide indicators */}
          <div className="flex gap-2 mt-2">
            {item.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === state 
                    ? "bg-[#FFD700] w-6" 
                    : "bg-gray-400 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
