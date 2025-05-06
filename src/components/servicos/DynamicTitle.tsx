'use client';

import { useEffect, useState } from 'react';

export default function DynamicTitle() {
  const [currentPhrase, setCurrentPhrase] = useState("entregas todo dia");
  const phrases = ["entregas todo dia", "transparência total", "resultado de negócio"];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % phrases.length;
      setCurrentPhrase(phrases[currentIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
      Desenvolvimento com <span className="gradient-text">{currentPhrase}</span>
    </h1>
  );
} 