# Authentication System 
![WhatsApp Image 2025-06-27 at 23 22 48_e37aa675](https://github.com/user-attachments/assets/8ab18c3c-463c-4bd0-8428-b29149d26d1c)

# Role Based Access Control
![WhatsApp Image 2025-06-28 at 00 41 53_eec27301](https://github.com/user-attachments/assets/7b52ad9c-7a86-4cee-affd-330e1b672e97)

# Database Schema 
![image](https://github.com/user-attachments/assets/c62ab55b-7d29-4023-b8da-11454adecad8)






# 🔐Authentication and Authorization Backend

A clean, modular authentication system built with **Node.js**, **Express**, and **MongoDB**, supporting secure user registration, login, and protected routes using **JWT** and **bcrypt**. This project demonstrates best practices in backend architecture, request validation, and role-based access control.

---

## 🚀 Features

- ✅ Secure **Signup** & **Login**
- ✅ Password hashing with **bcrypt**
- ✅ **JWT-based** authentication
- ✅ **Get Current User** (`/auth/me`) endpoint
- ✅ Middleware for protected routes
- ✅ Centralized error handling
- ✅ Input validation (middleware schema or manual checks)
- ✅ Optional **role-based** access (admin/subadmin)

---

## 🧰 Tech Stack

| Tech         | Description                            |
|--------------|----------------------------------------|
| **Node.js**  | JavaScript runtime                     |
| **Express.js**| Web framework                          |
| **MongoDB**   | NoSQL database                        |
| **Mongoose**  | ODM for MongoDB                        |
| **JWT**       | JSON Web Token for auth                |
| **bcryptjs**  | Secure password hashing                |

---

## 📂 Project Structure
```
root
├── 📁 controllers # Business logic (login, register,chnageUserName , changeUserEmail etc.)
├── 📁 database # MongoDB connection
├── 📁 middlewares # Auth & role middlewares
├── 📁 models # Mongoose schemas/models
├── 📁 routes # API route definitions
├── 📄 server.js # App entry point
├── 📄 .env # Environment variables
```

---

## 🔄 API Endpoints

### 1. 🔐 Register User


**Request Body:**
```

    "username" : "Saptarshi2003",
    "useremail" : "saptarshi2003@gmail.com",
    "userpassword" : "12345",
    "userrole" : "subadmin"

```
## 2.  🔐 Login User
**Request Body:**

```
"useremail" : "saptarshi2003@gmail.com",
"userpassword" : "12345"
```
# 3. Clone the repo
**Git Clone**
```
https://github.com/Sapta-Dev27/Authentication_Authorization_System_Backend.git
```

# 5. Install dependencies
```
npm install
```

# 6. Setup your .env
```
MONGO_URL=MONGO_URL
PORT=8001
JWT_SECRET_KEY=saptadev27
JWT_EXPIRE_TIME=1d
```

# 7. Run the server 

```
npm start
```

## 📄 License

[MIT](https://choosealicense.com/licenses/mit/)

---


