🛍️ E-Commerce Frontend (Angular)
================================

This is the frontend of the full-stack E-Commerce system built using Angular. It allows users to Add, View, Update, and Delete products.

🚀 Technologies Used
--------------------
- Angular 17+ (Standalone components)
- HTML5 / CSS3
- Bootstrap (for styling)
- RESTful API integration with Spring Boot backend

📁 Folder Structure
-------------------
frontend/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   └── services/
│   └── assets/
└── angular.json

🛠️ Setup Instructions
----------------------

### Prerequisites
- Node.js and npm installed
- Angular CLI installed globally:
  npm install -g @angular/cli

### Run Frontend
1. Open terminal and go to project folder:
   cd frontend

2. Install dependencies:
   npm install

3. Start Angular server:
   ng serve

4. Open in browser:
   http://localhost:4200

⚠️ Make sure the backend server (Spring Boot) is also running at http://localhost:8090.

🔗 API Endpoint Base URL
------------------------
BASE_URL = http://localhost:8090/api/products

💡 Notes
--------
- Use View All, Add Product, Update Product, and Delete Product features.
- UI will display a message if backend is down.
- Image URLs must be publicly accessible or local images placed in `assets/`.
