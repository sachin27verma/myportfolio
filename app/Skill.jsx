import Image from "next/image";
import React from "react";
import  {Cpp, javascript, tailwind,Html,Mongodb,express,react,figma,canva,nextjs,firebase,nodejs,vscode,github}  from "./skillbadge";

export default function Skill() {
  return (
    <>
      <div className="bg-[#1d0039] py-4  ">
        <div className=" digital-font text-3xl text-center text-[#FFD700]">
         Tools & Skills
        </div>
        <div className="w-full md:w-[50%] mx-auto flex  justify-center items-center flex-wrap gap-6 my-3">
          <div className="  h-[125px] w-[125px]  relative  flex justify-center items-center">
            <Image src={"/tradbc.png"} fill className=" " />
            <div className=" ">
              {nextjs}
            </div>{" "}
          </div>
          <div className="  h-[125px] w-[125px]  relative  flex justify-center items-center">
            <Image src={"/tradbc.png"} fill className=" " />
            <div className=" ">
              {firebase}
            </div>{" "}
          
        </div>
        <div className="  h-[125px] w-[125px]  relative  flex justify-center items-center">
            <Image src={"/tradbc.png"} fill className=" " />
            <div className=" ">
              {javascript}
            </div>{" "}
        </div>
        <div className="  h-[125px] w-[125px]  relative  flex justify-center items-center">
            <Image src={"/tradbc.png"} fill className=" " />
            <div className=" ">
              {Cpp}
            </div>{" "}
        </div>
        <div className="  h-[125px] w-[125px]  relative  flex justify-center items-center">
            <Image src={"/tradbc.png"} fill className=" " />
            <div className=" ">
              {tailwind}
            </div>{" "}
        </div>
        <div className="  h-[125px] w-[125px]  relative  flex justify-center items-center">
            <Image src={"/tradbc.png"} fill className=" " />
            <div className=" ">
              {react}
            </div>{" "}
        </div>
        <div className="  h-[125px] w-[125px]  relative  flex justify-center items-center">
            <Image src={"/tradbc.png"} fill className=" " />
            <div className=" ">
              {express}
            </div>{" "}
        </div>
        <div className="  h-[125px] w-[125px]  relative  flex justify-center items-center">
            <Image src={"/tradbc.png"} fill className=" " />
            <div className=" ">
              {figma}
            </div>{" "}
        </div>
        <div className="  h-[125px] w-[125px]  relative  flex justify-center items-center">
            <Image src={"/tradbc.png"} fill className=" " />
            <div className=" ">
              {canva}
            </div>{" "}
        </div>
        <div className="  h-[125px] w-[125px]  relative  flex justify-center items-center">
            <Image src={"/tradbc.png"} fill className=" " />
            <div className=" ">
              {Mongodb}
            </div>{" "}
        </div>
        <div className="  h-[125px] w-[125px]  relative  flex justify-center items-center">
            <Image src={"/tradbc.png"} fill className=" " />
            <div className=" ">
              {Html}
            </div>{" "}
        </div>
        <div className="  h-[125px] w-[125px]  relative  flex justify-center items-center">
            <Image src={"/tradbc.png"} fill className=" " />
            <div className=" ">
              {nodejs}
            </div>{" "}
        </div>
        <div className="  h-[125px] w-[125px]  relative  flex justify-center items-center">
            <Image src={"/tradbc.png"} fill className=" " />
            <div className=" ">
              {vscode}
            </div>{" "}
        </div>
        <div className="  h-[125px] w-[125px]  relative  flex justify-center items-center">
            <Image src={"/tradbc.png"} fill className=" " />
            <div className=" ">
              {github}
            </div>{" "}
        </div>
        </div>
      </div>
    </>
  );
}
