import React from "react";

function FeaturesCards() {
  return (
    <div>
      {/* Features Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Feature Card 1 */}
        <div className="bg-white rounded-lg p-3 shadow-md">
          <h3 className="text-lg sm:text-xl font-bold mb-2">
            Instant Card-to-Bank Transfers
          </h3>
          <p className="text-gray-700">
            Transfer funds instantly from your credit or debit card to your bank
            account without delay, ensuring your money is available when you
            need it most.
          </p>
        </div>
        {/* Feature Card 2 */}
        <div className="bg-white rounded-lg p-3 shadow-md">
          <h3 className="text-lg sm:text-xl font-bold mb-2">
            Effortless Wallet-to-Bank Transfers
          </h3>
          <p className="text-gray-700">
            Seamlessly move money from your digital wallet to your linked bank
            accounts with ease, managing your finances efficiently from one
            platform.
          </p>
        </div>
        {/* Feature Card 3 */}
        <div className="bg-white rounded-lg p-3 shadow-md">
          <h3 className="text-lg sm:text-xl font-bold mb-2">
            Pay All Your Bills Easily
          </h3>
          <p className="text-gray-700">
            Manage and pay all your bills in one place, eliminating the hassle
            of multiple transactions and ensuring timely payments to avoid late
            fees.
          </p>
        </div>
        {/* Feature Card 4 */}
        <div className="bg-white rounded-lg p-3 shadow-md">
          <h3 className="text-lg sm:text-xl font-bold mb-2">
            Always 100% Secure Transactions
          </h3>
          <p className="text-gray-700">
            Your transactions are securely encrypted and processed with advanced
            security measures to protect your financial information and provide
            you with peace of mind.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeaturesCards;
