import React, { useState, useEffect } from "react";
import TimerDisplay from "./TimerDisplay";
import PomoControls from "./PomoControls"; // Updated import
import SettingsModal from "./SettingsModal";

const PomodoroTimer = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // Default work duration in seconds
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [workDuration, setWorkDuration] = useState(25); // Work duration in minutes
  const [breakDuration, setBreakDuration] = useState(5); // Break duration in minutes
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    let timerId;

    if (isActive && timeLeft > 0) {
      timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsBreak(!isBreak);
      setTimeLeft(isBreak ? workDuration * 60 : breakDuration * 60);
    }

    return () => clearInterval(timerId);
  }, [isActive, timeLeft, isBreak, workDuration, breakDuration]);

  const startTimer = () => {
    setTimeLeft(workDuration * 60); // Reset timeLeft to the work duration when starting
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsBreak(false);
    setTimeLeft(workDuration * 60);
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div>
      <TimerDisplay timeLeft={timeLeft} isBreak={isBreak} />
      <PomoControls
        startTimer={startTimer}
        pauseTimer={pauseTimer}
        resetTimer={resetTimer}
        toggleModal={toggleModal}
        isActive={isActive}
      />
      <SettingsModal
        isOpen={isModalOpen}
        workDuration={workDuration}
        breakDuration={breakDuration}
        setWorkDuration={setWorkDuration}
        setBreakDuration={setBreakDuration}
        toggleModal={toggleModal}
      />
    </div>
  );
};

export default PomodoroTimer;
