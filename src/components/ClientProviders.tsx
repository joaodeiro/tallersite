'use client';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, useEffect } from "react";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Only render children when component is mounted (client-side)
  // This prevents the "document is not defined" error
  return (
    <QueryClientProvider client={queryClient}>
      {isMounted ? children : null}
    </QueryClientProvider>
  );
}