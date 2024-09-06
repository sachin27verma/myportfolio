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
import { FaFilePdf } from "react-icons/fa6";

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
    <>
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
          <div className="hidden md:flex justify-around items-center w-[40%]">
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
            <div className="p-2 border-2 border-gray-100 bg-gray-100 rounded-md shadow-md hover:shadow-lg cursor-pointer transition-transform transform hover:scale-105">
              <Link href="https://drive.google.com/file/d/1oqQBrocB80nDoprv0AjHteAgi4I25_xj/view?usp=drive_link">
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
      </div>

      {menu && (
        <motion.div
          animate={{ x: menu ? 0 : '-100%' }}
          initial={{ x: '-100%' }}
          transition={{ type: 'tween' }}
          className="fixed z-20 top-0 left-0 w-full h-full bg-opacity-90 bg-gray-800 text-gray-100 flex flex-col items-center justify-center shadow-lg"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-2/3 p-6 bg-gray-900 text-white shadow-lg rounded-lg">
  <ul className="list-none flex flex-col md:flex-row gap-4 w-full md:w-auto">
    <li
      className="text-lg list-disc font-semibold cursor-pointer hover:scale-105 transition-transform"
      onClick={() => {
        scrolltoHash("project");
        handleMenuToggle();
      }}
    >
      Projects
    </li>
    <li
      className="text-lg list-disc font-semibold cursor-pointer hover:scale-105 transition-transform"
      onClick={() => {
        scrolltoHash("aboutme");
        handleMenuToggle();
      }}
    >
      About Me
    </li>
    <li
      className="text-lg list-disc font-semibold cursor-pointer hover:scale-105 transition-transform"
      onClick={() => {
        scrolltoHash("contact");
        handleMenuToggle();
      }}
    >
      Contact Me
    </li>
    <li>
      <Themetoggle />
    </li>
    {/* <li className="list-disc ">
     
     <Link href="https://drive.google.com/file/d/1lhND2Rxe-59wOKdOn3y-nHj0oYFZjcHa/view">
     <FaFilePdf/>
     </Link>
    </li> */}
    <li className="list-disc">
      <Link href="/uploadproject" className="font-semibold cursor-pointer hover:scale-105 hover:text-yellow-300 transition-transform">
        <DriveFolderUploadIcon className="text-4xl text-white" />
      </Link>
    </li>
    <li className="list-disc mt-2">
      <Link href="https://drive.google.com/file/d/1oqQBrocB80nDoprv0AjHteAgi4I25_xj/view?usp=drive_link" className="font-semibold cursor-pointer hover:scale-105 hover:text-yellow-300 transition-transform">
      <p className="  flex justify-center items-center text-white p-2">
        <FaFilePdf  />
        </p>
      </Link>
    </li>
  </ul>
  <CancelPresentationIcon
    className="text-4xl font-bold cursor-pointer hover:scale-105 hover:brightness-110 transition-transform"
    onClick={handleMenuToggle}
  />
</div>

        </motion.div>
      )}
    </>
  );
};

export default Header;
