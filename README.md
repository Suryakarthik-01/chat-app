# 💬 WeChat (MERN Stack)

## 📖 Description  
WeChat is a **real-time chat application** built using the **MERN stack (MongoDB, Express, React, Node.js)** and **Socket.io**. It allows users to engage in **one-to-one and group conversations**, track **online/offline status**, and enjoy a smooth, responsive interface. The application features **secure user authentication**, **real-time messaging**, and a modern, scalable backend architecture.  

This project demonstrates how to integrate **real-time communication** into full-stack applications using cutting-edge technologies.  

---

## ✨ Features  

- **Frontend**: Built with React and Tailwind CSS for a modern, responsive UI.  
- **Backend**: Node.js and Express handle REST APIs, authentication, and chat logic.  
- **Authentication**: Secure login and signup using **JWT (JSON Web Tokens)**.  
- **Real-Time Messaging**: Powered by **Socket.io** for seamless chat updates.  
- **Group & Private Chat**: Supports both one-to-one and group messaging.  
- **User Status**: Online/offline indicators for active users.  
- **Message Storage**: MongoDB stores chat history reliably.  
- **Deployment**: Fully deployed for easy access (link below).  

---

## 🛠️ Project Structure  

- **Frontend**: React setup with Tailwind CSS, routing, and chat UI components.  
- **Backend**: RESTful APIs built with Express and MongoDB.  
- **Authentication**: Secure JWT-based authentication flow.  
- **Messaging**: Real-time socket connection for instant message delivery.  
- **Database**: MongoDB with Mongoose for user and message management.  
- **Deployment**: Deployed on Vercel / Render for accessibility. 
---

## 🚀 Installation  

Clone the repository:  
```bash
git clone https://github.com/yourusername/wechat.git
cd wechat

# Frontend
cd client
npm install

Install dependencies for both frontend and backend:

# Backend
cd ../server
npm install

Setup Environment Variables

In /server, create a .env file and add:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
Start the development servers:
# Backend
cd server
npm run dev

# Frontend
cd client
npm run dev


Open http://localhost:5173/
 in your browser.
