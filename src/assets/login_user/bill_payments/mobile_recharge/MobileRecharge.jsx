import React, { useState } from "react";
import Select from "react-select";
import { Modal, Button } from "react-bootstrap";
import { BiChevronRight } from "react-icons/bi";

// Sample plan details
const planDetails = {
  949: {
    name: "3 MONTHS DISNEY+HOTSTAR",
    price: "₹949",
    packValidity: "84 Days",
    totalData: "168 GB",
    dataAtHighSpeed: "2 GB/Day",
    voice: "Unlimited",
    sms: "100 SMS/Day",
    subscriptions: ["Disney+Hotstar", "JioTV", "JioCinema", "JioCloud"],
    notes: [
      "Get 3 months (90 Days) Disney+Hotstar Mobile subscription",
      "Post which unlimited @ 64 Kbps",
      "Unlimited 5G data for eligible subscribers",
      "JioCinema premium is not included in complementary JioCinema subscription",
    ],
  },
  // Add other plans here
};

const plans = [
  { category: "Popular Plans", amounts: [949] },
  // Add other plan categories and amounts here
];

const customStyles = {
  control: (base, state) => ({
    ...base,
    borderColor: state.isFocused ? "#AD1E23" : "#E18082",
    "&:hover": {
      borderColor: "#AD1E23",
    },
    boxShadow: state.isFocused ? "0 0 0 1px #AD1E23" : "none",
    padding: "0.6rem", // p-2 in Tailwind CSS
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused
      ? "#E18082"
      : state.isSelected
      ? "#AD1E23"
      : "white",
    color: state.isFocused || state.isSelected ? "white" : "black",
    "&:hover": {
      backgroundColor: "#E18082",
      color: "white",
    },
  }),
  valueContainer: (base) => ({
    ...base,
    padding: "0 8px",
  }),
  singleValue: (base) => ({
    ...base,
    color: "#333",
  }),
};

