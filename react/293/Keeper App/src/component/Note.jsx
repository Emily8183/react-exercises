import React from "react";

//To make cookie cutter's step:
// create a new component
// add the component to the App.jsx, and pass the props to the component
// use a map function to loop each data, import the json file

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default Note;
