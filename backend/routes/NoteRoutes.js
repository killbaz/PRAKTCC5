import express from "express";
import { getNotes, getNoteById, createNote, updateNote, deleteNote } from "../controller/NoteController.js";

const router = express.Router();

router.get("/", getNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;