# 🎬 Media Uploader – React + Vite + Cloudinary

[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://reactjs.org/) 
[![Vite](https://img.shields.io/badge/Vite-3.0-brightgreen?logo=vite)](https://vitejs.dev/) 
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.0-blue?logo=tailwind-css)](https://tailwindcss.com/) 
[![Axios](https://img.shields.io/badge/Axios-1.4-lightgrey?logo=axios)](https://axios-http.com/)

A modern **full-stack media uploader** built with React + Vite on the frontend and Node.js + Express + Cloudinary on the backend. Upload multiple images/videos, preview them before upload, and display all uploaded media in a responsive gallery. Inspired by real-world file upload needs for web applications.

---

## 🚀 Features

✨ This project includes:

- 📂 **Multiple File Upload** – Images & videos in one go  
- ✋ **Drag-and-Drop Support** – Easy and intuitive selection  
- 🖼️ **Thumbnail Preview** – See files before uploading  
- ❌ **Remove Files** – Option to remove selected files  
- 🖥️ **Responsive Media Gallery** – Automatic layout for all uploaded media  
- ⚡ **Axios + Tailwind CSS** – Modern, fast, and responsive frontend  
- ☁️ **Cloudinary Ready** – Backend integration for hosted media  

---

## 🛠️ Tech Stack

| Layer       | Technology                         |
|------------|-------------------------------------|
| Frontend   | React 18 + Vite, Tailwind CSS, Axios |
| Backend    | Node.js, Express.js, Multer         |
| Storage    | Cloudinary (images/videos)          |

---

## 🔄 Upload & Display Flow

```mermaid
graph TD
A[User selects or drags files] --> B[Preview thumbnails appear]
B --> C[User clicks 'Upload']
C --> D[Axios sends files to /upload endpoint]
D --> E[Backend uploads files to Cloudinary]
E --> F[Cloudinary returns URLs]
F --> G[Frontend receives URLs and updates gallery]
