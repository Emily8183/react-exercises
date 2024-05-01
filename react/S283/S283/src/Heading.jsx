import React from "react";

function Heading() {
  let greetings = "Good morning";

  const currentDate = new Date();

  let customStyle = { color: "red" };

  if (currentDate.getTime() > 12) {
    greetings = "Good afternoon";
    customStyle.color = "green";
  } else if (currentDate.getTime() > 18) {
    greetings = "Good evening";
    customStyle.color = "blue";
  }

  return (
    <h1 className="heading" style={customStyle}>
      {greetings}
    </h1>
  );
}

export default Heading;
