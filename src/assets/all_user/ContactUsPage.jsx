import React from "react";
import { FaPhone, FaEnvelope, FaInstagram } from "react-icons/fa";

const ContactUsPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold p-4 text-center bg-secondary-100 rounded-t-lg">
        Contact Us
      </h1>
      <div className="bg-white p-3 rounded-b-lg shadow-lg">
        <p className="text-lg text-gray-700 mb-6">
          At IshPay, we are always here to help you with any questions or
          concerns you may have. Please feel free to reach out to us through any
          of the following methods:
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Customer Service</h2>
          <div className="flex items-center space-x-4 mb-2 text-gray-700">
            <FaPhone className="text-xl" />
            <span>
              Phone: +91-8540891176 (Available from 10 AM to 5 PM, Monday to
              Saturday)
            </span>
          </div>
          <div className="flex items-center space-x-4 text-gray-700">
            <FaEnvelope className="text-xl" />
            <a
              href="mailto:support@ishpay.com"
              className="text-blue-500 hover:underline"
            >
              support@ishpay.com
            </a>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Social Media</h2>
          <div className="flex items-center space-x-4 text-gray-700">
            <FaInstagram className="text-xl" />
            <a
              href="https://www.instagram.com/ishpay"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Follow us on Instagram
            </a>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Office Address</h2>
          <p className="text-lg text-gray-700">
            Chandi Road, Harnaut, Nalanda, Bihar, 803110
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Business Hours</h2>
          <ul className="list-disc list-inside pl-5 text-gray-700">
            <li>
              <strong>Monday to Saturday:</strong> 10 AM to 5 PM
            </li>
            <li>
              <strong>Sunday:</strong> Closed
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <p className="text-lg text-gray-700">
            We look forward to assisting you and ensuring your experience with
            IshPay is smooth and satisfactory. Thank you for choosing IshPay!
          </p>
        </section>
      </div>
    </div>
  );
};

export default ContactUsPage;
