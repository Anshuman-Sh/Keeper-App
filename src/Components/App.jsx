import React, { useState } from "react";
import InputArea from "./InputArea";
import Header from "./Header";
import Notes from "./Notes";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(text) {
    setNotes((prevNote) => {
      return [...prevNote, text];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes)=>{
      return prevNotes.filter((note, index)=>{
        return index !== id;
      })
    })
  }

  return (
    <>
      <Header />
      <InputArea onadd={addNote} />
      {notes.map((note, index) => {
        return <Notes key={index} id={index} title={note.title} note={note.note} ondelete={deleteNote}/>;
      })}
    </>
  );
}

export default App;
