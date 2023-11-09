import Image from "next/image";
import React from "react";
import "../styles/fonts.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Header from "./Header";


export default function Herosection() {
 


  return (
    <>
    <div className=" relative">
    <Image src={'/bg-3.jpg'} fill className=" object-fit  transform -rotate-y-180 "/>
    <Header/>
    <div className="relative text-[#FFD700] ">
       
    <div className=" min-h-screen flex justify-between   relative">
        
      <div className=" w-[50%] ">
        {" "}
        <div className=" flex justify-center items-center flex-col h-full">
            <div className=" text-left ">
                <div className=" relative flex justify-center"> <Image src={'/Namaste.png'} height={250} width={250} className=" brightness-105" /> </div>
              
          <p className=" text-4xl font-bold mb-2 digital-font"> I am sachin verma</p>
          <p className=" text-xl font-medium digital-font mb-2">A Full Stack Developer</p>
          <p className=" flex  gap-3 " > <InstagramIcon className=" "/>  <GitHubIcon className=" "/><TwitterIcon className=" "/> <WhatsAppIcon className=" "/> 
          </p>
          </div>
        </div>
      </div>
      <div className="relative w-1/2 overflow-hidden">
  <div className="">
    <Image src={'/p3.png'} fill className=" filter custom-drop-shadow" />
  </div>
</div>


    </div></div>
    </div>
    </>
  );
}
