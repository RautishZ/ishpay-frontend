import React, { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import API from "../../services/API";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../../features/userDetailsSlice";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(""); // State to track login errors

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message

    try {
      localStorage.removeItem("jwtToken");
      const response = await API.post("/login", loginDetails);

      if (response.data.token) {
        localStorage.setItem("jwtToken", response.data.token);
        dispatch(setUserDetails(response.data));
        navigate("/home");
      } else {
        setError("Invalid email or password."); // Set error message
      }
    } catch (error) {
      setError("An error occurred. Please try again later."); // Set error message
      console.error(error);
    }
  };

  return (
    <div>
      <div className="px-4 py-8 sm:px-6 sm:py-8 text-gray-800">
        <div className="sm:max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-8 cursor-pointer">
            <Link to="/">
              <h1 className="text-4xl sm:text-5xl font-bold text-ishprimary">
                ISHPAY
              </h1>
            </Link>
            <Link to="/signup">
              <button className="bg-ishprimary text-white px-4 py-2 rounded-lg shadow-md hover:bg-ishprimary-600">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="bg-white p-3 sm:p-8 m-2 rounded-md shadow-xl max-w-lg w-full">
          <h1 className="text-3xl font-bold mb-2 text-center text-ishprimary">
            Welcome Back!
          </h1>
          <h2 className="text-sm text-black mb-4 font-semibold text-center">
            Enter Your Details To Login
          </h2>

          <form
            className="font-semibold text-ishprimary"
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
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
