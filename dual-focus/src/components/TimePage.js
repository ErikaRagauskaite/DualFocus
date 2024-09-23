import React, { useState, useEffect } from "react";

const TimePage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [is24Hour, setIs24Hour] = useState(false);

  useEffect(() => {
    const timerId = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  const toggleTimeFormat = (prevIs24Hour) => {
    setIs24Hour((prevIs24Hour) => !prevIs24Hour);
  };

  const formatTime = () => {
    return currentTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: !is24Hour,
    });
  };

  return (
    <div>
      <h1>Current Time and Date</h1>
      <p>{formatTime()}</p>
      <p>{currentTime.toLocaleDateString()}</p>
      <button onClick={toggleTimeFormat}>
        Switch to {is24Hour ? "12-hour" : "24-hour"} format
      </button>
    </div>
  );
};

export default TimePage;
