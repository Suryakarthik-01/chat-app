# 💬 WeChat – Real-Time Chat App (MERN Stack)

![MERN Stack](https://img.shields.io/badge/MERN-Stack-121011?style=for-the-badge&logo=mongodb&logoColor=green)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=orange)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

> A **real-time chat application** built with the **MERN stack** and **Socket.io** — supporting **private & group chats**, **online status**, and **secure authentication**.

---

## 📖 Description  
WeChat is a **real-time chat application** built using the **MERN stack (MongoDB, Express, React, Node.js)** and **Socket.io**. It allows users to engage in **one-to-one and group conversations**, track **online/offline status**, and enjoy a smooth, responsive interface. The application features **secure user authentication**, **real-time messaging**, and a modern, scalable backend architecture.  

This project demonstrates how to integrate **real-time communication** into full-stack applications using cutting-edge technologies.

---

## ✨ Features  

- **Frontend**: Built with **React** and **Tailwind CSS** for a modern, responsive UI.  
- **Backend**: **Node.js** and **Express** handle REST APIs, authentication, and chat logic.  
- **Authentication**: Secure login/signup using **JWT (JSON Web Tokens)**.  
- **Real-Time Messaging**: Powered by **Socket.io** for seamless chat updates.  
- **Chat Types**: Supports both **private (1:1)** and **group messaging**.  
- **User Status**: Real-time **online/offline indicators** for active users.  
- **Message Storage**: **MongoDB** stores chat history reliably.  
- **Deployment Ready**: Fully deployable on **Vercel (frontend)** and **Render (backend)**.

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

### 1. Clone the repository:
```bash
git clone https://github.com/yourusername/wechat.git
cd wechat

```
### 2. Install dependencies:
Frontend:
```bash
cd client
npm install
```
Backend
```bash
cd ../server
npm install
```

---

### 3. Setup Environment Variables
In the /server directory, create a .env file and add:
```bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```
### 4. Start the development servers:
Backend:
```bash
cd server
npm run dev
```
Frontend:
```bash
cd client
npm run dev
```
✅ Open http://localhost:5173 in your browser.

---

## 🌍 Deployment
🔗 Live Demo: Check it out here

To deploy your own instance:
Push your code to GitHub.
1. Connect the frontend (/client) to Vercel.
2. Connect the backend (/server) to Render or Railway.
3. Set the required environment variables in both platforms.
4. Update the frontend’s API base URL to point to your deployed backend.

---

## ⚙️ Technologies Used

- **Frontend**: React, Tailwind CSS, React Router.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB (Mongoose).
- **Authentication**: JWT.
- **Real-Time Engine**: Socket.io.
- **Deployment**: Vercel (frontend), Render (backend).

---


## 👥 Contributor

- **[Karthik Kumar Surya](https://github.com/Suryakarthik-01)**



