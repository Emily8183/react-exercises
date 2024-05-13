import React from "react";

function ToDoItem(props) {
  return (
    <div>
      <li>{props.text}</li>
    </div>
  );
}
// need the props to pass the todoItem which is a text

export default ToDoItem;
