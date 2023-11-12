'use client'

import React, { useState  } from "react";
// import { useClient } from 'react-server-dom-webpack';

import Image from "next/image";
import "../styles/fonts.css";

import ListIcon from "@mui/icons-material/List";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

export default function Header() {
  // useClient(); 

  const [menu , setmenu]=useState(false);

  return (
    <>
    {!menu ?(<div className="bg-blue-600 text-[#FFD700]">
    <div className="flex justify-between items-center align-middle py-2 relative px-3">
      <div className="flex shadow-lg p-2  w-4/5 md:w-[12%]  rounded-lg">
        <div className="w-auto hidden md:flex items-center">
          <Image
            src="/p2.png"
            height={45}
            width={45}
            className=" aspect-square rounded-full"
          />
        </div>
        <div className="ml-2 text-center text-[#FFD700]">
          <p className="font-unifraktur text-3xl tracking-wider">triflate</p>
          <p className="text-xs hidden md:block">SACHIN VERMA</p>
        </div>
      </div>
      <div className=" hidden md:flex justify-around w-[40%]">
        <div className=" text-md font-semibold  ">Projects</div>
        <div>Contacts</div>
        <div>Home</div>
      </div>
      <div className=" flex md:hidden w-[15%] relative ">
        <p className=" ">
          {}
          <ListIcon className="text-4xl cursor-pointer hover:rounded-full  hover:shadow-inner hover:scale-105 "  onClick={() => {
  setmenu(!menu);
}} />
        </p>
      </div></div>
      
     
    </div>):(<div className=" flex relative justify-around  text-[#FFD700]  bg-transparent delay-0  opacity-90 w-full h-full ">
          <div className=" h-full py-4 ">
            <ul className=" list-disc flex flex-col gap-4   ">
              <li className="text-md font-semibold  ">Projects</li>
              <li className="text-md font-semibold">Contacts</li>
              <li className="text-md font-semibold">Home</li>
            </ul>
          </div>
          <p className="font-unifraktur text-3xl tracking-wider">triflate</p>
          <div className=" text-yellow-500 py-4  text-4xl">
            <CancelPresentationIcon className=" font-bold cursor-pointer hover:scale-105 hover:brightness-110"  onClick={() => {
  setmenu(!menu);
}} />
          </div>
        </div>
    )}
    </>
      
  );
}
