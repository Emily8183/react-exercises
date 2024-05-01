import React from "react";

function Heading() {
  const food = "sample1";
  const drink = "sample2";

  const number1 = 2;
  const number2 = 3;
  return (
    <div>
      <p>Session 281</p>
      <b>My Favourite {`${food} ${drink}`}</b>
      <br></br>
      <b>I got the above samples for total number of {number1 + number2}</b>
    </div>
  );
}

export default Heading;
