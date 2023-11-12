import Image from "next/image";
import React from "react";
import "../styles/fonts.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Header from "./Header";
import Link from "next/link";

export default function Herosection() {
  return (
    <>
      <div className=" relative">
        <Image
          src={"/bg-3.jpg"}
          fill
          className=" object-fit md:object-fit  transform -rotate-y-180 "
        />
        <Header />
        <div className="relative  ">
          <div className=" h-[500px] md:min-h-screen flex justify-between flex-wrap    relative">
            <div className=" w-full  md:w-[50%] ">
              {" "}
              <div className=" flex justify-center items-center flex-col h-full">
                <div className=" text-center md:text-left ">
                  <div className=" relative flex justify-center">
                    {" "}
                    <Image
                      src={"/Namaste.png"}
                      height={250}
                      width={250}
                      className=" brightness-105"
                    />{" "}
                  </div>

                  <p className=" text-4xl font-bold mb-2 digital-font">
                    {" "}
                    I am sachin verma
                  </p>
                  <p className=" text-xl font-medium digital-font mb-2">
                    A Full Stack Developer
                  </p>
                  <p className=" flex justify-center md:justify-start gap-3  ">
                    <Link href="https://www.instagram.com/triflate_/">
                      <InstagramIcon className="text-white hover:text-[#FFD700] hover:animate-bounce " />{" "}
                    </Link>{" "}
                    <Link href="https://github.com/sachin27verma">
                      {" "}
                      <GitHubIcon className="text-white hover:text-[#FFD700] hover:animate-bounce " />
                    </Link>{" "}
                    <Link href="https://www.linkedin.com/in/sachin-kumar-79125122a/">
                      <LinkedInIcon className="text-white hover:text-[#FFD700] hover:animate-bounce" />
                    </Link>{" "}
                    <Link href="https://twitter.com/triflate_">
                      <TwitterIcon className="text-white hover:text-[#FFD700] hover:animate-bounce" />
                    </Link>
                    <Link href="www">
                      <WhatsAppIcon className="text-white hover:text-[#FFD700] hover:animate-bounce " />{" "}
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="relative hidden md:block w-1/2 overflow-hidden">
              <div className="">
                <Image
                  src={"/p3.png"}
                  fill
                  className=" filter custom-drop-shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
