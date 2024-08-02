import React from "react";
import train_ticket from "../../../../public/train_ticket.png";
import bus from "../../../../public/bus.png";
import airplane_ticket from "../../../../public/airplane_ticket.png";
import movies from "../../../../public/movies.png";

const bookingOptions = [
  { src: train_ticket, alt: "Train Ticket", label: "Trains" },
  { src: airplane_ticket, alt: "Airplane Ticket", label: "Flights" },
  { src: bus, alt: "Bus", label: "Bus" },
  { src: movies, alt: "Movies", label: "Movies" },
];

function BookingOperationButton() {
  return (
    <div className="mt-3 bg-ishprimary-100 rounded-lg shadow-md p-4">
      <h1 className="text-2xl text-center font-semibold mb-4">
        BOOKING <span className="text-red-500">Comming Soon...</span>
      </h1>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6  gap-4">
        {bookingOptions.map(({ src, alt, label }) => (
          <div
            key={alt}
            className="flex flex-col items-center cursor-pointer w-full h-24"
          >
            <div className="transition-transform transform hover:scale-110 flex flex-col items-center justify-center w-full h-full">
              <img src={src} alt={alt} className="w-12 h-12 object-contain" />
              <h1 className="font-semibold mt-2 text-center text-sm">
                {label}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookingOperationButton;
