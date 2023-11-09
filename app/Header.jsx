import React from "react";
import Image from "next/image";
import "../styles/fonts.css";


export default function Header() {
  return (
    <div className="bg-blue-600 text-[#FFD700]">
      <div className="flex justify-between items-center align-middle py-2 relative px-3">
        <div className="flex shadow-lg p-2 w-[12%]  rounded-lg">
          <div className="w-auto flex items-center">
            <Image
              src="/p2.png"
              height={45}
              width={45}
              className=" aspect-square rounded-full"
            />
          </div>
          <div className="ml-2 text-center text-[#FFD700]">
            <p className="font-unifraktur text-3xl tracking-wider">triflate</p>
            <p className="text-xs">SACHIN VERMA</p>
          </div>
        </div>
        <div className="flex justify-around w-[40%]">
          <div className=" text-md font-semibold  ">Projects</div>
          <div>Contacts</div>
          <div>Home</div>
        </div>
      </div>
    </div>
  );
}
