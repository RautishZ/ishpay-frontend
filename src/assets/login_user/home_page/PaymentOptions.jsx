import React from "react";
import { Link } from "react-router-dom";
import bank_transfer from "../../static/images/bank_transfer.png";
import education_payment from "../../static/images/education_payment.png";
import utility_payment from "../../static/images/utility_payment.png";
import rent_payment from "../../static/images/rent_payment.png";

const paymentOptions = [
  {
    src: bank_transfer,
    alt: "Bank Payment",
    label: "Bank Payment",
    to: "/payment/bank-transfer",
  },
  {
    src: utility_payment,
    alt: "Utility Payment",
    label: "Utility Payment",
    to: "/payment/utility",
  },
  {
    src: rent_payment,
    alt: "Rent Payment",
    label: "Rent Payment",
    to: "/payment/rent",
  },
  {
    src: education_payment,
    alt: "Education Payment",
    label: "Education Payment",
    to: "/payment/education",
  },
];

function PaymentOptions() {
  return (
    <div className="mt-3 bg-ishprimary-100 rounded-lg shadow-md p-4">
      <h1 className="text-2xl text-center font-semibold mb-4">
        PAYMENTS <span className="text-red-500">Available Now</span>
      </h1>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {paymentOptions.map(({ src, alt, label, to }) => (
          <Link
            key={to} // Use `to` for unique keys
            to={to}
            className="flex flex-col items-center cursor-pointer w-full h-24"
          >
            <div className="transition-transform transform hover:scale-110 flex flex-col items-center justify-center w-full h-full">
              <img
                src={src}
                alt={alt}
                className="w-12 h-12 object-contain"
                loading="eager" // Eager loading
              />
              <h1 className="font-semibold mt-2 text-center text-sm">
                {label}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PaymentOptions;
