import React from "react";
import { FiInfo } from "react-icons/fi"; // Importing FiInfo icon from React-icons

const AboutUsPage = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center mt-10">
        About IshPay
      </h2>
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <p className="text-gray-700 leading-relaxed mb-6">
          IshPay helps you manage your money easily. You can move money from
          your credit card to your bank account, from your digital wallet to
          your bank, and pay bills using any payment method you like. IshPay
          makes these transactions secure and simple for you.
        </p>
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            What We Offer
          </h3>
          <ul className="list-disc list-inside text-gray-700">
            <li className="mb-2">
              <span className="font-bold">Credit Card to Bank Transfer:</span>{" "}
              Easily move money from your credit card to your bank account
              quickly and safely.
            </li>
            <li className="mb-2">
              <span className="font-bold">Wallet to Bank Account:</span>{" "}
              Instantly transfer money from your digital wallet to your bank
              account without any hassle.
            </li>
            <li className="mb-2">
              <span className="font-bold">Pay All Types of Bills:</span> Easily
              pay all your bills using any payment method you prefer, ensuring
              your transactions go through smoothly.
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Why Choose IshPay?
          </h3>
          <p className="text-gray-700 leading-relaxed">
            At IshPay, we care about your satisfaction and security. We're
            dedicated to making your financial life easier by offering a
            user-friendly platform and fast customer support. Join thousands of
            happy users who trust IshPay for their financial needs.
          </p>
        </div>
        <div>
          <p className="text-gray-700 leading-relaxed mb-2">
            Need help or have questions? Contact us:
          </p>
          <ul className="list-disc list-inside text-gray-700 ml-4 mb-6">
            <li>Customer Service: +91-8540891176 (10 AM to 5 PM)</li>
            <li>
              Email:{" "}
              <a
                href="mailto:support@ishpay.com"
                className="text-blue-500 hover:underline"
              >
                support@ishpay.com
              </a>
            </li>
            <li>
              Social Media:{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
