'use client'
import Image from "next/image";
import React,{useState} from "react";
import {db} from '../../firebase/Firebase'
import { addDoc,collection } from "firebase/firestore";

export default function Contactme() {

  const [form , setform]=useState({message:''})

  const handlesubmit = async (e)=>{
    e.preventDefault();

    if(form.message !== '')
    {
      // console.log("starting")
      await addDoc(collection(db,'Message from visited user'),{
        message:form.message,
       }).then(()=>{
        setform({message:''});
        // console.log("working fine")

       })
    
    }

   

  }

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
              placeholder="Leave a comment..." onChange={(e)=> setform({...form,message:e.target.value})} value={form.message}></textarea>
            <button onClick={handlesubmit} className=" text-right p-3 rounded-lg float-right font-bold py-1 my-2 text-lg text-purple-900 hover:scale-110  shadow-lg  bg-gradient-to-r from-[#ece9ef] via-purple-400 to-purple-600">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
