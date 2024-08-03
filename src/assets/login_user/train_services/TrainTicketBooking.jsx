import React, { useState } from "react";
import Select from "react-select";
import { format } from "date-fns";
import CalendarModal from "./CalendarModal"; // Import the CalendarModal component

const options = [
  { value: "ndls", label: "New Delhi (NDLS)" },
  { value: "cstm", label: "Chhatrapati Shivaji Terminus (CSTM)" },
  { value: "hwh", label: "Howrah Junction (HWH)" },
  { value: "mas", label: "Chennai Central (MAS)" },
  { value: "sbc", label: "Bangalore City (SBC)" },
  { value: "bct", label: "Mumbai Central (BCT)" },
  { value: "sec", label: "Secunderabad Junction (SC)" },
  { value: "pune", label: "Pune Junction (PUNE)" },
  { value: "adi", label: "Ahmedabad Junction (ADI)" },
  { value: "bza", label: "Vijayawada Junction (BZA)" },
  // Add more options as needed
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

function TrainTicketBooking() {
  const [formData, setFormData] = useState({
    from: null,
    to: null,
    date: null,
    class: "economy",
  });

  const [showModal, setShowModal] = useState(false);

  const handleSelectChange = (selectedOption, { name }) => {
    setFormData({ ...formData, [name]: selectedOption });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
    setShowModal(false); // Close modal after date selection
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mt-8 font-semibold">
      <h1 className="text-3xl font-bold p-4 text-center bg-secondary-100 rounded-t-lg">
        Search Train
      </h1>
      <div className="mx-auto p-6 bg-white rounded-b-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="from" className="block text-xl text-gray-700">
                From
              </label>
              <Select
                id="from"
                name="from"
                options={options}
                value={formData.from}
                onChange={handleSelectChange}
                className="mt-1"
                styles={customStyles}
              />
            </div>
            <div>
              <label htmlFor="to" className="block text-xl text-gray-700">
                To
              </label>
              <Select
                id="to"
                name="to"
                options={options}
                value={formData.to}
                onChange={handleSelectChange}
                className="mt-1"
                styles={customStyles}
              />
            </div>
            <div>
              <label htmlFor="date" className="block text-xl text-gray-700">
                Date
              </label>
              <input
                id="date"
                type="text"
                value={
                  formData.date ? format(formData.date, "EEE, d MMM yyyy") : ""
                }
                onClick={() => setShowModal(true)}
                readOnly
                className="mt-1 p-3 border-1 border-ishprimary-300 hover:border-ishprimary-500 outline-none rounded-md w-full"
                placeholder="Select Date"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-ishprimary-500 text-white p-2 rounded-md hover:bg-ishprimary-600"
          >
            Search
          </button>
        </form>
      </div>

      {/* Include the CalendarModal component */}
      <CalendarModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        selectedDate={formData.date}
        handleDateChange={handleDateChange}
      />
    </div>
  );
}

export default TrainTicketBooking;
