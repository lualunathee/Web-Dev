BSS's Restaurant — Full-Stack Web Application

This is a comprehensive web application for **BSS's Restaurant**, a fictional dining establishment based in Almaty. The project is built as a **Full-Stack** solution, featuring a modern Angular frontend and a robust backend API.

---

📂 Project Structure
To satisfy the documentation requirements, the repository is organized as follows:

* **`BSS_front/`** — **Angular** application. Contains UI components for the Menu, Cart, and Reservations.
* **`bss_back/`** — **Backend** server. Manages the API logic and order processing.
* **`WD Project.postman_collection.json`** — **API Documentation**. A complete collection of requests for testing in Postman.
* **`README.md`** — Project overview and setup instructions.

---

## ✨ Key Features
* **Interactive Menu:** Browse dishes with real-time updates.
* **Order System:** Add/remove items from the shopping cart.
* **Total Calculation:** Automatic price calculation using RxJS on the frontend.
* **Reservations:** A dedicated form for table booking.
* **API Testing:** Pre-configured Postman environment for developers.

---

## 🛠 Technologies Used
* **Frontend:** Angular (v16+), TypeScript, HTML/CSS, Bootstrap.
* **Backend:** Node.js (Express) / Python (API Service).
* **Communication:** RESTful API with JSON data exchange.

---

## 🚀 Installation & Setup

### 1. Backend Service
```bash
cd bss_back
npm install
npm start
```

### 2. Frontend Application
```bash
cd BSS_front
npm install
ng serve
```
*Once started, navigate to **http://localhost:4200/** to view the application.*

---

## 📝 Examples & Testing
You can test the system functionality using the provided **Postman Collection**:
1.  Import `WD Project.postman_collection.json` into Postman.
2.  Run the `GET /menu` request to see the dish list.
3.  Run the `POST /order` request to simulate a customer checkout.
