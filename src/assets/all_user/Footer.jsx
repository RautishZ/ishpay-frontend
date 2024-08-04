import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  useEffect(() => {
    // Smooth scroll to the top of the page when the location changes
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  const linkClassName = (path) => {
    return `block transition-colors duration-300 ${
      location.pathname === path
        ? "text-gray-300"
        : "hover:text-gray-300 focus:text-gray-300"
    }`;
  };

  return (
    <footer className="relative bottom-0 mt-5 text-center text-md bg-ishprimary min-h-[100px] flex flex-col justify-center items-center gap-4 text-white p-4">
      <ul className="flex flex-col md:flex-row justify-center space-y-2 sm:space-y-0 md:space-x-10">
        <li>
          <Link to="/about-us" className={linkClassName("/about-us")}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact-us" className={linkClassName("/contact-us")}>
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            to="/privacy-policy"
            className={linkClassName("/privacy-policy")}
          >
            Privacy & Policy
          </Link>
        </li>
        <li>
          <Link
            to="/terms-and-conditions"
            className={linkClassName("/terms-and-conditions")}
          >
            Terms & Conditions
          </Link>
        </li>
        <li>
          <Link to="/refund-policy" className={linkClassName("/refund-policy")}>
            Refund Policy
          </Link>
        </li>

        {/* Add more footer links as needed */}
      </ul>
      <p className="text-xs sm:text-sm mt-2">
        &copy; 2024 IshPay. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
