"use client";
import React, { useEffect, useState } from "react";
import { db, storage } from "../../firebase/Firebase";
import { v4 } from "uuid";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { FaArrowLeft, FaUpload } from "react-icons/fa";
import { encrypt, decrypt, secureCompare } from "../../utils/encryption";

import {
  collection,
  addDoc,
  query,
  onSnapshot,
} from "firebase/firestore";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function UploadMemories() {
  const router = useRouter();
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear - i);

  const [formData, setFormData] = useState({
    year: currentYear.toString(),
    title: "",
    description: "",
    files: []
  });

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [auth, setAuth] = useState(null);
  const [magic, setmagic] = useState({ magic: '' });
  const [test, setest] = useState(false);

  useEffect(() => {
    const fetchData = async() => {
      const q = query(collection(db, "onepiece_secret"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const authData = doc.data();
        
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

  const handleclick = async (e) => {
    e.preventDefault();
    
    // Encrypt the user input
    const encryptedInput = encrypt(magic.magic);
    
    // Use secure comparison to check if the input matches the stored auth
    if (auth?.auth && secureCompare(magic.magic, decrypt(auth.auth))) {
      setmagic({magic: ''});
      toast.success("Welcome Admin!");
      setest(true);
    } else {
      setmagic({magic: ''});
      toast.error("Sorry Dear!");
    }
  }

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    
    // Preview files
    const newUploadedFiles = selectedFiles.map(file => ({
      file,
      id: v4(),
      name: file.name,
      type: file.type,
      preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : null,
      url: null
    }));
    
    setUploadedFiles(prev => [...prev, ...newUploadedFiles]);
  };

  const removeFile = (id) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== id));
  };

  const uploadFiles = async () => {
    if (uploadedFiles.length === 0) {
      toast.error("Please select files to upload");
      return;
    }

    setIsUploading(true);
    setProgress(0);
    
    const totalFiles = uploadedFiles.length;
    let uploadedCount = 0;
    const uploadedUrls = [];

    for (const fileObj of uploadedFiles) {
      if (!fileObj.url) { // Only upload files that haven't been uploaded yet
        const fileRef = ref(storage, `memories/${formData.year}/${v4()}_${fileObj.name}`);
        
        try {
          const snapshot = await uploadBytes(fileRef, fileObj.file);
          const downloadUrl = await getDownloadURL(snapshot.ref);
          
          // Update the file object with the URL
          fileObj.url = downloadUrl;
          uploadedUrls.push({
            id: fileObj.id,
            name: fileObj.name,
            type: fileObj.type,
            url: downloadUrl
          });
        } catch (error) {
          console.error("Error uploading file:", error);
          toast.error(`Failed to upload ${fileObj.name}`);
        }
      } else {
        // File was already uploaded
        uploadedUrls.push({
          id: fileObj.id,
          name: fileObj.name,
          type: fileObj.type,
          url: fileObj.url
        });
      }
      
      uploadedCount++;
      setProgress(Math.round((uploadedCount / totalFiles) * 100));
    }

    setIsUploading(false);
    return uploadedUrls;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.year || !formData.title || !formData.description) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (uploadedFiles.length === 0) {
      toast.error("Please select files to upload");
      return;
    }

    try {
      // First upload all files
      const fileUrls = await uploadFiles();
      
      if (!fileUrls || fileUrls.length === 0) {
        toast.error("Failed to upload files");
        return;
      }

      // Then save the memory data to Firestore
      await addDoc(collection(db, "memories"), {
        year: formData.year,
        title: formData.title,
        description: formData.description,
        files: fileUrls,
        createdAt: new Date().toISOString()
      });

      toast.success("Memory uploaded successfully!");
      
      // Reset form
      setFormData({
        year: currentYear.toString(),
        title: "",
        description: "",
        files: []
      });
      setUploadedFiles([]);
      
      // Navigate back to memories page after a short delay
      setTimeout(() => {
        router.push('/memories');
      }, 2000);
    } catch (error) {
      console.error("Error saving memory:", error);
      toast.error("Failed to save memory");
    }
  };

  return (
    <div className="min-h-screen dark:bg-[#1d0039] bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <Link href="/memories" className="flex items-center gap-2 text-gray-400 dark:text-[#FFD700] hover:underline order-1 md:order-1">
            <FaArrowLeft />
            <span>Back to Memories</span>
          </Link>
          <h1 className="text-2xl md:text-4xl text-center text-gray-400 dark:text-[#FFD700] order-2 md:order-2">
            Upload Memories
          </h1>
          <div className="w-0 md:w-24 order-3 md:order-3"></div> {/* Empty div for flex spacing */}
        </div>

        {!test ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh] p-4">
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
                <Link href="/memories" className="text-purple-400 hover:text-purple-300 flex items-center justify-center gap-2">
                  <FaArrowLeft />
                  <span>Back to Memories</span>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-4xl mx-auto">
            <div className="bg-gray-800 dark:bg-purple-900/30 rounded-lg shadow-lg p-6 mb-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Year *</label>
                    <select
                      className="w-full p-3 bg-gray-700 rounded-lg text-white border border-gray-600 focus:border-purple-500 focus:outline-none"
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      required
                    >
                      {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Title *</label>
                    <input
                      type="text"
                      className="w-full p-3 bg-gray-700 rounded-lg text-white border border-gray-600 focus:border-purple-500 focus:outline-none"
                      placeholder="Memory title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Description *</label>
                  <textarea
                    className="w-full p-3 bg-gray-700 rounded-lg text-white border border-gray-600 focus:border-purple-500 focus:outline-none min-h-[100px]"
                    placeholder="Describe this memory..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Upload Images & Videos *</label>
                  <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      multiple
                      accept="image/*,video/*"
                      onChange={handleFileChange}
                      className="hidden"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center justify-center">
                      <FaUpload className="text-4xl mb-2 text-gray-400" />
                      <p className="text-gray-400">Click to select files</p>
                      <p className="text-gray-500 text-sm mt-1">Supports images and videos</p>
                    </label>
                  </div>
                </div>

                {uploadedFiles.length > 0 && (
                  <div>
                    <h3 className="text-lg font-medium mb-3">Selected Files ({uploadedFiles.length})</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4">
                      {uploadedFiles.map(file => (
                        <div key={file.id} className="relative group">
                          <div className="aspect-square bg-gray-700 rounded-lg overflow-hidden shadow-md">
                            {file.type.startsWith('image/') ? (
                              <img 
                                src={file.preview} 
                                alt={file.name} 
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <span className="text-gray-400">Video</span>
                              </div>
                            )}
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(file.id)}
                            className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center opacity-75 md:opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            ×
                          </button>
                          <p className="text-xs mt-1 truncate">{file.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {isUploading && (
                  <div className="mt-4">
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="bg-purple-600 h-2.5 rounded-full" 
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-center mt-2">Uploading: {progress}%</p>
                  </div>
                )}

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isUploading}
                    className="px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white rounded-lg transition duration-300 disabled:opacity-50"
                  >
                    {isUploading ? 'Uploading...' : 'Save Memory'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}
