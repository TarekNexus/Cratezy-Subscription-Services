import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 py-12 text-center">
        <h1 className="text-6xl font-bold text-indigo-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          The page you’re looking for doesn’t exist or was moved.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition duration-300"
        >
          Go to Homepage
        </Link>
      </div>
    </>
  );
};

export default Error;
