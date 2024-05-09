import React, { useState } from "react";

function Button({ onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  function onMouseOverHandler() {
    setIsHovered(true);
  }

  function onMouseOutHandler() {
    setIsHovered(false);
  }

  return (
    <button
      style={{ backgroundColor: isHovered ? "Black" : "White" }}
      onMouseOver={onMouseOverHandler}
      onMouseOut={onMouseOutHandler}
      onClick={onClick}
    >
      Submit
    </button>
  );
}

export default Button;
