import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import http from "http";
import { connectDB } from "./lib/db.js";
import userRouter from "./routes/userRoutes.js";
import messageRouter from "./routes/messageRoutes.js";
import { Server } from "socket.io";


// create app and server
const app = express();
const server = http.createServer(app);

// Intialize socket.io server
export const io = new Server(server,{
    cors: {origin: "*"}
})

// Store online users
export const usersocketMap = {}; 
//socket.io connection handler
io.on("connection", (socket)=>{
    const userId = socket.handshake.query.userId;
    console.log("user connected", userId)

    if (userId) usersocketMap[userId] = socket.id;
    // emit online users to all connected clients 
    io.emit("getOnlineUsers", Object.keys(usersocketMap));
    socket.on("disconnect", ()=>{
        console.log("user disconnected", userId);
        delete usersocketMap[userId]
        io.emit("getOnlineUsers", Object.keys(usersocketMap))
    })
})


// middleware setup
app.use(express.json({ limit: "4mb" }));
app.use(cors());

// simple route
app.use("/api/status", (req, res) => res.send("Server is live"));
app.use("/api/auth", userRouter);
app.use("/api/messages", messageRouter)

// connect to MongoDB
await connectDB();

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log("Server is running on port " + PORT));
