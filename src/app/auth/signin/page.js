'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const SignIn = () => {
  const router = useRouter();

  const handleSignIn = (provider) => {
    signIn(provider, { callbackUrl: '/' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-white text-center">Sign In</h2>
        <div className="space-y-4">
          <button
            onClick={() => handleSignIn('github')}
            className="w-full animated-gradient-button"
          >
            Sign in with GitHub
          </button>
          <button
            onClick={() => handleSignIn('google')}
            className="w-full animated-gradient-button"
          >
            Sign in with Google
          </button>
          <button
            onClick={() => router.push('/')}
            className="w-full bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-500 transition duration-300"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;