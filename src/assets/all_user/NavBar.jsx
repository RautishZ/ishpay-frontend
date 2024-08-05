import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <div className="px-4 py-8 md:px-6 md:py-8 text-gray-800">
        <div className="md:max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-8 cursor-pointer">
            <Link to="/">
              <h1 className="text-4xl md:text-5xl font-bold text-ishprimary">
                ISHPAY
              </h1>
            </Link>
            <Link to="/login">
              <button className="bg-ishprimary text-white px-4 py-2 rounded-lg shadow-md hover:bg-ishprimary-600 text-xl md:text-2xl">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
