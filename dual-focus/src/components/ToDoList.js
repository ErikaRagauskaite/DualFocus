// src/components/ToDoList.js
import React, { useState, useEffect } from "react";
import Task from "./Task"; // Import the Task component
import ConfirmationModal from "./ConfirmationModal"; // Import the ConfirmationModal component

const ToDoList = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [taskInput, setTaskInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const addTask = () => {
    if (taskInput.trim()) {
      if (editIndex !== null) {
        const updatedTasks = tasks.map((task, index) =>
          index === editIndex ? { ...task, text: taskInput } : task
        );
        setTasks(updatedTasks);
        setEditIndex(null);
      } else {
        setTasks([...tasks, { text: taskInput, completed: false }]);
      }
      setTaskInput("");
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const startEditing = (index) => {
    setTaskInput(tasks[index].text);
    setEditIndex(index);
  };

  const confirmDeleteTask = (index) => {
    setTaskToDelete(index);
    setShowModal(true);
  };

  const deleteTask = () => {
    const newTasks = tasks.filter((_, i) => i !== taskToDelete);
    setTasks(newTasks);
    setShowModal(false);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <div>
        <h1>To-Do List</h1>
        <input
          type="text"
          value={taskInput}
          onChange={handleInputChange}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add Task</button>
        <ul>
          {tasks.map((task, index) => (
            <Task
              key={index}
              task={task}
              onToggle={() => toggleTaskCompletion(index)}
              onEdit={() => startEditing(index)}
              onDelete={() => confirmDeleteTask(index)}
            />
          ))}
        </ul>
      </div>

      <ConfirmationModal
        show={showModal}
        onConfirm={deleteTask}
        onCancel={() => setShowModal(false)}
        message="Are you sure you want to delete this task?"
      />
    </>
  );
};

export default ToDoList;
