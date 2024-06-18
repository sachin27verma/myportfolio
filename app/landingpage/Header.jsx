"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ListIcon from "@mui/icons-material/List";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import "../../styles/fonts.css";
import Link from "next/link";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import Themetoggle from "../../components/Themetoggle";
import { IoSchool } from "react-icons/io5";
import { GoProjectSymlink } from "react-icons/go";
import { SiAboutdotme } from "react-icons/si";
import { MdConnectWithoutContact } from "react-icons/md";
import { Display } from "react-7-segment-display";

const Header = () => {
  const scrolltoHash = (element_id) => {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const [menu, setMenu] = useState(false);

  const handleMenuToggle = () => {
    setMenu((prevState) => !prevState);
  };

  const [hover1, ishoverd1] = useState(false);
  const [hover2, ishoverd2] = useState(false);
  const [hover3, ishoverd3] = useState(false);
  const variants = {
    open: {
      width: "16rem",
      transition: {
        damping: 40,
        ease: [0.17, 0.67, 0.83, 0.67],
      },
    },
    closed: {
      width: "16rem",
      transition: {
        damping: 40,
      },
    },
  };
  const [time, setTime] = useState("");
  const [greeting, setGreeting] = useState("");

  // Show live time and date
  // Inside useEffect
  // Inside useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString([], { hour12: false }); // Use 24-hour format
      setTime(currentTime);

      // Determine the greeting message based on the time
      const currentHour = parseInt(currentTime.split(":")[0], 10);

      if (currentHour >= 4 && currentHour < 12) {
        setGreeting("🏋️‍♀️");
      } else if (currentHour >= 12 && currentHour < 16) {
        setGreeting("👨‍💻");
      } else if (currentHour >= 16 && currentHour < 20) {
        setGreeting("🤸‍♂️");
      } else {
        setGreeting("😴");
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {!menu ? (
        <motion.div className="text-gray-400 dark:text-[#FFD700] w-full relative z-10">
          <div className="flex justify-between items-center align-middle py-2 relative w-full px-3">
            <div className="flex md:bg-purple-950 shadow-lg p-2 w-2/5 md:w-[12%] rounded-lg">
              <div className="w-auto hidden md:flex items-center">
                <Image
                  src="/p2.png"
                  height={45}
                  width={45}
                  className="aspect-square rounded-full"
                  alt="profile image"
                />
              </div>
              <motion.div
                whileTap={{
                  scale: 0.8,
                  rotate: -90,
                  borderRadius: "100%",
                }}
                className="ml-2 text-center logo text-[#FFD700]">
                <p className="font-unifraktur text-3xl tracking-wider">
                  triflate
                </p>
                <p className="text-xs hidden md:block">SACHIN VERMA</p>
              </motion.div>
            </div>
            <div  className=" md:flex absolute z-10 rotate-90 md:rotate-0 translate-y-32 -translate-x-32 md:translate-x-44 md:translate-y-0 ">
                  {/* <p className="text-xl font-bold text-center animate-pulse">
                    {greeting}
                  </p> */}
                 <div className="flex gap-0 ">
                 <Display value={time.slice(0, 2)} padding='0' className= 'inline-block m-0 p-0' width='10' height="15" count={2} style={{"padding":'0px'}} />
  <Display value={time.slice(3, 5)} height="15" count={2} />
  <Display value={time.slice(6, 8)} height="15" count={2} />
                 </div>
                  
                  
                </div>
            <div className="hidden md:flex justify-around items-center w-[40%]">
              {/* Show date and time */}
              <div className=" flex justify-center items-center  ">
                {/* // show indian flag emoji */}
                <p className=" px-3 mr-3 text-xl">
                  <Link href='https://www.civitatis.com/blog/en/facts-about-india/'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 64 64">
                    <path
                      fill="#f2b200"
                      d="M31.8 2c-13 0-24.1 8.4-28.2 20h56.6C56 10.4 44.9 2 31.8 2"
                    />
                    <path
                      fill="#83bf4f"
                      d="M31.8 62c13.1 0 24.2-8.3 28.3-20H3.6c4.1 11.7 15.2 20 28.2 20"
                    />
                    <path
                      fill="#fff"
                      d="M3.6 22c-1.1 3.1-1.7 6.5-1.7 10s.6 6.9 1.7 10h56.6c1.1-3.1 1.7-6.5 1.7-10s-.6-6.9-1.7-10z"
                    />
                    <circle cx="31.8" cy="32" r="8" fill="#428bc1" />
                    <circle cx="31.8" cy="32" r="7" fill="#fff" />
                    <g fill="#428bc1">
                      <circle cx="29.2" cy="25.5" r=".5" />
                      <circle cx="27.6" cy="26.4" r=".5" />
                      <circle cx="26.3" cy="27.7" r=".5" />
                      <circle cx="25.4" cy="29.3" r=".5" />
                      <circle cx="24.9" cy="31.1" r=".5" />
                      <circle cx="24.9" cy="32.9" r=".5" />
                      <circle cx="25.4" cy="34.7" r=".5" />
                      <circle cx="26.3" cy="36.3" r=".5" />
                      <circle cx="27.6" cy="37.6" r=".5" />
                      <circle cx="29.2" cy="38.5" r=".5" />
                      <circle cx="30.9" cy="38.9" r=".5" />
                      <path d="M32.3 39c0-.3.2-.5.4-.6c.3 0 .5.2.6.4c0 .3-.2.5-.4.6c-.4.1-.6-.1-.6-.4" />
                      <circle cx="34.5" cy="38.5" r=".5" />
                      <circle cx="36.1" cy="37.6" r=".5" />
                      <circle cx="37.4" cy="36.3" r=".5" />
                      <circle cx="38.3" cy="34.7" r=".5" />
                      <circle cx="38.8" cy="32.9" r=".5" />
                      <path d="M38.8 31.6c-.3 0-.5-.2-.6-.4c0-.3.2-.5.4-.6c.3 0 .5.2.6.4c.1.3-.1.5-.4.6" />
                      <circle cx="38.3" cy="29.3" r=".5" />
                      <circle cx="37.4" cy="27.7" r=".5" />
                      <circle cx="36.1" cy="26.4" r=".5" />
                      <path d="M35 25.7c-.1.3-.4.4-.7.3c-.3-.1-.4-.4-.3-.7c.1-.3.4-.4.7-.3c.3.2.4.5.3.7m-1.8-.6c0 .3-.3.5-.6.4c-.3 0-.5-.3-.4-.6c0-.3.3-.5.6-.4c.3.1.5.4.4.6m-1.8-.1c0 .3-.2.5-.4.6c-.3 0-.5-.2-.6-.4c0-.3.2-.5.4-.6c.3-.1.6.1.6.4" />
                      <circle cx="31.8" cy="32" r="1.5" />
                      <path d="m31.8 25l-.2 4.3l.2 2.7l.3-2.7zm-1.8.2l.9 4.3l.9 2.5l-.4-2.7z" />
                      <path d="m28.3 25.9l2 3.9l1.5 2.2l-1.1-2.5zM26.9 27l2.9 3.3l2 1.7l-1.7-2.1z" />
                      <path d="m25.8 28.5l3.6 2.4l2.4 1.1l-2.2-1.6z" />
                      <path d="m25.1 30.2l4.1 1.3l2.6.5l-2.5-.9zm-.3 1.8l4.4.2l2.6-.2l-2.6-.2z" />
                      <path d="m25.1 33.8l4.2-.9l2.5-.9l-2.6.5zm.7 1.7l3.8-1.9l2.2-1.6l-2.4 1.1z" />
                      <path d="m26.9 36.9l3.2-2.8l1.7-2.1l-2 1.7zm1.4 1.2l2.4-3.7l1.1-2.4l-1.5 2.2z" />
                      <path d="m30 38.8l1.4-4.1l.4-2.7l-.9 2.5zm1.8.2l.3-4.3l-.3-2.7l-.2 2.7zm1.8-.2l-.8-4.3l-1-2.5l.5 2.7z" />
                      <path d="m35.3 38.1l-1.9-3.9l-1.6-2.2l1.2 2.5zm1.5-1.2l-2.9-3.2l-2.1-1.7l1.8 2.1z" />
                      <path d="m37.9 35.5l-3.6-2.4l-2.5-1.1l2.2 1.6zm.7-1.7l-4.1-1.3l-2.7-.5l2.6.9zm.2-1.8l-4.3-.3l-2.7.3l2.7.2zm-.2-1.8l-4.2.9l-2.6.9l2.7-.5z" />
                      <path d="M37.9 28.5L34 30.4L31.8 32l2.5-1.1zm-1.1-1.4l-3.2 2.8l-1.8 2.1l2.1-1.7z" />
                      <path d="M35.3 25.9L33 29.6L31.8 32l1.6-2.2z" />
                      <path d="m33.7 25.2l-1.4 4.1l-.5 2.7l1-2.5z" />
                    </g>
                  </svg>
                  </Link>
                </p>
              
                <p className=" px-3 text-4xl"> <Link href='https://www.svnit.ac.in/'><IoSchool/></Link>  </p>
              </div>

              <Link
                href="/uploadproject"
                className="font-semibold cursor-pointer hover:scale-105 dark:hover:text-yellow-300 hover:text-gray-500">
                <DriveFolderUploadIcon className="text-4xl" />
                {/* <hr className="transition-transform h-1 dark:bg-[#FFD700] bg-gray-400 rounded-xl"></hr> */}
              </Link>

              <div
                onClick={() => scrolltoHash("project")}
                className=" cursor-pointer text-3xl font-bold"
                onMouseEnter={() => ishoverd1(true)}
                onMouseLeave={() => ishoverd1(false)}>
                   
                <GoProjectSymlink/>
                {/* <hr
                  className={`${
                    hover1 ? "scale-x-100" : "scale-x-0"
                  } transition-transform h-1 dark:bg-[#FFD700] bg-gray-400 rounded-xl`}></hr> */}
              </div>
              <div
                onClick={() => scrolltoHash("aboutme")}
                className="text-md font-semibold cursor-pointer text-3xl"
                onMouseEnter={() => ishoverd2(true)}
                onMouseLeave={() => ishoverd2(false)}>
              <SiAboutdotme/>
                {/* <hr
                  className={`${
                    hover2 ? "scale-x-100" : "scale-x-0"
                  } transition-transform h-1 dark:bg-[#FFD700] bg-gray-400 rounded-xl`}></hr> */}
              </div>
              <div
                onClick={() => scrolltoHash("contact")}
                className="text-md font-semibold cursor-pointer text-3xl"
                onMouseEnter={() => ishoverd3(true)}
                onMouseLeave={() => ishoverd3(false)}>
                <MdConnectWithoutContact/>
                {/* <hr
                  className={`${
                    hover3 ? "scale-x-100" : "scale-x-0"
                  } transition-transform h-1 dark:bg-[#FFD700] bg-gray-400 rounded-xl`}></hr> */}
              </div>
              <div>
                <Themetoggle />
              </div>

              <div className="p-2 border-2 border-gray-100 bg-gray-100 rounded-md shadow-md hover:shadow-lg cursor-pointer transition-transform transform hover:scale-105">
                <Link href="https://drive.google.com/file/d/1nDIzzp7o7bA8ZXhCINkROLu70y-oF7eW/view?usp=sharing">
                  <p
                    className="text-lg font-bold text-[#1d0039]"
                    target="blank">
                    Resume
                  </p>
                </Link>
              </div>
            </div>
            <div className="flex md:hidden w-[15%] relative">
              <p>
                <ListIcon
                  className="text-4xl cursor-pointer hover:rounded-full hover:shadow-inner hover:scale-105"
                  onClick={handleMenuToggle}
                />
              </p>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          animate="closed"
          variants={variants}
          className="flex absolute z-3 justify-around dark:text-[#FFD770] text-gray-400 bg-gray-700 w-full h-[400px]"
          style={{ zIndex: "5" }}>
          <div className="h-full py-4">
            <ul className="list-disc flex flex-col gap-4">
              <li
                className="text-md font-semibold cursor-pointer hover:scale-105"
                onClick={() => scrolltoHash("project")}>
                Projects
              </li>
              <li
                className="text-md font-semibold cursor-pointer hover:scale-105"
                onClick={() => scrolltoHash("aboutme")}>
                About Me
              </li>
              <li
                className="text-md font-semibold cursor-pointer hover:scale-105"
                onClick={() => scrolltoHash("contact")}>
                Contact Me
              </li>
              <li>
                <Themetoggle />
              </li>

              <Link href="https://drive.google.com/file/d/1nDIzzp7o7bA8ZXhCINkROLu70y-oF7eW/view?usp=sharing">
                <p className="text-lg font-bold text-[#1d0039]" target="blank">
                  Resume
                </p>
              </Link>

              <Link
                href="/uploadproject"
                className="font-semibold cursor-pointer hover:scale-105 hover:text-yellow-300">
                <DriveFolderUploadIcon className="text-4xl" />
                <hr className="transition-transform h-1 dark:bg-[#FFD700] bg-gray-700 rounded-xl"></hr>
              </Link>
            </ul>
          </div>

          {/* // flag */}

          <div className="py-4 text-4xl">
            <CancelPresentationIcon
              className="font-bold cursor-pointer hover:scale-105 hover:brightness-110"
              onClick={handleMenuToggle}
            />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Header;