const MobileRecharge = () => {
  const [show, setShow] = useState(false);
  const [planModalShow, setPlanModalShow] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCarrier, setSelectedCarrier] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handlePlanModalShow = () => setPlanModalShow(true);
  const handlePlanModalClose = () => setPlanModalShow(false);

  const handleSubmit = () => {
    if (mobileNumber.length === 10) {
      if (selectedAmount && selectedState && selectedCarrier && selectedPlan) {
        alert(
          `Recharging ${mobileNumber} with ₹${selectedAmount}\nState: ${selectedState}\nCarrier: ${selectedCarrier}\nPlan: ₹${selectedPlan}`
        );
        handleClose();
      } else {
        alert("Please complete all fields");
      }
    } else {
      alert("Please enter a valid 10-digit mobile number");
    }
  };

  const handleProcess = () => {
    setIsProcessing(true);
    // Simulate processing delay
    setTimeout(() => {
      setIsProcessing(false);
      alert("Processing completed!");
    }, 2000);
  };

  const states = ["State 1", "State 2", "State 3"];
  const carriers = ["Carrier A", "Carrier B", "Carrier C"];

  // Convert note string to list items
  const parseNotes = (notes) => {
    return notes.map((note, index) => <li key={index}>{note}</li>);
  };

  return (
    <div className=" flex flex-col items-center ">
      <div className="relative flex-grow w-full max-w-2xl ">
        <div className="flex items-center">
          <div className="absolute inset-y-0 left-0 flex items-center bg-ishprimary-500 w-14  justify-center">
            <span className="text-white font-semibold text-2xl">91</span>
          </div>
          <input
            type="text"
            maxLength={10}
            pattern="\d{10}"
            style={{ letterSpacing: "0.5em", height: "4rem" }} // Fixed height to match button
            className="pl-20  text-md sm:text-xl font-semibold text-ishprimary flex-grow focus:outline-none shadow-xl"
            placeholder="0000000000"
            value={mobileNumber}
            onChange={(e) => {
              const value = e.target.value.replace(/[^0-9]/g, ""); // Only allows digits
              setMobileNumber(value);
            }}
            onBlur={(e) => {
              if (mobileNumber.length === 10) {
                e.target.blur(); // Remove focus if input length is 10
              }
            }}
          />
        </div>
      </div>

      {mobileNumber.length === 10 && (
        <div className="w-full max-w-2xl bg-secondary-100 p-3 rounded-b-lg shadow-2xl">
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-semibold mb-2">
              State
            </label>
            <Select
              options={states.map((state) => ({ value: state, label: state }))}
              value={
                selectedState
                  ? { value: selectedState, label: selectedState }
                  : null
              }
              onChange={(option) => setSelectedState(option.value)}
              placeholder="Select State"
              styles={customStyles}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-semibold mb-2">
              Carrier
            </label>
            <Select
              options={carriers.map((carrier) => ({
                value: carrier,
                label: carrier,
              }))}
              value={
                selectedCarrier
                  ? { value: selectedCarrier, label: selectedCarrier }
                  : null
              }
              onChange={(option) => setSelectedCarrier(option.value)}
              placeholder="Select Carrier"
              styles={customStyles}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-semibold mb-2">
              Plan
            </label>
            <button
              onClick={handlePlanModalShow}
              className="w-full p-3 border-1 border-ishprimary-300 hover:border-ishprimary rounded bg-white text-gray-700 flex items-center justify-between"
            >
              {selectedPlan ? `₹${selectedPlan}` : "Select Plan"}
              <BiChevronRight className="text-gray-500" />
            </button>
          </div>

          {/* Display selected plan details */}
          {selectedPlan && planDetails[selectedPlan] && (
            <div className="my-4 p-3 bg-white  rounded-lg shadow-md">
              <div className="flex justify-between">
                <h5 className="text-lg font-semibold mb-2">
                  {planDetails[selectedPlan].name}
                </h5>
                <p className="text-xl font-bold mb-2 text-ishprimary-500">
                  {planDetails[selectedPlan].price}
                </p>
              </div>
              <p>
                <strong>Pack Validity:</strong>{" "}
                {planDetails[selectedPlan].packValidity}
              </p>
              <p>
                <strong>Total Data:</strong>{" "}
                {planDetails[selectedPlan].totalData}
              </p>
              <p>
                <strong>Data at High Speed:</strong>{" "}
                {planDetails[selectedPlan].dataAtHighSpeed}
              </p>
              <p>
                <strong>Voice:</strong> {planDetails[selectedPlan].voice}
              </p>
              <p>
                <strong>SMS:</strong> {planDetails[selectedPlan].sms}
              </p>
              <p>
                <strong>Subscriptions: </strong>
                <span className="">
                  {planDetails[selectedPlan].subscriptions.map((sub, i) => (
                    <span key={i}> {sub}</span>
                  ))}
                </span>
              </p>

              <p className="">
                <strong>Notes:</strong>
              </p>
              <ul className="list-disc pl-5">
                {parseNotes(planDetails[selectedPlan].notes)}
              </ul>
            </div>
          )}

          <button
            onClick={handleProcess}
            disabled={isProcessing}
            className={`w-full bg-ishprimary-500 text-white px-4 py-3 text-xl rounded hover:bg-ishprimary-600 ${
              isProcessing
                ? "cursor-not-allowed bg-ishprimary-200 hover:bg-ishprimary-200"
                : ""
            }`}
          >
            {isProcessing ? (
              <span className="flex items-center justify-center">
                Processing...
              </span>
            ) : (
              <span className="flex items-center justify-center">Recharge</span>
            )}
          </button>
        </div>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Recharge Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Recharging {mobileNumber} with ₹{selectedAmount}
          </p>
          <p>State: {selectedState}</p>
          <p>Carrier: {selectedCarrier}</p>
          <p>Plan: ₹{selectedPlan}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={planModalShow} onHide={handlePlanModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select a Plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {plans.map((planCategory, index) => (
            <div key={index}>
              <h5 className="font-semibold mb-2">{planCategory.category}</h5>
              <div className="mb-4">
                {planCategory.amounts.map((amount, idx) => (
                  <button
                    key={idx}
                    className={`w-full p-2 border-2 border-gray-300 rounded mb-2 ${
                      selectedPlan === amount
                        ? "bg-ishprimary-500 text-white"
                        : "bg-white text-gray-700"
                    }`}
                    onClick={() => {
                      setSelectedPlan(amount);
                      handlePlanModalClose();
                    }}
                  >
                    ₹{amount}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MobileRecharge;
