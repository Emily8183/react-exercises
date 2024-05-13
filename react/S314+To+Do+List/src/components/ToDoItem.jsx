//如何划去items:
// 1)为map中的item创建useState组件
// 2）用text-decoration:underline 来划线
// 3）用ternary operator来判断划去还是不划去

import React, { useState } from "react";

function ToDoItem(props) {
  const [isCompleted, setIsCompleted] = useState(false);

  function removeItems() {
    setIsCompleted((prev) => !prev);
  }

  return (
    <div>
      <li
        onClick={removeItems}
        style={{ textDecoration: isCompleted ? "line-through" : "none" }}
      >
        {props.text}
      </li>
    </div>
  );
}
// need the props to pass the todoItem which is a text
// props is read-only, can't modify it

export default ToDoItem;
