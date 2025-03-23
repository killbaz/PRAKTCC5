import express from "express";
import cors from "cors";
import notesRoutes from "./routes/NoteRoutes.js";
import db from "./config/database.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/notes", notesRoutes);

// Test Database Connection
try {
    await db.authenticate();
    console.log("Database connected...");
} catch (error) {
    console.error("Database connection failed: ", error);
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
