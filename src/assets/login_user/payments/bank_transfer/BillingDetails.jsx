import React, { useState, useEffect } from "react";

const BillingDetails = ({ amount, convenienceCharges, gst, grandTotal }) => {
  const [chargePayer, setChargePayer] = useState("sender");
  const [receivableAmount, setReceivableAmount] = useState(amount);
  const [paymentPurpose, setPaymentPurpose] = useState("");

  useEffect(() => {
    if (chargePayer === "sender") {
      setReceivableAmount(amount);
    } else {
      const totalCharges =
        parseFloat(convenienceCharges || 0) + parseFloat(gst || 0);
      setReceivableAmount(parseFloat(amount) + totalCharges);
    }
  }, [chargePayer, amount, convenienceCharges, gst]);

  return (
    <div className="flex flex-col w-full">
      <div className=" flex flex-col w-full justify-between items-center px-4 py-4">
        <div className=" w-full">
          <p className="text-lg">Who will pay the charges?</p>
          <div className="flex items-center mt-2 ">
            <button
              className={`w-1/2 px-4 py-3 text-lg font-semibold ${
                chargePayer === "sender"
                  ? "bg-ishprimary-500 text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
              onClick={() => setChargePayer("sender")}
            >
              Sender
            </button>
            <button
              className={`w-1/2 px-4 py-3 text-lg font-semibold ${
                chargePayer === "receiver"
                  ? "bg-ishprimary-500 text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
              onClick={() => setChargePayer("receiver")}
            >
              Receiver
            </button>
          </div>
        </div>
        <div className="mt-4 w-full">
          <p className="text-lg">Purpose</p>
          <select
            value={paymentPurpose}
            onChange={(e) => setPaymentPurpose(e.target.value)}
            className="w-full mt-2 px-4 py-3 text-lg border border-gray-300 rounded"
          >
            <option value="">Select purpose</option>
            <option value="Rent">Rent</option>
            <option value="Utilities">Utilities</option>
            <option value="Education">Education</option>
            <option value="Mobile Recharge">Mobile Recharge</option>
            <option value="Insurance">Insurance</option>
            <option value="Loan Repayment">Loan Repayment</option>
            <option value="Credit Card Bill">Credit Card Bill</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="py-2 text-2xl font-semibold text-center bg-secondary-200">
        <h1>Billing Details</h1>
      </div>

      <div className="px-4 py-2 mt-2 border-b-2 border-dashed border-ishprimary-400">
        <div className="flex justify-between text-lg">
          <p>Receivable Amount:</p>
          <p>
            {receivableAmount
              ? `₹${parseFloat(receivableAmount).toFixed(2)}`
              : "₹0.00"}
          </p>
        </div>
        <div className="flex justify-between text-lg">
          <p>Convenience Charges:</p>
          <p>
            {convenienceCharges
              ? `₹${parseFloat(convenienceCharges).toFixed(2)}`
              : "₹0.00"}
          </p>
        </div>
        <div className="flex justify-between text-lg">
          <p>GST:</p>
          <p>{gst ? `₹${parseFloat(gst).toFixed(2)}` : "₹0.00"}</p>
        </div>
        <div className="flex justify-between text-lg mt-1 font-bold">
          <p>Grand Total:</p>
          <p>
            {grandTotal ? `₹${parseFloat(grandTotal).toFixed(2)}` : "₹0.00"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BillingDetails;
