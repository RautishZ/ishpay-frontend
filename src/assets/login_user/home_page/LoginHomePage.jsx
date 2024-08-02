import React from "react";
import PaymentOptions from "./PaymentOptions";
import BookingOperationButton from "./BookingOptions";
import BillPaymentOptions from "./BillPaymentOptions";

function LoginHomePage() {
  return (
    <div className="min-h-screen py-3">
      <div className="px-3 sm:max-w-5xl mx-auto">
        <PaymentOptions />
        <BillPaymentOptions />
        <BookingOperationButton />
      </div>
    </div>
  );
}

export default LoginHomePage;
