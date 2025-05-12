# 🏦 FinTrust Capital – NBFC Website

Welcome to the official repository of **FinTrust Capital**, a fictional Non-Banking Financial Company (NBFC) website built using the **MERN stack (MongoDB, Express.js, ReactJS, Node.js)**. This project showcases a responsive and visually appealing multi-page financial website, complete with a working contact form, detailed services, and company information.

---

## 🚀 Features

- 🌐 Five-page responsive website
- 🧑‍💼 About section with founder details
- 💼 Comprehensive service listings
- 📩 Working contact form with backend + MongoDB integration
- 🎨 Professional UI using green, off-white, and royal blue color themes
- 📱 Mobile-first design

---

## 🧰 Tech Stack

| Layer      | Technology                  |
|-----------|------------------------------|
| Frontend  | ReactJS, CSS                 |
| Backend   | Node.js, Express.js          |
| Database  | MongoDB                      |


---

## 🗂️ Project Structure

📁 frontend/ → React frontend
├── components/
├── pages/
├── App.js
└── index.js

📁 backend/ → Node.js + Express backend
├── routes/
├── models/
├── controllers/
└── server.js

📁 mongo/ → MongoDB schema

---

## 📄 Pages Included

1. **Home** – Company intro, mission, and CTA
2. **About Us** – Company background & founder profile
3. **Services** – Financial services like loans, investments, etc.
4. **FAQs** – Support section with expandable questions
5. **Contact Us** – Form that stores data in MongoDB

---

## 🛠️ Setup Instructions

### 📦 Prerequisites
- Node.js (v14 or above)
- MongoDB (local or Atlas)
- Vercel/Render account (for deployment)

### 🔧 Installation

#### Clone the Repository
```bash
git clone https://github.com/yourusername/nbfc-website.git
cd nbfc-website
Backend
  cd backend
  npm install
Frontend
  cd ../frontend
  npm install
🚀 Run the Project
Start Backend
cd backend
node server.js
Start Frontend
cd ../frontend
npm start
📨 Contact Form (Backend API)
POST /api/contact

Stores form submissions in MongoDB

Fields: name, email, message

Includes input validation and sanitization


📌 Future Enhancements
Admin dashboard to view submissions

Email alerts on contact form submission

Authentication for admin access

Payment gateway demo integration

👤 Author
Abhinav Jain
📧 Email
🌐 Portfolio
🐱 GitHub

📝 License
This project is licensed for educational and demo purposes. Contact the author for commercial use or collaboration.

