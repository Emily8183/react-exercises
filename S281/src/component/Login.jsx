import React from "react";
import Input from "./Input";
import InputList from "../InputList";

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

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
