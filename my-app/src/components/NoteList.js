// NoteList.js
import React from "react";

const NoteList = ({ notes }) => {
  return (
    <div>
      <h2>Notes</h2>
      {notes.map((note) => (
        <div key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
