// src/components/QueueList.jsx
import React from "react";

export default function QueueList({ patients, onRemovePatient }) {
const timePerPatient = 15; 

  if (patients.length === 0) {
    return (
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md mt-6 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Patient Queue</h2>
        <p className="text-gray-500">No patients in queue.</p>
      </div>
    );
  }

  // ✅ First patient is the current one
  const currentPatient = patients[0];
  const remainingPatients = patients.slice(1);

  const calculateFinishTime = (startTime) => {
    if (!startTime) return "N/A";
    const [hours, minutes] = startTime.split(":").map(Number);
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes + timePerPatient);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };
  
  return (
    <div className="w-full max-w-md mt-6 space-y-6">
      {/* Now Serving Card */}
      <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded-xl shadow">
        <h2 className="text-lg font-semibold text-green-700">
          Now Serving: Ticket #{currentPatient.queueNumber}
        </h2>
        <p className="text-gray-700 font-medium">{currentPatient.name}</p>
        <p className="text-sm text-gray-500">
          Age: {currentPatient.age} | Reason: {currentPatient.reason}
        </p>
        <button
          onClick={() => onRemovePatient(currentPatient.id)}
          className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Mark as Done ✅
        </button>
      </div>

      {/* Remaining Queue */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Waiting Queue</h2>
        {remainingPatients.length === 0 ? (
          <p className="text-gray-500">No more patients waiting.</p>
        ) : (
          <ul className="space-y-4">
            {remainingPatients.map((patient, index) => (
              <li
                key={patient.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <p className="font-semibold text-gray-700">
                    Ticket #{patient.queueNumber} – {patient.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    Age: {patient.age} | Reason: {patient.reason} | Estimated 
                    Wait:~{(index + 1) * timePerPatient} mins
                  </p>
                </div>
                <button
                  onClick={() => onRemovePatient(patient.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
