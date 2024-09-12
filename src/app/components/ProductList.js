'use client';
import React, { useState } from 'react';
import { ArrowUpCircle, PlusCircle } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Carrot Care',
    description: 'Understand & optimize your bloodwork',
    icon: (
      <svg viewBox="0 0 100 100" className="w-12 h-12">
        <circle cx="50" cy="50" r="45" fill="#FF6B6B" />
        <path d="M50 25 L60 45 L80 50 L60 55 L50 75 L40 55 L20 50 L40 45 Z" fill="#FFA07A" />
      </svg>
    ),
    comments: 183,
    categories: ['Health & Fitness', 'Data & Analytics', 'Health'],
    upvotes: 430,
  },
  {
    id: 2,
    name: 'Xamble',
    description: 'A Web3 Gambling Website with NFT & Solana ',
    icon: (
      <svg viewBox="0 0 100 100" className="w-12 h-12">
        <rect x="10" y="10" width="80" height="80" fill="#4CAF50" rx="15" />
        <circle cx="50" cy="50" r="30" fill="#81C784" />
        <text x="50" y="55" fontSize="24" fill="white" textAnchor="middle" dominantBaseline="middle">X</text>
      </svg>
    ),
    comments: 97,
    categories: ['Web3', 'Gambling', 'Solana'],
    upvotes: 801,
  },
  {
    id: 3,
    name: 'SolVault',
    description: 'AI-powered Token Collectibles',
    icon: (
      <svg viewBox="0 0 100 100" className="w-12 h-12">
        <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="#3F51B5" />
        <circle cx="50" cy="50" r="25" fill="#7986CB" />
        <path d="M40 50 L60 50 M50 40 L50 60" stroke="white" strokeWidth="5" />
      </svg>
    ),
    comments: 47,
    categories: ['AI', 'Collectibles', 'Solana'],
    upvotes: 709,
  },
  {
    id: 4,
    name: 'TicketMaster',
    description: 'Solana Based',
    icon: (
      <svg viewBox="0 0 100 100" className="w-12 h-12">
        <rect x="10" y="20" width="80" height="60" fill="#FFC107" rx="10" />
        <path d="M20 20 L80 20 L80 40 L20 40 Z" fill="#FFECB3" />
        <circle cx="30" cy="30" r="5" fill="#FFA000" />
        <circle cx="70" cy="30" r="5" fill="#FFA000" />
      </svg>
    ),
    comments: 23,
    categories: ['Tickets', 'Solana'],
    upvotes: 143,
  },
];

const ProductList = ({ isLoggedIn }) => {
  const [localProducts, setLocalProducts] = useState(products);

  const handleUpvote = (productId) => {
    if (isLoggedIn) {
      setLocalProducts(prevProducts =>
        prevProducts.map(product =>
          product.id === productId
            ? { ...product, upvotes: product.upvotes + 1 }
            : product
        )
      );
    } else {
      alert('Please log in to upvote products');
    }
  };

  const handleAddProduct = () => {
    if (isLoggedIn) {
      alert('Add product functionality would be implemented here');
    } else {
      alert('Please log in to add a new product');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Top Products Launching Today</h2>
        <button 
          onClick={handleAddProduct}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 flex items-center"
        >
          <PlusCircle className="mr-2 h-4 w-4" /> Add Product
        </button>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {localProducts.map((product) => (
          <div key={product.id} className="flex items-center space-x-4 p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300">
            <div className="flex-shrink-0">{product.icon}</div>
            <div className="flex-grow">
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{product.description}</p>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-xs text-gray-500">{product.comments} comments</span>
                {product.categories.map((category, index) => (
                  <span key={index} className="text-xs bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full px-2 py-1">
                    {category}
                  </span>
                ))}
              </div>
            </div>
            <button
              className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300"
              onClick={() => handleUpvote(product.id)}
            >
              <ArrowUpCircle className="h-5 w-5" />
              <span>{product.upvotes}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;