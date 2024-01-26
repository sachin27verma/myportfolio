
'use client'
import { useEffect,useState } from "react"
import {FaMoon} from 'react-icons/fa'
import {BsSunFill} from 'react-icons/bs'
import { dark } from "@mui/material/styles/createPalette";
function Themetoggle() {

    const [darkmode,setdarkmode]=useState(false);
    useEffect(()=>{
        const theme = localStorage.getItem("theme");
        if(theme==='dark') setdarkmode(true)
    },[])

    useEffect(()=>{
       if(darkmode)
       {
        document.documentElement.classList.add("dark")
        localStorage.setItem("theme","dark")
       }
       else{
        document.documentElement.classList.remove("dark")
        localStorage.setItem("theme","light")
       }
      //  console.log(theme);
    },[darkmode])

    // const isDarkMode = document.documentElement.classList.contains('dark');
    // return isDarkMode ? 'dark' : 'light';


  return (
    <div className=" w-14  flex items-center relative rounded-full dark:bg-gray-100 bg-teal-500 cursor-pointer p-1" onClick={()=>setdarkmode(!darkmode)}>
        <FaMoon className=" text-white " size={18}/>
        <div className=" absolute flex items-center bg-white dark:bg-black w-5 h-5 rounded-full shadow-md transform transition-transform duration-500" style={darkmode?{left:"2px"}:{right:"2px"}}></div>
        <BsSunFill className=" ml-auto text-yellow-400" size={18}/>
    </div>
  )
}

export default Themetoggle