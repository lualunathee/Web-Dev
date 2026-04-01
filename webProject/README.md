BSS's Restaurant — Full-Stack Web Application
This is a full-stack web application built for BSS's Restaurant (based in Almaty). It allows customers to browse the menu, manage a shopping cart, and place orders.

📂 Project Structure
According to the checklist, here is the breakdown of the repository:

BSS_front/ — Frontend application built with Angular. Contains all UI components (Menu, Cart, Reservations).

bss_back/ — Backend server that handles API requests and data logic.

WD Project.postman_collection.json — A complete set of API tests and examples to use in Postman.

README.md — Project documentation.

✨ Features
Digital Menu: View all available dishes and prices.

Order Management: Add or remove items from the cart with real-time total calculation.

Full-Stack Integration: The Angular frontend communicates with the backend API.

API Testing: Pre-configured Postman collection for developers.

🛠 Technologies Used
Frontend: Angular, TypeScript, HTML/CSS, Bootstrap.

Backend: Node.js (Express) or Python (depending on your bss_back logic).

Tools: Postman for API testing, RxJS for state management.

🚀 Installation & Setup
1. Backend Setup
Bash
cd bss_back
npm install
npm start
2. Frontend Setup
Bash
cd BSS_front
npm install
ng serve
Navigate to http://localhost:4200/ to view the application.

📝 Examples & Testing
To test the API without the frontend, import the WD Project.postman_collection.json into Postman.

Example API flow:

GET /menu — Returns a list of all dishes.

POST /order — Sends the cart data to the server.

