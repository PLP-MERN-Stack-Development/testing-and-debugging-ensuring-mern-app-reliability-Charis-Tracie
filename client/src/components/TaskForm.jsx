import React, { useState } from "react";
import axios from "axios";

export default function TaskForm({ refresh }) {
  const [title, setTitle] = useState("");

  const addTask = async (e) => {
    e.preventDefault();
    if (!title) return;

    await axios.post("/api/tasks", { title });
    setTitle("");
    refresh();
  };

  return (
    <form onSubmit={addTask}>
      <input
        type="text"
        placeholder="Add task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
