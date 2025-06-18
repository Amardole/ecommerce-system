🛒 E-Commerce Backend (Spring Boot)
==================================

This is the backend REST API built using Spring Boot for managing products in the E-Commerce system.

🚀 Technologies Used
--------------------
- Java 17+
- Spring Boot 3+
- Spring Web
- Hibernate / JPA
- PostgreSQL
- Maven
- CORS enabled for Angular frontend

![image](https://github.com/user-attachments/assets/1764fb4e-586a-4b1a-ad6a-e907dd96688a)

🛠️ Setup Instructions
----------------------

### Prerequisites
- Java JDK 17+
- PostgreSQL installed & running
- IDE like IntelliJ or VS Code
- Maven installed

⚙️ Configuration
----------------

application.properties
----------------------
spring.datasource.url=jdbc:postgresql://localhost:5432/ecommerce
spring.datasource.username=postgres
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

server.port=8090

▶️ Run the Backend
------------------
1. Open terminal and go to backend folder:
   cd backend

2. Run the project:
   mvn spring-boot:run

3. Server will start at:
   http://localhost:8090

📡 API Endpoints
----------------
| Method | Endpoint              | Description          |
|--------|-----------------------|----------------------|
| GET    | /api/products         | Get all products     |
| GET    | /api/products/{id}    | Get product by ID    |
| POST   | /api/products         | Add new product      |
| PUT    | /api/products/{id}    | Update product       |
| DELETE | /api/products/{id}    | Delete product by ID |

💡 Notes
--------
- Backend is CORS enabled to allow requests from Angular frontend.
- PostgreSQL schema `ecommerce` must be created manually or use any existing one.
- You can test API using Postman or directly from Angular frontend.
