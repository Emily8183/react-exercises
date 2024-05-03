import React from "react";

function Input(prop) {
  return (
    <div>
      <input type={prop.type} placeholder={prop.placeholder} />
    </div>
  );
}

export default Input;
