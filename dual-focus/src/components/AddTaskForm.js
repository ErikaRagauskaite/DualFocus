import React, { useState } from "react";

const AddTaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState("");
  const [category, setCategory] = useState("Personal");
  const [priority, setPriority] = useState("low");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName) {
      onAddTask({
        name: taskName,
        category,
        priority,
        completed: false,
        createdAt: new Date(),
      });
      setTaskName("");
      setCategory("Personal");
      setPriority("low");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        required
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Personal">Personal</option>
        <option value="Work">Work</option>
        <option value="Other">Other</option>
      </select>
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
