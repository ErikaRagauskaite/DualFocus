import React from "react";
import { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

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
    const newTask = tasks.filter((_, i) => i !== index);
    setTasks(newTask);
  };

  const startEditing = (index) => {
    setTaskInput(tasks[index].text);
    setEditIndex(index);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

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
            <li
              key={index}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(index)}
              />
              {task.text}
              <button onClick={() => startEditing(index)}>Edit</button>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ToDoList;
