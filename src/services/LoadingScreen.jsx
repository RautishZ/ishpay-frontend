import React from "react";
import { FaSpinner } from "react-icons/fa";

const LoadingScreen = () => (
  <div className="fixed inset-0 flex items-center justify-center opacity-75 z-50">
    <div className="flex flex-col items-center">
      <FaSpinner className="animate-spin text-ishprimary-600" size={64} />
      <p className="mt-4 text-ishprimary-500 font-bold">Loading...</p>
    </div>
  </div>
);

export default LoadingScreen;
