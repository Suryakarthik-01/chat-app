💬 WeChat - Real-Time Chat Application (MERN Stack)
<div align="center">
https://img.shields.io/badge/MERN-Full%2520Stack-green
https://img.shields.io/badge/React-18.0-blue
https://img.shields.io/badge/Socket.io-Real--time-orange
https://img.shields.io/badge/Auth-JWT-yellow
https://img.shields.io/badge/Status-Live-brightgreen

A modern, real-time chat application built with the MERN stack

Live Demo • Features • Installation • Tech Stack

https://via.placeholder.com/1000x300/2D3748/FFFFFF?text=WeChat+-+Real-Time+Chat+Application

</div>
📖 Description
WeChat is a full-stack real-time chat application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.io. The application enables users to engage in seamless one-to-one and group conversations with real-time messaging, online status tracking, and a responsive modern interface.

This project demonstrates advanced real-time communication implementation, secure authentication, and scalable full-stack architecture using cutting-edge web technologies.

✨ Features
🔐 Authentication & Security
JWT-based Authentication - Secure login/signup with token-based auth

Password Encryption - Bcrypt hashing for user credentials

Protected Routes - Middleware for secure API endpoints

💬 Real-Time Messaging
Instant Message Delivery - Powered by Socket.io for real-time updates

One-to-One Chat - Private conversations between users

Group Messaging - Create and manage group chats

Message History - Persistent chat storage in MongoDB

👥 User Management
Online/Offline Status - Real-time user presence indicators

User Profiles - Customizable user information and avatars

Friend System - Add and manage contacts

🎨 User Interface
Responsive Design - Optimized for desktop, tablet, and mobile

Modern UI/UX - Clean interface built with Tailwind CSS

Dark/Light Mode - Theme customization options

Emoji Support - Enhanced messaging experience

⚡ Performance & Scalability
Optimized Backend - Efficient API design with Express.js

Database Optimization - MongoDB with proper indexing

Real-time Updates - WebSocket connections for instant messaging

🛠️ Tech Stack
Frontend
https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react
https://img.shields.io/badge/Tailwind_CSS-3.3.0-06B6D4?logo=tailwindcss
https://img.shields.io/badge/React_Router-6.8.0-CA4245?logo=reactrouter
https://img.shields.io/badge/Socket.io_Client-4.7.2-010101?logo=socket.io

Backend
https://img.shields.io/badge/Node.js-18.0-339933?logo=nodedotjs
https://img.shields.io/badge/Express.js-4.18.0-000000?logo=express
https://img.shields.io/badge/Socket.io-4.7.2-010101?logo=socket.io
https://img.shields.io/badge/JWT-Authentication-000000?logo=jsonwebtokens

Database & Deployment
https://img.shields.io/badge/MongoDB-6.0-47A248?logo=mongodb
https://img.shields.io/badge/Mongoose-7.0-880000?logo=mongodb
https://img.shields.io/badge/Vercel-Frontend-000000?logo=vercel
https://img.shields.io/badge/Render-Backend-46E3B7?logo=render

🚀 Quick Start
Prerequisites
Node.js (v18 or higher)

MongoDB Atlas account or local MongoDB instance

Git

Installation
Clone the repository

bash
git clone https://github.com/Suryakarthik-01/wechat.git
cd wechat
Backend Setup

bash
cd server
npm install

# Create environment file
cp .env.example .env
Configure your .env file:

env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLIENT_URL=http://localhost:3000
NODE_ENV=development
Frontend Setup

bash
cd ../client
npm install

# Create environment file
cp .env.example .env
Configure your .env file:

env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_SOCKET_URL=http://localhost:5000
Run the Application

bash
# Terminal 1 - Start Backend (from /server directory)
npm run dev

# Terminal 2 - Start Frontend (from /client directory)  
npm start
Access the Application

Frontend: http://localhost:3000

Backend API: http://localhost:5000
