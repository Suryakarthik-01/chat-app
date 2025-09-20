import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import http from "http";
import { connectDB } from "./lib/db.js";
import userRouter from "./routes/userRoutes.js";

// create app and server
const app = express();
const server = http.createServer(app);

// middleware
app.use(express.json({ limit: "4mb" }));
app.use(cors());

// simple route
app.use("/api/status", (req, res) => res.send("Server is live"));
app.use("/api/auth", userRouter);

// connect to MongoDB
await connectDB();

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log("Server is running on port " + PORT));
