// src/components/Loading.js
import React from "react";
import { FaSpinner } from "react-icons/fa";

const Loading = ({ text = "Loading..." }) => {
  return (
    <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-75 rounded-md">
      <div className="flex items-center">
        <FaSpinner className="animate-spin text-3xl text-ishprimary" />
        <span className="ml-3 text-xl text-ishprimary">{text}</span>
      </div>
    </div>
  );
};

export default Loading;
