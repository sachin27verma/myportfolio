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
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Section from '../../components/Section/Section'
// import {sendMail} from '../api/Sendmail/route'


export default function Contactme() {
  const [form, setForm] = useState({ name: "", email: "", description: "" });

  const notify = (message, type) => toast(message, { type });

  const isValidEmail = (email) => {
    const pattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return pattern.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (form.description !== "" && form.name !== "" && form.email !== "") {
        if (isValidEmail(form.email)) {

          const res = fetch('api/Sendmail',{
            method:'post',
            body:JSON.stringify({
              'subject':form.name,
              'toEmail':'sk.sachin9128@gmail.com',
              'otpText':form.description
          })
          })
         

          await addDoc(collection(db, "Message from visited user"), {
            name: form.name,
            email: form.email,
            description: form.description,
            timstamp:new Date()
          });
          notify("🎉 Your message has been sent successfully!", "success");
          setForm({ name: "", email: "", description: "" });
        } else {
          setForm({...form,email:''})
          notify(" 😕 Dear , Please provide a valid Email", "error");
        }
      } else {
        notify("😒 Please fill all the fields", "error");
      }
    } catch (error) {
      console.error("Error adding document: ", error);
      notify("An error occurred. Please try again later.", "error");
    }


   
      // await sendMail(
      //   "TEST",
      //   "dontkillme@bunnyfiedlabs.com",
      //   "THI IS A TEST FOR MY MEDIUM USERS"
      // );

    


  };

  return (
    <Section>
      
      <div id="contact" className="dark:bg-[#3a1a59] bg-gray-700 text-gray-200 shadow-2xl rounded-lg mx-2  w-6/6 md:w-2/6 md:mx-auto p-3 drop-shadow-2xl  py-4 ">

        
       
        <div className="digital-font text-3xl text-center">
          Contact me
        </div>
        <div className="my-4 mt-1   mx-2 md:mx-auto relative">
          <p className="text-center tracking-widest leading-9">
            Unlocking Success Together<br></br>Let's Connect for Exciting Collaborations!
          </p>
          <p className="flex justify-center pt-2 gap-6">
            <Link href="https://www.instagram.com/triflate/">
              <InstagramIcon className="text-white hover:text-gray-400 hover:dark:text-[#FFD770] hover:animate-bounce " />
            </Link>
            <Link href="https://github.com/sachin27verma">
              <GitHubIcon className="text-white hover:text-gray-400 hover:dark:text-[#FFD770] hover:animate-bounce " />
            </Link>
            <Link href="https://www.linkedin.com/in/sachin-kumar-79125122a/">
              <LinkedInIcon className="text-white hover:text-gray-400 hover:dark:text-[#FFD770] hover:animate-bounce" />
            </Link>
            <Link href="https://twitter.com/triflate_">
              <TwitterIcon className="text-white hover:text-gray-400 hover:dark:text-[#FFD770] hover:animate-bounce" />
            </Link>
            <Link href="www">
              <WhatsAppIcon className="text-white hover:text-gray-400 hover:dark:text-[#FFD770] hover:animate-bounce " />
            </Link>
          </p>

          <div className="flex justify-between items-center mt-4">
            <hr className="inline-block w-[45%] float-left"></hr>
            <p className="text-center inline-block">OR</p>
            <hr className="inline-block w-[45%] float-right"></hr>
          </div>

          <div className="mx-auto dark:text-[#FFD700]  text-gray-400 pt-4">
            <form className="flex flex-col  gap-2 ">
              <label className=" pl-2 font-medium">
                Name<sup className="text-red-600"> *</sup>
              </label>
              <input
                type="text"
                className="bg-gray-200 text-black h-[50px] rounded-lg pl-4"
                required
                placeholder="Enter Your Name..."
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                value={form.name}
              ></input>
              <label className=" pl-2 font-medium">
                Email<sup className="text-red-600"> *</sup>
              </label>
              <input
                type="email"
                pattern={isValidEmail.pattern}
                required
                className="bg-gray-200 text-black h-[50px] rounded-lg pl-4"
                placeholder="Email..."
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                value={form.email}
              ></input>
              <label className=" pl-2 font-medium">
                Description<sup className="text-red-600"> *</sup>
              </label>
              <textarea
                id="message"
                rows="4"
                className="block text-black p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500"
                placeholder="Leave a comment..."
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                value={form.description}
              ></textarea>
              <button 
                onClick={handleSubmit}
                className="trivia inline-block my-4 text-center p-3 rounded-lg float-right font-bold py-1 text-2xl text-blue-600 hover:scale-110 shadow-lg bg-gradient-to-r from-[#ece9ef] via-purple-400 to-purple-600"
              >
                <p className="">
                Submit</p>
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}
