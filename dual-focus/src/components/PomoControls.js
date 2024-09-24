import React from "react";

const PomoControls = ({
  startTimer,
  pauseTimer,
  resetTimer,
  toggleModal,
  isActive,
}) => {
  return (
    <div>
      <button onClick={startTimer} disabled={isActive}>
        Start
      </button>
      <button onClick={pauseTimer} disabled={!isActive}>
        Pause
      </button>
      <button onClick={resetTimer}>Reset</button>
      <button onClick={toggleModal}>Edit</button>
    </div>
  );
};

export default PomoControls;
