import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdOutlineExpandMore } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

function TransactionsPage() {
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // Default transactions data
  const transactions = [
    {
      id: 1,
      date: "2024-07-10",
      time: "14:35",
      amount: "50.00",
      status: "Success",
      paymentMethod: "Credit Card",
      transactionId: "TXN123456",
      type: "Purchase",
    },
    {
      id: 2,
      date: "2024-07-12",
      time: "09:20",
      amount: "75.00",
      status: "Failed",
      paymentMethod: "Bank Transfer",
      transactionId: "TXN123457",
      type: "Bill Payment",
    },
    {
      id: 3,
      date: "2024-07-13",
      time: "11:15",
      amount: "100.00",
      status: "Pending",
      paymentMethod: "Bank Transfer",
      transactionId: "TXN123458",
      type: "Subscription",
    },
    {
      id: 4,
      date: "2024-07-14",
      time: "16:45",
      amount: "200.00",
      status: "On Hold",
      paymentMethod: "Credit Card",
      transactionId: "TXN123459",
      type: "Office Supplies",
    },
    // Add more transactions as needed
  ];

  const handleClose = () => {
    setShowModal(false);
    setSelectedTransaction(null);
  };

  const handleShow = (transaction) => {
    setSelectedTransaction(transaction);
    setShowModal(true);
  };

  const getStatusTextColor = (status) => {
    switch (status) {
      case "Success":
        return "text-success";
      case "Failed":
        return "text-danger";
      case "Pending":
        return "text-warning";
      case "On Hold":
        return "text-primary";
      default:
        return "text-dark";
    }
  };

  const getStatusBorderColor = (status) => {
    switch (status) {
      case "Success":
        return "border-success";
      case "Failed":
        return "border-danger";
      case "Pending":
        return "border-warning";
      case "On Hold":
        return "border-primary";
      default:
        return "border-dark";
    }
  };

  const getAmountTextColor = (status) => {
    return getStatusBorderColor(status).replace("border-", "text-");
  };

  const handleViewMore = () => {
    navigate("/dashboard/transactions");
  };

  return (
    <div className="">
      <div className=" text-black w-full flex justify-center">
        <div className="w-full flex-col rounded-lg">
          <div className="text-2xl font-semibold text-center py-3 bg-secondary-200 rounded-t-lg">
            Transaction History
          </div>
          <div className="p-2 sm:p-4">
            {transactions.map((transaction) => (
              <div
                key={transaction.transactionId}
                className={`bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 cursor-pointer border-t-4 ${getStatusBorderColor(
                  transaction.status
                )} mb-3`}
                onClick={() => handleShow(transaction)}
              >
                <div className="p-3">
                  <div className="flex justify-between">
                    <div className="text-lg font-semibold mb-1 text-center">
                      Transaction ID: {transaction.transactionId}
                    </div>
                    <div
                      className={`text-lg font-semibold mb-1 text-center ${getAmountTextColor(
                        transaction.status
                      )}`}
                    >
                      {transaction.amount}
                    </div>
                  </div>

                  <div className="mb-1">
                    Date: {transaction.date} at {transaction.time}
                  </div>

                  <div className="mb-1">
                    Payment Through: {transaction.paymentMethod}
                  </div>
                  <div>
                    <div className="mb-1">Payment For: {transaction.type}</div>
                    Status:{" "}
                    <span
                      className={`inline-block rounded-full font-bold uppercase ${getStatusTextColor(
                        transaction.status
                      )}`}
                    >
                      {transaction.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Floating Button */}
          <div
            onClick={handleViewMore}
            className="text-ishprimary text-center text-xl pb-2 text-semibold cursor-pointer flex items-center justify-center mb-4"
          >
            <MdOutlineExpandMore className="text-3xl" />
            <div className="ml-2">
              <Link to="/dashboard/transactions">View All</Link>
            </div>
          </div>

          {selectedTransaction && (
            <Modal show={showModal} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Transaction Details</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>
                        <strong>Transaction ID:</strong>
                      </td>
                      <td>{selectedTransaction.transactionId}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Date:</strong>
                      </td>
                      <td>{selectedTransaction.date}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Time:</strong>
                      </td>
                      <td>{selectedTransaction.time}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Amount:</strong>
                      </td>
                      <td
                        className={getAmountTextColor(
                          selectedTransaction.status
                        )}
                      >
                        {selectedTransaction.amount}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Status:</strong>
                      </td>
                      <td>
                        <span
                          className={`${getStatusTextColor(
                            selectedTransaction.status
                          )} font-bold`}
                        >
                          {selectedTransaction.status}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Type:</strong>
                      </td>
                      <td>{selectedTransaction.type}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Payment Method:</strong>
                      </td>
                      <td>{selectedTransaction.paymentMethod}</td>
                    </tr>
                  </tbody>
                </table>
              </Modal.Body>
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
}

export default TransactionsPage;
