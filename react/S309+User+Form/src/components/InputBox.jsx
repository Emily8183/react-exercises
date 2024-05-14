import React, { useState } from "react";
import Button from "./Button";

function InputBox() {
  const [name, setName] = useState("");
  const [heading, setHeading] = useState("");

  function settingName(event) {
    setName(event.target.value);
    console.log(event.target);
  }

  function handleButtonClick() {
    setHeading(name);
    console.log(name);
  }

  return (
    <div>
      <h1>Hello {heading}</h1>
      {/* <input type="text" placeholder="Enter your name" onChange={showName} /> <=== this way the title will be changed while user has inputs */}
      {/* 如果这里用form，onChange 事件不会触发，因为form会自动提交，所以用onSubmit事件。我放在另一个版本的文件内，InputBoxForm.jsx */}
      <input
        type="text"
        placeholder="Enter your name"
        onChange={settingName}
        value={name}
      />
      <Button onClick={handleButtonClick} />
    </div>
  );
}

export default InputBox;
