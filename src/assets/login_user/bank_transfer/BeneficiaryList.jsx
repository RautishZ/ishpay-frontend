import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import AddBeneficiaryModal from "./AddBeneficiaryModal";

const BeneficiaryList = ({
  beneficiaries,
  setSelectedAccountTo,
  showBeneficiaryPopup,
  setBeneficiaryShowPopup,
}) => {
  const [currentBeneficiary, setCurrentBeneficiary] = useState(null);
  const [showAddBeneficiaryModal, setShowAddBeneficiaryModal] = useState(false);

  const handleAccountChange = (account) => {
    setSelectedAccountTo(account);
    setBeneficiaryShowPopup(false);
  };

  const handleAddBeneficiary = (newBeneficiary) => {
    beneficiaries.push(newBeneficiary);
  };

  return (
    <>
      <Modal
        show={showBeneficiaryPopup}
        onHide={() => setBeneficiaryShowPopup(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-center w-full">
            Select Beneficiary Account
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="max-h-[70vh] overflow-y-auto">
          <div className="h-full p-2">
            {beneficiaries.length === 0 ? (
              <div className="text-center text-gray-500">
                No beneficiaries available.
              </div>
            ) : (
              beneficiaries.map((beneficiary) => (
                <div
                  key={beneficiary.accountNumber}
                  className={`rounded-lg p-2 flex flex-col text-black mb-2 cursor-pointer transition-colors duration-100 border-2 ${
                    beneficiary.accountNumber === currentBeneficiary
                      ? "bg-gray-400 text-black border-black"
                      : "bg-gray-100 border-black"
                  }`}
                  onClick={() => {
                    setCurrentBeneficiary(beneficiary.accountNumber);
                    handleAccountChange(beneficiary);
                  }}
                >
                  <div className="font-semibold">
                    {beneficiary.beneficiaryName}
                  </div>
                  <div>Ac No: {beneficiary.accountNumber}</div>
                  <div>IFSC: {(beneficiary.ifscCode || "").toUpperCase()}</div>
                  <div>{beneficiary.bankName}</div>
                </div>
              ))
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="flex justify-center items-center w-full">
            <Button
              onClick={() => {
                setBeneficiaryShowPopup(false);
                setShowAddBeneficiaryModal(true);
              }}
              className="btn btn-secondary bg-ishprimary-500 hover:bg-ishprimary-600 border-0"
            >
              Add New Beneficiary
            </Button>
          </div>
        </Modal.Footer>
      </Modal>

      <AddBeneficiaryModal
        show={showAddBeneficiaryModal}
        onHide={() => setShowAddBeneficiaryModal(false)}
        onAddBeneficiary={handleAddBeneficiary}
      />
    </>
  );
};

export default BeneficiaryList;
