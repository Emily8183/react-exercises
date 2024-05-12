import React, { useState } from "react";
import Button from "./Button";

function S312() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function changeInfo(event) {
    const { value, name } = event.target;
    //using the destructing here to get the value and name of the input

    // setContact((prevValue) => {
    //   if (name === "fName") {
    //     return {
    //       fName: value,
    //       lName: prevValue.lName,
    //       email: prevValue.email,
    //     };
    //   } else if (name === "lName") {
    //     return {
    //       fName: prevValue.fName,
    //       lName: value,
    //       email: prevValue.email,
    //     };
    //   } else if (name === "email") {
    //     return {
    //       fName: prevValue.fName,
    //       lName: prevValue.lName,
    //       email: value,
    //     };
    //   }
    // });
    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          value={contact.fName}
          onChange={changeInfo}
        />
        <input
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
          onChange={changeInfo}
        />
        <input
          name="email"
          placeholder="Email"
          value={contact.email}
          onChange={changeInfo}
        />
        <Button />
      </form>
    </div>
  );
}

export default S312;
