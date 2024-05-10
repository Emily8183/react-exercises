//Add lastname input to the form

import React, { useState } from "react";
import Button from "./Button";

function InputBoxForm() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [heading, setHeading] = useState("");

  function settingFName(event) {
    setFName(event.target.value);
    console.log(event.target);
  }

  function settingLName(event) {
    setLName(event.target.value);
    // console.log(event.target);
  }

  function handleButtonClick(event) {
    setHeading(fName + " " + lName);

    event.preventDefault();
    //to prevent the page auto-refresh after submitted
  }

  return (
    <div>
      <h1>Hello {heading}</h1>

      {/* 这里用form，button的onChange 事件不会触发，因为form会自动提交，所以用onSubmit事件。 */}
      <form onSubmit={handleButtonClick}>
        <input
          name="fName"
          placeholder="Enter your first name"
          onChange={settingFName}
          value={fName}
        />
        <input
          name="lName"
          placeholder="Enter your last name"
          onChange={settingLName}
          value={lName}
        />

        <Button />
      </form>
    </div>
  );
}

export default InputBoxForm;
