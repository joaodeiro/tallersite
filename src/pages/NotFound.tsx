import { useLocation } from "react-router-dom";
import { useEffect } from "react";

// Client-side component that uses router hooks
const ClientNotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return <NotFoundContent />;
};

// Shared content component with no hooks
const NotFoundContent = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
      <a href="/" className="text-blue-500 hover:text-blue-700 underline">
        Return to Home
      </a>
    </div>
  </div>
);

// Main component that conditionally renders client or server version
const NotFound = () => {
  const isClient = typeof window !== 'undefined';

  if (isClient) {
    return <ClientNotFound />;
  }

  return <NotFoundContent />;
};

export default NotFound;
