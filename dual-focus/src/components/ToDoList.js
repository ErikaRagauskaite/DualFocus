// src/components/ToDoList.js
import React, { useState } from "react";
import Task from "./Task";
import AddTaskForm from "./AddTaskForm"; // Assuming you have a form to add new tasks

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Sample Task 1" },
    { id: 2, name: "Sample Task 2" },
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const editTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <AddTaskForm onAddTask={addTask} />
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onEdit={editTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
