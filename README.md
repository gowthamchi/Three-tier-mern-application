# ⭐ Three-Tier MERN Social Media Application

> 🧑‍💻 **Developed by:** [@raj074](https://github.com/raj074)  
> 🚀 **Deployed and Containerized by:** [Goutham Reddy (DevOps Engineer)](https://github.com/gowthamchi)

---

## 🔧 About This Project

This is a **production-grade social media application** built using the **MERN stack** (MongoDB, Express, React, Node.js) and deployed using **Docker** on an **AWS EC2 instance**.

The application supports user authentication, post creation, admin management, notifications, dark mode, and more. As a **DevOps Engineer**, I focused on containerizing, configuring, and deploying the system from end to end.

---

## 🛠️ DevOps Responsibilities

As part of my DevOps ownership, I handled:

- ✅ Dockerizing both frontend and backend applications  
- ✅ Writing and configuring `Dockerfile` and `docker-compose.yml`  
- ✅ Exposing necessary EC2 security group ports (3000, 8080)  
- ✅ Connecting backend to **MongoDB Atlas** (cloud DB)  
- ✅ Setting up `.env` files for both local and production environments  
- ✅ Debugging cross-container networking, proxy, and CORS issues  
- ✅ Managing Git versioning and pushing to GitHub  

---

## 👤 Key Features

### 🧑 User Features

- User registration and login  
- Upload posts via file system or camera  
- Like, comment, edit, delete, and share posts  
- Follow/unfollow users, save posts, and manage collections  
- Notifications and post reporting  
- Toggle dark/light mode  
- Responsive design across all devices  

### 🛡️ Admin Features

- Admin dashboard with real-time stats  
- Ability to create and assign new admins  
- Review and delete reported posts  

---

 🚀 Deployment Guide

 1️⃣ Clone the Repository


git clone https://github.com/gowthamchi/Three-tier-mern-application.git
cd Three-tier-mern-application

2️⃣ Add Environment Variables
Create .env files in both root/ and client/ folders.
Use the provided .env.example as a reference.

3️⃣ Run Using Docker Compose
docker-compose up --build

4️⃣ Access the Application
Frontend: http://<your-ec2-public-ip>:3000
Backend API: http://<your-ec2-public-ip>:8080

🙏 Credits
🧑‍💻 Developed by: @raj074
This project is based on his excellent open-source MERN social media application.

🛠️ Deployed and Dockerized by: @gowthamchi
I independently handled Dockerization, DevOps configuration, and cloud deployment.

