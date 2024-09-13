'use client';

import React from 'react';
import { signIn } from 'next-auth/react';

const SignUpModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm"></div>
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-md w-full z-10">
        <h2 className="text-2xl font-bold mb-4 text-white">Sign Up</h2>
        <button
          onClick={() => signIn('github')}
          className="w-full animated-gradient-button mb-4"
        >
          Sign up with GitHub
        </button>
        <button 
          onClick ={() => signIn('google')}
          className="w-full animated-gradient-button mb-4">
          Sign up with Google
        </button>
        {/* Add more providers as needed */}
        <button
          onClick={onClose}
          className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500 transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SignUpModal;