![Logo](./backend/ekhaneikini-25.svg)

# 🛍️ ekhaneikini.com – Custom Dropshipping eCommerce Platform

**ekhaneikini.com** is a full-stack, production-ready dropshipping eCommerce platform built from scratch for the Bangladeshi market with global scalability in mind.

It includes a modern frontend (Next.js 15), robust backend (Node.js, Express, MongoDB), secure authentication, and real **SSLCommerz payment gateway** integration.  
This is a solo project where every single part — from planning to deployment — was done by me.

---

## 🔗 Live Preview

🌐 [Live Site](https://www.ekhaneikini.com) _(Coming Soon)_  
📂 [Frontend Code](./frontend)  
📂 [Backend Code](./backend)  
🎥 [Demo Video](#) _(Coming Soon)_

---

## 🚀 Tech Stack

| Layer      | Technology                                  |
| ---------- | ------------------------------------------- |
| Frontend   | **Next.js 15**, Tailwind CSS, Redux Toolkit |
| Backend    | **Node.js**, Express.js, TypeScript         |
| Database   | **MongoDB** (Planned: PostgreSQL + Prisma)  |
| Auth       | Firebase Authentication                     |
| Payment    | **SSLCommerz** (Live Gateway Integrated)    |
| Deployment | Vercel (Frontend), Railway/Render (Backend) |
| Tools      | Git, GitHub, Postman, .env, TypeScript, Zod |

---

## ✨ Key Features

### 👤 Customer

- Sign up / Login (JWT / Firebase)
- Browse products with filtering
- View product details
- Add to cart, update quantity
- Place order via SSLCommerz payment
- Order confirmation page

### 🛠️ Admin

- Role-based access control
- Product Add/Edit/Delete
- View customer orders
- Update order status (e.g., processing, shipped)

### 🔄 Additional Functionalities

- Cart persist with localStorage
- Middleware: Error handling, Auth guard
- RESTful API with modular structure
- Environment separation (dev/prod)

---

## 📁 Folder Structure

```
ekhaneikini/
├── frontend/ # Next.js 14 App Router Frontend
│ ├── app/
│ ├── components/
│ ├── store/
│ └── .env.local
├── backend/ # Node.js + Express + MongoDB API
│ ├── src/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ └── .env
├── .gitignore
├── README.md

```

---

## 🔐 Environment Variables

### 📦 Backend (.env)

```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
SSL_STORE_ID=your_store_id
SSL_STORE_PASSWORD=your_store_password



### 🖥️ Frontend (.env.local)
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain


```

---

## ✍️ My Contributions

This is a solo project — every part was researched, designed, developed, and deployed by me.

- ✅ Full Research & Planning (R&D)
- 🎨 UI/UX Design (Figma-based Wireframe → Tailwind CSS)
- 💼 Business Branding + Graphics Design
- 💻 Frontend & Backend Architecture
- 🔒 Authentication & Authorization Logic
- 💳 Real Payment Gateway Integration (SSLCommerz)
- 📚 Technical Documentation + Postman + README
- 🌐 Deployment, domain, environment management
- 🧪 Testing, bug fixing, optimization

**This reflects my capability to build a real, scalable, industry-standard eCommerce solution independently.**

---

## 🛣️ Future Improvements

- PostgreSQL + Prisma migration (Aug 2025)
- Seller onboarding panel (B2B dropshipping)
- Stripe & PayPal integration
- Inventory & fulfillment tracking system
- Customer support inbox (in-app messaging)

---

## 👨‍💻 Author

**Abdul Wahed Nur**  
MERN Stack Developer
✉️: <wahednur@gmail.com>
📞: +88 01917839303
[Portfolio](https://wahednur.vercel.app) | [LinkedIn](https://www.linkedin.com/in/wahednur/)
