import React from "react";
import { Modal } from "react-bootstrap";

import credit_card from "../../../static/images/credit_card.png";
import net_banking from "../../../static/images/net_banking.png";
import wallet_payment from "../../../static/images/wallet_payment.png";
import pay_later from "../../../static/images/pay_later.png";
import EMI from "../../../static/images/EMI.png";

const PaymentMode = ({
  selectedMethod,
  setSelectedMethod,
  setSelectedMethodImage,
  showPaymentModePopup,
  setshowPaymentModePopup,
}) => {
  const handleMethodChange = (method) => {
    let image;
    switch (method) {
      case "Card":
        image = credit_card;
        break;
      case "NetBanking":
        image = net_banking;
        break;
      case "Wallet":
        image = wallet_payment;
        break;
      case "PayLater":
        image = pay_later;
        break;
      case "EMI":
        image = EMI;
        break;
      default:
        image = null;
    }

    setSelectedMethod(method);
    setSelectedMethodImage(image);
    setshowPaymentModePopup(false);
  };

  const closePaymentModePopup = () => setshowPaymentModePopup(false);

  return (
    <Modal show={showPaymentModePopup} onHide={closePaymentModePopup}>
      <Modal.Header closeButton>
        <Modal.Title className="text-center w-full">
          Select Payment Mode
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="p-3 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {["Card", "NetBanking", "Wallet", "PayLater", "EMI"].map(
            (method, index) => (
              <div
                key={index}
                className={`p-2 flex flex-col justify-center items-center cursor-pointer ${
                  selectedMethod === method
                    ? "bg-gray-400 shadow-lg rounded-lg"
                    : ""
                }`}
                onClick={() => handleMethodChange(method)}
              >
                <div className="w-16 h-16">
                  <img
                    src={
                      method === "Card"
                        ? credit_card
                        : method === "NetBanking"
                        ? net_banking
                        : method === "Wallet"
                        ? wallet_payment
                        : method === "PayLater"
                        ? pay_later
                        : EMI
                    }
                    alt={method}
                    className="w-full h-full object-contain"
                    loading="eager" // Eager loading
                  />
                </div>
                <h2 className="text-center mt-2 font-semibold">{method}</h2>
              </div>
            )
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default PaymentMode;
