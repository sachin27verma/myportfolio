"use client";
import Image from "next/image";
import React, { useState } from "react";
import { db } from "../../firebase/Firebase";
import { addDoc, collection } from "firebase/firestore";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Contactme() {
  const [form, setform] = useState({ name: "", email: "", description: "" });
  const notify = (message, type) => toast(message, { type });

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      if (form.description !== "" && form.name !== "" && form.email !== "") {
        // const validthing=true;
        // if(form.email===validthing)
        // {

        // }
        await addDoc(collection(db, "Message from visited user"), {
          name: form.name,
          email: form.email,
          description: form.description,
        });

        setform({ name: "", email: "", description: "" });
        notify(" 👌 Your message has been sent successfully!","success");
      } else {
        notify("😒 Plzz , Fill all the fields","error");
      }
    } catch (error) {
      console.error(" Error adding document: ", error);
      notify("An error occurred. Please try again later.","error");
    }
  };

  return (
    <>
      <div id="contact" className=" bg-[#1d0039] py-4 ">
        <div className="digital-font text-3xl text-center text-[#FFD700]">
          contact me
        </div>
        <div className=" my-4 mt-1 w-6/6 md:w-3/6  mx-2 md:mx-auto  relative">
          {/* <Image src={"/bg-2.jpg"} fill className=" blur-sm " /> */}
          <p className=" text-center tracking-widest leading-9">
            {" "}
            Unlocking Success Together<br></br>Let's Connect for Exciting
            Collaborations!
          </p>
          <p className=" flex justify-center md:justify-between pt-2  gap-6 ">
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

          <div className=" flex justify-between items-center mt-4">
            <hr className=" inline-block w-[45%] float-left"></hr>
            <p className=" text-center inline-block">OR</p>
            <hr className=" inline-block w-[45%] float-right"></hr>
          </div>

          <div className="   mx-auto pt-4">
            {/* <label
              for="message"
              class="block mb-2 text-xl font-semibold text-[#FFD700]">
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500"
              placeholder="Leave a comment..." onChange={(e)=> setform({...form,message:e.target.value})} value={form.message}></textarea> */}
            <form className=" flex flex-col gap-2  text-black">
              <label className=" text-[#FFD700] pl-2 font-medium">
                Name<sup className=" text-red-600"> *</sup>
              </label>
              <input
                type="text"
                className=" bg-gray-200 h-[50px] rounded-lg  pl-4"
                required
                placeholder=" Enter Your Name..."
                onChange={(e) => setform({ ...form, name: e.target.value })}
                value={form.name}></input>
              <label className="text-[#FFD700] pl-2 font-medium">
                Email<sup className=" text-red-600"> *</sup>
              </label>
              <input
                type="email"
                pattern="[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*"
                className=" bg-gray-200 h-[50px] rounded-lg  pl-4"
                placeholder=" Email..."
                onChange={(e) => {
                  setform({ ...form, email: e.target.value });
                }}
                value={form.email}
                required></input>
              <label className=" text-[#FFD700] pl-2 font-medium">
                Description<sup className=" text-red-600"> *</sup>
              </label>
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500"
                placeholder="Leave a comment..."
                onChange={(e) =>
                  setform({ ...form, description: e.target.value })
                }
                value={form.description}></textarea>
            <button
              onClick={handlesubmit}
              className=" inline-block my-4 text-center p-3 rounded-lg float-right  font-bold py-1  text-lg text-purple-900 hover:scale-110  shadow-lg  bg-gradient-to-r from-[#ece9ef] via-purple-400 to-purple-600">
              Submit
            </button>
            <ToastContainer />
            </form>
            
          </div>
        </div>
      </div>
    </>
  );
}
