import React, { useState, useEffect, useRef } from "react";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaSpinner,
} from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import API from "../../services/API";
import Footer from "./Footer";
import { toast } from "react-toastify";

function SignUpPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const initialEmail = location.state?.email || "";

  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signupDetails, setSignupDetails] = useState({
    email: initialEmail,
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

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

    return errorMsg;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));

    const errorMsg = validateField(name, value);

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMsg,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate all fields
    ["email", "password", "confirmPassword"].forEach((key) => {
      const value =
        key === "confirmPassword" ? confirmPassword : signupDetails[key];
      const errorMsg = validateField(key, value);
      if (errorMsg) newErrors[key] = errorMsg;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      try {
        const response = await API.post("/register", signupDetails);
        toast.success("Account created successfully!");
        if (response.data.token) {
          localStorage.setItem("jwtToken", response.data.token);
        }

        navigate("/verify-email");
      } catch (error) {
        if (error.response?.data === "User already exists") {
          setErrors({ email: "User already exists" });
        } else {
          toast.error("An error occurred while creating the account.");
        }
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div>
      {/* NavBar */}
      <div className="px-4 py-8 md:px-6 md:py-8 text-gray-800">
        <div className="md:max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-8 cursor-pointer">
            <Link to="/">
              <h1 className="text-4xl md:text-5xl font-bold text-ishprimary">
                ISHPAY
              </h1>
            </Link>
            <Link to="/login">
              <button className="bg-ishprimary text-white px-4 py-2 rounded-lg shadow-md hover:bg-ishprimary-600 text-2xl">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="bg-white p-3 md:p-8 m-2 rounded-md shadow-xl max-w-lg w-full relative">
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

          {/* Error messages at the top */}
          {Object.keys(errors).length > 0 && (
            <div className="text-red-700 mb-4 rounded-md text-center font-semibold">
              <ul>
                {Object.values(errors).map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
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
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  name="password"
                  className={`border-b-4 py-2 pl-12 pr-5 text-ishprimary text-xl rounded-md w-full focus:border-ishprimary outline-none`}
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
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl" />
                <input
                  id="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  className={`border-b-4 py-2 pl-12 pr-5 text-ishprimary text-xl rounded-md w-full focus:border-ishprimary outline-none`}
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    const errorMsg = validateField(
                      "confirmPassword",
                      e.target.value
                    );
                    setErrors((prevErrors) => ({
                      ...prevErrors,
                      confirmPassword: errorMsg,
                    }));
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-ishprimary w-full text-white py-3 px-4 rounded-md text-lg font-bold hover:bg-ishprimary-600"
              disabled={loading}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignUpPage;
