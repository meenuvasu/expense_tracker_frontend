# 💸 Expense Tracker – Project Workflow & Deployment Guide

This project was completed step‑by‑step. Below is the **exact workflow followed**, from development to final presentation.

---

## 1️⃣ Frontend & Backend Development

### Frontend

* Built using **React**
* Features:

  * Add expense
  * View expense list
  * Edit & delete expense
  * Monthly filter and total calculation
* Axios used to connect with backend APIs

### Backend

* Built using **Spring Boot**
* REST APIs for:

  * Create expense
  * Fetch all expenses
  * Update expense
  * Delete expense
  * Filter by month
* Database: **H2 (In‑memory)**

---

## 2️⃣ Push Frontend & Backend to GitHub

* Frontend and backend maintained in **separate repositories**
* Initial commit pushed after successful local testing
* GitHub repositories created and verified

---

## 3️⃣ Proper Pull Request

* Changes were pushed to feature branch
* **Pull Request created** to merge into main branch
* Code reviewed and merged properly

---

## 4️⃣ SonarQube Analysis

* SonarQube used for **static code analysis**
* Checked for:

  * Bugs
  * Code smells
  * Maintainability
* Quality gate verified before proceeding further

  <img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/e3caeaae-095e-4580-b3c5-d905ba4a366d" />
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/e3caeaae-095e-4580-b3c5-d905ba4a366d" />


---

## 5️⃣ Docker Image Creation

* Dockerfile created for backend application
* Backend application containerized using **Docker**
* Docker image built successfully

---

## 6️⃣ Deployment

### Backend Deployment (Render)

* Docker image deployed to **Render**
* Backend API exposed publicly
* API tested using browser / Postman

**Backend URL:**
👉 [https://expense-tracker-backend-6-0eh1.onrender.com](https://expense-tracker-backend-6-0eh1.onrender.com)

---

### Frontend Deployment (Vercel)

* React frontend deployed using **Vercel**
* Environment variable configured for backend API URL
* Build command configured properly

**Build Command:**

```
npm run build
```

**Output Directory:**

```
build successfully
```

## 7️⃣ Custom Domain Configuration

* Free domain obtained using **GitHub Student Developer Pack (Namecheap)**
* Domain connected to Vercel project
* DNS configured using:

  * **A Record** for root domain
  * **CNAME** for www
* SSL certificate enabled automatically by Vercel

**Custom Domain:**
👉 [https://meenu.me](https://meenu.me)

## 8️⃣ Final Live Links

* 🌍 Frontend (Custom Domain):

  https://meenu.me

* 🌍 Frontend (Vercel Default):

  https://expense-tracker-meenakshi.vercel.app/

* 🔗 Backend API:

  https://expense-tracker-backend-6-0eh1.onrender.com

## 🔟 Project Presentation

* Project is **ready for live demo**
* Will be presented in class using **PPT**
* Demo includes:

  * Live website
  * Expense CRUD operations
  * Domain name working
  * Deployment explanation
