import React from 'react'

const About = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">About Us</h2>
        <div className="max-w-3xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg border border-purple-500">
          <p className="text-xl text-gray-300 leading-relaxed">
            We are a cutting-edge Web3 startup dedicated to revolutionizing the way people interact with blockchain technology. Our mission is to make decentralized applications accessible, secure, and user-friendly for everyone. With a team of passionate experts, we're building the future of the decentralized web.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About