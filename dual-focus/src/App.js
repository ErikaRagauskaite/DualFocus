import React from "react";
import TimePage from "./components/TimePage";
import UsefulLinks from "./components/UsefulLinks";
import PomodoroTimer from "./components/PomodoroTimer";

const App = () => {
  return (
    <div>
      <TimePage />
      <UsefulLinks />
      <PomodoroTimer />
    </div>
  );
};

export default App;
