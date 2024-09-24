// AddTaskModal.js
import React, { useState } from "react";

const modalStyles = {
  display: "flex",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalContentStyles = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "5px",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
};

const closeButtonStyles = {
  cursor: "pointer",
  fontSize: "1.5rem",
  background: "none",
  border: "none",
};

const AddTaskModal = ({ isOpen, toggleModal, addTask }) => {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      addTask({ name: taskName }); // Only sending the task name
      setTaskName("");
      toggleModal();
    }
  };

  if (!isOpen) return null;

  return (
    <div style={modalStyles}>
      <div style={modalContentStyles}>
        <button style={closeButtonStyles} onClick={toggleModal}>
          &times;
        </button>
        <h2>Add New Task</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Task Name:
            <input
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              required
            />
          </label>
          <button type="submit">Add Task</button>
        </form>
      </div>
    </div>
  );
};

export default AddTaskModal;
