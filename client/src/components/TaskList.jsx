import React from "react";
import axios from "axios";

export default function TaskList({ tasks, refresh }) {
  const toggleTask = async (task) => {
    await axios.put(`/api/tasks/${task._id}`, {
      completed: !task.completed
    });
    refresh();
  };

  const deleteTask = async (id) => {
    await axios.delete(`/api/tasks/${id}`);
    refresh();
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id} style={{ marginBottom: "10px" }}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task)}
          />
          {task.title}
          <button
            onClick={() => deleteTask(task._id)}
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
