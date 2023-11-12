import Image from "next/image";
import React from "react";

export default function Contactme() {
  return (
    <>
      <div className=" bg-[#1d0039] py-4 ">
        <div className="digital-font text-3xl text-center text-[#FFD700]">
          Message Me
        </div>
        <div className=" my-4 w-5/6 md:w-4/6 h-[220px] mx-auto relative">
          <Image src={"/bg-2.jpg"} fill className=" blur-sm " />

          <div className=" relative w-5/6 mx-auto pt-4">
            <label
              for="message"
              class="block mb-2 text-xl font-semibold text-[#FFD700]">
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500"
              placeholder="Leave a comment..."></textarea>
            <button className=" text-right p-3 rounded-lg float-right font-bold py-1 my-2 text-lg text-[#FFD700] shadow-lg  bg-gradient-to-r from-[#1d0039] via-purple-600 to-yellow-400">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
