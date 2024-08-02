import React from "react";

const AmountInput = ({ amount, handleAmountChange }) => (
  <div className="mt-4 px-4 w-full">
    <label className="block">
      <span className="font-bold text-2xl block">AMOUNT :</span>
      <input
        type="text"
        value={amount}
        onChange={handleAmountChange}
        placeholder="Enter amount"
        className="form-control mt-2 w-full p-3 text-2xl border border-gray-300 rounded-md"
      />
    </label>
  </div>
);

export default AmountInput;
