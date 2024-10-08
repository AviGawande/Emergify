'use client';

import Navbar from '../app/components/Navbar';
import Hero from '../app/components/Hero';
import ProductList from '../app/components/ProductList';
import Feature from '../app/components/Feature';
import Footer from '../app/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <ProductList />
      <Feature />
      <Footer />
    </main>
  );
}
