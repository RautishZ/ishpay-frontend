import React from "react";
import { Link } from "react-router-dom";

import train_ticket from "../../static/images/train_ticket.png";
import bus from "../../static/images/bus.png";
import airplane_ticket from "../../static/images/airplane_ticket.png";
import movies from "../../static/images/movies.png";

const bookingOptions = [
  {
    src: train_ticket,
    alt: "Train Ticket",
    label: "Train",
    path: "/tickets/trains",
  },
  {
    src: airplane_ticket,
    alt: "Airplane Ticket",
    label: "Flights",
    path: "/tickets/flights",
  },
  { src: bus, alt: "Bus", label: "Bus", path: "/tickets/bus" },
  { src: movies, alt: "Movies", label: "Movies", path: "/tickets/movies" },
];

function BookingOperationButton() {
  return (
    <div className="mt-3 bg-ishprimary-100 rounded-lg shadow-md p-4">
      <h1 className="text-2xl text-center font-semibold mb-4">
        TICKETS <span className="text-red-500">Coming Soon...</span>
      </h1>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {bookingOptions.map(({ src, alt, label, path }) => (
          <Link
            key={alt}
            to={path} // Use the path from the options
            className="flex flex-col items-center cursor-pointer w-full h-24"
          >
            <div className="transition-transform transform hover:scale-110 flex flex-col items-center justify-center w-full h-full">
              <img
                src={src}
                alt={alt}
                className="w-12 h-12 object-contain"
                loading="eager" // Eager loading
              />
              <h1 className="font-semibold mt-2 text-center text-sm">
                {label}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BookingOperationButton;
