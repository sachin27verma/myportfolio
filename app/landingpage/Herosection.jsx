// ... (previous imports and code)
'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import '../../styles/fonts.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Header from './Header';
import Link from 'next/link';
import NET from 'vanta/dist/vanta.rings.min';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import Togglevalue from '../../components/Togglevalue'
import Section from '../../components/Section/Section'

export default function Herosection() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const [no,setno]=useState(0)
  const vantaRef = useRef(null);
 


  useEffect(() => {
    const setupVantaEffect = () => {
      setVantaEffect(
        NET({
          THREE,
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: '#ffd700',
          // backgroundColor:  '#1d0039',
        //  backgroundColor:'transparent',
        backgroundAlpha: 0,
          maxDistance: 16.0,
        })
      );
    };

    if (!vantaEffect) {
      setupVantaEffect();
    }
    console.log("click")

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (

    <>
      <Header />
      <div className='relative bg-gray-900 dark:bg-[#1d0039] '  ref={vantaRef} >
        <Section className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-[450px] md:min-h-screen pb-4 mb-4 flex justify-between flex-wrap items-center relative"
          >
            <div className="w-full md:w-[50%]">
              <div className="flex justify-center items-center flex-col h-full">
                <div className="text-center md:text-left">
                  <div className="relative flex justify-center">
                    <Image
                      src={'/Namaste.png'}
                      height={250}
                      width={250}
                      className="brightness-105"
                      alt="image"
                    />
                  </div>

                  <motion.p
                    initial={{ fontSize: '0px', color: '#00000' }}
                    animate={{ fontSize: '40px', color: '#ff2994' }}
                    className="text-4xl text-center font-bold mb-2"
                  >
                    I am sachin verma
                  </motion.p>
                  <p className="text-lg text-gray-400 dark:text-[#FFD700] first-letter:text-2xl last:first-letter:text-3xl text-center font-medium tracking-wide mb-2">
                    <q>
                      Coding ninja, vanquishing bugs and embracing snacks,
                      <br />
                      one byte at a time.
                    </q>
                    <br />
                  </p>
                  <p className="flex text-gray-400 dark:text-[#FFD700] justify-center pt-2 gap-3">
                    <Link href="https://www.instagram.com/triflate_/">
                      <InstagramIcon className=" hover:text-gray-400 text-gray-200 hover:dark:text-[#FFD700] hover:animate-bounce" />{' '}
                    </Link>{' '}
                    <Link href="https://github.com/sachin27verma">
                      {' '}
                      <GitHubIcon className=" hover:text-gray-400 text-gray-200 hover:dark:text-[#FFD700] hover:animate-bounce" />
                    </Link>{' '}
                    <Link href="https://www.linkedin.com/in/sachin-kumar-79125122a/">
                      <LinkedInIcon className=" hover:text-gray-400 text-gray-200 hover:dark:text-[#FFD700] hover:animate-bounce" />
                    </Link>{' '}
                    <Link href="https://twitter.com/triflate_">
                      <TwitterIcon className=" hover:text-gray-400 text-gray-200 hover:dark:text-[#FFD700] hover:animate-bounce" />
                    </Link>
                    <Link href="www">
                      <WhatsAppIcon className=" hover:text-gray-400 text-gray-200 hover:dark:text-[#FFD700] hover:animate-bounce " />{' '}
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden justify-center items-center md:block w-0 md:w-1/2 overflow-hidden">
              <div className="w-full">
              <svg
                  id="sw-js-blob-svg"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient
                      id="sw-gradient"
                      x1="0"
                      x2="1"
                      y1="1"
                      y2="0">
                      <stop
                        id="stop1"
                        stop-color="rgba(248, 55, 126.926, 1)"
                        offset="0%"></stop>
                      <stop
                        id="stop2"
                        stop-color="rgba(251, 247.149, 31, 1)"
                        offset="100%"></stop>
                    </linearGradient>
                  </defs>
                  <mask id="mask1" mask-type="alpha">
                    <path
                      fill="url(#sw-gradient)"
                      d="M21.7,-35.1C27.2,-30.3,30.1,-22.7,31.8,-15.5C33.4,-8.4,33.8,-1.7,33.1,4.9C32.4,11.6,30.6,18.2,26.8,23.9C23,29.6,17.2,34.3,10.7,35.9C4.2,37.5,-3,36.1,-10.3,34.3C-17.6,32.5,-25,30.3,-31.4,25.7C-37.9,21.1,-43.3,14,-43.7,6.7C-44,-0.6,-39.3,-8.2,-34.5,-14.5C-29.7,-20.9,-24.8,-26,-19.1,-30.7C-13.3,-35.4,-6.7,-39.8,0.7,-40.9C8.1,-42.1,16.2,-40,21.7,-35.1Z"
                      width="100%"
                      height="100%"
                      transform="translate(50 50)"
                      stroke-width="0"
                      style={{ transition: "all 0.3s ease 0s" }}></path>
                  </mask>
                  <g mask="url(#mask1)">
                    <path
                      fill="url(#sw-gradient)"
                      d="M21.7,-35.1C27.2,-30.3,30.1,-22.7,31.8,-15.5C33.4,-8.4,33.8,-1.7,33.1,4.9C32.4,11.6,30.6,18.2,26.8,23.9C23,29.6,17.2,34.3,10.7,35.9C4.2,37.5,-3,36.1,-10.3,34.3C-17.6,32.5,-25,30.3,-31.4,25.7C-37.9,21.1,-43.3,14,-43.7,6.7C-44,-0.6,-39.3,-8.2,-34.5,-14.5C-29.7,-20.9,-24.8,-26,-19.1,-30.7C-13.3,-35.4,-6.7,-39.8,0.7,-40.9C8.1,-42.1,16.2,-40,21.7,-35.1Z"
                      width="100%"
                      height="100%"
                      transform="translate(50 50)"
                      stroke-width="0"
                      style={{ transition: "all 0.3s ease 0s" }}></path>
                    <image
                      x="-18"
                      y="6"
                      width="125"
                      height="125"
                      href="/p04.png"
                      className="filter overflow-hidden custom-drop-shadow"
                      alt='/'
                    />
                  </g>
                </svg>
              </div>
            </div>
          </motion.div>
        </Section>
      </div>
    </>
  );
}
