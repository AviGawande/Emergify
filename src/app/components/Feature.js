'use client';

import React from 'react';
import { Shield, Zap, Award, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon: Icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-gray-800 rounded-lg p-6 transition duration-500 transform hover:scale-105 hover:bg-gray-700 border border-gray-700 shadow-xl hover:shadow-2xl relative overflow-hidden group"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    <div className="relative z-10">
      <motion.div
        className="mb-6 relative"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-blue-500 opacity-20 rounded-full animate-pulse"></div>
        <Icon className="text-blue-400 relative z-10" size={48} />
      </motion.div>
      <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-300 transition-colors duration-300">{title}</h3>
      <p className="text-gray-300 transition-all duration-300 group-hover:text-gray-100">{description}</p>
    </div>
  </motion.div>
);

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Utilize Power of Blinks",
      description: "Seamlessly connect your Solana wallet for secure transactions and project submissions."
    },
    {
      icon: Zap,
      title: "Lightning-Fast Voting",
      description: "Experience near-instant voting and updates thanks to Solana's high-speed blockchain."
    },
    {
      icon: Award,
      title: "Reward System",
      description: "Earn tokens for your contributions, whether you're listing projects or providing valuable feedback."
    },
    {
      icon: TrendingUp,
      title: "Trending Projects",
      description: "Discover the hottest new Solana projects with our real-time trending algorithm."
    }
  ];

  return (
    <section id="features" className="py-20 bg-background text-foreground overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-gradient-x"
        >
          Powerful Features for Emergify
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;