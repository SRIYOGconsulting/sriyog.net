import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen   px-6 text-center">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">The page you are looking for does not exist.</p>

      <Link
        to="/"
        className="px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
