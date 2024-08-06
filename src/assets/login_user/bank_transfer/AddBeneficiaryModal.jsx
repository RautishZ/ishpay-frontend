import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import API from "../../../services/API";
import { toast } from "react-toastify";

const AddBeneficiaryModal = ({ show, onHide, onAddBeneficiary }) => {
  const [newBeneficiary, setNewBeneficiary] = useState({
    beneficiaryName: "",
    accountNumber: "",
    ifscCode: "",
    bankName: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    beneficiaryName: "",
    accountNumber: "",
    ifscCode: "",
    bankName: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (show) {
      // Clear fields and errors when the modal opens
      setNewBeneficiary({
        beneficiaryName: "",
        accountNumber: "",
        ifscCode: "",
        bankName: "",
      });
      setError({
        beneficiaryName: "",
        accountNumber: "",
        ifscCode: "",
        bankName: "",
      });
      setIsFormValid(false);
    }
  }, [show]);

  const validateInputs = () => {
    let isValid = true;
    const newErrors = {
      beneficiaryName: "",
      accountNumber: "",
      ifscCode: "",
      bankName: "",
    };

    // Regex patterns
    const accountNumberRegex = /^[0-9]{9,18}$/;
    const ifscCodeRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;

    if (!newBeneficiary.beneficiaryName.trim()) {
      newErrors.beneficiaryName = "Beneficiary name is required.";
      isValid = false;
    }
    if (!accountNumberRegex.test(newBeneficiary.accountNumber)) {
      newErrors.accountNumber = "Invalid account number.";
      isValid = false;
    }
    if (!ifscCodeRegex.test(newBeneficiary.ifscCode)) {
      newErrors.ifscCode = "Invalid IFSC code.";
      isValid = false;
    }
    if (!newBeneficiary.bankName.trim()) {
      newErrors.bankName = "Bank name is required.";
      isValid = false;
    }

    setError(newErrors);
    setIsFormValid(isValid);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBeneficiary((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddBeneficiary = async () => {
    if (!validateInputs()) return;

    setLoading(true);

    try {
      const response = await API.post("/beneficiary", newBeneficiary);
      toast.success("Beneficiary added successfully.");
      onAddBeneficiary(response.data);
      onHide();
    } catch (err) {
      console.log(err);
      toast.error("Failed to add beneficiary. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title className="w-full">
          <div className="text-center">Add New Beneficiary</div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Beneficiary Name
            </label>
            <input
              type="text"
              name="beneficiaryName"
              className={`mt-1 block w-full px-3 py-2 border rounded-md text-sm shadow-sm placeholder-gray-400 
                ${error.beneficiaryName ? "border-red-500" : "border-gray-300"} 
                focus:outline-none focus:ring-2 focus:ring-ishprimary-500`}
              placeholder="Enter Beneficiary Name"
              value={newBeneficiary.beneficiaryName}
              onChange={handleInputChange}
            />
            {error.beneficiaryName && (
              <p className="mt-2 text-sm text-red-500">
                {error.beneficiaryName}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Account Number
            </label>
            <input
              type="text"
              name="accountNumber"
              className={`mt-1 block w-full px-3 py-2 border rounded-md text-sm shadow-sm placeholder-gray-400 
                ${error.accountNumber ? "border-red-500" : "border-gray-300"} 
                focus:outline-none focus:ring-2 focus:ring-ishprimary-500`}
              placeholder="Enter Account Number"
              value={newBeneficiary.accountNumber}
              onChange={handleInputChange}
            />
            {error.accountNumber && (
              <p className="mt-2 text-sm text-red-500">{error.accountNumber}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              IFSC Code
            </label>
            <input
              type="text"
              name="ifscCode"
              className={`mt-1 block w-full px-3 py-2 border rounded-md text-sm shadow-sm placeholder-gray-400 
                ${error.ifscCode ? "border-red-500" : "border-gray-300"} 
                focus:outline-none focus:ring-2 focus:ring-ishprimary-500`}
              placeholder="Enter IFSC Code"
              value={newBeneficiary.ifscCode.toUpperCase()}
              onChange={handleInputChange}
            />
            {error.ifscCode && (
              <p className="mt-2 text-sm text-red-500">{error.ifscCode}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Bank Name
            </label>
            <input
              type="text"
              name="bankName"
              className={`mt-1 block w-full px-3 py-2 border rounded-md text-sm shadow-sm placeholder-gray-400 
                ${error.bankName ? "border-red-500" : "border-gray-300"} 
                focus:outline-none focus:ring-2 focus:ring-ishprimary-500`}
              placeholder="Enter Bank Name"
              value={newBeneficiary.bankName}
              onChange={handleInputChange}
            />
            {error.bankName && (
              <p className="mt-2 text-sm text-red-500">{error.bankName}</p>
            )}
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <div className="flex justify-center w-full">
          <button
            className={`bg-ishprimary-500 text-white border border-transparent rounded px-4 py-2 
              ${
                loading
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-ishprimary-600"
              } 
              focus:outline-none`}
            onClick={handleAddBeneficiary}
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Beneficiary"}
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default AddBeneficiaryModal;
