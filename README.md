:

🧾 Mini CRM (MERN Stack)

A simple Customer Relationship Management (CRM) web app built using the MERN stack to manage leads, customers, and tasks efficiently.

🚀 Features

🔐 Authentication
User login & registration
Protected routes

📊 Dashboard
Overview of customers, leads, and tasks
Quick business insights

👥 Leads Management
Add, update, delete leads
Track lead status (New, Contacted, Converted)
Search & filter leads

🧑 Customers
Store and manage customer details
View customer information

✅ Tasks
Create and assign tasks
Track task status (Pending / Completed)

🛠️ Tech Stack
Frontend: React.js + Vite + CSS
Backend: Node.js + Express.js
Database: MongoDB 

📁 Project Structure
frontend/
  src/
    components/
    pages/
    api/
backend/
  config/
  models/
  routes/
  middleware/
  
⚙️ Setup Instructions
1. Clone the repo
git clone https://github.com/kavyanayana004-cell/FUTURE_FS_01.git
cd FUTURE_FS_01

2. Backend setup
cd backend
npm install
npm start

3. Frontend setup
cd frontend
npm install
npm run dev

🔗 API Endpoints
Auth
POST /api/auth/login
POST /api/auth/register
Leads
GET /api/leads
POST /api/leads
PUT /api/leads/:id
DELETE /api/leads/:id

🚀 Deployment (Simple Version)
Frontend: Vercel
Backend: Render
Database: MongoDB Compass

👩‍💻 Author
Name: Kavya R
GitHub: kavyanayana004-cell

⭐ Future Improvements
Role-based access (Admin/User)
Email notifications
Better UI dashboard design
Analytics charts & reports
