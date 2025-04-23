'use client';

import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function RouterProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={children} />
      </Routes>
    </BrowserRouter>
  );
}