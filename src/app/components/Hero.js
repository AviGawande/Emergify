import React from 'react';
import { ArrowRight, Plus, Image, Tag } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
          Community Driven Solana Marketplace
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-10">
        To Solve the problem of newly emerging solana products where its very hard to keep them all on same platform. 
        </p>
        <button className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-blue-700 transition duration-300 transform hover:scale-105 shadow-lg">
          <span>Create a product for free</span>
          <ArrowRight size={20} />
        </button>
        {/* <div className="mt-16 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-2xl max-w-4xl mx-auto border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-6">Create Your Solana Product</h3>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center cursor-pointer hover:from-purple-600 hover:to-blue-700 transition duration-300">
                <Plus size={24} className="text-white" />
              </div>
              <input type="text" placeholder="Product Name" className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300" />
            </div>
            <textarea placeholder="Product Description" className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none transition duration-300" />
            <div className="flex space-x-4">
              <button className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-blue-700 transition duration-300">
                <Image size={20} />
                <span>Add Image</span>
              </button>
              <button className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition duration-300">
                <Tag size={20} />
                <span>Add Categories</span>
              </button>
            </div>
            <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:from-green-600 hover:to-blue-600 transition duration-300 transform hover:scale-105 shadow-lg">
              Launch Product
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;