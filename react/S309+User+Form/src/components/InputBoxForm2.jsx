//to combine fName and lName together

import React, { useState } from "react";
import Button from "./Button";

function InputBoxForm2() {
  const [fullName, setFullName] = useState({ fName: "", lName: "" });

  function settingFullName(event) {
    const { value, name } = event.target;

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lname: value,
        };
      }
    });
  }

  return (
    <div>
      <h1>
        Hello {fullName.fName}
        {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="Enter your first name"
          onChange={settingFullName}
          value={fullName.fName}
        />
        <input
          name="lName"
          placeholder="Enter your last name"
          onChange={settingFullName}
          value={fullName.lName}
        />

        <Button />
      </form>
    </div>
  );
}

export default InputBoxForm2;
