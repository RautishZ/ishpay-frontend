import React, { useState, useEffect } from "react";
import PaymentOptions from "./PaymentOptions";
import BookingOperationButton from "./BookingOptions";
import BillPaymentOptions from "./BillPaymentOptions";
import { FaSpinner } from "react-icons/fa";

function LoginHomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading with a timeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust time as needed

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <div className="min-h-screen py-3 relative">
      {loading ? (
        <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-75 rounded-md">
          <FaSpinner className="animate-spin text-3xl text-ishprimary" />
        </div>
      ) : (
        <div className="px-3 sm:max-w-5xl mx-auto">
          <PaymentOptions />
          <BillPaymentOptions />
          <BookingOperationButton />
        </div>
      )}
    </div>
  );
}

export default LoginHomePage;
