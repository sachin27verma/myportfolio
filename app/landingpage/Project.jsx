"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import FastForwardIcon from "@mui/icons-material/FastForward";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import { db } from "../../firebase/Firebase";
import { collection, query, onSnapshot } from "firebase/firestore";

export default function Project() {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "project_details"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let itemsArr = [];

        querySnapshot.forEach((doc) => {
          itemsArr.push({ ...doc.data(), id: doc.id });
        });

        setItem(itemsArr);
        setLoading(false);
      });

      return () => unsubscribe();
    };

    fetchData();
  }, []);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0 1"],
  });

  const n = item.length;

  const [state, setState] = useState(0);

  const handleClickForward = () => {
    setState((prevState) => (prevState + 1) % n);
  };

  const handleClickBackward = () => {
    setState((prevState) => (prevState - 1 + n) % n);
  };

  return (
    <>
      <div className="bg-[#1d0039]">
        <div className="text-center text-3xl text-[#FFD700] py-2 pt-5 mb-3 font-bold digital-font">
          PROJECT
        </div>
        <div className="w-full mx-auto flex flex-col fancy-border justify-center gap-3 relative">
          {loading || item.length === 0 ? (
            <h1 className="flex justify-center items-center">Loading....</h1>
          ) : (
            <motion.div
              key={item[state].id}
              ref={ref}
              style={{
                scale: scrollYProgress,
                opacity: scrollYProgress,
              }}
              className="w-full md:min-w-[300px]">
              <p className="text-3xl font-bold  text-[#FFD700] tracking-wider mb-3 text-center drop-shadow-lg outline-offset-2 outline-blue-50">
                {item[state].name}
              </p>
              <div className="w-full md:w-5/6 mx-auto h-auto md:h-screen rounded-lg relative flex flex-col md:flex-row gap-2">
                <div className="h-[400px] md:h-full w-full md:w-1/2  relative group">
                  <Image
                    key={item[state].id}
                    src={item[state].image1}
                    fill
                    className="object-full z-10 rounded-lg"
                    alt="project image"
                  />
                  <Image
                    key={item[state].id}
                    src={item[state].image2}
                    fill
                    className="object-contain scale-75 z-20 rounded-lg transition-transform transform group-hover:scale-50 group-hover:translate-x-2/4 group-hover:translate-y-2/4 group-hover:rotate-12 "
                    alt="project image"
                  />
                </div>

                <div className="w-full h-full md:w-1/2 flex flex-col justify-between">
                  <div>
                    <div className=" italic">
                      <svg
                        class="w-8 h-8 text-white rotate-180 inline-block mb-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 14">
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                      </svg>
                      <p
                        key={item[state].id}
                        className="tracking-wider  text-md break-all leading-9 ">
                        {item[state].description1}
                      </p>
                      <br />
                      <p
                        key={item[state].id}
                        className="hidden md:flex  tracking-wider  text-md break-all leading-9">
                        {item[state].description2}
                      </p>
                      <br className="hidden md:flex" />
                    </div>
                    <div className="tag flex gap-4 flex-wrap">
                      {item[state].tags.map((el, index) => (
                        <span
                          key={index}
                          className="bg-[#FFD700] px-2 rounded-xl font-semibold text-md text-[#1d0039]">
                          {el}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="py-3 flex gap-3">
                    <span>
                      <Link href={item[state].link1}>
                        <GitHubIcon className="text-4xl" />
                      </Link>
                    </span>
                    <span className="rotate-45">
                      <Link href={item[state].link2}>
                        <LinkIcon className="text-4xl" />
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
              <hr className="my-3 w-full md:w-5/6 mx-auto" />
            </motion.div>
          )}

          <div className="flex justify-center mt-2 gap-2">
            <span>
              <FastRewindIcon
                className="text-4xl cursor-pointer hover:text-[#FFD700] hover:scale-110"
                onClick={handleClickBackward}
              />
            </span>{" "}
            <span>
              <FastForwardIcon
                className="text-4xl cursor-pointer hover:text-[#FFD700] hover:scale-110"
                onClick={handleClickForward}
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
