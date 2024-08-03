import React from "react";
import { FaEnvelope } from "react-icons/fa";

const TermsAndConditionsPage = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold p-4 text-center bg-secondary-100 rounded-t-lg">
        Terms and Conditions
      </h1>
      <div className="bg-white p-3 rounded-b-lg shadow-lg">
        <section className="mb-8">
          <p className="text-lg text-gray-700">
            Welcome to IshPay! These Terms and Conditions ("Terms") outline the
            rules and regulations for using our website, located at{" "}
            <a
              href="https://www.ishpay.com"
              className="text-blue-500 hover:underline"
            >
              www.ishpay.com
            </a>{" "}
            ("Site"). By accessing or using our Site, you agree to comply with
            and be bound by these Terms. If you do not agree to these Terms, you
            must not use our Site or services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">
            Services Provided
          </h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="text-xl font-medium mb-2">
                IshPay offers the following services:
              </h3>
              <ul className="list-disc list-inside pl-5">
                <li>
                  <strong>Credit Card to Bank Transfer:</strong> Transfer funds
                  from your credit card to your bank account quickly and
                  securely.
                </li>
                <li>
                  <strong>Wallet to Bank Account Transfer:</strong> Move money
                  from your digital wallet to your bank account effortlessly.
                </li>
                <li>
                  <strong>Bill Payments:</strong> Manage and pay various utility
                  and other bills.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">
                Upcoming Booking Services:
              </h3>
              <ul className="list-disc list-inside pl-5">
                <li>Train Tickets</li>
                <li>Airplane Tickets</li>
                <li>Bus Tickets</li>
                <li>Movie Tickets</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">
            Fees and Payments
          </h2>
          <ul className="list-disc list-inside pl-5 text-gray-700 space-y-4">
            <li>
              <strong>Service Charges:</strong> Payments for services must be
              made through the available payment modes. Prices listed are in
              Indian Rupees unless stated otherwise and may change at our
              discretion. IshPay reserves the right to modify fees and
              commissions at any time.
            </li>
            <li>
              <strong>Commission:</strong> We charge a fixed commission based on
              the medium of instruments used. This commission is deducted from
              the payment made by the user.
            </li>
            <li>
              <strong>Taxes:</strong> You are responsible for any applicable
              taxes related to the services provided, excluding taxes based on
              IshPay’s net income.
            </li>
            <li>
              <strong>Account Payments:</strong> Payments to users will be made
              subject to a minimum account balance and correct account details.
              We reserve the right to change pricing and payment policies with
              notice to users.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">
            Indemnification
          </h2>
          <p className="text-lg text-gray-700">
            You agree to indemnify and hold IshPay harmless from any claims,
            damages, liabilities, losses, expenses, and legal fees arising from:
          </p>
          <ul className="list-disc list-inside pl-5 text-gray-700">
            <li>Your breach of these Terms.</li>
            <li>Misuse of the platform or services.</li>
            <li>Violation of third-party rights.</li>
            <li>Your content or interactions with third parties.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">
            Compliance with Applicable Laws
          </h2>
          <p className="text-lg text-gray-700">
            IshPay operates under Indian law. If you access the Site from
            outside India, you are responsible for complying with local laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">
            Interaction with Third Parties
          </h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="text-xl font-medium mb-2">
                Third-Party Services:
              </h3>
              <p>
                Our Site may link to third-party websites or services. We are
                not responsible for their content or practices. Your use of
                third-party services is at your own risk.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Liability:</h3>
              <p>
                IshPay is not liable for any loss or damage resulting from
                dealings with third parties accessed through our Site.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">
            Declaration from Buyer/Seller
          </h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="text-xl font-medium mb-2">Buyers/Senders:</h3>
              <p>
                Confirm the satisfactory delivery of goods/services before
                initiating payment and waive the right to dispute the
                transaction via IshPay. You may still raise disputes directly
                with the seller.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Merchants/Sellers:</h3>
              <p>
                Confirm satisfactory delivery before accepting payment and
                provide necessary documentation if required by IshPay.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">
            Miscellaneous
          </h2>
          <ul className="list-disc list-inside pl-5 text-gray-700 space-y-4">
            <li>
              <strong>Survival of Provisions:</strong> Termination of this
              agreement does not affect provisions related to fees, intellectual
              property, indemnification, and legal matters.
            </li>
            <li>
              <strong>Waivers:</strong> No waiver of any provision is effective
              unless made in writing.
            </li>
            <li>
              <strong>Entire Agreement:</strong> These Terms constitute the
              entire agreement between you and IshPay and supersede all prior
              agreements.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">
            User Comments, Feedback, and Submissions
          </h2>
          <p className="text-lg text-gray-700">
            If you send us feedback or creative ideas, you grant IshPay a
            worldwide, royalty-free license to use, reproduce, and adapt such
            content without compensation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">
            Third-Party Links
          </h2>
          <p className="text-lg text-gray-700">
            We are not responsible for content or accuracy of third-party
            materials linked on our Site. Review third-party policies before
            engaging with their services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">
            Errors, Inaccuracies, and Omissions
          </h2>
          <p className="text-lg text-gray-700">
            We reserve the right to correct errors and update information. We
            are not obligated to update information unless required by law.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">
            Disclaimer of Warranties; Limitation of Liability
          </h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="text-xl font-medium mb-2">
                Service Availability:
              </h3>
              <p>
                We do not guarantee uninterrupted or error-free service. All
                services are provided "as-is."
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">
                Liability Limitation:
              </h3>
              <p>
                IshPay is not liable for indirect, incidental, or consequential
                damages. Liability is limited to the maximum extent permitted by
                law.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">
            Privacy Policy
          </h2>
          <p className="text-lg text-gray-700">
            Please review our{" "}
            <a href="/privacy-policy" className="text-blue-500 hover:underline">
              Privacy Policy
            </a>{" "}
            to understand how we handle your personal information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">
            Take Down Procedure
          </h2>
          <p className="text-lg text-gray-700">
            To report copyright infringement, provide a written complaint
            including necessary details. If material is found to be infringing,
            we will remove it within 36 hours.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">
            Changes to Terms
          </h2>
          <p className="text-lg text-gray-700">
            We may update these Terms at our discretion. Your continued use of
            the Site constitutes acceptance of any changes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">
            Governing Law
          </h2>
          <p className="text-lg text-gray-700">
            These Terms are governed by the laws of India.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">
            Contact Information
          </h2>
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
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
