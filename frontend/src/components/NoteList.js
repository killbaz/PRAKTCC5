import React from "react";
import { BASE_URL } from "../utils";

function NoteList({ notes, setNotes }) {
    const deleteNote = async (id) => {
        await fetch(`${BASE_URL}/notes/${id}`, { method: "DELETE" });
        setNotes(notes.filter(note => note.id !== id));
    };

    return (
        <div className="note-list">
            <h2>📝 Your Notes</h2>
            <ul>
                {notes.map(note => (
                    <li key={note.id} className="note-card">
                        <h3>{note.title}</h3>
                        <p>{note.content}</p>
                        <button className="delete-btn" onClick={() => deleteNote(note.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NoteList;
