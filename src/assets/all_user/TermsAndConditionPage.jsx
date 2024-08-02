import React from "react";

const TermsAndConditionPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-center mt-10">
        Terms and Conditions
      </h1>
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <section className="mb-8">
          <p>
            Welcome to IshPay! These Terms and Conditions outline the rules and
            regulations for the use of our website, located at{" "}
            <a href="http://www.ishpay.com" className="text-blue-500 underline">
              www.ishpay.com
            </a>
            . By accessing this website, we assume you accept these terms and
            conditions in full. Do not continue to use IshPay if you do not
            accept all the terms and conditions stated on this page.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Services Provided</h2>
          <ul className="list-disc list-inside">
            <li>Credit Card to Bank Transfer</li>
            <li>Wallet to Bank Account Transfer</li>
            <li>Bill Payments</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Fees and Payments</h2>
          <p>
            You can place an order for the services listed on IshPay at the
            price shown or provided by us. Payment must be made through the
            available payment modes. Prices listed are in Indian Rupees (unless
            specified otherwise) and are subject to change at our sole
            discretion. IshPay reserves the right to require payment of fees for
            certain or all services.
          </p>
          <p>
            You shall pay all fees as described on the website in connection
            with the services selected by you. IshPay charges a fixed rate of
            commission, depending on the medium of instruments used, on the sale
            price of each transaction. This commission is deducted from the
            payment made by the user. We reserve the right to modify the
            commission amount at any time.
          </p>
          <p>
            The user is responsible for any applicable federal, state, local,
            and foreign taxes, duties, tariffs, levies, withholdings, and
            similar assessments related to the services provided, excluding
            taxes based on IshPay's net income. Payments to the user will be
            made by IshPay, subject to a minimum account balance and provided
            that correct account details have been provided during registration.
            IshPay reserves the right to change pricing and payment policies and
            to institute new charges at any time, upon notice to the user.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold IshPay harmless from any
            damages, liabilities, losses, expenses, claims, actions, and
            demands, including without limitation, reasonable legal and
            accounting fees, arising from:
          </p>
          <ul className="list-disc list-inside">
            <li>Your breach of this agreement;</li>
            <li>Your misuse of the platform, content, and/or the services;</li>
            <li>
              Your violation of any third-party rights, including without
              limitation any copyright, trademark, property, publicity, or
              privacy right;
            </li>
            <li>Your content;</li>
            <li>
              Any claims brought against IshPay by a third party as a result of
              your acts or omissions.
            </li>
          </ul>
          <p>
            We shall provide notice to you of any such claim, suit, or
            proceeding and assist you, at your expense, in defending any such
            claim, suit, or proceeding. We reserve the right to assume the
            exclusive defense and control (at your expense) of any matter that
            is subject to indemnification under this section. You agree to
            cooperate with any reasonable requests in assisting our defense of
            such matters.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            Compliance with Applicable Laws
          </h2>
          <p>
            IshPay is based in India. We make no claims concerning whether the
            platform, the services, and the content may be viewed or are
            appropriate for use outside of India. If you access the platform
            from outside of India, you do so at your own risk and are
            responsible for compliance with the laws of your jurisdiction.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            Interaction with Third Parties
          </h2>
          <p>
            The services may contain links to third-party websites or services
            (Third Party Services) that are not owned or controlled by IshPay.
            When you access Third Party Services, you do so at your own risk.
            You represent and warrant that you have read and agreed to be bound
            by all applicable policies of any Third Party Services relating to
            your use of the services.
          </p>
          <p>
            IshPay has no control over, and assumes no responsibility for, the
            content, accuracy, privacy policies, or practices of or opinions
            expressed in any Third Party Services. By using the services, you
            expressly relieve IshPay from any and all liability arising from
            your use of any Third Party Service. Your interactions with
            organizations and/or individuals found on or through the services,
            including payment and delivery of goods or services, are solely
            between you and such organizations and/or individuals. IshPay shall
            not be responsible or liable for any loss or damage incurred as the
            result of any such dealings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            Declaration from Buyer / Seller
          </h2>
          <h3 className="text-xl font-semibold mb-2">
            Before Initiating Any Transaction on IshPay
          </h3>
          <p>
            <strong>Buyer/Sender/Customer</strong>: Confirms satisfactory
            delivery of goods and/or rendering of services before payment is
            initiated and waives all rights to raise disputes on the transaction
            via IshPay. The user is, however, free to raise a dispute directly
            with the seller/receiver. This confirmation shall be obtained as
            below:
          </p>
          <ul className="list-disc list-inside">
            <li>
              <strong>Pay Utility Bill</strong>: Pay your utility bills using
              Credit Card, Debit Card, or Net Banking.
            </li>
            <li>
              <strong>Payment on the Merchant's Account Page</strong>: By making
              a payment on the merchant’s account page, the user confirms
              satisfactory delivery.
            </li>
          </ul>
          <p>
            <strong>Merchant/Seller/Receiver</strong>: Confirms satisfactory
            delivery of goods and/or rendering of services before accepting
            payment into their account. The merchant/seller/receiver undertakes
            to provide all documents that may be required by IshPay and/or its
            payment gateway to ensure the authenticity of the transaction, to
            settle disputes, or for any other reasons IshPay may require the
            documents for.
          </p>
          <p>
            This clause should be read in conjunction with the clause titled:
            IshPay Cancellation & Refund Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Miscellaneous</h2>
          <p>
            If this agreement is terminated in accordance with the termination
            provision above, such termination shall not affect the validity of
            the following provisions of this agreement, which shall remain in
            full force and effect: fees and payment (until you pay all fees and
            taxes due hereunder), intellectual property, member content,
            licenses, communications with us, no warranties, limitation of
            liability, indemnification, termination of the agreement,
            controlling law, binding arbitration, class action waiver, and
            miscellaneous. Our failure to act on or enforce any provision of the
            agreement shall not be construed as a waiver of that provision or
            any other provision in this agreement.
          </p>
          <p>
            No waiver shall be effective unless made in writing, and no such
            waiver shall be construed as a waiver in any other or subsequent
            instance. This agreement constitutes the entire agreement between
            you and IshPay with respect to the subject matter and supersedes all
            previous or contemporaneous agreements, whether written or oral,
            between the parties with respect to the subject matter. This
            agreement will inure to the benefit of our successors, assigns,
            licensees, and sublicensees.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            User Comments, Feedback, and Other Submissions
          </h2>
          <p>
            IshPay is pleased to hear from users and welcomes your comments
            regarding our products and services. Our policy does not allow us to
            accept or consider creative ideas, suggestions, proposals, plans, or
            other materials other than those we have specifically requested. We
            hope that you will understand that the intent of this policy is to
            avoid any future misunderstandings when projects developed by our
            professional staff might seem similar to the creative works
            submitted by users.
          </p>
          <p>
            Accordingly, while we value your feedback, we must ask that you not
            send creative ideas, suggestions, or other materials to us unless we
            have specifically requested them. If you send us any creative
            materials, including comments, suggestions, or other information,
            through the services, you grant IshPay a non-exclusive, perpetual,
            irrevocable, royalty-free, worldwide license to use, reproduce,
            modify, adapt, publish, translate, create derivative works from,
            distribute, perform, and display such content in any media, and for
            any purpose, without compensation to you. You agree that this
            license includes the right for us to make your feedback available to
            other users of the services, who may also use your feedback subject
            to these terms and conditions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Third-Party Links</h2>
          <p>
            Certain content, products, and services available via our service
            may include materials from third parties. Third-party links on this
            site may direct you to third-party websites that are not affiliated
            with us. We are not responsible for examining or evaluating the
            content or accuracy, and we do not warrant and will not have any
            liability or responsibility for any third-party materials or
            websites, or for any other materials, products, or services of third
            parties.
          </p>
          <p>
            We are not liable for any harm or damages related to the purchase or
            use of goods, services, resources, content, or any other
            transactions made in connection with any third-party websites.
            Please review carefully the third-party's policies and practices and
            make sure you understand them before you engage in any transaction.
            Complaints, claims, concerns, or questions regarding third-party
            products should be directed to the third party.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            Errors, Inaccuracies, and Omissions
          </h2>
          <p>
            Occasionally there may be information on our site or in the service
            that contains typographical errors, inaccuracies, or omissions that
            may relate to product descriptions, pricing, promotions, offers,
            product shipping charges, transit times, and availability. We
            reserve the right to correct any errors, inaccuracies, or omissions
            and to change or update information or cancel orders if any
            information in the service or on any related website is inaccurate
            at any time without prior notice (including after you have submitted
            your order).
          </p>
          <p>
            We undertake no obligation to update, amend or clarify information
            in the service or on any related website, including, without
            limitation, pricing information, except as required by law. No
            specified update or refresh date applied in the service or on any
            related website should be taken to indicate that all information in
            the service or on any related website has been modified or updated.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            Disclaimer of Warranties; Limitation of Liability
          </h2>
          <p>
            We do not guarantee, represent, or warrant that your use of our
            service will be uninterrupted, timely, secure, or error-free. We do
            not warrant that the results that may be obtained from the use of
            the service will be accurate or reliable.
          </p>
          <p>
            You agree that from time to time we may remove the service for
            indefinite periods of time or cancel the service at any time,
            without notice to you.
          </p>
          <p>
            You expressly agree that your use of, or inability to use, the
            service is at your sole risk. The service and all products and
            services delivered to you through the service are (except as
            expressly stated by us) provided 'as is' and 'as available' for your
            use, without any representation, warranties, or conditions of any
            kind, either express or implied, including all implied warranties or
            conditions of merchantability, merchantable quality, fitness for a
            particular purpose, durability, title, and non-infringement.
          </p>
          <p>
            In no case shall IshPay, our directors, officers, employees,
            affiliates, agents, contractors, interns, suppliers, service
            providers, or licensors be liable for any injury, loss, claim, or
            any direct, indirect, incidental, punitive, special, or
            consequential damages of any kind, including, without limitation
            lost profits, lost revenue, lost savings, loss of data, replacement
            costs, or any similar damages, whether based in contract, tort
            (including negligence), strict liability or otherwise, arising from
            your use of any of the service or any products procured using the
            service, or for any other claim related in any way to your use of
            the service or any product, including, but not limited to, any
            errors or omissions in any content, or any loss or damage of any
            kind incurred as a result of the use of the service or any content
            (or product) posted, transmitted, or otherwise made available via
            the service, even if advised of their possibility.
          </p>
          <p>
            Because some states or jurisdictions do not allow the exclusion or
            the limitation of liability for consequential or incidental damages,
            in such states or jurisdictions, our liability shall be limited to
            the maximum extent permitted by law.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Privacy Policy</h2>
          <p>
            Please review our Privacy Policy. By using our services, you consent
            to the collection and use of your personal information as described
            in the Privacy Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Take Down Procedure</h2>
          <p>
            If you believe in good faith that any content or materials on the
            website infringe your copyright or that of a third party you
            represent, you (or the third party you represent) may send IshPay a
            written complaint in the form of an email and/or hard copy,
            requesting the takedown of the infringing content.
          </p>
          <p>Your written complaint must include:</p>
          <ul className="list-disc list-inside">
            <li>
              Identification of the copyrighted work you claim has been
              infringed;
            </li>
            <li>
              Identification of the material on the website that you claim is
              infringing, with sufficient detail so that we can locate it on the
              website;
            </li>
            <li>Your address, telephone number, and email address;</li>
            <li>
              A statement that you have a good faith belief that the use of the
              material in the manner complained of is not authorized by the
              copyright owner, its agent, or the law;
            </li>
            <li>
              A statement, under penalty of perjury, that the information in the
              notification is accurate and that you are authorized to act on
              behalf of the copyright owner;
            </li>
            <li>Your physical or electronic signature.</li>
          </ul>
          <p>
            If we determine, in our sole discretion, that the material you have
            identified is infringing, we will remove or disable access to the
            material within thirty-six (36) hours of receiving the written
            complaint. If you believe in good faith that the material removed or
            to which access was disabled is not infringing, or that you have the
            authorization from the copyright owner, the copyright owner's agent,
            or pursuant to law to use the material, you may send us a
            counter-notice containing the following information:
          </p>
          <ul className="list-disc list-inside">
            <li>
              Your physical or electronic signature Identification of the
              material that has been removed or to which access has been
              disabled and the location at which the material appeared before it
              was removed or disabled;
            </li>
            <li>
              A statement, under penalty of perjury, that you have a good faith
              belief that the material was removed or disabled as a result of
              mistake or misidentification of the material to be removed or
              disabled;
            </li>
            <li>
              Your name, address, telephone number, and email address, and a
              statement that you consent to the jurisdiction of the federal
              court in the district where your address is located, or if your
              address is outside of India, for any judicial district in which
              the service provider may be found, and that you will accept
              service of process from the person who provided the original
              notification of the alleged infringement or an agent of such
              person.
            </li>
          </ul>
          <p>
            If we receive a counter-notice, we will inform the person who filed
            the original complaint, and we may replace the removed material or
            cease disabling access to it in ten (10) to fourteen (14) business
            days after receiving the counter-notice, at our sole discretion,
            unless the copyright owner files an action seeking a court order
            against the infringer.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            Changes to Terms of Service
          </h2>
          <p>
            You can review the most current version of the Terms of Service at
            any time on this page. We reserve the right, at our sole discretion,
            to update, change, or replace any part of these Terms of Service by
            posting updates and changes to our website. It is your
            responsibility to check our website periodically for changes. Your
            continued use of or access to our website or the service following
            the posting of any changes to these Terms of Service constitutes
            acceptance of those changes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Governing Law</h2>
          <p>
            These Terms of Service and any separate agreements whereby we
            provide you services shall be governed by and construed in
            accordance with the laws of India.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
          <p>
            Questions about the Terms of Service should be sent to us at{" "}
            <a
              href="mailto:support@ishpay.com"
              className="text-blue-500 underline"
            >
              support@ishpay.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditionPage;
