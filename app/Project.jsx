import React from "react";
import "../styles/fonts.css";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

export default function Project() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
      <div className=" bg-[#1d0039]">
        <div className=" text-center text-3xl text-[#FFD700] py-2 font-bold digital-font ">
          PROJECT
        </div>
        <div className=" flex">
          {/* <Carousel responsive={responsive} > <p>h</p> <p>4</p></Carousel> */}
          <div className=" h-[350px] w-[300px]  relative">
            <Image src={"/goldborder.png"} fill className=" object-fit" />
            <div className=" h-[175px] w-full relative rounded-lg ">
              <Image
                src={"/bg-2.jpg"}
                fill
                className=" object-cover p-4 pb-2 pt-3 rounded-xl"
              />
            </div>
            <p className=" p-5 text-md pb-1 font-bold pt-0"> MMNCT</p>
            <p className=" p-5 pt-0 text-xs  font-thin ">
              {" "}
              MMNCT is popular Night Cricket Tournament in Svnit , Surat. It is
              happening , since 2006. Every Year , this Event is organised and
              total 21 teams participate where 15 teams of Boys & 6 teams of
              Girls.{" "}
            </p>
            <div className=" p-4 px-5 py-0 flex justify-start gap-3">
              <GitHubIcon className=" inline-block" />
              <LinkIcon className=" inline-block rotate-45" />
            </div>
          </div>
          <div className=" h-[350px] w-[300px]  relative">
            <Image src={"/goldborder.png"} fill className=" object-fit" />
            <div className=" h-[175px] w-full relative rounded-lg ">
              <Image
                src={"/bg-2.jpg"}
                fill
                className=" object-cover p-4 pb-2 pt-3 rounded-xl"
              />
            </div>
            <p className=" p-5 text-md pb-1 font-bold pt-0"> MMNCT</p>
            <p className=" p-5 pt-0 text-xs  font-thin ">
              {" "}
              MMNCT is popular Night Cricket Tournament in Svnit , Surat. It is
              happening , since 2006. Every Year , this Event is organised and
              total 21 teams participate where 15 teams of Boys & 6 teams of
              Girls.{" "}
            </p>
            <div className=" p-4 px-5 py-0 flex justify-start gap-3">
              <GitHubIcon className=" inline-block" />
              <LinkIcon className=" inline-block rotate-45" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
