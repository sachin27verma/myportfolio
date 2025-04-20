"use client";
import { createContext, useContext, useEffect, useState } from 'react';
import { 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth';
import { auth } from '../firebase/Firebase';

// Create the authentication context
const AuthContext = createContext();

// Hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

// List of authorized email addresses
const AUTHORIZED_EMAILS = [
  // Admin email addresses
  'sk.sachin9128@gmail.com',
  'sachinverma2402@gmail.com'
];

// Provider component that wraps your app and makes auth object available to any child component that calls useAuth()
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  // Sign in with Google
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      return result;
    } catch (error) {
      console.error("Error signing in with Google", error);
      throw error;
    }
  };

  // Sign out
  const logout = () => {
    return signOut(auth);
  };

  // Check if user is an admin
  const checkIfAdmin = (user) => {
    if (!user) return false;
    return AUTHORIZED_EMAILS.includes(user.email);
  };

  // Set up an auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsAdmin(checkIfAdmin(user));
      setLoading(false);
    });

    // Clean up the listener on unmount
    return unsubscribe;
  }, []);

  // Context value
  const value = {
    currentUser,
    isAdmin,
    signInWithGoogle,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
