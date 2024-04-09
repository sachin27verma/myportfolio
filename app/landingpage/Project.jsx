"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import FastForwardIcon from "@mui/icons-material/FastForward";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import { db } from "../../firebase/Firebase";
import { collection, query, onSnapshot } from "firebase/firestore";
import Section from '../../components/Section/Section'



export default function Project() {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  

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

  const [state, setState] = useState(0);

  const handleClickForward = () => {
    setState((prevState) => (prevState + 1) % n);
  };

  const handleClickBackward = () => {
    setState((prevState) => (prevState - 1 + n) % n);
  };

  return (
    <>
      <div id='project' className=" fancy-border  h-auto transition-transform  ">
        <div className="text-center text-3xl text-gray-400 dark:text-[#FFD700] py-2 pb-0 mb-3 font-bold digital-font">
          PROJECT
        </div>
        <div className="w-full mx-auto  gap-3 relative">
          {loading || item.length === 0 ? (
            // <h1 className="flex justify-center items-center">Loading....</h1>
            
      <div className=" flex justify-center items-center h-19 w-19 text-3xl text-violet-700">

    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" ><g><path fill="#888888" d="M7 3H17V7.2L12 12L7 7.2V3Z"><animate id="eosIconsHourglass0" fill="freeze" attributeName="opacity" begin="0;eosIconsHourglass1.end" dur="2s" from="1" to="0"></animate></path><path fill="#888888" d="M17 21H7V16.8L12 12L17 16.8V21Z"><animate fill="freeze" attributeName="opacity" begin="0;eosIconsHourglass1.end" dur="2s" from="0" to="1"></animate></path><path fill="#888888" d="M6 2V8H6.01L6 8.01L10 12L6 16L6.01 16.01H6V22H18V16.01H17.99L18 16L14 12L18 8.01L17.99 8H18V2H6ZM16 16.5V20H8V16.5L12 12.5L16 16.5ZM12 11.5L8 7.5V4H16V7.5L12 11.5Z"></path><animateTransform id="eosIconsHourglass1" attributeName="transform" attributeType="XML" begin="eosIconsHourglass0.end" dur="0.5s" from="0 12 12" to="180 12 12" type="rotate"></animateTransform></g></svg></div>

          ) : (
            <Section>
            <motion.div
              key={item[state].id}
              variants={variants} animate="show" initial="hide"
              className="w-full md:min-w-[300px]">
              <p className="text-3xl font-bold  text-gray-400 dark:text-[#FFD700] tracking-wider mb-5 text-center drop-shadow-lg outline-offset-2 outline-blue-50">
                <span className="  ">{item[state].name}</span>
                
              </p> 
              <div className=" flex flex-row ">
              <div className="w-full md:w-5/6 mx-auto h-auto rounded-lg relative flex flex-col md:flex-row gap-4">
                <div className="h-[400px] md:h-[70vh] w-full md:w-1/2  relative group">
                  <Image
                    key={item[state].id}
                    src={item[state].image1}
                    fill
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

                <div className="w-full h-auto md:h-[70vh] md:w-1/2 flex flex-col justify-between">
                  <div>
                    <div className=" italic">
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
                        className="tracking-wider text-nowrap  text-md break-all leading-9 text-gray-400 dark:text-[#FFD700] ">
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
                    <div className="tag flex gap-4 flex-wrap">
                      {item[state].tags.map((el, index) => (
                        <span
                          key={index}
                          className="dark:bg-[#FFD700] bg-gray-400   px-2 rounded-xl font-semibold text-md text-gray-900 dark:text-[#1d0039]">
                          {el}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="py-3 flex gap-3 text-gray-400 dark:text-white">
                    <span>
                      <Link href={item[state].link1}>
                        <GitHubIcon className="text-4xl" />
                      </Link>
                    </span>
                    <span className="rotate-45">
                      <Link href={item[state].link2}>
                        <LinkIcon className="text-4xl" />
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
              </div>
             
            </motion.div>
          
            </Section>
             
          )}

        </div>
        <hr className="mt-3 w-full md:w-5/6 mx-auto bg-[#1d0039] dark:bg-[#FFD700]" />
        
        <div className="flex justify-center mt-2 gap-2 text-gray-400 dark:text-[#FFD700]">
            <span>
              <FastRewindIcon
                className="text-4xl cursor-pointer hover:animate-none hover:text-[#FFD700] animate-pulse hover:scale-110"
                onClick={handleClickBackward}
              />
            </span>{" "}
            <span>
              <FastForwardIcon
                className="text-4xl animate-pulse hover:animate-none cursor-pointer hover:text-[#FFD700] hover:scale-110"
                onClick={handleClickForward}
              />
            </span>
          </div>
      </div>
    </>
  );
}
