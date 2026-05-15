import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import userRouter from './routes/userRoute.js';
import { errorHandler } from './middleware/ErrorMiddleware.js';
import pool from './config/db.js';
import projectRouter from './routes/projectRoute.js';
import contactRoutes from "./routes/contactRoutes.js";
import jobRouter from './routes/jobRoutes.js';
import blogRouter from './routes/blogRoutes.js';
import { initBlogsTable } from './repository/blogRepo.js';
import { initCommentsTable } from './repository/commentRepo.js';

dotenv.config();

const app = express();



const allowedOrigins = [
  process.env.CLIENT_URL,           // Vercel URL e.g. https://hously.vercel.app
  "http://localhost:5173",           // Local development
  "http://localhost:4173",           // Vite preview
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    // Postman/server-to-server calls mein origin undefined hota hai — allow karo
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`CORS blocked: ${origin}`));
    }
  },
  credentials: true, // httpOnly cookies ke liye zaroori
}));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", userRouter);
app.use("/api/projects", projectRouter);
app.use("/api/contact", contactRoutes);
app.use("/api/jobs", jobRouter);
app.use("/api/blogs", blogRouter);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;


const startServer = async () => {
  try {
    
    const connection = await pool.getConnection();
    console.log(" Database Connected");
    connection.release();

    // Auto-create blogs + comments tables
    await initBlogsTable();
    await initCommentsTable();
    console.log(" Blogs & Comments tables ready");

    // Start server
    app.listen(PORT, () => {
      console.log(` Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("DB Connection Failed:", error.message);
    process.exit(1);
  }
};

startServer();