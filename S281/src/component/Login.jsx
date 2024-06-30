import React from "react";
import Input from "./Input";
import InputList from "../InputList";

//Challenge: Without moving the userIsRegistered variable,
//1. Show Login as the button text if userIsRegistered is true.
//Show Register as the button text if userIsRegistered is false.
//2. Only show the Confirm Password input if userIsRegistered is false.
//Don't show it if userIsRegistered is true.

var userIsRegistered = false;

function Login() {
  return (
    <div className="container">
      <h1>Hello</h1>
      <form className="form">
        {InputList.map((input) => (
          <Input
            key={input.id}
            type={input.type}
            placeholder={input.placeholder}
          />
        ))}

        {!userIsRegistered && (
          <Input type="password" placeholder="Confirm Password" />
        )}

        <button type="submit">{userIsRegistered ? "Login" : "Register"}</button>
      </form>
    </div>
  );
}

export default Login;
