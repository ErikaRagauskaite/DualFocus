import React from "react";
import TimePage from "./components/TimePage";
import UsefulLinks from "./components/UsefulLinks";
import PomodoroTimer from "./components/PomodoroTimer";
import ToDoList from "./components/ToDoList";
const App = () => {
  return (
    <>
      <TimePage />
      <UsefulLinks />
      <PomodoroTimer />
      <ToDoList />
    </>
  );
};

export default App;
