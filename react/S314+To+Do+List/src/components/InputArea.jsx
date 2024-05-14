//分析有哪些是需要跟着child component，比如addList，只是保存用户的input，可以直接放到child component
//而

import React, { useState } from "react";

function InputArea(props) {
  const [item, setItem] = useState("");
  //define the state variable to hold the inputtext

  function handleChange(event) {
    const newItem = event.target.value;
    setItem(newItem);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={item} />
      <button
        onClick={() => {
          props.onAdd(item);
          setItem("");
        }}
      >
        <span>Add</span>
      </button>
      {/* 如果直接放onClick=props.onAdd(item),每次RENDER会自动trigger，是call the function, 而不是把variables pass to the function */}
      {/* 要pass to the function, 这里需要arrow function */}
      {/* <button onClick={props.onAdd(item)}>Add</button> */}
    </div>
  );
}

export default InputArea;
