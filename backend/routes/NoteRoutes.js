import express from "express";
import { 
    getNotes, 
    getNoteById, 
    createNote, 
    updateNote, 
    deleteNote 
} from "../controller/NoteController.js";

import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

// Semua route dilindungi token (login required)
router.get("/notes", verifyToken, getNotes);
router.get("/notes/:id", verifyToken, getNoteById);
router.post("/create-notes", verifyToken, createNote);
router.put("/update-notes/:id", verifyToken, updateNote);      
router.delete("/delete-notes/:id", verifyToken, deleteNote);   

export default router;
