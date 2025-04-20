"use client";
import React, { useEffect, useState } from "react";
import { db, storage } from "../../firebase/Firebase";
import { v4 } from "uuid";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from "react-icons/fa";
import { encrypt, decrypt, secureCompare } from "../../utils/encryption";

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

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
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
    const imagename = e.target.name;
    const imgref = ref(storage, `project_image/${v4()}`);
    await uploadBytes(imgref, e.target.files[0]).then((data) => {
      getDownloadURL(data.ref).then((ref) => {
        setFormData((prev) => ({
          ...prev,
          [imagename]: ref,
        }));
      });
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.name !== "" &&
      formData.description1 !== "" &&
      formData.description2 !== "" &&
      formData.link1 !== "" &&
      formData.link2 !== ""
    ) {
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
      
      toast.success('Project Uploaded!');
      
      // Navigate to home
      router.push('/');
    } else {
      toast.error('Please fill in all required fields');
    }
  };
  
  const [auth, setAuth] = useState(null);
  
  useEffect(() => {
    const fetchData = async() =>
    {
      const q = query(collection(db, "onepiece_secret"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // Encrypt the auth data before storing it in state
          const authData = doc.data();
          // Don't log the auth data to prevent it from appearing in console
          
          // Store the encrypted auth data
          if (authData && authData.auth) {
            const encryptedAuth = {
              ...authData,
              auth: encrypt(authData.auth)
            };
            setAuth(encryptedAuth);
          } else {
            setAuth(authData);
          }
        });
        return () => unsubscribe();
      });
    }

    fetchData();
  }, []);
  
  const [magic, setmagic] = useState({magic:''});
  const [test, setest] = useState(false);
 
  const notify = (item) => toast(item);

  const handleclick = async (e) => {
    e.preventDefault();
    
    // Encrypt the user input
    const encryptedInput = encrypt(magic.magic);
    
    // Use secure comparison to check if the input matches the stored auth
    if (auth?.auth && secureCompare(magic.magic, decrypt(auth.auth))) {
      setmagic({magic: ''});
      notify("Welcome Admin!");
      setest(true);
    } else {
      setmagic({magic: ''});
      notify("Sorry Dear!");
    }
  }

  return (
    <div className="min-h-screen dark:bg-[#1d0039] bg-gray-900 text-white">
      {test ? (
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="flex items-center gap-2 text-gray-400 dark:text-[#FFD700] hover:underline">
              <FaArrowLeft />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-3xl md:text-4xl text-center text-gray-400 dark:text-[#FFD700]">
              Upload Project
            </h1>
            <div className="w-24"></div> {/* Empty div for flex spacing */}
          </div>

          <div className="bg-gray-800 dark:bg-purple-900/30 rounded-lg shadow-lg p-6 mb-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Project Name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Project name"
                    className="w-full p-3 bg-gray-700 rounded-lg text-white border border-gray-600 focus:border-purple-500 focus:outline-none"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    value={formData.name}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Tags (comma separated) *</label>
                  <input
                    type="text"
                    name="tags"
                    placeholder="React, NextJS, Firebase, etc."
                    className="w-full p-3 bg-gray-700 rounded-lg text-white border border-gray-600 focus:border-purple-500 focus:outline-none"
                    value={formData.tags.join(",")}
                    onChange={(e) => {
                      setFormData({ ...formData, tags: e.target.value.split(",") });
                    }}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Description 1 *</label>
                <textarea
                  name="description1"
                  placeholder="Main project description"
                  className="w-full p-3 bg-gray-700 rounded-lg text-white border border-gray-600 focus:border-purple-500 focus:outline-none min-h-[100px]"
                  onChange={(e) => setFormData({ ...formData, description1: e.target.value })}
                  value={formData.description1}
                  required
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Description 2 *</label>
                <textarea
                  name="description2"
                  placeholder="Additional project details"
                  className="w-full p-3 bg-gray-700 rounded-lg text-white border border-gray-600 focus:border-purple-500 focus:outline-none min-h-[100px]"
                  onChange={(e) => setFormData({ ...formData, description2: e.target.value })}
                  value={formData.description2}
                  required
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Image 1 *</label>
                  <div className="border-2 border-dashed border-gray-600 rounded-lg p-4">
                    <input 
                      type="file" 
                      name="image1" 
                      onChange={handleChange}
                      className="w-full text-gray-400"
                    />
                  </div>
                  {formData.image1 && (
                    <div className="mt-2 p-2 bg-gray-700 rounded-lg">
                      <p className="text-xs text-green-400">✓ Image 1 uploaded</p>
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Image 2 *</label>
                  <div className="border-2 border-dashed border-gray-600 rounded-lg p-4">
                    <input 
                      type="file" 
                      name="image2" 
                      onChange={handleChange}
                      className="w-full text-gray-400"
                    />
                  </div>
                  {formData.image2 && (
                    <div className="mt-2 p-2 bg-gray-700 rounded-lg">
                      <p className="text-xs text-green-400">✓ Image 2 uploaded</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">GitHub Link *</label>
                  <input
                    type="text"
                    placeholder="https://github.com/yourusername/project"
                    className="w-full p-3 bg-gray-700 rounded-lg text-white border border-gray-600 focus:border-purple-500 focus:outline-none"
                    onChange={(e) => setFormData({ ...formData, link1: e.target.value })}
                    value={formData.link1}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Deployed Link *</label>
                  <input
                    type="text"
                    placeholder="https://your-project.vercel.app"
                    className="w-full p-3 bg-gray-700 rounded-lg text-white border border-gray-600 focus:border-purple-500 focus:outline-none"
                    onChange={(e) => setFormData({ ...formData, link2: e.target.value })}
                    value={formData.link2}
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleSubmit}
                  className="px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white rounded-lg transition duration-300"
                >
                  Submit Project
                </button>
              </div>
            </form>
          </div>
          <ToastContainer />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen p-4">
          <div className="bg-gray-800 dark:bg-purple-900 p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-300 dark:text-[#FFD700]">
              Authentication Required
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Enter the magic code</label>
                <input 
                  type="password" 
                  className="w-full p-3 bg-gray-700 rounded-lg text-white border border-gray-600 focus:border-purple-500 focus:outline-none"
                  value={magic.magic}
                  onChange={(e) => setmagic({ ...magic, magic: e.target.value })}
                />
              </div>
              <button 
                onClick={handleclick}
                className="w-full py-3 bg-purple-700 hover:bg-purple-800 text-white rounded-lg transition duration-300"
              >
                Submit
              </button>
            </form>
            <div className="mt-6 text-center">
              <Link href="/" className="text-purple-400 hover:text-purple-300 flex items-center justify-center gap-2">
                <FaArrowLeft />
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
          <ToastContainer />
        </div>
      )}
    </div>
  );
}
