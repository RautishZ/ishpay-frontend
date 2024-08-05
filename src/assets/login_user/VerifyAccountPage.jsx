import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { FaCheckCircle, FaExclamationCircle, FaSpinner } from "react-icons/fa";
import Footer from "../all_user/Footer";
import API from "../../services/API";
import Typewriter from "typewriter-effect";
const VerifyAccountPage = () => {
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isAlreadyVerified, setIsAlreadyVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // State for loading
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("token");

    if (token) {
      API.get(`/verify?token=${token}`)
        .then((response) => {
          const responseData = response.data;
          setMessage(responseData);

          if (responseData === "Email verified successfully") {
            setIsSuccess(true);
          } else if (responseData === "Email is already verified") {
            setIsAlreadyVerified(true);
          } else {
            setIsSuccess(false);
          }
        })
        .catch((error) => {
          setMessage("An error occurred. Please try again later.");
          setIsSuccess(false);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setMessage("Invalid token");
      setIsSuccess(false);
      setIsLoading(false);
    }
  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex justify-between items-center mt-8">
        <div className="sm:max-w-5xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">
              Welcome To <span className="text-ishprimary">IshPay</span>
            </h1>
            <div className="text-md sm:text-xl text-ishprimary mb-4">
              <Typewriter
                options={{
                  strings: [
                    "Instant Card-to-Bank Transfers!",
                    "Effortless Wallet-to-Bank Transfers!",
                    "Pay All Your Bills Easily!",
                    "Always 100% Secure Transactions!",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  wrapperClassName: "font-bold font-montserrat",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center flex-grow p-3">
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg py-5 px-6 text-center">
          <h1 className="text-2xl font-bold mb-4 text-ishprimary">
            Account Verification
          </h1>
          {isLoading ? (
            <div className="flex justify-center items-center my-6">
              <FaSpinner className="text-4xl text-ishprimary-500 animate-spin" />
            </div>
          ) : (
            <>
              <div className="flex justify-center items-center mb-6">
                {isSuccess || isAlreadyVerified ? (
                  <FaCheckCircle className="text-green-500 text-6xl" />
                ) : (
                  <FaExclamationCircle className="text-red-500 text-6xl" />
                )}
              </div>
              <h2 className="text-lg font-semibold mb-2">{message}</h2>
              <p className="text-gray-600">
                {isSuccess
                  ? "Your account has been successfully verified. You can now log in and start using our services."
                  : isAlreadyVerified
                  ? "Your email is already verified. You can log in and use our services."
                  : message === "Invalid token"
                  ? "The token is invalid or has expired. Please log in again to resend the verification email."
                  : "There was an issue verifying your account. Please try again or contact support."}
              </p>
              <div className="mt-5">
                <Link
                  to="/login"
                  className="mt-6 px-4 py-3 bg-ishprimary-500 text-white font-semibold rounded-md hover:bg-ishprimary-600 transition duration-200"
                >
                  {isSuccess || isAlreadyVerified
                    ? "Log In to Use Services"
                    : "Log In to Resend Email"}
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VerifyAccountPage;
