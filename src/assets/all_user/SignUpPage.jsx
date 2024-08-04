import React, { useState, useEffect, useRef } from "react";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaSpinner,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import API from "../../services/API";
import Footer from "./Footer";

function SignUpPage() {
  const location = useLocation();
  const initialEmail = location.state?.email || "";

  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signupDetails, setSignupDetails] = useState({
    email: initialEmail,
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // Add loading state

  const passwordInputRef = useRef(null);

  useEffect(() => {
    if (initialEmail) {
      passwordInputRef.current.focus();
    }
  }, [initialEmail]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateField = (name, value) => {
    let errorMsg = "";

    if (name === "email") {
      if (!value) {
        errorMsg = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        errorMsg = "Please enter a valid email address";
      }
    }

    if (name === "password") {
      if (!value) {
        errorMsg = "Password is required";
      }
    }

    if (name === "confirmPassword") {
      if (!value) {
        errorMsg = "Confirm Password is required";
      } else if (value !== signupDetails.password) {
        errorMsg = "Passwords do not match";
      }
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMsg,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));

    if (name === "password") {
      setConfirmPassword(confirmPassword); // Trigger validation for confirmPassword if password changes
    }

    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    ["email", "password", "confirmPassword"].forEach((key) => {
      if (key === "confirmPassword") {
        validateField(key, confirmPassword);
      } else {
        validateField(key, signupDetails[key]);
      }
    });

    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (signupDetails.password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true); // Set loading to true
      try {
        const response = await API.post("/register", signupDetails);
        if (response.data.token != null) {
          localStorage.setItem("jwtToken", response.data.token);
          window.location.href = "/login";
        }
        // Handle success
      } catch (error) {
        console.error(error);
        // Handle error
      } finally {
        setLoading(false); // Set loading to false after request completes
      }
    }
  };

  return (
    <div>
      {/* NavBar */}
      <div className="px-4 py-8 sm:px-6 sm:py-8 text-gray-800">
        <div className="sm:max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-8 cursor-pointer">
            <Link to="/">
              <h1 className="text-4xl sm:text-5xl font-bold text-ishprimary">
                ISHPAY
              </h1>
            </Link>
            <Link to="/login">
              <button className="bg-ishprimary text-white px-4 py-2 rounded-lg shadow-md hover:bg-ishprimary-600">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="bg-white p-3 sm:p-8 m-2 rounded-md shadow-xl max-w-lg w-full relative">
          <h1 className="text-3xl font-bold mb-2 text-center text-ishprimary">
            Create your Account
          </h1>
          <h2 className="text-sm mb-4 text-black font-semibold text-center">
            Enter Your Details To Sign Up
          </h2>

          {loading && (
            <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-75 rounded-md">
              <FaSpinner className="animate-spin text-3xl text-ishprimary" />
            </div>
          )}

          <form
            className={`font-semibold text-ishprimary ${
              loading ? "opacity-50" : ""
            }`}
            onSubmit={handleSubmit}
          >
            <div className="mb-8">
              <label
                htmlFor="email"
                className="text-xl mb-2 block text-ishprimary"
              >
                Email
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl" />
                <input
                  id="email"
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  className={`border-b-4 py-2 pl-12 pr-5 rounded-md text-xl text-ishprimary w-full focus:border-ishprimary outline-none`}
                  value={signupDetails.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-8">
              <label
                htmlFor="password"
                className="text-xl mb-2 block text-ishprimary"
              >
                Password
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  name="password"
                  className={`border-b-4 py-2 pl-12 pr-5 text-ishprimary text-xl rounded-md w-full focus:border-ishprimary outline-none `}
                  value={signupDetails.password}
                  onChange={handleChange}
                  ref={passwordInputRef}
                />
                <div
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-2xl" />
                  ) : (
                    <FaEye className="text-2xl" />
                  )}
                </div>
              </div>
            </div>
            <div className="mb-8">
              <label
                htmlFor="confirmPassword"
                className="text-xl mb-2 block text-ishprimary"
              >
                Confirm Password
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.confirmPassword}
                  </p>
                )}
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl" />
                <input
                  id="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  className={`border-b-4 py-2 pl-12 pr-5 text-ishprimary text-xl rounded-md w-full focus:border-ishprimary outline-none `}
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    validateField("confirmPassword", e.target.value);
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-ishprimary w-full text-white py-3 px-4 rounded-md text-lg font-bold hover:bg-ishprimary-600"
              disabled={loading} // Disable button while loading
            >
              "Sign Up"
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignUpPage;
