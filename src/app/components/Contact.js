'use client';  // This line is crucial - it marks this as a Client Component

import React from 'react'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted')
  }

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Contact Us</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-900 p-8 rounded-lg shadow-lg border border-purple-500">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-purple-400">Name</label>
            <input type="text" id="name" name="name" required className="w-full px-3 py-2 bg-gray-800 border border-purple-500 rounded text-white focus:outline-none focus:border-pink-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-purple-400">Email</label>
            <input type="email" id="email" name="email" required className="w-full px-3 py-2 bg-gray-800 border border-purple-500 rounded text-white focus:outline-none focus:border-pink-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 text-purple-400">Message</label>
            <textarea id="message" name="message" required className="w-full px-3 py-2 bg-gray-800 border border-purple-500 rounded text-white focus:outline-none focus:border-pink-500 h-32"></textarea>
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded hover:from-purple-600 hover:to-pink-600 transition duration-300 transform hover:scale-105">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact