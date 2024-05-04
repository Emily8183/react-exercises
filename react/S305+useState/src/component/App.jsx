import "../App.css";
import React, { useState } from "react";

// Challenge1: Create a new component that shows the current time after clicking button, init value is TIME;
// Challenge2: Create a new component that shows the current time without clicking button. Can use setInterval(code, delay);

function App() {
  const [time, setTime] = useState("TIME");

  function updateTime() {
    const now = new Date().toLocaleTimeString("it-IT");
    setTime(now);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Set Time</button>
    </div>
  );
}

export default App;
