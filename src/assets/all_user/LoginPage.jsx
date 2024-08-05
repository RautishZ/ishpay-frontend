import React, { useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaSpinner,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import API from "../../services/API";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../../features/userDetailsSlice";
import BlockedAccount from "../login_user/BlockedAccount"; // Import the BlockedAccount component

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
  const [accountBlocked, setAccountBlocked] = useState(false); // State for blocked account

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const isValidEmail = (email) => {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error

    if (!loginDetails.email || !loginDetails.password) {
      setError("Please fill in all fields.");
      return;
    }

    if (!isValidEmail(loginDetails.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true); // Set loading to true

    try {
      localStorage.removeItem("jwtToken");
      const response = await API.post("/login", loginDetails);

      console.log(response.data);

      // Assuming the API responds with a 200 status code on success
      if (response.data.token) {
        localStorage.setItem("jwtToken", response.data.token);
        dispatch(setUserDetails(response.data));
        navigate("/home");
      } else {
        setError("An unexpected error occurred.");
      }
    } catch (error) {
      if (error.response) {
        // Handle specific status codes
        switch (error.response.status) {
          case 404:
            setError("User not found.");
            break;
          case 401:
            setError("Incorrect password.");
            break;
          case 403:
            if (error.response.data === "Account blocked") {
              setAccountBlocked(true);
            } else {
              setError("An error occurred. Please try again later.");
            }
            break;

          default:
            setError("An error occurred. Please try again later.");
        }
      } else {
        setError("An error occurred. Please try again later.");
      }
    } finally {
      setLoading(false); // Set loading to false after request completes
    }
  };

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
            <Link to="/signup">
              <button className="bg-ishprimary text-white px-4 py-2 rounded-lg shadow-md hover:bg-ishprimary-600 text-2xl">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div
          className={`bg-white p-3 md:p-8 m-2 rounded-md shadow-xl w-full relative ${
            accountBlocked ? "max-w-3xl m-3" : "max-w-lg"
          }`}
        >
          {accountBlocked ? (
            <BlockedAccount email={loginDetails.email} />
          ) : (
            // <EmailVerification email={loginDetails.email} />
            <>
              <h1 className="text-3xl font-bold mb-2 text-center text-ishprimary">
                Welcome Back!
              </h1>
              <h2 className="text-sm text-black mb-4 font-semibold text-center">
                Enter Your Details To Login
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
                {error && (
                  <div className="mb-4 text-red-600 text-center">{error}</div>
                )}
                <div className="mb-8">
                  <label
                    htmlFor="email"
                    className="text-xl mb-2 block text-ishprimary"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl" />
                    <input
                      id="email"
                      type="text"
                      placeholder="Enter Email"
                      name="email"
                      value={loginDetails.email}
                      onChange={handleChange}
                      className="border-b-4 py-2 pl-12 pr-5 rounded-md text-xl text-ishprimary w-full focus:border-ishprimary outline-none"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="text-xl mb-2 block text-ishprimary"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl" />
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Password"
                      name="password"
                      value={loginDetails.password}
                      onChange={handleChange}
                      className="border-b-4 py-2 pl-12 pr-5 text-ishprimary text-xl rounded-md w-full focus:border-ishprimary outline-none"
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
                  <Link
                    to="/forgot-password"
                    className="text-ishprimary text-right text-lg block mt-3 mb-5 font-semibold no-underline hover:text-ishprimary-600"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="bg-ishprimary w-full text-white py-3 px-4 rounded-md text-lg font-bold hover:bg-ishprimary-600"
                  disabled={loading}
                >
                  Sign In
                </button>
              </form>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
