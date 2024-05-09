import React, { useState } from "react";

const [isHovered, setIsHovered] = useState(false);

function onMouseOverHandler() {
  setIsHovered(true);
}

function button() {
  return (
    <button
      style={{ backgroundColor: isHovered ? "Black" : "White" }}
      onMouseOver={onMouseOverHandler}
    >
      Submit
    </button>
  );
}

export default button;
