import express from "express";
import { protectRoute } from "../middleware/auth.js";
import { getMessages, getUsersForSidebar, markMessageAsSeen, sendMessage } from "../controllers/messageController.js";


const messageRouter = express.Router();

messageRouter.get("/users", protectRoute, getUsersForSidebar);
messageRouter.get("/users", protectRoute, getMessages);
messageRouter.get("/users", protectRoute, markMessageAsSeen);
messageRouter.post("/send/:id", protectRoute, sendMessage);


export default messageRouter;