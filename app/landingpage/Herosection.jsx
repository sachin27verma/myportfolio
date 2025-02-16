// Herosection.jsx

"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "../../styles/fonts.css";
import Header from "./Header";
import "../../styles/herostyle.css";
import { scrolltoHash } from './Header';
import { FaMapMarkerAlt } from 'react-icons/fa';


export default function Herosection() {
  return (
    <div
      className="relative h-screen  grayscale dark:grayscale-0"
      style={{
        backgroundImage:
          'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(216,0,244,1) 50%), url("/monkeygif.gif")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backdropFilter: "blur(10px)",
        backgroundBlendMode: "darken",
      }}
    >
      <Header />

      <div className="flex justify-center w-full p-3 h-full mt-16 md:mt-0 ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-7xl tracking-wider text-white p-3 pt-0 font-bold mb-3 jaini-purva-regular">
            ~Namaste
          </h1>
          <h1 className="text-4xl text-white font-thin mb-3 jaini-purva-regular">
            I'm
          </h1>
          <div className="flex flex-col items-center gap-3 mb-3">
            <div className="w-full max-w-xs md:max-w-md">
              <Image
                className="mb-2"
                src="https://fontmeme.com/permalink/240703/5ca9fab80f45cd0987f567ad8d790872.png"
                alt="one-piece-font"
                width={500}
                height={100}
                layout="responsive"
              />
            </div>
            <div className="w-full max-w-xs md:max-w-md">
              <Image
                src="https://fontmeme.com/permalink/240703/b842e67b352f3eff3222fe57ce0daebf.png"
                alt="one-piece-font"
                width={500}
                height={100}
                layout="responsive"
              />
            </div>
            <div className="w-full mt-3 p-3 max-w-xs md:max-w-md">
              <Image
                src="https://fontmeme.com/permalink/250216/b35866eac95f24f868cad2a64a536aa8.png"
                alt="one-piece-font"
                width={500}
                height={50}
                layout="responsive"
                className="contrast-125"
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', fontSize: '24px', color: '#ffffff' }}>
  <FaMapMarkerAlt style={{ marginRight: '8px', color: '#FF6347' }} />
  <h1 style={{ margin: 0 }}>Bengaluru</h1>
</div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-center mt-3"
            onClick={() => scrolltoHash('aboutme')}
          >
            <div>
              <p className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-full font-bold text-2xl transition duration-300 shadow-lg transform hover:scale-105 cursor-pointer">
                Know More
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
