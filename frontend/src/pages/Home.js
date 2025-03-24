import React, { useState, useEffect } from "react";
import NoteList from "../components/NoteList";
import NoteForm from "../components/NoteForm";

function Home() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetch('${BASE_URL}/notes')
            .then(response => response.json())
            .then(data => setNotes(data));
    }, []);

    return (
        <div>
            <NoteForm setNotes={setNotes} />
            <NoteList notes={notes} setNotes={setNotes} />
        </div>
    );
}

export default Home;
