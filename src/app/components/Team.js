import React from 'react'

const Team = () => {
  const teamMembers = [
    { name: 'Alice Johnson', role: 'CEO', image: '/alice.jpg' },
    { name: 'Bob Smith', role: 'CTO', image: '/bob.jpg' },
    { name: 'Charlie Brown', role: 'Lead Developer', image: '/charlie.jpg' },
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg border border-purple-500 text-center transform transition duration-500 hover:scale-105">
              <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-purple-500" />
              <h3 className="text-xl font-semibold mb-2 text-purple-400">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team