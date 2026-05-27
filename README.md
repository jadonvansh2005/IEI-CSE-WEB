# IEI CSE Student Chapter Website

A modern full-stack web platform developed for the **IEI CSE Student Chapter** to manage events, memberships, registrations, payments, certificates, blogs, team management, and admin operations.

This platform provides a complete digital ecosystem for technical communities and student organizations.

---

# 🚀 Project Overview

The IEI CSE Student Chapter Website is a centralized portal where students can:

- Register and login securely
- Apply for IEI memberships
- Explore technical events
- Register for free & paid events
- Upload payment screenshots
- Access certificates
- Explore team members and domains
- Read technical blogs
- Interact with a professional admin dashboard

The system also provides a dedicated admin panel to manage:

- Users
- Membership requests
- Events
- Registrations
- Payments
- Certificates
- Dashboard analytics

---

# ✨ Major Features

## 👤 Authentication System

- User Signup/Login
- Admin Signup/Login
- JWT Authentication
- Protected Routes
- Role-Based Access

---

## 🎯 Event Management

- Create Events
- Upload Event Posters
- Event Categories
- Free & Paid Events
- Event Registration
- Payment Verification
- Event Dashboard

---

## 💳 Payment System

- QR-based payment flow
- Transaction ID submission
- Screenshot upload
- Admin verification system

---

## 🏅 Certificate Management

- Admin certificate generation
- Certificate upload
- User certificate access
- Certificate download support

---

## 👥 Membership System

- Membership application form
- Domain selection
- Payment screenshot upload
- Approval/Rejection system
- Membership dashboard

---

## 🛠️ Admin Dashboard

Modern futuristic admin dashboard with:

- Total users
- Total events
- Total registrations
- Revenue tracking
- Membership statistics
- User management

---

## 👨‍💻 Team & Domains

- Faculty coordinator section
- Core leadership section
- Technical heads
- Developer showcase
- Animated UI cards

---

## 📰 Blog System

- Technical articles
- Career guidance
- Interview preparation
- Dynamic UI blog cards

---

# 🧠 Tech Stack

## Frontend

- React.js
- Tailwind CSS
- Framer Motion
- Axios
- React Router DOM
- Lucide React Icons

---

## Backend

- Node.js
- Express.js
- JWT Authentication
- Multer
- BcryptJS

---

## Database & ORM

- PostgreSQL
- Prisma ORM

---

## Deployment Platforms

- Frontend → Vercel
- Backend → Render
- Database → Neon PostgreSQL

---

# 📂 Project Structure

```bash
MITS_Counselling_System/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── prisma/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── data/
│   │   ├── assets/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── .gitignore
├── README.md
└── package-lock.json

🔐 Environment Variables

Create a .env file inside backend folder:

DATABASE_URL=your_database_url

JWT_SECRET=your_jwt_secret

ADMIN_SECRET_KEY=your_admin_secret_key
⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/your-username/iei-cse-club-website.git
2️⃣ Install Frontend Dependencies
cd frontend

npm install
3️⃣ Install Backend Dependencies
cd backend

npm install
🗄️ Prisma Setup
Generate Prisma Client
npx prisma generate
Run Prisma Migration
npx prisma migrate dev
Open Prisma Studio
npx prisma studio
▶️ Running Project
Start Backend
cd backend

npm run dev
Start Frontend
cd frontend

npm run dev
🌐 API Modules
Auth Routes
User Authentication
Admin Authentication
JWT Verification
Event Routes
Create Event
Delete Event
Get Events
Membership Routes
Apply Membership
Approve Membership
Reject Membership
Certificate Routes
Issue Certificate
Fetch Certificates
Delete Certificate
User Routes
Fetch Profile
Fetch All Users
Change Role
Block/Unblock User
Delete User
🎨 UI/UX Highlights
Futuristic admin panel
Ice blue neon theme
Responsive layouts
Animated hover effects
Framer Motion transitions
Modern cards and dashboards
🔒 Security Features
JWT Authentication
Protected APIs
Role-Based Authorization
Password Hashing using bcrypt
Secure admin routes
📸 Upload Features

Users/Admin can upload:

Event Posters
Payment Screenshots
Certificates
Profile-related assets
📈 Future Enhancements
AI-powered recommendation system
Real-time notifications
Email integration
Attendance tracking
Certificate PDF generation
Analytics charts
Event feedback system
Mobile App integration
👨‍💻 Developed By
Vansh Pratap Singh Jadon

AI Engineer | Full Stack Developer | NLP & ML Enthusiast

Designed complete frontend architecture
Built admin dashboard
Developed authentication system
Integrated backend APIs
Created futuristic UI/UX
Worked on Prisma database integration
📧 Contact

Email:
vanshpratapsinghjadon95@gmail.com

LinkedIn:
https://www.linkedin.com/in/vansh-pratap-singhjadon-5407b2320

📜 License

This project is developed for educational and organizational purposes under the IEI CSE Student Chapter.
