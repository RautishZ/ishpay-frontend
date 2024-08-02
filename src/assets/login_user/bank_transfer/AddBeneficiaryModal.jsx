import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
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
  const [error, setError] = useState(null);

  const handleAddBeneficiary = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await API.post("/beneficiary", newBeneficiary);
      setNewBeneficiary({
        beneficiaryName: "",
        accountNumber: "",
        ifscCode: "",
        bankName: "",
      });
      toast.success("Beneficiary added successfully.");
      console.log(response.data);
      onAddBeneficiary(response.data); // Pass the newly added beneficiary to parent
      onHide();
    } catch (err) {
      console.log(err);
      setError("Failed to add beneficiary. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title className="text-center w-full">
          Add New Beneficiary
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="beneficiaryName">
            <Form.Label>Beneficiary Name</Form.Label>
            <Form.Control
              type="text"
              value={newBeneficiary.beneficiaryName}
              onChange={(e) =>
                setNewBeneficiary({
                  ...newBeneficiary,
                  beneficiaryName: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group controlId="accountNumber">
            <Form.Label>Account Number</Form.Label>
            <Form.Control
              type="text"
              value={newBeneficiary.accountNumber}
              onChange={(e) =>
                setNewBeneficiary({
                  ...newBeneficiary,
                  accountNumber: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group controlId="ifscCode">
            <Form.Label>IFSC Code</Form.Label>
            <Form.Control
              type="text"
              value={newBeneficiary.ifscCode}
              onChange={(e) =>
                setNewBeneficiary({
                  ...newBeneficiary,
                  ifscCode: e.target.value.toUpperCase(),
                })
              }
            />
          </Form.Group>
          <Form.Group controlId="bankName">
            <Form.Label>Bank Name</Form.Label>
            <Form.Control
              type="text"
              value={newBeneficiary.bankName}
              onChange={(e) =>
                setNewBeneficiary({
                  ...newBeneficiary,
                  bankName: e.target.value,
                })
              }
            />
          </Form.Group>
        </Form>
        {error && <div className="text-red-500 mt-2">{error}</div>}
      </Modal.Body>
      <Modal.Footer>
        <div className="w-full flex flex-row justify-around">
          <Button variant="secondary" onClick={onHide}>
            Cancel
          </Button>
          <Button
            className="bg-ishprimary-500 border-0 hover:bg-ishprimary-600"
            onClick={handleAddBeneficiary}
            disabled={loading}
          >
            {loading ? "Adding..." : "Submit"}
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default AddBeneficiaryModal;
