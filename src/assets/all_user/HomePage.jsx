import React, { useState, useEffect } from "react";

import Footer from "./Footer";

import { FaArrowUp } from "react-icons/fa";

import { Outlet } from "react-router-dom";

function HomePage() {
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 70) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="">
      <div className="px-3 py-8 md:px-6 md:py-8 text-gray-800">
        <div className="md:max-w-5xl mx-auto">
          <Outlet></Outlet>
          {showGoToTop && (
            <div
              className=" z-40 fixed bottom-8 right-8 w-[40px] h-[40px] p-2 flex justify-center items-center rounded-full bg-ishprimary shadow-xl cursor-pointer hover:bg-ishprimary-600"
              onClick={handleGoToTop}
            >
              <FaArrowUp className=" text-2xl text-white"></FaArrowUp>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
