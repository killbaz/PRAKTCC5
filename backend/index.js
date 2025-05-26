import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import NoteRoute from "./routes/NoteRoutes.js";
import UserRoute from "./routes/UserRoutes.js";

// Konfigurasi environment
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// ✅ CORS configuration
const allowedOrigins = [
  "https://frontend-amri-dot-c-12-451814.uc.r.appspot.com",
  "http://localhost:5000", // untuk pengembangan lokal
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

// ✅ Middleware
app.use(cookieParser());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// ✅ Logging sederhana
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

// ✅ Routes
app.use(NoteRoute);
app.use(UserRoute);

// ✅ Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "Server is running" });
});

// ✅ 404 handler (route tidak ditemukan)
app.use("*", (req, res) => {
  res.status(404).json({
    message: "Route not found",
    method: req.method,
    path: req.originalUrl,
  });
});

// ✅ Global error handler
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({
    message: "Internal Server Error",
    error: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
