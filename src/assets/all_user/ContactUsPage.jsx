import React from "react";

function ContactUsPage() {
  return (
    <div className="">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center mt-10">
        Contact Us
      </h2>
      <div className="w-full bg-white p-8 rounded shadow-lg">
        <p className="text-gray-700 mb-4">
          At IshPay, we simplify your financial transactions with seamless
          services designed to meet your needs. Whether you're looking to
          transfer funds from your credit card to your bank account, seamlessly
          move money from your digital wallet to your bank, or pay bills using
          any payment mode, IshPay is your trusted partner.
        </p>

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Our Services:</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <strong>Credit Card to Bank Transfer:</strong> Transfer funds
              securely from your credit card directly to your bank account.
            </li>
            <li>
              <strong>Wallet to Bank Account:</strong> Effortlessly move money
              from your digital wallet to your bank account with ease.
            </li>
            <li>
              <strong>Pay All Types of Bills:</strong> Conveniently pay bills
              using any payment mode available, ensuring a hassle-free
              experience.
            </li>
          </ul>
        </div>

        <div>
          <p className="text-gray-700 mb-2">
            For any inquiries or assistance, feel free to contact us:
          </p>
          <p className="text-gray-700 mb-2">
            Email:{" "}
            <a
              href="mailto:support@ishpay.com"
              className="text-blue-500 hover:underline"
            >
              support@ishpay.com
            </a>
          </p>
          <p className="text-gray-700 mb-4">
            Contact Number: <span className="font-medium">+91-8540891176</span>
          </p>
          <p className="text-gray-700">
            Our support team is available Monday to Friday, 11am to 5pm IST
            (excluding major holidays). We aim to respond to all queries within
            24 working hours.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
