import React from "react";
import { FaPhone, FaEnvelope, FaInstagram } from "react-icons/fa";

const AboutUsPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold p-4 text-center bg-secondary-100 rounded-t-lg">
        About Us
      </h1>
      <div className="bg-white p-6 rounded-b-lg shadow-lg">
        <section className="mb-8">
          <p className="text-lg text-gray-700">
            At IshPay, we believe managing your money should be easy and
            stress-free. Whether you need to transfer funds, pay bills, or
            handle various financial tasks, we have you covered. Our platform
            ensures secure, seamless transactions, allowing you to focus on what
            truly matters.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium">Payments</h3>
              <ul className="list-disc list-inside pl-5 text-gray-700">
                <li>
                  <strong>Bank Payment:</strong> Effortlessly move money from
                  your credit card to your bank account quickly and safely.
                </li>
                <li>
                  <strong>Wallet to Bank Account:</strong> Instantly transfer
                  money from your digital wallet to your bank account without
                  any hassle.
                </li>
                <li>
                  <strong>Rent Payment</strong>
                </li>
                <li>
                  <strong>Education Payment</strong>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium">Bill Payments</h3>
              <ul className="list-disc list-inside pl-5 text-gray-700">
                <li>
                  <strong>Mobile Recharge:</strong> Recharge your mobile with
                  any network quickly and easily.
                </li>
                <li>
                  <strong>Electricity Bill:</strong> Pay your electricity bills
                  seamlessly, avoiding late fees and disruptions.
                </li>
                <li>
                  <strong>Water Bill:</strong> Manage and pay your water bills
                  without any hassle.
                </li>
                <li>
                  <strong>Gas Bill:</strong> Keep your gas services
                  uninterrupted by paying your bills on time.
                </li>
                <li>
                  <strong>Fastag:</strong> Recharge your Fastag for
                  uninterrupted travel on toll roads.
                </li>
                <li>
                  <strong>Insurance Payment:</strong> Secure your future by
                  paying your insurance premiums promptly.
                </li>
                <li>
                  <strong>Credit Card Bill:</strong> Avoid late fees by paying
                  your credit card bills on time.
                </li>
                <li>
                  <strong>Loan Repayment:</strong> Manage your loan payments
                  easily and keep your credit score healthy.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium">
                Booking Services Coming Soon
              </h3>
              <ul className="list-disc list-inside pl-5 text-gray-700">
                <li>
                  <strong>Train Tickets:</strong> Book train tickets
                  conveniently without standing in long queues.
                </li>
                <li>
                  <strong>Airplane Tickets:</strong> Find and book flights at
                  competitive prices.
                </li>
                <li>
                  <strong>Bus Tickets:</strong> Book bus tickets for comfortable
                  travel to various destinations.
                </li>
                <li>
                  <strong>Movie Tickets:</strong> Reserve your seats for the
                  latest movies at your favorite theaters.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Why Choose IshPay?</h2>
          <ul className="list-disc list-inside pl-5 text-gray-700">
            <li>
              <strong>User-Friendly Platform:</strong> Our intuitive design
              ensures a smooth experience, even for those not tech-savvy.
            </li>
            <li>
              <strong>Secure Transactions:</strong> We use advanced security
              measures to protect your data and financial information.
            </li>
            <li>
              <strong>Fast Customer Support:</strong> Our dedicated support team
              is here to help you with any questions or concerns.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Need Help or Have Questions?
          </h2>
          <div className="flex items-center space-x-4 text-gray-700">
            <FaPhone className="text-xl" />
            <span>Customer Service: +91-8540891176 (10 AM to 5 PM)</span>
          </div>
          <div className="flex items-center space-x-4 mt-2 text-gray-700">
            <FaEnvelope className="text-xl" />
            <a href="mailto:support@ishpay.com">support@ishpay.com</a>
          </div>
          <div className="flex items-center space-x-4 mt-2 text-gray-700">
            <FaInstagram className="text-xl" />
            <a
              href="https://www.instagram.com/ish.pay"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow us on Instagram
            </a>
          </div>
        </section>

        <section>
          <p className="text-lg text-gray-700">
            We look forward to serving you and making your financial management
            easier and more efficient. Thank you for choosing IshPay!
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
