import React, { useState, useEffect } from "react";

function UseEffectSample() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log(`you clicked ${count} times`); //triger when count changes
  }, [count]);

  return (
    <div>
      <button onClick={increment}>Click to change the count</button>
    </div>
  );
}
