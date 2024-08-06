import React from "react";

const BillingDetails = ({ amount, convenienceCharges, gst, grandTotal }) => (
  <div className="flex flex-col w-full mt-6">
    <div className="py-2 text-2xl font-semibold text-center bg-secondary-200">
      <h1>Billing Details</h1>
    </div>
    <div className="px-4 py-2">
      <div className="flex justify-between text-lg">
        <p>Receivable Amount:</p>
        <p>{amount ? `₹${parseFloat(amount).toFixed(2)}` : "₹0.00"}</p>
      </div>
      <div className="flex justify-between text-lg">
        <p>Convenience Charges:</p>
        <p>{convenienceCharges ? `₹${convenienceCharges}` : "₹0.00"}</p>
      </div>
      <div className="flex justify-between text-lg">
        <p>GST:</p>
        <p>{gst ? `₹${gst}` : "₹0.00"}</p>
      </div>
      <div className="flex justify-between text-lg mt-1 font-bold">
        <p>Grand Total:</p>
        <p>{grandTotal ? `₹${grandTotal}` : "₹0.00"}</p>
      </div>
    </div>
  </div>
);

export default BillingDetails;
