import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import "../App.css";

//To make cookie cutter of notes:
// 1) create a new component of Note.jsx (pass props)
// 2) create a function that loops through the data and returns a new component for each note (don't forget the key)

// function createCards() {
//   return notes.map((note) => {
//     return <Note key={note.key} title={note.title} content={note.content} />;
//   });
// }

// 3) pass the return value to the App.jsx by using the fat arrow

function App() {
  return (
    <div>
      <Header />
      {/* {createCards()} */}
      {notes.map((noteItem) => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
