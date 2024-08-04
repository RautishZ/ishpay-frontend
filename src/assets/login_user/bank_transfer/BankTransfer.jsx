import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PaymentMode from "./PaymentMode";
import BeneficiaryList from "./BeneficiaryList";
import BillingDetails from "./BillingDetails";
import AmountInput from "./AmountInput";
import TransferButton from "./TransferButton";

const BankTransfer = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [selectedMethodImage, setSelectedMethodImage] = useState(null);
  const [selectedAccountTo, setSelectedAccountTo] = useState(null);
  const [showBeneficiaryPopup, setBeneficiaryShowPopup] = useState(false);
  const [showPaymentModePopup, setshowPaymentModePopup] = useState(false);
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState(null);

  const [convenienceCharges, setConvenienceCharges] = useState(0);
  const [gst, setGst] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  const userDetails = useSelector((state) => state.userDetails);
  const beneficiaries = userDetails?.userDetails?.beneficiaries || [];

  useEffect(() => {
    if (amount) {
      fetchChargesAndUpdateBillingDetails(amount);
    }
  }, [amount]);

  const fetchChargesAndUpdateBillingDetails = async (amount) => {
    try {
      // Use hardcoded values for convenience and GST rates
      const convenienceChargeRate = 1.06; // 1.06%
      const gstRate = 18; // 18%

      const amountValue = parseFloat(amount) || 0;
      const charges = (convenienceChargeRate / 100) * amountValue;
      const gstValue = (gstRate / 100) * charges;
      const total = amountValue + charges + gstValue;

      setConvenienceCharges(charges.toFixed(2));
      setGst(gstValue.toFixed(2));
      setGrandTotal(total.toFixed(2));
    } catch (error) {
      console.error("Error calculating charges:", error);
      setStatus("Error calculating charges.");
    }
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  const handleSubmit = () => {
    if (!selectedMethod || selectedMethod === "Pending") {
      setStatus("Please select a valid payment method.");
      return;
    }

    if (!selectedAccountTo) {
      setStatus("Please select a valid beneficiary.");
      return;
    }

    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      setStatus("Please enter a valid amount.");
      return;
    }

    setStatus("Transfer submitted successfully.");
    alert("Transfer submitted successfully.");
  };

  return (
    <div className="flex flex-col items-center pb-10 px-3 sm:px-6 lg:px-8">
      <div className="flex flex-col mt-4 md:mt-0 w-full max-w-4xl border-2 border-secondary-200">
        <div className="py-2 text-2xl font-semibold text-center bg-secondary-200">
          <h1>Transfer Funds</h1>
        </div>

        <div className="flex flex-col justify-around md:flex-row ">
          <PaymentSelection
            selectedMethod={selectedMethod}
            setshowPaymentModePopup={setshowPaymentModePopup}
            selectedMethodImage={selectedMethodImage}
          />
          <BeneficiarySelection
            selectedAccountTo={selectedAccountTo}
            setBeneficiaryShowPopup={setBeneficiaryShowPopup}
          />
        </div>

        <BillingDetails
          amount={amount}
          convenienceCharges={convenienceCharges}
          gst={gst}
          grandTotal={grandTotal}
        />

        <div className="flex flex-col justify-center items-center">
          <AmountInput
            amount={amount}
            handleAmountChange={handleAmountChange}
          />
          <TransferButton handleSubmit={handleSubmit} />

          {status && (
            <div className="mt-2 px-4 w-full">
              <p className="text-xl text-red-500">{status}</p>
            </div>
          )}
        </div>
      </div>

      <PaymentMode
        selectedMethod={selectedMethod}
        setSelectedMethod={(method) => {
          if (method !== "Pending") {
            setSelectedMethod(method);
          }
        }}
        setSelectedMethodImage={setSelectedMethodImage}
        showPaymentModePopup={showPaymentModePopup}
        setshowPaymentModePopup={setshowPaymentModePopup}
      />

      <BeneficiaryList
        beneficiaries={beneficiaries.filter(
          (beneficiary) => beneficiary.status !== "Pending"
        )}
        selectedAccountTo={selectedAccountTo}
        setSelectedAccountTo={setSelectedAccountTo}
        showBeneficiaryPopup={showBeneficiaryPopup}
        setBeneficiaryShowPopup={setBeneficiaryShowPopup}
      />
    </div>
  );
};

const PaymentSelection = ({
  selectedMethod,
  setshowPaymentModePopup,
  selectedMethodImage,
}) => (
  <div className="mt-3">
    <h1 className="text-2xl font-bold px-3 ">FROM :</h1>
    <div
      className="flex-3 px-3 flex justify-center items-center cursor-pointer h-[112px] min-w-[300px]"
      onClick={() => setshowPaymentModePopup(true)}
    >
      <div className="bg-gray-300 text-black font-semibold rounded-md px-4 py-2 flex items-center justify-center space-x-4 w-full h-full">
        {selectedMethod ? (
          <>
            {selectedMethodImage && (
              <div className="w-16 h-16">
                <img
                  src={selectedMethodImage}
                  alt={selectedMethod}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            <p className="text-xl">{selectedMethod}</p>
          </>
        ) : (
          <p className="text-xl">Select Payment Mode</p>
        )}
      </div>
    </div>
  </div>
);

const BeneficiarySelection = ({
  selectedAccountTo,
  setBeneficiaryShowPopup,
}) => (
  <div className="mt-6 ">
    <h1 className="text-2xl font-bold px-3">TO :</h1>
    <div className="flex-5 px-3 flex justify-center items-center h-[112px] min-w-[300px]">
      <div
        onClick={() => setBeneficiaryShowPopup(true)}
        className="bg-gray-300 text-black font-semibold rounded-md flex justify-center items-center cursor-pointer h-full w-full p-2"
      >
        {selectedAccountTo ? (
          <div>
            <p>
              <span className="font-semibold">Name:</span>{" "}
              {selectedAccountTo.beneficiaryName}
            </p>
            <p>
              <span className="font-semibold">Account No:</span>{" "}
              {selectedAccountTo.accountNumber}
            </p>
            <p>
              <span className="font-semibold">IFSC:</span>{" "}
              {selectedAccountTo.ifscCode.toUpperCase()}
            </p>
            <p>{selectedAccountTo.bankName}</p>
          </div>
        ) : (
          <p className="text-xl">Select Beneficiary</p>
        )}
      </div>
    </div>
  </div>
);

export default BankTransfer;
