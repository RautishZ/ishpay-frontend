import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import API from "../../services/API";

function IdentityVerification() {
  const [fullName, setFullName] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessages, setErrorMessages] = useState({
    fullName: "",
    panNumber: "",
    aadhaarNumber: "",
    dateOfBirth: "",
    mobileNumber: "",
    acceptedTerms: "",
    selfie: "",
    aadhaarFile: "",
    panFile: "",
  });
  const [success, setSuccess] = useState("");
  const [selfie, setSelfie] = useState(null);
  const [aadhaarFile, setAadhaarFile] = useState(null);
  const [panFile, setPanFile] = useState(null);

  const webcamRef = useRef(null);

  const handleFullNameChange = (event) => setFullName(event.target.value);
  const handlePanNumberChange = (event) => setPanNumber(event.target.value);
  const handleAadhaarNumberChange = (event) =>
    setAadhaarNumber(event.target.value);
  const handleDateOfBirthChange = (event) => setDateOfBirth(event.target.value);
  const handleMobileNumberChange = (event) =>
    setMobileNumber(event.target.value);
  const handleTermsChange = (event) => setAcceptedTerms(event.target.checked);
  const handleAadhaarFileChange = (event) =>
    setAadhaarFile(event.target.files[0]);
  const handlePanFileChange = (event) => setPanFile(event.target.files[0]);

  const handleCaptureSelfie = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setSelfie(imageSrc);
  };

  const handleRetakeSelfie = () => {
    setSelfie(null);
  };

  const handleSubmit = async () => {
    // Reset error messages
    setErrorMessages({
      fullName: "",
      panNumber: "",
      aadhaarNumber: "",
      dateOfBirth: "",
      mobileNumber: "",
      acceptedTerms: "",
      selfie: "",
      aadhaarFile: "",
      panFile: "",
    });

    let hasError = false;
    const newErrorMessages = {};

    // Validation
    if (!fullName) {
      newErrorMessages.fullName = "Full name is required.";
      hasError = true;
    }
    if (!panNumber) {
      newErrorMessages.panNumber = "PAN Number is required.";
      hasError = true;
    }
    if (!aadhaarNumber) {
      newErrorMessages.aadhaarNumber = "Aadhaar Number is required.";
      hasError = true;
    }
    if (!dateOfBirth) {
      newErrorMessages.dateOfBirth = "Date of Birth is required.";
      hasError = true;
    }
    if (!mobileNumber) {
      newErrorMessages.mobileNumber = "Mobile Number is required.";
      hasError = true;
    }
    if (!acceptedTerms) {
      newErrorMessages.acceptedTerms =
        "You must accept the terms and conditions.";
      hasError = true;
    }
    if (!selfie) {
      newErrorMessages.selfie = "Selfie is required.";
      hasError = true;
    }
    if (!aadhaarFile) {
      newErrorMessages.aadhaarFile = "Aadhaar File is required.";
      hasError = true;
    }
    if (!panFile) {
      newErrorMessages.panFile = "PAN File is required.";
      hasError = true;
    }

    if (hasError) {
      setErrorMessages(newErrorMessages);
      return;
    }

    setLoading(true);
    setSuccess("");

    try {
      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("panNumber", panNumber);
      formData.append("aadhaarNumber", aadhaarNumber);
      formData.append("dateOfBirth", dateOfBirth);
      formData.append("mobileNumber", mobileNumber);

      // Convert selfie base64 to Blob
      if (selfie) {
        const response = await fetch(selfie);
        const blob = await response.blob();
        formData.append("selfie", blob, "selfie.jpg");
      }
      if (aadhaarFile) {
        formData.append("idFile", aadhaarFile);
      }
      if (panFile) {
        formData.append("addressFile", panFile);
      }

      // Use API instance for request
      const response = await API.post("/verify-identity", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        setSuccess("Identity verification successful!");
      } else {
        throw new Error("Unexpected response status");
      }
    } catch (err) {
      setErrorMessages({
        ...errorMessages,
        global:
          err.response?.data?.message ||
          "There was an error submitting your information.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center  py-8 px-3">
      <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
        <h1 className="text-2xl font-bold text-gray-800">
          Identity Verification
        </h1>
        <p className="text-gray-600 mb-4 text-center">
          Please provide your ID cards and fill out the required details to
          complete your identity verification.
        </p>

        <div className="w-full mb-4">
          <label className="block text-center text-2xl font-bold">
            Take a Selfie
          </label>
          {selfie ? (
            <div className="flex flex-col items-center justify-center p-2">
              <div className="w-48 h-48 overflow-hidden rounded-full">
                <img
                  src={selfie}
                  alt="Selfie"
                  className="object-cover w-full h-full transition-transform duration-300 ease-in-out"
                />
              </div>
              <button
                onClick={handleRetakeSelfie}
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded w-full mt-2"
              >
                Retake Selfie
              </button>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center p-2">
              <div className="relative w-48 h-48 overflow-hidden rounded-full">
                <Webcam
                  audio={false}
                  height={300}
                  width={300}
                  screenshotFormat="image/jpeg"
                  videoConstraints={{ facingMode: "user" }}
                  ref={webcamRef}
                  className="absolute inset-0 object-cover w-full h-full"
                />
              </div>
              <button
                onClick={handleCaptureSelfie}
                className="bg-ishprimary hover:bg-ishprimary-600 text-white font-bold py-2 px-4 rounded w-full mt-2"
              >
                Capture Selfie
              </button>
            </div>
          )}
          {errorMessages.selfie && (
            <div className="text-red-600">{errorMessages.selfie}</div>
          )}
        </div>

        <div className="w-full mb-4">
          <label
            htmlFor="fullName"
            className="block text-gray-700 required-label"
          >
            Full Name (as per PAN Card)
            <span className="text-red-600 font-bold"> *</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={fullName}
            onChange={handleFullNameChange}
            className="mt-1 border border-gray-300 rounded p-2 w-full"
            placeholder="Enter your full name"
          />
          {errorMessages.fullName && (
            <div className="text-red-600 mt-1">{errorMessages.fullName}</div>
          )}
        </div>

        <div className="w-full mb-4">
          <label
            htmlFor="panNumber"
            className="block text-gray-700 required-label"
          >
            Enter PAN Number <span className="text-red-600 font-bold"> *</span>
          </label>
          <input
            type="text"
            id="panNumber"
            name="panNumber"
            value={panNumber}
            onChange={handlePanNumberChange}
            className="mt-1 border border-gray-300 rounded p-2 w-full"
            placeholder="Enter your PAN Number"
          />
          {errorMessages.panNumber && (
            <div className="text-red-600">{errorMessages.panNumber}</div>
          )}
        </div>

        <div className="w-full mb-4">
          <label
            htmlFor="panFile"
            className="block text-gray-700 required-label"
          >
            Upload PAN Card <span className="text-red-600 font-bold"> *</span>
          </label>
          <input
            type="file"
            id="panFile"
            name="panFile"
            onChange={handlePanFileChange}
            className="mt-1 border border-gray-300 rounded p-2 w-full"
          />
          {errorMessages.panFile && (
            <div className="text-red-600">{errorMessages.panFile}</div>
          )}
        </div>

        <div className="w-full mb-4">
          <label
            htmlFor="dateOfBirth"
            className="block text-gray-700 required-label"
          >
            Date of Birth <span className="text-red-600 font-bold"> *</span>
          </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={handleDateOfBirthChange}
            className="mt-1 border border-gray-300 rounded p-2 w-full"
          />
          {errorMessages.dateOfBirth && (
            <div className="text-red-600">{errorMessages.dateOfBirth}</div>
          )}
        </div>

        <div className="w-full mb-4">
          <label
            htmlFor="idFile"
            className="block text-gray-700 required-label"
          >
            Upload Aadhaar Card{" "}
            <span className="text-red-600 font-bold"> *</span>
          </label>
          <input
            type="file"
            id="aadhaarFile"
            name="aadhaarFile"
            onChange={handleAadhaarFileChange}
            className="mt-1 border border-gray-300 rounded p-2 w-full"
          />
          {errorMessages.aadhaarFile && (
            <div className="text-red-600">{errorMessages.aadhaarFile}</div>
          )}
        </div>

        <div className="w-full mb-4">
          <label
            htmlFor="aadhaarNumber"
            className="block text-gray-700 required-label"
          >
            Enter Aadhaar Number{" "}
            <span className="text-red-600 font-bold"> *</span>
          </label>
          <input
            type="text"
            id="aadhaarNumber"
            name="aadhaarNumber"
            value={aadhaarNumber}
            onChange={handleAadhaarNumberChange}
            className="mt-1 border border-gray-300 rounded p-2 w-full"
            placeholder="Enter your Aadhaar Number"
          />
          {errorMessages.aadhaarNumber && (
            <div className="text-red-600">{errorMessages.aadhaarNumber}</div>
          )}
        </div>

        <div className="w-full mb-4">
          <label
            htmlFor="mobileNumber"
            className="block text-gray-700 required-label"
          >
            Mobile Number <span className="text-red-600 font-bold"> *</span>
          </label>
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            value={mobileNumber}
            onChange={handleMobileNumberChange}
            className="mt-1 border border-gray-300 rounded p-2 w-full"
            placeholder="Enter your mobile number"
          />
          {errorMessages.mobileNumber && (
            <div className="text-red-600">{errorMessages.mobileNumber}</div>
          )}
        </div>

        <div className="w-full mb-4">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={acceptedTerms}
            onChange={handleTermsChange}
            className="mr-2"
          />
          <label htmlFor="terms" className="text-gray-700">
            I accept the{" "}
            <a href="/terms-and-conditions" className="text-blue-500 underline">
              Terms and Conditions
            </a>
          </label>
          {errorMessages.acceptedTerms && (
            <div className="text-red-600">{errorMessages.acceptedTerms}</div>
          )}
        </div>

        <p className="text-gray-600 mb-4 text-center">
          We need this information to verify your identity and comply with
          Indian regulations. This process helps us protect user security and
          maintain the integrity of our payment platform.
        </p>

        <button
          onClick={handleSubmit}
          className={`bg-ishprimary hover:bg-ishprimary-600 text-white font-bold py-2 px-4 rounded w-full ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>

        {success && <div className="text-green-600 mt-4">{success}</div>}
        {errorMessages.global && (
          <div className="text-red-600 mt-4">{errorMessages.global}</div>
        )}
      </div>
    </div>
  );
}

export default IdentityVerification;
