import React from "react";
import { useNavigate } from "react-router-dom";
import TimePage from "./components/TimePage";
import UsefulLinks from "./components/UsefulLinks";

const HomePage = () => {
  const HomePage = () => {
    const navigate = useNavigate();

    const goToPomodoro = () => {
      navigate("/time"); // Programmatically navigate to PomodoroPage
    };

    const goToToDoList = () => {
      navigate("/links"); // Programmatically navigate to ToDoPage
    };
    return (
      <>
        <button onClick={goToPomodoro}>Go to Pomodoro Timer</button>
        <button onClick={goToToDoList}>Go to To-Do List</button>
        <TimePage />
        <UsefulLinks />
      </>
    );
  };
};
export default HomePage;
