// import { useState } from "react";
// import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  const food = "sample1";
  const drink = "sample2";

  const number1 = 2;
  const number2 = 3;

  return (
    <>
      <h1>
        <p>Session 281</p>
        <b>My Favourite {`${food} ${drink}`}</b>
        <br></br>
        <b>I got the above samples for total number of {number1 + number2}</b>
      </h1>

      <ul>
        <li>Pizza</li>
        <li>Burger</li>
        <li>Pasta</li>
        <li>Fried Rice</li>
      </ul>
    </>
  );
}

export default App;
