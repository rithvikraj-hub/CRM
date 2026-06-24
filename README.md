# 🧾 Enterprise CRM System

A full-stack CRM (Customer Relationship Management) web application built using the MERN stack (MongoDB, Express, React, Node.js).  
It allows users to manage Leads and Customers with full CRUD functionality.

---

## 🚀 Features

### 📌 Lead Management
- Add new leads
- View all leads
- Delete leads
- Update leads

### 📌 Customer Management
- Add customers
- View customers
- Delete customers

### 📌 Dashboard
- Total leads count
- Total customers count
- Clean and simple UI

---

## 🛠 Tech Stack

Frontend:
- React.js
- Axios
- CSS

Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 📁 Project Structure

crm-project/
│
├── backend/
│   ├── models/
│   │   ├── Lead.js
│   │   └── Customer.js
│   │
│   ├── routes/
│   │   ├── leadRoutes.js
│   │   └── customerRoutes.js
│   │
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Leads.js
│   │   │   └── Customers.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
│
└── README.md

---

## ⚙️ Installation & Setup

### 1. Clone Repository
git clone https://github.com/your-username/crm-project.git

---

### 2. Backend Setup
cd backend
npm install

Create .env file:
MONGO_URI=your_mongodb_connection_string
PORT=5000

Run backend:
npm run dev

---

### 3. Frontend Setup
cd frontend
npm install
npm start

---

## 🌐 API Endpoints

Leads:
GET /api/leads
POST /api/leads
PUT /api/leads/:id
DELETE /api/leads/:id

Customers:
GET /api/customers
POST /api/customers
DELETE /api/customers/:id

## 🚀 Future Improvements

- Login & Authentication system
- Role-based access (Admin/User)
- Charts & analytics dashboard
- Better UI improvements
- Deployment (Render + Vercel)

---

## 👨‍💻 Author

Name: Rithvik Raj  
Project: Enterprise CRM System (Internship Project)

---
