import { useState, useEffect } from "react";

import React from "react";

const TimePage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div>
      <p>{currentTime.toLocaleTimeString()}</p>
      <p>{currentTime.toLocaleDateString()}</p>
    </div>
  );
};

export default TimePage;
