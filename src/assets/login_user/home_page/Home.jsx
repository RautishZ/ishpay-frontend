import React from "react";
import PaymentOptions from "./PaymentOptions";
import BookingOperationButton from "./BookingOptions";
import BillPaymentOptions from "./BillPaymentOptions";

function Home() {
  return (
    <div>
      <PaymentOptions />
      <BillPaymentOptions />
      <BookingOperationButton />
    </div>
  );
}

export default Home;
