import React from "react";
import "../styles/fonts.css";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

export default function Project() {
 
  return (
    <>
     <div className="bg-[#1d0039]">
  <div className="text-center text-3xl text-[#FFD700] py-2 pt-5 mb-3 font-bold digital-font">
    PROJECT
  </div>
  <div className="w-full mx-auto flex flex-col md:flex-row justify-center gap-3 relative">
    {/* <Image src={"/goldbc.png"} fill className="object-cover z-0" /> */}
    <div className=" fancy-border  w-full md:min-w-[300px]">
      <div className=" w-full relative">
        {/* <Image src={"/goldborder.png"} fill className="object-fit" /> */}
        <div className="h-[175px] w-full relative ">
          <Image
            src={"/bg-2.jpg"}
            fill
            className="object-cover  pb-2  "
          />
        </div>
        <p className=" text-md pb-1 font-bold pt-0"> MMNCT</p>
        <p className=" pt-0 text-xs font-thin">
          MMNCT is a popular Night Cricket Tournament in Svnit, Surat. It has
          been happening since 2006. Every year, this event is organized, and a
          total of 21 teams participate, including 15 teams of boys & 6 teams
          of girls.
        </p>
        <div className=" py-2 flex justify-start gap-3">
          <GitHubIcon className="inline-block" />
          <LinkIcon className="inline-block rotate-45" />
        </div>
      </div>
    </div>
    <div className=" fancy-border  w-full md:min-w-[300px]">
      <div className=" w-full relative">
        {/* <Image src={"/goldborder.png"} fill className="object-fit" /> */}
        <div className="h-[175px] w-full relative ">
          <Image
            src={"/bg-2.jpg"}
            fill
            className="object-cover  pb-2  "
          />
        </div>
        <p className=" text-md pb-1 font-bold pt-0"> MMNCT</p>
        <p className=" pt-0 text-xs font-thin">
          MMNCT is a popular Night Cricket Tournament in Svnit, Surat. It has
          been happening since 2006. Every year, this event is organized, and a
          total of 21 teams participate, including 15 teams of boys & 6 teams
          of girls.
        </p>
        <div className=" py-2 flex justify-start gap-3">
          <GitHubIcon className="inline-block" />
          <LinkIcon className="inline-block rotate-45" />
        </div>
      </div>
    </div>
    <div className=" fancy-border  w-full md:min-w-[300px]">
      <div className=" w-full relative">
        {/* <Image src={"/goldborder.png"} fill className="object-fit" /> */}
        <div className="h-[175px] w-full relative ">
          <Image
            src={"/bg-2.jpg"}
            fill
            className="object-cover  pb-2  "
          />
        </div>
        <p className=" text-md pb-1 font-bold pt-0"> MMNCT</p>
        <p className=" pt-0 text-xs font-thin">
          MMNCT is a popular Night Cricket Tournament in Svnit, Surat. It has
          been happening since 2006. Every year, this event is organized, and a
          total of 21 teams participate, including 15 teams of boys & 6 teams
          of girls.
        </p>
        <div className=" py-2 flex justify-start gap-3">
          <GitHubIcon className="inline-block" />
          <LinkIcon className="inline-block rotate-45" />
        </div>
      </div>
    </div>
  

  </div>
</div>

    </>
  );
}
