import React, { useState } from "react";
import { BASE_URL } from "../utils";

function NoteForm({ setNotes }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const addNote = async (e) => {
        e.preventDefault();
        const newNote = { title, content };
        const response = await fetch(`${BASE_URL}/notes`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newNote)
        });
        const data = await response.json();
        setNotes(prevNotes => [...prevNotes, data]);
        setTitle("");
        setContent("");
    };

    return (
        <form className="note-form" onSubmit={addNote}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
            <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" required />
            <button type="submit" className="add-btn">Add Note</button>
        </form>
    );
}

export default NoteForm;
