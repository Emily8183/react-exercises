import "../App.css";
import React, { useState } from "react";

// Challenge1: Create a new component that shows the current time after clicking button, init value is TIME;
// Challenge2: Create a new component that shows the current time without clicking button. Can use setInterval(code, delay);

function App() {
  setInterval(updateTime, 1000);
  // This updateTime() gets called every second and that creates this dynamic refreshing h1.

  const now = new Date().toLocaleTimeString("it-IT");
  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString("it-IT");

    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Set Time</button>
    </div>
  );
}

export default App;
