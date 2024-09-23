import React from "react";
import { useState, useEffect } from "react";

const PomodoroTimer = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let timerId;

    if (isActive && timeLeft > 0) {
      timerId = setInterval((prevTime) => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsBreak(!isBreak);
      setTimeLeft(isBreak ? 25 * 60 : 5 * 60);
    }

    return () => clearInterval(timerId);
  }, [isActive, timeLeft, isBreak]);

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsBreak(false);
    setTimeLeft(25 * 60);
  };

  const formatTime = () => {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    const seconds = String(timeLeft % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <>
      <div>
        <h1>{isBreak ? "Break Time!" : "Work Time!"}</h1>
        <p>{formatTime()}</p>
        <button onClick={startTimer} disabled={isActive}>
          Start
        </button>
        <button onClick={pauseTimer} disabled={!isActive}>
          Pause
        </button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </>
  );
};

export default PomodoroTimer;
