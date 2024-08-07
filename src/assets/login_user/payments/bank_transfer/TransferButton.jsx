import React from "react";

const TransferButton = ({ handleSubmit }) => (
  <div className="mt-4 px-4 mb-4 w-full">
    <button
      onClick={handleSubmit}
      className="bg-ishprimary text-white font-semibold p-2 rounded-md w-full text-2xl"
    >
      Transfer
    </button>
  </div>
);

export default TransferButton;
