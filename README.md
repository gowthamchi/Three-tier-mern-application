Three-Tier MERN Social Media Application
🚀 Deployed and Containerized by: Goutham Reddy (DevOps Engineer)

🔧 About This Project
This is a production-grade social media application built with the MERN stack (MongoDB, Express, React, Node.js), and deployed using Docker on an AWS EC2 instance. The application includes authentication, post management, notifications, admin control, and more.

I handled the complete deployment lifecycle, including Dockerizing the application, setting up environment variables, configuring ports, and running containers on a live EC2 server.

🛠️ DevOps Responsibilities
As a DevOps Engineer, I:

🔹 Dockerized both the frontend and backend applications

🔹 Created and configured Dockerfile and docker-compose.yml

🔹 Opened required EC2 security group ports (3000, 8080)

🔹 Used MongoDB Atlas for cloud database integration

🔹 Configured environment variables for local and production use

🔹 Debugged networking, proxy, and CORS issues

🔹 Managed Git version control and pushed final setup to GitHub

Key Features
👤 User Features
User registration and login

Upload posts via file system or camera

Like, comment, edit, delete, and share posts

Follow/unfollow users, save posts, and manage collections

Notifications and post reporting

Dark mode toggle

Responsive design for all devices

🔐 Admin Features
Admin dashboard with user/post stats

Create new admins

View and manage reported posts

🚀 Deployment Guide
Clone the Repository

git clone https://github.com/gowthamchi/Three-tier-mern-application.git
cd Three-tier-mern-application
Add Your Environment Variables

Create .env files in root and client folders

Refer to .env.example for the required keys

Run with Docker Compose

docker-compose up --build
Access

Frontend: http://<your-ec2-public-ip>:3000

Backend (API): http://<your-ec2-public-ip>:8080
