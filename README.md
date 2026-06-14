# 🧾 Mini CRM (Customer Relationship Management System)

A full-stack Mini CRM web application built using the MERN stack. This project helps manage customers, leads, tasks, and basic business operations in a simple and efficient way.

---

## 🚀 Live Overview

Mini CRM allows users to:
- Manage customer data
- Track leads and their status
- Assign and monitor tasks
- View dashboard analytics
- Perform search and filtering operations

---

## ✨ Features

### 🔐 Authentication
- User Login & Logout
- Protected routes using middleware

### 📊 Dashboard
- Overview of total leads, customers, and tasks
- Quick insights into CRM activity

### 👥 Leads Management
- Add new leads
- Update lead status (New, Contacted, Converted, etc.)
- Delete leads
- Search leads easily

### 🧑 Customers Module
- Store and manage customer details
- View customer history

### 🔎 Search Functionality
- Fast search for leads and customers

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- CSS3

### Backend
- Node.js
- Express.js

### Database
- MongoDB

---

## 📁 Project Structure
frontend/
├── src/
│   ├── api/
│   ├── assets/
│   ├── components/
│   │   ├── AddLeadForm.jsx
│   │   ├── LeadTable.jsx
│   │   ├── SearchBar.jsx
│   │   ├── Sidebar.jsx
│   │   └── StatsCard.jsx
│   ├── pages/
│   │   ├── Customers.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Leads.jsx
│   │   ├── Login.jsx
│   │   ├── Reports.jsx
│   │   └── Settings.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── public/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js

backend/
├── config/
│   └── db.js
├── middleware/
│   └── auth.js
├── models/
│   ├── Customer.js
│   ├── Lead.js
│   ├── Task.js
│   └── User.js
├── routes/
│   ├── authRoutes.js
│   ├── dashboardRoutes.js
│   └── leadRoutes.js
├── server.js
├── package.json
├── package-lock.json

---

## ⚙️ Installation & Setup Instructions

### 1️⃣ Clone the Repository
```bash id="crmstep1"
git clone https://github.com/kavyanayana004-cell/FUTURE_FS_01.git
cd FUTURE_FS_01

---

2️⃣ Setup Backend
Bash
cd backend
npm install
npm start

Create .env file:
Environment
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_secret_key

3️⃣ Setup Frontend
Bash
cd frontend
npm install
npm run dev

🔗 API Endpoints
Auth Routes
POST /api/auth/login
POST /api/auth/register

Leads Routes
GET /api/leads
POST /api/leads
PUT /api/leads/:id
DELETE /api/leads/:id

Dashboard
GET /api/dashboard

Dashboard view
<img width="1868" height="951" alt="image" src="https://github.com/user-attachments/assets/f8c37fe7-fecd-4c96-b439-5abd0ec67ab9" />

Customer page
<img width="1862" height="503" alt="image" src="https://github.com/user-attachments/assets/f823c7a9-0ffc-4cfe-ae05-b39c1cbb281d" />

Leads Page
<img width="1866" height="777" alt="image" src="https://github.com/user-attachments/assets/a1aae64f-ca90-4fbb-b58a-7a7ec8f257a5" />

Reports Page
<img width="1883" height="540" alt="image" src="https://github.com/user-attachments/assets/e414cb63-2b09-4497-bf75-718c3958e4ad" />

Settings Page
<img width="1795" height="700" alt="image" src="https://github.com/user-attachments/assets/5a52657a-d2bd-4f18-9924-4182d82868e8" />


🧑‍💻 Author
Name: Kavya R
GitHub: https://github.com/kavyanayana004-cell

📌 Notes
This project is created for learning and assignment submission purposes.
Make sure MongoDB is running before starting backend.

⭐ Future Improvements
Add role-based access (Admin/User)
Add email notifications
Improve UI with modern dashboard design
Deploy on Vercel + Render

