import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import sent_mail from "../static/images/sent_mail.png";
import gmailIcon from "../static/images/gmail_icon.png";
import outlookIcon from "../static/images/outlook_icon.png";
import Footer from "../all_user/Footer";
import { useSelector } from "react-redux";
import API from "../../services/API";
import { FaSpinner } from "react-icons/fa";

const EmailVerification = () => {
  const userDetails = useSelector((state) => state.userDetails.userDetails);
  const [canResend, setCanResend] = useState(true);
  const [timeLeft, setTimeLeft] = useState(0);
  const [sending, setSending] = useState(false); // Track sending state

  useEffect(() => {
    let timer;
    if (!canResend && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            setCanResend(true);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [canResend, timeLeft]);

  const handleResend = async () => {
    if (sending || !canResend) return;
    try {
      setSending(true);
      setCanResend(false);
      const response = await API.post("/resend-email");
      toast.success("Email resent successfully!");
      setTimeLeft(60); // Set timer to 1 minute
    } catch (error) {
      console.error("Error resending email:", error);
      toast.error("Failed to resend verification email. Please try again.");
      setCanResend(true); // Re-enable the resend button on error
    } finally {
      setSending(false); // Reset sending state
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("jwtToken");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="px-4 py-8 sm:px-6 sm:py-8 text-gray-800">
        <div className="sm:max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-8 cursor-pointer">
            <Link to="/">
              <h1 className="text-4xl sm:text-5xl font-bold text-ishprimary">
                ISHPAY
              </h1>
            </Link>
            <button
              onClick={handleLogout}
              className="bg-ishprimary text-white px-4 py-2 rounded-lg text-2xl shadow-md hover:bg-ishprimary-600"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center flex-grow p-3 relative">
        <div className="max-w-3xl text-center bg-white rounded-lg shadow-lg py-5 px-3">
          <h1 className="text-2xl font-bold mb-4 text-ishprimary">
            Verify Your Email Address
          </h1>
          <div className="flex justify-center items-center mb-6">
            <img
              src={sent_mail}
              alt="Sent Mail Animation"
              className="w-32 h-32"
              loading="eager"
            />
          </div>

          <p className="text-lg mb-2">
            An email has been sent to{" "}
            <span className="text-ishprimary-500 font-semibold">
              {userDetails.email}
            </span>
            . Please click the verification link in that email to activate your
            account.
          </p>
          <div className="mt-6 flex flex-col gap-3 justify-evenly items-center sm:flex-row">
            <a
              href="googlegmail://"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md shadow-md border-2 border-red-500 flex items-center font-semibold text-red-500 hover:bg-red-100 transition duration-200"
            >
              <img
                src={gmailIcon}
                alt="Gmail Icon"
                className="mr-2 w-6 h-6"
                loading="eager"
              />
              Open Gmail
            </a>
            <h2 className="font-semibold text-gray-500">OR</h2>
            <a
              href="ms-outlook://"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md shadow-md border-2 border-cyan-700 flex items-center font-semibold text-cyan-600 hover:bg-cyan-100 transition duration-200"
            >
              <img
                src={outlookIcon}
                alt="Outlook Icon"
                className="mr-2 w-6 h-6"
                loading="eager"
              />
              Open Outlook
            </a>
          </div>
          <p className="text-lg mt-4">
            If you do not see the email in your inbox, please check your spam
            folder.
          </p>

          <button
            onClick={handleResend}
            disabled={!canResend || sending}
            className={`px-4 py-3 mt-6 bg-ishprimary-500 text-white font-semibold rounded-md hover:bg-ishprimary-600 transition duration-200 ${
              !canResend || sending ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {sending ? (
              <div className="flex items-center">
                <FaSpinner className="animate-spin mr-2 h-5 w-5 text-white" />
                Sending...
              </div>
            ) : !canResend ? (
              <div className="flex items-center">
                <FaSpinner className="animate-spin mr-2 h-5 w-5 text-white" />
                {`Please wait ${Math.floor(timeLeft / 60)}:${(
                  "0" +
                  (timeLeft % 60)
                ).slice(-2)} to resend`}
              </div>
            ) : (
              "Resend Email"
            )}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EmailVerification;
