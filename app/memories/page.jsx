"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaPlus, FaTimes } from "react-icons/fa";
import { Monoton } from 'next/font/google';
import { db } from "../../firebase/Firebase";
import { collection, query, onSnapshot, orderBy, where } from "firebase/firestore";

const monoton = Monoton({ subsets: ['latin'], weight: '400' });

// Empty array for when no memories are found
const emptyMemoryData = [];

export default function MemoriesPage() {
  const [selectedYear, setSelectedYear] = useState(null);
  const [memoryData, setMemoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchMemories = async () => {
      try {
        const q = query(collection(db, "memories"), orderBy("year", "desc"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const memories = [];
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            memories.push({
              id: doc.id,
              year: parseInt(data.year),
              title: data.title,
              description: data.description,
              files: data.files || [],
              createdAt: data.createdAt
            });
          });
          
          // Group memories by year
          const groupedMemories = memories.reduce((acc, memory) => {
            const existingYearIndex = acc.findIndex(item => item.year === memory.year);
            
            if (existingYearIndex >= 0) {
              // If this year already exists, add the files to it
              acc[existingYearIndex].files = [...acc[existingYearIndex].files, ...memory.files];
              // Keep the most recent title and description
              if (new Date(memory.createdAt) > new Date(acc[existingYearIndex].createdAt)) {
                acc[existingYearIndex].title = memory.title;
                acc[existingYearIndex].description = memory.description;
                acc[existingYearIndex].createdAt = memory.createdAt;
              }
            } else {
              // Otherwise create a new year entry
              acc.push({
                id: memory.id,
                year: memory.year,
                title: memory.title,
                description: memory.description,
                files: memory.files,
                createdAt: memory.createdAt
              });
            }
            return acc;
          }, []);
          
          // Sort by year (newest first)
          groupedMemories.sort((a, b) => b.year - a.year);
          
          setMemoryData(groupedMemories);
          
          setLoading(false);
        });
        
        return () => unsubscribe();
      } catch (error) {
        console.error("Error fetching memories:", error);
        setMemoryData(emptyMemoryData);
        setLoading(false);
      }
    };
    
    fetchMemories();
  }, []);

  const handleYearClick = (year) => {
    setSelectedYear(year === selectedYear ? null : year);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const yearVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen dark:bg-[#1d0039] bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <Link href="/" className="flex items-center gap-2 text-gray-400 dark:text-[#FFD700] hover:underline order-1 md:order-1">
            <FaArrowLeft />
            <span>Back to Home</span>
          </Link>
          <h1 className={`text-2xl md:text-5xl text-center text-gray-400 dark:text-[#FFD700] ${monoton.className} order-2 md:order-2`}>
            OUR MEMORIES
          </h1>
          <Link 
            href="/uploadmemories" 
            className="flex items-center gap-2 text-gray-400 dark:text-[#FFD700] hover:underline order-3 md:order-3"
          >
            <FaPlus />
            <span className="inline">Add</span>
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : memoryData.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <p className="text-xl text-gray-400 dark:text-gray-300 mb-4">No memories found</p>
            <p className="text-gray-500 dark:text-gray-400 mb-6">Start creating memories by clicking the "Add Memories" button</p>
            <Link 
              href="/uploadmemories" 
              className="px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white rounded-lg transition duration-300 flex items-center gap-2"
            >
              <FaPlus />
              <span>Add Your First Memory</span>
            </Link>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
          {memoryData.map((memory) => (
            <motion.div
              key={memory.id}
              className={`relative cursor-pointer rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${
                selectedYear === memory.year ? "col-span-1 md:col-span-2 lg:col-span-4 row-span-2" : ""
              }`}
              onClick={() => handleYearClick(memory.year)}
              variants={yearVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={memory.files && memory.files.length > 0 ? memory.files[0].url : "/p2.png"}
                  alt={memory.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <h2 className="text-4xl font-bold text-[#FFD700]">{memory.year}</h2>
                </div>
              </div>
              
              {selectedYear === memory.year && (
                <motion.div
                  className="p-6 bg-gray-800 dark:bg-[#1d0039] bg-opacity-90"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-400 dark:text-[#FFD700]">{memory.title}</h3>
                  <p className="mb-4 md:mb-6 text-sm md:text-base text-gray-300">{memory.description}</p>
                  
                  <motion.div 
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {memory.files && memory.files.length > 0 ? (
                      // If we have files from Firebase
                      memory.files.slice(0, 10).map((file, index) => (
                        <motion.div
                          key={index}
                          className="relative h-40 md:h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl"
                          variants={itemVariants}
                        >
                          {file.type && file.type.startsWith('image/') ? (
                            <div className="group relative w-full h-full overflow-hidden">
                              <Image
                                src={file.url}
                                alt={`Memory ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div 
                                className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedImage(file.url);
                                }}
                              >
                                <span className="text-white text-xs md:text-sm px-2 py-1 bg-black bg-opacity-50 rounded">View</span>
                              </div>
                            </div>
                          ) : file.type && file.type.startsWith('video/') ? (
                            <div className="relative h-full w-full">
                              <video 
                                src={file.url} 
                                controls 
                                className="absolute inset-0 w-full h-full object-cover"
                              />
                            </div>
                          ) : (
                            // Fallback for files without type or unknown type
                            <div className="group relative w-full h-full overflow-hidden">
                              <Image
                                src={file.url}
                                alt={`Memory ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div 
                                className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedImage(file.url);
                                }}
                              >
                                <span className="text-white text-xs md:text-sm px-2 py-1 bg-black bg-opacity-50 rounded">View</span>
                              </div>
                            </div>
                          )}
                        </motion.div>
                      ))
                    ) : (
                      <div className="col-span-1 md:col-span-5 flex justify-center items-center h-64">
                        <p className="text-gray-400 dark:text-gray-300">No images or videos found for this year</p>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          ))}
          </motion.div>
        )}

        <div className="text-center mt-8">
          <p className="text-gray-400 dark:text-gray-300 italic">
            "Memories are timeless treasures of the heart."
          </p>
        </div>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative max-w-full md:max-w-5xl max-h-[80vh] md:max-h-[90vh] w-full h-full"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={selectedImage}
                    alt="Full size image"
                    fill
                    className="object-contain"
                  />
                </div>
                <button 
                  className="absolute top-2 right-2 bg-gray-800 text-white p-2 md:p-3 rounded-full hover:bg-gray-700 transition-colors z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(null);
                  }}
                >
                  <FaTimes className="text-lg md:text-xl" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
