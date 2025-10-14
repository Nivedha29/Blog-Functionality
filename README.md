# 📰 Blog Authentication App

A full-featured **React + Vite** blogging platform with **user authentication**, **article creation**, **editing**, and **deletion** — built using the [RealWorld API](https://realworld.habsida.net/api/articles).  
This project demonstrates protected routes, form validation, and API integration in a clean modern UI.

---

## 🚀 Features

- 🔐 **User Authentication**
  - Sign Up, Sign In, and Persistent Login (Token stored in localStorage)
  - Protected Routes using React Router

- 📰 **Article Management**
  - Create, Edit, and Delete articles
  - Form validation (Title, Description, Body required)
  - Markdown-supported article body
  - Confirmation modal before deletion

# Authentication

Implemented via AuthContext.jsx

Stores user and token in localStorage

PrivateRoute.jsx protects routes (redirects unauthenticated users)

# CRUD Operations

NewArticlePage → Create Article

EditArticlePage → Edit Existing Article

ArticlePage → Delete Article with Confirmation Modal

All handled via REST endpoints (POST, PUT, DELETE)

# Validation

Done inside ArticleForm.jsx

Required fields: Title, Description, Body

Inline error display

| Package          | Version | Purpose                    |
| ---------------- | ------- | -------------------------- |
| React            | ^19.2.0 | Core UI framework          |
| React Router DOM | ^7.9.4  | Routing & Protected Routes |
| Vite             | ^7.1.9  | Fast build tool            |
| ESLint           | ^9.37.0 | Linting & code consistency |

# ScreenShots
![Article creation](https://github.com/user-attachments/assets/d1374eb8-fe9e-4bce-8f21-d651f260fa1f)

# Demo

https://github.com/user-attachments/assets/5b76ef19-9b1d-4286-81ff-b20a54aa16f2

