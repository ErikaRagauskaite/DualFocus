import React from "react";

const TimerDisplay = ({ timeLeft, isBreak }) => {
  const formatTime = () => {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    const seconds = String(timeLeft % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div>
      <h1>{isBreak ? "Break Time!" : "Work Time!"}</h1>
      <p>{formatTime()}</p>
    </div>
  );
};

export default TimerDisplay;
