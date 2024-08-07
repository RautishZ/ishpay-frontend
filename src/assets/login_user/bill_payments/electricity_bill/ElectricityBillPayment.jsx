import React, { useState } from "react";
import Select from "react-select";
import { Modal, Button } from "react-bootstrap";
import { FaSpinner } from "react-icons/fa";

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

// Example Indian electricity bill payment billers
const billers = [
  { value: "biller1", label: "Tata Power", type: "Prepaid" },
  { value: "biller2", label: "Adani Electricity", type: "Postpaid" },
  { value: "biller3", label: "BSES Rajdhani", type: "Postpaid" },
  { value: "biller4", label: "BSES Yamuna", type: "Prepaid" },
  { value: "biller5", label: "Reliance Energy", type: "Prepaid" },
];

const ElectricityBillPayment = () => {
  const [show, setShow] = useState(false);
  const [biller, setBiller] = useState(null);
  const [caNumber, setCaNumber] = useState("");
  const [billAmount, setBillAmount] = useState("");
  const [fetching, setFetching] = useState(false);
  const [billType, setBillType] = useState("Prepared");

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleFetchBillAmount = () => {
    setFetching(true);
    // Simulate fetching bill amount
    setTimeout(() => {
      setFetching(false);
      setBillAmount("₹1200"); // Simulated bill amount
    }, 2000);
  };

  const handleSubmit = () => {
    if (biller && caNumber.length === 9) {
      alert(
        `Paying electricity bill for CA Number: ${caNumber}\nBiller: ${biller.label}\nAmount: ${billAmount}`
      );
      handleClose();
    } else {
      alert("Please complete all fields correctly");
    }
  };

  const handleCaNumberChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // Only allows digits
    if (value.length <= 9) {
      setCaNumber(value);
    }
  };

  const selectedBillerType = biller ? biller.type : "Prepaid";

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-2xl bg-secondary-100 p-3 rounded-lg shadow-2xl">
        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-semibold mb-2">
            Biller
          </label>
          <Select
            options={billers}
            value={biller}
            onChange={(selectedOption) => {
              setBiller(selectedOption);
              setBillType(selectedOption.type);
            }}
            placeholder="Select Biller"
            className="basic-single"
            classNamePrefix="select"
            styles={customStyles}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-semibold mb-2">
            CA Number
          </label>
          <input
            type="text"
            value={caNumber}
            onChange={handleCaNumberChange}
            className={`w-full p-3 border rounded-md ${
              caNumber.length !== 9 ? "border-red-500" : ""
            }`}
            placeholder="Enter CA Number (9 digits)"
            maxLength={9}
          />
          {caNumber.length !== 9 && (
            <p className="text-red-500 text-sm mt-1">
              CA Number must be 9 digits
            </p>
          )}
        </div>

        {selectedBillerType === "Prepaid" && (
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-semibold mb-2 focus:outline-ishprimary-400">
              Amount
            </label>
            <input
              type="text"
              value={billAmount}
              onChange={(e) => setBillAmount(e.target.value)}
              className="w-full p-3 border rounded-md"
              placeholder="Enter Amount"
            />
          </div>
        )}

        {selectedBillerType === "Postpaid" && (
          <div className="mb-4">
            <button
              onClick={handleFetchBillAmount}
              className="w-full bg-ishprimary-500 text-white px-4 py-3 text-xl rounded hover:bg-ishprimary-600"
            >
              {fetching ? (
                <span className="flex items-center justify-center">
                  Fetching <FaSpinner className="ml-2 animate-spin" />
                </span>
              ) : (
                "Fetch Bill Amount"
              )}
            </button>
          </div>
        )}

        {selectedBillerType === "Postpaid" && (
          <div className="my-4 p-3 bg-white rounded-lg shadow-md">
            <p className="text-xl font-bold">Bill Amount: {billAmount}</p>
          </div>
        )}

        <button
          onClick={handleShow}
          className="w-full bg-ishprimary-500 text-white px-4 py-3 text-xl rounded hover:bg-ishprimary-600"
        >
          Proceed to Payment
        </button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Payment Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Paying electricity bill for CA Number: {caNumber}</p>
          <p>Biller: {biller ? biller.label : "N/A"}</p>
          <p>Amount: {billAmount}</p>
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
    </div>
  );
};

export default ElectricityBillPayment;
