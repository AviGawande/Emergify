import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const FooterLink = ({ href, children }) => (
  <a href={href} className="text-gray-400 hover:text-white transition duration-300">
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Emergify
            </h3>
            <p className="text-gray-400">Innovate, Enlist, and Earn on Solana</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><FooterLink href="#features">Features</FooterLink></li>
              <li><FooterLink href="#about">About</FooterLink></li>
              <li><FooterLink href="#contact">Contact</FooterLink></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><FooterLink href="#">Documentation</FooterLink></li>
              <li><FooterLink href="#">API</FooterLink></li>
              <li><FooterLink href="#">Privacy Policy</FooterLink></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <FooterLink href="#"><Github size={24} /></FooterLink>
              <FooterLink href="#"><Twitter size={24} /></FooterLink>
              <FooterLink href="#"><Linkedin size={24} /></FooterLink>
              <FooterLink href="#"><Mail size={24} /></FooterLink>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Emergify-Solana Product Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;