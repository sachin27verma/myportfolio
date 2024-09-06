'use client'
import React, { useState, useEffect } from 'react';
import Landingpage from './landingpage/page';
import {Loader} from '../components/Loader/Loader';

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay for the content
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as per your requirement

    // Cleanup function to clear the timeout when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        // Loader to show while content is loading
        <div className="flex items-center justify-center h-screen">
          <div className="loader"><Loader/></div>
        </div>
      ) : (
        // Content of the landing page once loading is complete
        <Landingpage />
      )}
    </>
  );
};

export default Page;
