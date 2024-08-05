import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";

function WelcomeMessage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.trim()) {
      setError("Email is required");
    } else if (!validateEmail(email)) {
      setError("Please enter a valid email address");
    } else {
      setError("");
      navigate("/signup", { state: { email } });
    }
  };

  return (
    <div className="w-full px-4 py-8 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
            Welcome To <span className="text-ishprimary">IshPay</span>
          </h1>
          <div className="text-md md:text-xl text-ishprimary mb-4">
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
          <p className="text-base font-medium md:text-lg mb-4 text-black">
            Join today for financial freedom.
          </p>
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg mx-auto flex flex-col items-center md:flex-row gap-3"
          >
            <input
              type="email"
              className={`w-full px-3 py-3 rounded-lg border-2 ${
                error ? "border-red-500" : "border-ishprimary-100"
              } focus:outline-none focus:border-ishprimary font-bold`}
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-ishprimary text-white whitespace-nowrap px-6 py-3 rounded-lg hover:bg-ishprimary-600 focus:outline-none focus:bg-opacity-80 text-xl"
            >
              Get Started
            </button>
          </form>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default WelcomeMessage;
