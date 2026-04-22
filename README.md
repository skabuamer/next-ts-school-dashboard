# 📊 School Management Dashboard (Frontend Only)

A modern, role-based school management dashboard UI built with Next.js (App Router) and TypeScript, simulating real-world SaaS behavior for Admin, Teacher, Student, and Parent roles.

This project focuses on scalable frontend architecture, role-based UI rendering, and clean component design.

## 🚀 Live Demo

<!-- (Add your deployed link here — Vercel/Netlify)
https://your-project-link.com -->

## 🧠 Key Features

👥 Role-based UI (Admin / Teacher / Student / Parent)
📊 Dynamic sidebar rendering based on user role
🎛️ Role switcher for instant UI preview (frontend simulation)
📈 Data visualization dashboard (charts, analytics UI)
⚡ Next.js App Router structure (modern production pattern)
🧩 Modular and reusable component architecture
🎨 Clean, responsive dashboard layout

## 🏗️ Tech Stack

Next.js (App Router)
TypeScript
React Context API
Recharts (Data Visualization)
Tailwind CSS / CSS Modules
Modern UI-first architecture

## 📁 Project Structure

src/
├── app/ # Next.js routes (App Router)
│ ├── dashboard/
│ ├── students/
│ ├── teachers/
│ └── layout.tsx
│
├── components/ # Reusable UI components
│ ├── Sidebar.tsx
│ ├── RoleSwitcher.tsx
│ ├── Charts/
│
├── context/ # Global state management
│ └── RoleContext.tsx
│
├── data/ # Static config & mock data
│ └── sidebar.ts
│
├── lib/ # Utility functions

## 🔐 Role-Based Architecture

This project simulates multi-role access control in a frontend-only environment.

Each sidebar item defines which roles can access it:
visible: ["admin", "teacher", "student", "parent"]

### How it works:

User role is stored in React Context
Sidebar dynamically filters items based on role
UI changes instantly via Role Switcher (no backend required)

### 🧩 Context Management

Global state (user role simulation) is handled via React Context:

Centralized role state
Easy access across components
Clean separation from UI and routing logic

### 🎛️ Role Switcher (Demo Feature)

A built-in role switcher allows instant preview of all dashboard views without authentication.

## This is designed for:

UI testing
Demo purposes
Portfolio presentation
📊 Dashboard UI

Includes sample UI components for:

Attendance analytics
Income vs expense charts
Student/teacher management views
Responsive layout system

## 📌 Architecture Highlights

✔ Modular folder structure (production-style)
✔ Config-driven sidebar system
✔ Scalable role-based UI logic
✔ Clean separation of concerns
✔ Next.js App Router best practices

## 🎯 Purpose of This Project

### This project was built to demonstrate:

Real-world dashboard UI architecture
Scalable frontend design patterns
Role-based interface simulation
Clean Next.js project structuring
Production-like frontend engineering skills

## 📷 Screenshots

<!-- (Add screenshots here) -->

## 🛠️ Future Improvements

Backend integration (auth + real role system)

Database-driven dynamic data

API layer for students/teachers

Authentication (NextAuth / JWT)
Server-side role protection (middleware)

## 👨‍💻 Author

Shaikh Abu Amer
Frontend Developer
