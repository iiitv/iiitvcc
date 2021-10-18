import React, { useState, useEffect } from "react";

const EventTimer = ({date}) => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");

  useEffect(() => {
    const countdownDate = new Date(date).getTime();

    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeLeft = countdownDate - currentTime;

      const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hoursLeft = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutesLeft = Math.floor(
        (timeLeft % (1000 * 60 * 60)) / (1000 * 60)
      );

      setDays((daysLeft > 9 ? "" : "0") + daysLeft);
      setHours((hoursLeft > 9 ? "" : "0") + hoursLeft);
      setMinutes((minutesLeft > 9 ? "" : "0") + minutesLeft);

      if (timeLeft <= 0) {
        clearInterval(interval);
        setDays("00");
        setHours("00");
        setMinutes("00");
      }
    }, 1000);
  }, []);

  return (
    <div className="timer-container">
      <div className="timer-item">
        <div className="timer-value">{days}</div>
        <div className="timer-title">Days</div>
      </div>
      <div className="timer-value">:</div>
      <div className="timer-item">
        <div className="timer-value">{hours}</div>
        <div className="timer-title">Hours</div>
      </div>
      <div className="timer-value">:</div>
      <div className="timer-item">
        <div className="timer-value">{minutes}</div>
        <div className="timer-title">Minutes</div>
      </div>
    </div>
  );
}

export default EventTimer;
