import React from "react";
import { FaPen, FaTrash } from "react-icons/fa";

const Task = ({ task, onToggle, onEdit, onDelete }) => {
  return (
    <li style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      <input type="checkbox" checked={task.completed} onChange={onToggle} />
      <span onClick={onEdit} style={{ cursor: "pointer" }}>
        {task.text}
      </span>
      <button onClick={onDelete}>
        <FaTrash />
      </button>
      <button onClick={onEdit}>
        <FaPen />
      </button>
    </li>
  );
};

export default Task;
