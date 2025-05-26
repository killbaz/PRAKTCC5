import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import NoteRoute from "./routes/NoteRoutes.js";
import UserRoute from "./routes/UserRoutes.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  "https://frontend-amri-dot-c-12-451814.uc.r.appspot.com",
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middleware
app.use(cookieParser());
app.use(express.json());

// Routes
app.use(NoteRoute);
app.use(UserRoute);


app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "Server is running" });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
