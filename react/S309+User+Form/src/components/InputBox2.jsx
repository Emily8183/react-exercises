// this is a testing version to try to write one line of useState(). It doesnt work for now

import React, { useState } from "react";
import Button from "./Button";

function InputBox() {
  const [name, setName] = useState("");

  function handleButtonClick() {
    setName(name);
    console.log(name);
  }

  return (
    <div>
      <h1>Hello {name}</h1>
      <input type="text" placeholder="Enter your name" />
      <Button onClick={handleButtonClick} />
    </div>
  );
}

export default InputBox;
