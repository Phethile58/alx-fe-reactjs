import React, { useState } from "react";

export default function AddTodoForm({ onAddTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onAddTodo(input);
    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 mb-4 items-center"
    >
      <input
        type="text"
        placeholder="Enter a new todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 border rounded p-2"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add
      </button>
    </form>
  );
}
