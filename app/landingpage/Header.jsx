"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ListIcon from "@mui/icons-material/List";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import "../../styles/fonts.css";
import Link from "next/link";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import Themetoggle from '../../components/Themetoggle'

const Header = () => {

  const scrolltoHash = function (element_id) {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    
  }

  const [menu, setMenu] = useState(false);

  const handleMenuToggle = () => {
    setMenu((prevState) => !prevState);
  };

  const [hover1, ishoverd1] = useState(false);
  const [hover2, ishoverd2] = useState(false);
  const [hover3, ishoverd3] = useState(false);
  const variants = {
    open: {
      width: '16rem',
      transition: {
        damping: 40,
        ease: [0.17, 0.67, 0.83, 0.67]
      },
    },
    closed: {
      width: '16rem',
      transition: {
        damping: 40,
      },
    },
  }

  return (
    <>
      {!menu ? (
        <motion.div
          
          className="text-gray-400 dark:text-[#FFD700] w-full relative z-10 ">
          <div className="flex justify-between items-center align-middle py-2 relative w-full  px-3">
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
                // whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{
                  scale: 0.8,
                  rotate: -90,
                  borderRadius: "100%",
                }}
                className="ml-2 text-center  logo text-[#FFD700]">
                <p className="font-unifraktur text-3xl tracking-wider">
                  triflate
                </p>
                <p className="text-xs hidden md:block">SACHIN VERMA</p>
              </motion.div>
            </div>
            <div className="hidden md:flex justify-around items-center w-[40%]">
              <Link
                href="/uploadproject"
                className=" font-semibold cursor-pointer hover:scale-105 dark:hover:text-yellow-300 hover:text-gray-500">
                <DriveFolderUploadIcon className=" text-4xl" />
                <hr
                  className={`  transition-transform h-1  dark:bg-[#FFD700] bg-gray-400 rounded-xl`}></hr>
              </Link>

              <div onClick={() => scrolltoHash('project')}
                className="text-md  font-semibold cursor-pointer"
                onMouseEnter={() => ishoverd1(!hover1)}
                onMouseLeave={() => ishoverd1(!hover1)}>
                Projects
                <hr
                  className={` ${
                    hover1 ? "scale-x-100" : "scale-x-0"
                  } transition-transform h-1 dark:bg-[#FFD700] bg-gray-400  rounded-xl`}></hr>
              </div>
              <div onClick={() => scrolltoHash('aboutme')}
                className="text-md  font-semibold cursor-pointer"
                onMouseEnter={() => ishoverd2(!hover2)}
                onMouseLeave={() => ishoverd2(!hover2)}>
                About Me
                <hr
                  className={` ${
                    hover2 ? "scale-x-100" : "scale-x-0"
                  } transition-transform h-1 dark:bg-[#FFD700] bg-gray-400 rounded-xl`}></hr>
              </div>
              <div onClick={() => scrolltoHash('contact')}
                className="text-md  font-semibold cursor-pointer"
                onMouseEnter={() => ishoverd3(!hover3)}
                onMouseLeave={() => ishoverd3(!hover3)}>
                Contact Me
                <hr
                  className={` ${
                    hover3 ? "scale-x-100" : "scale-x-0"
                  } transition-transform h-1 dark:bg-[#FFD700] bg-gray-400 rounded-xl`}></hr>
              </div>
              <div><Themetoggle/></div>

              <div className="p-2 border-2 border-gray-100 bg-gray-100  rounded-md shadow-md hover:shadow-lg cursor-pointer transition-transform transform hover:scale-105">
                <Link href="https://drive.google.com/file/d/1I8XwYmZdTHRG_8RUR8CnRZHLHbxYFjlB/view?usp=drive_link">
                  <p
                    className="text-lg font-bold text-[#1d0039]"
                    target="blank">
                    Resume
                  </p>
                </Link>
              </div>
            </div>
            <div className="flex md:hidden w-[15%] relative ">
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
        animate={'closed'}
        variants={variants}

        // className=" bg-white text-gray shadow-xl z-[999] max-w-[16rem]
        // w-[16rem] overflow-hidden md:relative fixed h-screen"
          className="flex absolute  z-3 justify-around dark:text-[#FFD770] text-gray-400 bg-gray-700  w-full h-[400px]"
          style={{ zIndex: "5" }}>
          <div className="h-full py-4">
            <ul className="list-disc  flex flex-col gap-4">
              <li className="text-md font-semibold cursor-pointer hover:scale-105" onClick={() => scrolltoHash('project')}>Projects</li>
              <li className="text-md font-semibold cursor-pointer hover:scale-105" onClick={() => scrolltoHash('aboutme')}>About Me</li>
              <li className="text-md font-semibold cursor-pointer hover:scale-105" onClick={() => scrolltoHash('contact') }>Contact Me</li>
              <li><Themetoggle/></li>
              <Link
                href="/uploadproject"
                className=" font-semibold cursor-pointer hover:scale-105 hover:text-yellow-300">
                <DriveFolderUploadIcon className=" text-4xl" />
                <hr
                  className={`  transition-transform h-1  dark:bg-[#FFD700] bg-gray-700 rounded-xl`}></hr>
              </Link>
            </ul>
          </div>
          {/* <p className="font-unifraktur text-3xl tracking-wider">triflate</p> */}
          <div className=" py-4 text-4xl">
            <CancelPresentationIcon
              className={`font-bold cursor-pointer hover:scale-105 hover:brightness-110 `}
              onClick={handleMenuToggle}
            />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Header;
