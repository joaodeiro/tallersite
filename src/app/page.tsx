'use client';

import Hero from "@/components/home/Hero";
import About from "@/components/sections/About";
import Services from "@/components/home/Services";
import Resources from "@/components/sections/Resources";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Show content only when component is mounted (client-side)
  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col" id="home">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}