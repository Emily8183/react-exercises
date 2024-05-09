import React, { useState } from "react";
import Button from "./Button";

function InputBox() {
  const [name, setName] = useState("");
  const [heading, setHeading] = useState("");

  function showName(event) {
    setName(event.target.value);
  }

  // function handleButtonClick(event) {
  //   setName(event.target.value);
  // }

  function handleButtonClick() {
    setHeading(name);
  }

  return (
    <div>
      <h1>Hello {heading}</h1>
      {/* <input type="text" placeholder="Enter your name" onChange={showName} /> <=== this way the title will be changed while user has inputs */}
      <input
        type="text"
        placeholder="Enter your name"
        onChange={showName}
        value={name}
      />
      <Button onClick={handleButtonClick} />
    </div>
  );
}

export default InputBox;
