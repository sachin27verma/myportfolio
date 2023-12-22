"use client";
import React, { useEffect, useState } from "react";
import { db, storage } from "../../firebase/Firebase";
import { v4 } from "uuid";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'

import {
  collection,
  addDoc,
  getDoc,
  querySnapshot,
  query,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Link from "next/link";

export default function UploadProject() {
  const [formData, setFormData] = useState({
    name: "",
    description1: "",
    description2: "",
    image1: "",
    image2: "",
    link1: "",
    link2: "",
    tags: [],
  });

  const router = useRouter();


  const handleChange = async (e) => {
    // console.log(e.target.files[0]);
    // console.log(e.target.name);
    const imagename = e.target.name;
    // console.log(imagename)
    const imgref = ref(storage, `project_image/${v4()}`);
    await uploadBytes(imgref, e.target.files[0]).then((data) => {
      // console.log(data);
      getDownloadURL(data.ref).then((ref) => {
        setFormData((prev) => ({
          ...prev,
          [imagename]: ref, // Assuming you want to update image1, you can modify this line accordingly for image2
        }));
        // console.log(formData.image1);
      });
    });
  };

  const handleSubmit = async (e) => {
    // console.log("ok");
    e.preventDefault();
    if (
      formData.name !== "" &&
      formData.description1 !== "" &&
      formData.description2 !== "" &&
      formData.link1 !== "" &&
      formData.link2 !== ""
    ) {
      // console.log("okk");
      await addDoc(collection(db, "project_details"), {
        name: formData.name,
        description1: formData.description1,
        description2: formData.description2,
        image1: formData.image1,
        image2: formData.image2,
        link1: formData.link1,
        link2: formData.link2,
        tags: formData.tags,
      });
      // console.log("not ok");
      setFormData({
        name: "",
        description1: "",
        description2: "",
        image1: null,
        image2: null,
        link1: "",
        link2: "",
        tags: [],
      });
      const notify=()=>toast('Project Uploaded!')
      notify();
      // Navigate to home
      router.push('/');
      // console.log("oknot");
    }
  };
  const [auth, setAuth] = useState(null);
  
  useEffect(() => {
    const fetchData = async() =>
    {
      const q =  query(collection(db, "onepiece_secret"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let auth ;
        querySnapshot.forEach((doc) => {
          // itemsArr.push({ ...doc.data(), id: doc.id });
          setAuth(doc.data());
          
        });
        return () => unsubscribe();
      });
    }
  
      // setItem(itemsArr);

      fetchData()
  }, []);
  
  const [magic,setmagic]=useState({magic:''});

  const [test,setest]=useState(false);
 
  const notify = (item) => toast(item);

  const handleclick = async (e)=>{
    e.preventDefault();
   

    if(magic.magic===auth?.auth)
    {
      setmagic({magic:''})
      notify("Welcome Admin!")
      setest(true);
    }
    else{
      // alert('you are not authorize');
      setmagic({magic:''})
      notify("Sorry Dear!")

    }

  }


  return (
    <>
    { test?(<div className="flex justify-center items-center align-middle my-auto">
        <div className="h-[80vh] bg-blue-700 w-full  md:w-4/6 mx-auto my-auto">
         
          <form className="flex text-black gap-4 flex-col w-full md:w-5/6 mx-auto mt-4 ">
            <input
              type="text"
              name="name"
              placeholder=" name"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              value={formData.name}
            />
            <input
              type="text"
              name="description1"
              placeholder=" description1"
              onChange={(e) =>
                setFormData({ ...formData, description1: e.target.value })
              }
              value={formData.description1}
            />
            <input
              type="text"
              name="description2"
              placeholder=" description2"
              onChange={(e) =>
                setFormData({ ...formData, description2: e.target.value })
              }
              value={formData.description2}
            />
            <input type="file" name="image1" onChange={handleChange} />
            <input type="file" name="image2" onChange={handleChange} />
            <input
              type="text"
              placeholder=" link1 github"
              onChange={(e) =>
                setFormData({ ...formData, link1: e.target.value })
              }
              value={formData.link1}
            />
            <input
              type="text"
              placeholder=" link2 deployed link"
              onChange={(e) =>
                setFormData({ ...formData, link2: e.target.value })
              }
              value={formData.link2}
            />
            <input
              type="text"
              name="tags"
              placeholder="tags"
              value={formData.tags.join(",")}
              onChange={(e) => {
                setFormData({ ...formData, tags: e.target.value.split(",") });
              }}
            />
            <button
              onClick={handleSubmit}
              className="p-2 bg-slate-700 text-white text-2xl font-bold rounded-lg">
              Submit project
            </button>
            <ToastContainer/>
          </form>
        </div>
      </div>):(<div className=" bg-amber-400 p-4 flex gap-4 flex-col h-screen justify-center items-center"  >
        <div className=" text-center text-xl text-violet-900 font-bold"> Enter the magic no </div>
        <form className=" gap-4 flex flex-col" >
        <input type="password" className=" h-9 rounded-lg text-black  " value={magic.magic} onChange={(e)=>{setmagic({...magic,magic:e.target.value})}} />
        <button onClick={handleclick} className=" bg-violet-900 p-4 rounded-lg">submit</button>
        <ToastContainer />
        </form>
        <Link href="/"> <div className=" mt-3 p-3 text-white bg-gray-800 rounded-lg">Home</div></Link>
      </div>)}
      
    </>
  );
}
