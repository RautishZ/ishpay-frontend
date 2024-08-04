import React from "react";
import { Link } from "react-router-dom";

import mobile_recharge from "../../static/images/mobile_recharge.png";
import electricity_bill from "../../static/images/electricity_bill.png";
import water_bill from "../../static/images/water_bill.png";
import gas_bill from "../../static/images/gas_bill.png";
import fastag from "../../static/images/fastag.png";
import insurance_payment from "../../static/images/insurance_payment.png";
import credit_card_bill from "../../static/images/credit_card_bill.png";
import loan_repayment from "../../static/images/loan_repayment.png";

const paymentOptions = [
  {
    src: mobile_recharge,
    alt: "Mobile Recharge",
    label: "Mobile Recharge",
    to: "/bill-payments/mobile-recharge",
  },
  {
    src: electricity_bill,
    alt: "Electricity Bill",
    label: "Electricity Bill",
    to: "/bill-payment/electricity-bill",
  },
  {
    src: water_bill,
    alt: "Water Bill",
    label: "Water Bill",
    to: "/bill-payment/water-bill",
  },
  {
    src: gas_bill,
    alt: "Gas Bill",
    label: "Gas Bill",
    to: "/bill-payment/gas-bill",
  },
  {
    src: fastag,
    alt: "Fastag",
    label: "Fastag",
    to: "/bill-payment/fastag",
  },
  {
    src: insurance_payment,
    alt: "Insurance Payment",
    label: "Insurance Payment",
    to: "/bill-payment/insurance-payment",
  },
  {
    src: credit_card_bill,
    alt: "Credit Card Bill",
    label: "Credit Card Bill",
    to: "/bill-payment/credit-card-bill",
  },
  {
    src: loan_repayment,
    alt: "Loan Repayment",
    label: "Loan Repayment",
    to: "/bill-payment/loan-repayment",
  },
];

function BillPaymentOptions() {
  return (
    <div className="mt-3 bg-ishprimary-100 rounded-lg shadow-md p-4">
      <h1 className="text-2xl text-center font-semibold mb-4">
        BILL PAYMENTS <span className="text-red-500">Available Now</span>
      </h1>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {paymentOptions.map(({ src, alt, label, to }) => (
          <Link
            key={alt}
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

export default BillPaymentOptions;
