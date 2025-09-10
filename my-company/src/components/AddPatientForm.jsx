import React, { useState } from "react";

export default function AddPatientForm({ onAddPatient }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [reason, setReason] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !age || !reason || !time) {
      alert("Please fill in all fields");
      return;
    }

    const newPatient = {
      name,
      age: parseInt(age),
      reason,
      time,
    };

    onAddPatient(newPatient);

    // Reset form
    setName("");
    setAge("");
    setReason("");
    setTime("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Add Patient</h2>

      <input
        type="text"
        placeholder="Patient Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
      />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
      />

      <input
        type="text"
        placeholder="Reason"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
      />

      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Add to Queue
      </button>
    </form>
  );
}
