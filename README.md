# 📚 BookWorm – Book Listing Application

A simple book listing web application built with **Next.js 16 (App Router)**.  
The project demonstrates public pages, mock authentication, protected routes, and data fetching from a JSON/Express-style API.

---

## 🚀 Live Demo
🔗 Live Site: https://amar-boi.vercel.app  


---

## 📖 Project Description
BookWorm is a responsive web application where users can:
- Browse a list of books
- View detailed information about a selected book
- Log in using a mock authentication system
- Access protected routes only when authenticated

This project is created as part of a task assignment to demonstrate frontend skills using Next.js App Router.

---

## 🛠️ Technologies Used
- **Next.js 16** (App Router)
- **React**
- **Tailwind CSS / DaisyUI**
- **Express-style JSON API**
- **Cookies** (for mock authentication)

---

## 📂 Project Routes
| Route | Description | Access |
|------|------------|--------|
| `/` | Landing / Home page | Public |
| `/books` | All Books list page | Public |
| `/books/[id]` | Single Book Details page | Public |
| `/login` | Login page (Mock Auth) | Public |
| `/add-book` | Add Book page (Protected) | Login Required |
The Add book page  feature is not implemented 

---

## 🔐 Authentication Details (Mock Login)

This project uses **mock authentication** with hardcoded credentials.

### Login Credentials
email: [ bookWorm@gmail.com ]

pass: [ BookWorm11@ ] 