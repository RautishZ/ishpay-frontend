import React, { useState } from "react";

function FAQ() {
  // State for FAQ toggle
  const [faqOpen, setFaqOpen] = useState(null);

  // FAQ data
  const faqs = [
    {
      question: "What is IshPay?",
      answer: (
        <ul className="list-disc pl-5">
          <li>
            IshPay is a payment application that allows you to transfer funds
            from credit cards or wallets to bank accounts and pay various bills.
          </li>
          <li>It is designed to make financial transactions quick and easy.</li>
        </ul>
      ),
    },

    {
      question: "Is IshPay safe to use?",
      answer: (
        <ul className="list-disc pl-5">
          <li>Yes, IshPay is fully protected.</li>
          <li>
            All financial transactions and card details are secured under PCI
            DSS (Payment Card Industry Data Security Standard) and SSL (Secure
            Sockets Layer) technology.
          </li>
        </ul>
      ),
    },
    {
      question: "How can I pay using IshPay?",
      answer: (
        <ul className="list-disc pl-5">
          <li>Credit Cards</li>
          <li>Debit Cards</li>
          <li>UPI (Unified Payments Interface)</li>
          <li>Wallets (Mobikwik, Ola Money, Freecharge, Amazon Pay, etc.)</li>
          <li>Net Banking</li>
        </ul>
      ),
    },

    {
      question: "What is the per-day transaction limit on IshPay?",
      answer: (
        <ul className="list-disc pl-5">
          <li>Instant Pay: Rs. 8,000 per day.</li>
          <li>Same Day: Rs. 15,000 per day.</li>
          <li>
            Other Priorities: Maximum of 5 payments per day, with a limit of Rs.
            50,000 per transaction.
          </li>
        </ul>
      ),
    },

    {
      question: "Can I increase my Instant Pay and Same Day limit?",
      answer: (
        <ul className="list-disc pl-5">
          <li>
            Yes, it will be decided by our legal team based on your transactions
            and chargebacks/disputes from banks.
          </li>
          <li>If eligible, your Instant Pay limit will be increased.</li>
        </ul>
      ),
    },

    {
      question: "Can I get back my money if a transaction fails?",
      answer: (
        <ul className="list-disc pl-5">
          <li>
            Yes, if the transaction fails due to a bank issue, the amount will
            be returned to the original source within 5 to 7 days.
          </li>
        </ul>
      ),
    },

    {
      question: "How can I contact IshPay for support?",
      answer: (
        <ul className="list-disc pl-5">
          <li>Chat Support</li>
          <li>Call Support: 8540891176</li>
          <li>Email Support: support@ishpay.com</li>
        </ul>
      ),
    },
  ];

  // Function to toggle FAQ answer visibility
  const toggleFaq = (index) => {
    if (faqOpen === index) {
      setFaqOpen(null); // Close FAQ if already open
    } else {
      setFaqOpen(index); // Open selected FAQ
    }
  };

  return (
    <div>
      {/* Frequently Asked Questions */}
      <div className="mt-16">
        <h2 className="text-xl sm:text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-3 sm:p-6 shadow-md cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <div className="flex justify-between items-center ">
                <h3 className="text-md sm:text-xl font-bold">{faq.question}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 ${
                    faqOpen === index ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {faqOpen === index && (
                <div className="text-gray-700 mt-2">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
