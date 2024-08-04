import React, { useRef, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  addMonths,
  isBefore,
  isAfter,
  addDays,
  parseISO,
  isValid,
} from "date-fns";

// Hardcoded example of holidays for India
const holidays = {
  August: [
    "2024-08-15:Independence Day",
    "2024-08-19:Janmashtami",
    "2024-08-26:Onam",
  ],
  September: ["2024-09-07:Ganesha Chaturthi", "2024-09-15:Teacher's Day"],
  October: [
    "2024-10-02:Gandhi Jayanti",
    "2024-10-11:Dussehra",
    "2024-10-31:Diwali",
  ],
  November: [
    "2024-11-01:All Saints' Day",
    "2024-11-12:Guru Nanak Jayanti",
    "2024-11-15:Deepavali",
    "2024-11-30:Thanksgiving",
  ],
  December: [
    "2024-12-01:World AIDS Day",
    "2024-12-25:Christmas",
    "2024-12-31:New Year's Eve",
  ],
};

// Helper to check if a date string is in ISO format
const isISODate = (dateString) => {
  const parsedDate = parseISO(dateString);
  return isValid(parsedDate);
};

const CalendarModal = ({
  show,
  handleClose,
  selectedDate,
  handleDateChange,
}) => {
  const today = new Date();
  const endDate = addDays(today, 119);
  const minSelectableDate = addDays(today, -1); // One day before today

  // Generate months in the range from today to endDate
  const months = [];
  let currentDate = startOfMonth(today);

  while (currentDate <= endDate) {
    months.push(currentDate);
    currentDate = addMonths(currentDate, 1);
  }

  // Format the selected date for the footer
  const formattedSelectedDate = selectedDate
    ? format(selectedDate, "EEE, d MMM yyyy")
    : "No Date Selected";

  // Ref to store month elements
  const monthRefs = useRef([]);

  // Scroll to selected month
  useEffect(() => {
    if (selectedDate) {
      const selectedMonth = format(selectedDate, "MMMM yyyy");
      const index = months.findIndex((month) =>
        format(month, "MMMM yyyy").includes(selectedMonth)
      );

      if (monthRefs.current[index]) {
        monthRefs.current[index].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [selectedDate, months]);

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header
        closeButton
        className="text-center bg-secondary-100 shadow-lg"
      >
        <Modal.Title className="w-full border-0">
          Select Departure Date
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-4 flex flex-col overflow-y-auto h-[calc(80vh-56px)]">
        <div className="flex flex-col space-y-4">
          {months.map((month, index) => {
            const start = startOfMonth(month);
            const end = endOfMonth(month);
            const days = eachDayOfInterval({ start, end });
            const monthName = format(month, "MMMM");
            const monthHolidays = holidays[monthName] || [];

            // Convert holiday dates to Date objects for comparison
            const holidayDates = monthHolidays.map((entry) => {
              const [date, text] = entry.split(":");
              const dateToParse = isISODate(date)
                ? parseISO(date)
                : new Date(date);
              return { date: dateToParse, text };
            });

            return (
              <div
                key={index}
                ref={(el) => (monthRefs.current[index] = el)}
                className="rounded-lg"
              >
                <h3 className="text-lg font-semibold mb-4 text-center">
                  {format(month, "MMMM yyyy")}
                </h3>
                <div className="grid grid-cols-7 gap-2 text-center font-semibold mb-2">
                  <div className="text-gray-600">Sun</div>
                  <div className="text-gray-600">Mon</div>
                  <div className="text-gray-600">Tue</div>
                  <div className="text-gray-600">Wed</div>
                  <div className="text-gray-600">Thu</div>
                  <div className="text-gray-600">Fri</div>
                  <div className="text-gray-600">Sat</div>
                </div>
                <div className="grid grid-cols-7 gap-2 text-center">
                  {days.map((day) => {
                    const isWithinRange =
                      !isBefore(day, minSelectableDate) &&
                      !isAfter(day, endDate);

                    // Check if the day is a holiday
                    const holiday = holidayDates.find(
                      (holiday) =>
                        format(holiday.date, "yyyy-MM-dd") ===
                        format(day, "yyyy-MM-dd")
                    );

                    return (
                      <div
                        key={day}
                        className={`relative p-2 rounded-lg cursor-pointer ${
                          !isWithinRange
                            ? "text-gray-400"
                            : selectedDate &&
                              day.toDateString() === selectedDate.toDateString()
                            ? "bg-ishprimary-500 text-white"
                            : "bg-secondary-100"
                        }`}
                        onClick={() => isWithinRange && handleDateChange(day)}
                      >
                        {format(day, "d")}
                        {holiday && (
                          <div
                            className="absolute top-0 right-0 w-2.5 h-2.5 bg-ishprimary-500 rounded-full"
                            title={holiday.text}
                          ></div>
                        )}
                      </div>
                    );
                  })}
                </div>
                {monthHolidays.length > 0 && (
                  <div className="mt-4">
                    <ul className="list-disc list-inside">
                      {monthHolidays.map((entry, index) => {
                        const [date, text] = entry.split(":");
                        const dateToDisplay = isISODate(date)
                          ? parseISO(date)
                          : new Date(date);
                        return (
                          <li
                            key={index}
                            className="font-medium text-sm text-ishprimary-500"
                          >
                            {format(dateToDisplay, "d MMM")} - {text}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="text-center w-full font-semibold">
          Departure: {formattedSelectedDate}
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default CalendarModal;
