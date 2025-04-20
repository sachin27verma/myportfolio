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
import { FaMemory } from "react-icons/fa";
import { Display } from "react-7-segment-display";
import { FaFilePdf } from "react-icons/fa6";
import { TbSquareToggle } from "react-icons/tb";

// Create a global variable to store the current GIF
let globalGif = "/monkeygif.gif";

// Create a custom hook to access and update the GIF
export function useGifToggle() {
  const [gif, setGif] = useState(globalGif);
  
  useEffect(() => {
    // Listen for changes to the global GIF
    const handleGifChange = () => {
      setGif(globalGif);
    };
    
    window.addEventListener('gifChanged', handleGifChange);
    return () => {
      window.removeEventListener('gifChanged', handleGifChange);
    };
  }, []);
  
  const toggleGif = () => {
    const newGif = gif === "/monkeygif.gif" ? "/gear5.gif" : "/monkeygif.gif";
    globalGif = newGif;
    setGif(newGif);
    window.dispatchEvent(new Event('gifChanged'));
  };
  
  return { gif, toggleGif };
}

export function scrolltoHash(element_id) {
  const element = document.getElementById(element_id);
  element?.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
}

const Header = () => {
  const [menu, setMenu] = useState(false);
  const { gif, toggleGif } = useGifToggle();

  const handleMenuToggle = () => {
    setMenu((prevState) => !prevState);
  };

  const [hover1, ishoverd1] = useState(false);
  const [hover2, ishoverd2] = useState(false);
  const [hover3, ishoverd3] = useState(false);

  const [time, setTime] = useState("");
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString([], { hour12: false });
      setTime(currentTime);

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
    <div className="text-white w-full relative z-10">
      <div className="flex justify-between items-center py-2 px-3">
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
            className="ml-2 text-center logo text-[#FFD700]"
          >
            <p className="font-unifraktur text-3xl tracking-wider">triflate</p>
            <p className="text-xs hidden md:block">SACHIN VERMA</p>
          </motion.div>
        </div>
        <div className="hidden md:flex items-center absolute rotate-90 md:rotate-0 translate-y-32 -translate-x-32 md:translate-x-44 md:translate-y-0">
          <div className="flex gap-0">
            <Display value={time.slice(0, 2)} padding="0" width="10" height="15" count={2} />
            <Display value={time.slice(3, 5)} height="15" count={2} />
            <Display value={time.slice(6, 8)} height="15" count={2} />
          </div>
        </div>
        <div className="hidden md:flex justify-around items-center w-[45%]">
          <div className="flex justify-center items-center">
            <p className="px-3 text-4xl">
              <Link href="https://www.svnit.ac.in/">
                <IoSchool />
              </Link>
            </p>
          </div>
          <Link href="/uploadproject" className="font-semibold cursor-pointer hover:scale-105">
            <DriveFolderUploadIcon className="text-4xl" />
          </Link>
          <div
            onClick={() => scrolltoHash("project")}
            className="cursor-pointer text-3xl font-bold"
            onMouseEnter={() => ishoverd1(true)}
            onMouseLeave={() => ishoverd1(false)}
          >
            <GoProjectSymlink />
          </div>
          <Link href="/memories" className="cursor-pointer text-3xl font-bold hover:scale-105 transition-transform">
            <FaMemory />
          </Link>
          <div
            onClick={() => scrolltoHash("aboutme")}
            className="text-3xl font-bold cursor-pointer"
            onMouseEnter={() => ishoverd2(true)}
            onMouseLeave={() => ishoverd2(false)}
          >
            <SiAboutdotme />
          </div>
          <div
            onClick={() => scrolltoHash("contact")}
            className="text-3xl font-bold cursor-pointer"
            onMouseEnter={() => ishoverd3(true)}
            onMouseLeave={() => ishoverd3(false)}
          >
            <MdConnectWithoutContact />
          </div>
          <div>
            <Themetoggle />
          </div>
          <div 
            onClick={toggleGif}
            className="relative cursor-pointer transition-transform transform hover:scale-110"
            title="Toggle background GIF"
          >
            <TbSquareToggle className="text-3xl " />
            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
          </div>
          <div className="p-2 border-2 border-gray-100 bg-gray-100 rounded-md shadow-md hover:shadow-lg cursor-pointer transition-transform transform hover:scale-105">
            <Link href="https://drive.google.com/file/d/1oqQBrocB80nDoprv0AjHteAgi4I25_xj/view">
              <p className="text-lg font-bold text-[#1d0039]" target="blank">
                Resume
              </p>
            </Link>
          </div>
        </div>
        <div className="flex md:hidden w-[15%]">
          <ListIcon
            className="text-4xl cursor-pointer hover:rounded-full hover:shadow-inner hover:scale-105"
            onClick={handleMenuToggle}
          />
        </div>
      </div>

      {menu && (
        <motion.div
          animate={{ x: menu ? 0 : '-100%' }}
          initial={{ x: '-100%' }}
          transition={{ type: 'tween' }}
          className="fixed z-20 top-0 left-0 w-full h-full bg-opacity-95 bg-gray-900 dark:bg-[#1d0039]/95 text-gray-100 flex flex-col items-center justify-center shadow-lg backdrop-blur-sm"
        >
          <div className="relative w-11/12 max-w-md p-8 bg-gray-800 dark:bg-purple-900/40 text-white shadow-2xl rounded-xl border border-gray-700 dark:border-[#FFD700]/30">
            <div className="absolute -top-4 -right-4">
              <button
                onClick={handleMenuToggle}
                className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
              >
                <CancelPresentationIcon className="text-2xl" />
              </button>
            </div>
            
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Image
                  src="/profile.jpg"
                  height={80}
                  width={80}
                  className="rounded-full border-2 border-[#FFD700]"
                  alt="profile image"
                />
                <div className="absolute -bottom-2 -right-2 bg-gray-800 dark:bg-purple-900 p-1 rounded-full border border-gray-700">
                  <Themetoggle />
                </div>
              </div>
            </div>
            
            <h2 className="text-xl font-bold text-center mb-6 text-[#FFD700]">Navigation</h2>
            
            <ul className="grid grid-cols-2 gap-4 mb-6">
              <li
                className="bg-gray-700 dark:bg-purple-900/60 p-3 rounded-lg text-center font-semibold cursor-pointer hover:bg-gray-600 dark:hover:bg-purple-800 transition-all duration-300 transform hover:scale-105 flex flex-col items-center"
                onClick={() => {
                  scrolltoHash("project");
                  handleMenuToggle();
                }}
              >
                <GoProjectSymlink className="text-2xl mb-1 text-[#FFD700]" />
                <span>Projects</span>
              </li>
              <li
                className="bg-gray-700 dark:bg-purple-900/60 p-3 rounded-lg text-center font-semibold cursor-pointer hover:bg-gray-600 dark:hover:bg-purple-800 transition-all duration-300 transform hover:scale-105 flex flex-col items-center"
                onClick={handleMenuToggle}
              >
                <Link href="/memories" className="cursor-pointer text-3xl font-bold hover:scale-105 transition-transform">
            <FaMemory className="text-2xl mb-1 text-[#FFD700]" />
            {/* <span>Memories</span> */}
          </Link>
              </li>
              <li
                className="bg-gray-700 dark:bg-purple-900/60 p-3 rounded-lg text-center font-semibold cursor-pointer hover:bg-gray-600 dark:hover:bg-purple-800 transition-all duration-300 transform hover:scale-105 flex flex-col items-center"
                onClick={() => {
                  scrolltoHash("aboutme");
                  handleMenuToggle();
                }}
              >
                <SiAboutdotme className="text-2xl mb-1 text-[#FFD700]" />
                <span>About Me</span>
              </li>
              <li
                className="bg-gray-700 dark:bg-purple-900/60 p-3 rounded-lg text-center font-semibold cursor-pointer hover:bg-gray-600 dark:hover:bg-purple-800 transition-all duration-300 transform hover:scale-105 flex flex-col items-center"
                onClick={() => {
                  scrolltoHash("contact");
                  handleMenuToggle();
                }}
              >
                <MdConnectWithoutContact className="text-2xl mb-1 text-[#FFD700]" />
                <span>Contact</span>
              </li>
            </ul>
            
            <div className="flex justify-around items-center mb-6">
              <Link 
                href="https://drive.google.com/file/d/1oqQBrocB80nDoprv0AjHteAgi4I25_xj/view" 
                className="bg-gray-700 dark:bg-purple-900/60 p-3 rounded-lg text-center font-semibold cursor-pointer hover:bg-gray-600 dark:hover:bg-purple-800 transition-all duration-300 transform hover:scale-105 flex flex-col items-center"
                onClick={handleMenuToggle}
              >
                <FaFilePdf className="text-2xl mb-1 text-[#FFD700]" />
                <span className="text-sm">Resume</span>
              </Link>
              
              <button 
                onClick={() => {
                  toggleGif();
                  // Don't close the menu when toggling the GIF
                }}
                className="bg-gray-700 dark:bg-purple-900/60 p-3 rounded-lg text-center font-semibold cursor-pointer hover:bg-gray-600 dark:hover:bg-purple-800 transition-all duration-300 transform hover:scale-105 flex flex-col items-center relative"
              >
                <div className="text-2xl mb-1 " />
                {/* <span className="text-sm">Toggle GIF</span> */}
                <TbSquareToggle className="text-3xl text-[#FFD700]" />
                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
              </button>
            </div>
            
            <div className="text-center text-sm text-gray-400">
              <p>Current time: {time}</p>
              <p className="mt-1">{greeting} Mode</p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Header;
