import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const RefundPolicyPage = () => {
  return (
    <div className="max-w-5xl mx-auto text-justify">
      <h1 className="text-3xl font-bold p-4 text-center bg-secondary-100 rounded-t-lg">
        Refund Policy
      </h1>
      <div className="bg-white p-3 rounded-b-lg shadow-lg">
        <section className="mb-8">
          <p className="text-lg text-gray-700">
            At IshPay, we are committed to ensuring your satisfaction with our
            services. This Refund Policy outlines the conditions under which
            refunds may be granted for the services provided through our
            platform. By using our services, you agree to the terms of this
            policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">
            General Refund Conditions
          </h2>
          <ul className="list-disc list-inside pl-5 text-gray-700">
            <li>
              <strong>Eligibility:</strong> Refunds will be considered only for
              transactions where the service was not delivered as promised or
              there was an error in processing. Refunds will not be provided for
              transactions where the user has confirmed the completion of the
              service.
            </li>
            <li>
              <strong>Refund Request:</strong> To request a refund, you must
              contact our customer support team within 7 days of the
              transaction. Please provide relevant details, including the
              transaction ID, reason for the refund request, and any supporting
              documentation.
            </li>
            <li>
              <strong>Processing Time:</strong> Refund requests will be
              processed within 10 business days of receiving your request. The
              time taken to reflect the refund in your account may vary
              depending on your bank or payment provider.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">
            Refunds for Specific Services
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-2">Bank Payment</h3>
              <p className="text-gray-700">
                Refunds for bank payments will be considered if there was an
                error in processing or if the payment was made more than once.
                Refunds will not be granted if the transaction was successful
                and the service was delivered.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Utility Payment</h3>
              <p className="text-gray-700">
                Refunds for utility payments, including electricity, water, and
                gas bills, will be granted only if there was an error in
                processing or if the payment was made more than once. Refunds
                will not be granted if the bill was paid successfully and the
                service was delivered.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Rent Payment</h3>
              <p className="text-gray-700">
                Refunds for rent payments will be processed if there was an
                error in the transaction or if the payment was made more than
                once. Refunds will not be granted if the payment was completed
                successfully and the service was delivered.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Education Payment</h3>
              <p className="text-gray-700">
                Refunds for education payments will be considered if there was
                an error in processing or if the payment was made more than
                once. Refunds will not be granted if the payment was completed
                successfully and the service was delivered.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Mobile Recharge</h3>
              <p className="text-gray-700">
                Refunds for mobile recharges will be considered only if there
                was an error in processing or if the recharge was made more than
                once. Refunds will not be granted if the recharge was completed
                successfully and the service was delivered.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Insurance Payment</h3>
              <p className="text-gray-700">
                Refunds for insurance payments will be processed if there was a
                failure in the transaction or an error in processing. The refund
                will be issued to the original payment method.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Credit Card Bill</h3>
              <p className="text-gray-700">
                Refunds for credit card bill payments will be considered if
                there was an error in processing or if the payment was made more
                than once. Refunds will not be granted if the payment was
                completed successfully and the service was delivered.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Loan Repayment</h3>
              <p className="text-gray-700">
                Refunds for loan repayments will be processed if there was a
                failure in the transaction or an error in processing. The refund
                will be issued to the original payment method.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">
                Booking Services (Coming Soon)
              </h3>
              <p className="text-gray-700">
                Refund policies for booking services such as train tickets,
                airplane tickets, bus tickets, and movie tickets will be
                specified once these services are available. Please check the
                specific terms for each booking service.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">
            Non-Refundable Transactions
          </h2>
          <ul className="list-disc list-inside pl-5 text-gray-700">
            <li>
              Payments made for services confirmed as delivered or completed.
            </li>
            <li>
              Transactions where the user has received a refund or compensation
              through another channel.
            </li>
            <li>
              Any service fees or commissions charged by IshPay or third-party
              providers.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">
            Cancellation Policy
          </h2>
          <p className="text-lg text-gray-700">
            If you wish to cancel a service, please contact our customer support
            team immediately. Cancellation policies may vary depending on the
            service. Any refund for a canceled service will be subject to the
            terms specified above.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">
            Contact Information
          </h2>
          <div className="flex items-center space-x-4 text-gray-700 mb-4">
            <FaPhone className="text-xl" />
            <span>Customer Service: +91-8540891176 (10 AM to 5 PM)</span>
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

        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">
            Changes to Refund Policy
          </h2>
          <p className="text-lg text-gray-700">
            We reserve the right to update or modify this Refund Policy at any
            time. Any changes will be posted on our website, and it is your
            responsibility to review this policy periodically. Your continued
            use of our services constitutes acceptance of any changes to the
            Refund Policy.
          </p>
        </section>
      </div>
    </div>
  );
};

export default RefundPolicyPage;
