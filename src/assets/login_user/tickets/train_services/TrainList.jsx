import React, { useState, useEffect } from "react";

// Dummy data
const dummyTrains = [
  {
    id: 1,
    name: "Express Train 101",
    departureTime: "2024-08-15 08:00",
    arrivalTime: "2024-08-15 12:00",
    classes: [
      { name: "Sleeper", availableTickets: 20 },
      { name: "AC", availableTickets: 5 },
    ],
  },
  {
    id: 2,
    name: "Superfast Train 202",
    departureTime: "2024-08-15 14:00",
    arrivalTime: "2024-08-15 18:00",
    classes: [
      { name: "Sleeper", availableTickets: 0 },
      { name: "AC", availableTickets: 15 },
    ],
  },
  {
    id: 3,
    name: "Local Train 303",
    departureTime: "2024-08-16 09:00",
    arrivalTime: "2024-08-16 11:00",
    classes: [
      { name: "Sleeper", availableTickets: 10 },
      { name: "AC", availableTickets: 0 },
    ],
  },
];

const TrainList = () => {
  const [trains, setTrains] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedClass, setSelectedClass] = useState("AC"); // Default selected class

  useEffect(() => {
    const fetchTrains = () => {
      try {
        setLoading(true);
        // Use dummy data instead of fetching from an API
        const availableTrains = dummyTrains.filter((train) =>
          train.classes.some(
            (cls) => cls.name === selectedClass && cls.availableTickets > 0
          )
        );
        setTrains(availableTrains);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrains();
  }, [selectedClass]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading trains: {error.message}</div>;
  if (trains.length === 0)
    return <div>No trains available for the selected class.</div>;

  return (
    <div>
      <h2>Available Trains for {selectedClass}</h2>
      <select
        value={selectedClass}
        onChange={(e) => setSelectedClass(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded"
      >
        <option value="Sleeper">Sleeper</option>
        <option value="AC">AC</option>
      </select>
      <ul>
        {trains.map((train) => (
          <li
            key={train.id}
            className="mb-4 p-2 border border-gray-300 rounded"
          >
            <h3 className="text-lg font-semibold">{train.name}</h3>
            <p>
              <strong>Departure:</strong> {train.departureTime}
            </p>
            <p>
              <strong>Arrival:</strong> {train.arrivalTime}
            </p>
            <p>
              <strong>Available Tickets:</strong>{" "}
              {
                train.classes.find((cls) => cls.name === selectedClass)
                  .availableTickets
              }
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainList;
