import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaInstagram } from "react-icons/fa";

const BlockedAccount = ({ email }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-justify ">
      <div className=" w-full">
        <h1 className="text-2xl font-bold mb-4 text-red-600 text-center">
          Account Permanently Blocked
        </h1>
        <p className="text-lg mb-2">
          We regret to inform you that your account has been permanently blocked
          due to suspicious behavior. This decision is final and has been made
          to protect the security and integrity of our platform. Here’s what you
          can do:
        </p>
        <ol className="list-decimal list-inside mb-6">
          <li className="mb-2">
            <span className="font-semibold">Check Your Email:</span> We’ve sent
            an email to{" "}
            <span className="text-ishprimary-500 font-bold">{email} </span> with
            details regarding the account block and any relevant information
            about your case.
          </li>

          <li className="mb-2">
            <span className="font-semibold">Review Our Policies:</span> Please
            review our{" "}
            <Link
              to="/terms-and-conditions"
              className=" text-blue-500 font-semibold hover:underline"
            >
              terms-and-conditions
            </Link>{" "}
            and{" "}
            <Link
              to="/privacy-policy"
              className="text-blue-500 font-semibold hover:underline"
            >
              privacy-policy
            </Link>{" "}
            to understand the reasons behind this decision.
          </li>
          <li className="mb-2">
            <span className="font-semibold">Contact Support:</span> If you have
            any questions or need clarification, please reach out to our
            customer support team:
            <ul className="list-none pl-0 mt-2">
              <li className="flex items-center font-bold text-ishprimary-500">
                <FaPhone className="mr-2" /> +91-8540891176 (10 AM to 5 PM)
              </li>
              <li className="flex items-center font-bold text-ishprimary-500">
                <FaEnvelope className="mr-2" /> support@ishpay.com
              </li>
            </ul>
          </li>
        </ol>
        <h2 className="text-xl font-semibold mb-2">Why Choose IshPay?</h2>
        <ul className="list-disc list-inside mb-6">
          <li>User-Friendly Platform: Intuitive and easy-to-use interface.</li>
          <li>
            Secure Transactions: Robust security measures to protect user
            information.
          </li>
          <li>
            Responsive Customer Support: Dedicated team available to assist with
            any issues.
          </li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">Stay Connected</h2>
        <p className="mb-2">
          For future reference, follow us on{" "}
          <a
            href="https://www.instagram.com/ishpay"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ishprimary hover:underline"
          >
            Instagram
          </a>{" "}
          for updates and tips.
        </p>
        <p className="text-lg font-semibold text-gray-700 text-center">
          Thank You for Your Understanding. Your security and the safety of our
          community are our top priorities.
        </p>
      </div>
    </div>
  );
};

export default BlockedAccount;
