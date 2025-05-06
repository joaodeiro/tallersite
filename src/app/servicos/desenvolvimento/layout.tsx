'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ServicosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col" style={{overflow: 'visible', height: 'auto'}}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
} 