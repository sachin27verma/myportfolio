"use client";
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';

export default function GoogleSignIn() {
  const { signInWithGoogle, currentUser, isAdmin, logout } = useAuth();

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Error signing in:", error);
      toast.error("Failed to sign in with Google");
    }
  };

  const handleSignOut = async () => {
    try {
      await logout();
      toast.success("Signed out successfully");
    } catch (error) {
      console.error("Error signing out:", error);
      toast.error("Failed to sign out");
    }
  };

  if (currentUser) {
    return (
      <div className="bg-gray-800 dark:bg-purple-900 p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-6">
          {currentUser.photoURL && (
            <img 
              src={currentUser.photoURL} 
              alt="Profile" 
              className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-gray-300"
            />
          )}
          <h2 className="text-2xl font-bold text-gray-300 dark:text-[#FFD700]">
            Welcome, {currentUser.displayName}
          </h2>
          <p className="text-gray-400 mt-2">{currentUser.email}</p>
          
          {isAdmin ? (
            <div className="mt-4 bg-green-900/30 p-2 rounded-lg">
              <p className="text-green-400">You have admin access</p>
            </div>
          ) : (
            <div className="mt-4 bg-red-900/30 p-2 rounded-lg">
              <p className="text-red-400">You don't have admin access</p>
            </div>
          )}
        </div>
        
        <button 
          onClick={handleSignOut}
          className="w-full py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition duration-300 flex items-center justify-center gap-2"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 dark:bg-purple-900 p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-300 dark:text-[#FFD700]">
        Authentication Required
      </h2>
      <p className="text-gray-400 mb-6 text-center">
        Please sign in with your Google account to continue
      </p>
      
      <button 
        onClick={handleSignIn}
        className="w-full py-3 bg-white hover:bg-gray-100 text-gray-800 rounded-lg transition duration-300 flex items-center justify-center gap-2"
      >
        <FcGoogle className="text-2xl" />
        <span>Sign in with Google</span>
      </button>
    </div>
  );
}
