import React, { useState } from "react";

function Button() {
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
    >
      Submit
    </button>
  );
}

export default Button;
