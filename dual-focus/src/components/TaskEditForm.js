// src/components/TaskEditForm.js
import React, { useState } from "react";

const TaskEditForm = ({ task, onSave, onClose }) => {
  const [taskName, setTaskName] = useState(task.name);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...task, name: taskName }); // Send updated task back
    onClose(); // Close the popup
  };

  return (
    <div style={overlayStyles}>
      <div style={modalStyles}>
        <h2>Edit Task</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
          />
          <button type="submit">Save</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

// Styles
const overlayStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalStyles = {
  background: "#fff",
  padding: "20px",
  borderRadius: "5px",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
};

export default TaskEditForm;
