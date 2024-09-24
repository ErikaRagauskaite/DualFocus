// src/components/Task.js
import React, { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import TaskEditForm from "./TaskEditForm"; // Import the new form

const Task = ({ task, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (updatedTask) => {
    onEdit(updatedTask);
    setIsEditing(false);
  };

  return (
    <li style={taskStyles}>
      <span>{task.name}</span>
      <div style={iconContainerStyles}>
        <FaEdit style={iconStyles} onClick={() => setIsEditing(true)} />
        <FaTrash style={iconStyles} onClick={() => onDelete(task.id)} />
      </div>

      {isEditing && (
        <TaskEditForm
          task={task}
          onSave={handleEdit}
          onClose={() => setIsEditing(false)}
        />
      )}
    </li>
  );
};

// Styles
const taskStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px",
  borderBottom: "1px solid #ccc",
};

const iconContainerStyles = {
  display: "flex",
  gap: "10px",
};

const iconStyles = {
  cursor: "pointer",
  fontSize: "1.2rem",
  color: "#007BFF",
  transition: "color 0.3s",
};

export default Task;
