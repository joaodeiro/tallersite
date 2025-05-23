'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ServicosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-screen flex flex-col relative overflow-x-hidden">
      <div className="fixed inset-0 bg-[#121212] w-full h-full z-0" aria-hidden="true" />
      <Navbar />
      <div className="relative flex-grow flex flex-col z-10">
        {children}
        <Footer />
      </div>
    </div>
  );
} 