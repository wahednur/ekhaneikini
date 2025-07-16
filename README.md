# 🛍️ ekhaneikini.com – Custom Dropshipping eCommerce Platform

**ekhaneikini.com** is a production-grade, fully custom-built eCommerce platform designed for the Bangladeshi market with future SaaS scalability.  
It includes full customer and admin functionality, cart & checkout flow, and real SSLCommerz payment integration.

---

## 🚀 Live Preview

🌐 [Live Site](https://www.ekhaneikini.com)  
📂 [Frontend Repository](./frontend)  
📂 [Backend Repository](./backend)  
🎥 [Demo Video (Coming Soon)](#)

---

## 🔧 Tech Stack

| Layer      | Tech                                                 |
| ---------- | ---------------------------------------------------- |
| Frontend   | Next.js 14 (App Router), Tailwind CSS, Redux Toolkit |
| Backend    | Node.js, Express.js, TypeScript                      |
| Database   | MongoDB (→ Will migrate to PostgreSQL + Prisma)      |
| Auth       | Firebase Auth (for MVP)                              |
| Payment    | SSLCommerz (Live Account Integrated)                 |
| Deployment | Vercel (Frontend), Railway/Render (Backend)          |
| Tools      | Git, GitHub, REST API, .env, Postman                 |

---

## 📦 Core Features

### 👨‍💼 Customer Side

- User registration & login (JWT/Firebase)
- Browse product catalog
- View product details
- Add to cart & update quantity
- Checkout with SSLCommerz gateway
- Order confirmation

### 🛠️ Admin Panel

- Admin login
- Product add/edit/delete
- View customer orders
- Update order status

### 📊 Upcoming Features

- Seller onboarding panel
- Analytics dashboard
- Stripe payment (international)
- PostgreSQL migration with Prisma

---

## 🧱 Project Folder Structure

```
ekhaneikini/
├── backend/ # Node.js + Express + MongoDB API
│ ├── src/
│ └── .env
├── frontend/ # Next.js 14 App Router + Tailwind + Redux
│ ├── app/
│ ├── public/
│ └── .env.local
├── .gitignore
├── README.md

```

---

## 🛡️ Environment Variables

### 🔐 Backend `.env`:

```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
SSL_STORE_ID=your_sslcommerz_store_id
SSL_STORE_PASSWORD=your_sslcommerz_store_password



### Frontend .env.local:
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_key
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id

```

---

##📜 License
This project is for personal and portfolio purposes only. Commercial deployment will require supplier/vendor approval.
