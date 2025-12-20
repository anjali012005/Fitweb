# 🏋️‍♂️ Fitweb – Fitness Tracker Application

Fitweb is a microservices-based Fitness Tracker Application that helps users track their physical activities, calculate burned calories, and receive AI-powered fitness recommendations based on their activity data.

The application leverages Google Gemini API for intelligent suggestions and Keycloak OAuth2 for secure authentication and authorization.

<img width="1872" height="962" alt="image" src="https://github.com/user-attachments/assets/5c9d61ee-5d31-406d-a478-fb5ca02fdd33" />
<img width="1900" height="955" alt="image" src="https://github.com/user-attachments/assets/9872e1fb-32a9-43e9-b0c5-86052fc01e8d" />


🚀 Features

🧾 Activity Tracking<br/>

Users can log activities (e.g., running, walking, cycling)<br/>
Store calories burned and activity details<br/>

🤖 AI-Based Fitness Recommendations<br/>

Personalized suggestions based on user activity data<br/>
Powered by Google Gemini API<br/>

🔐 Secure Authentication<br/>

OAuth2 authentication using Keycloak<br/>
Token-based authorization across microservices<br/>

# 🐳 Containerized & Messaging<br/>
Deployed using 𝗗𝗼𝗰𝗸𝗲𝗿 (2 images: 𝗞𝗲𝘆𝗰𝗹𝗼𝗮𝗸 & microservices)<br/>
Inter-service messaging handled via 𝗥𝗮𝗯𝗯𝗶𝘁𝗠𝗤<br/>

# 🧩 Microservices Architecture<br/>

Independent and scalable services<br/>
API Gateway for centralized routing<br/>
Service discovery using Eureka<br/>

# 🌐 Modern Frontend

Separate frontend application for user interaction

# 🏗️ System Architecture <br/>
```
Frontend → API Gateway → Microservices → AI Service
                      ↓
                   Keycloak
```
# 🧩 Microservices Overview<br/>
Service Name	Description<br/>
User Service	Manages user data and profiles<br/>
Activity Service	Handles activity tracking and calorie data<br/>
AI Service	Generates fitness recommendations using Google Gemini API<br/>
Gateway	Central entry point for routing requests<br/>
Eureka Server	Service discovery<br/>
Config Server	Centralized configuration management<br/>
Frontend	User-facing web application<br/>

# 🛠️ Tech Stack<br/>
Backend<br/>
Java<br/>
Spring Boot<br/>
Spring Cloud<br/>
Spring Security (OAuth2)<br/>
Keycloak<br/>
Eureka Discovery Server<br/>
API Gateway<br/>

Frontend<br/>
JavaScript<br/>
React (Fitness App Frontend)<br/>
AI & Authentication<br/>
Google Gemini API<br/>
Keycloak (OAuth2 / OpenID Connect)<br/>

Other Tools<br/>
Docker (optional)<br/>
Git & GitHub<br/>

# 🔐 Authentication Flow<br/>

User logs in via Keycloak<br/>
OAuth2 access token is issued<br/>
Token is validated by the API Gateway<br/>
Requests are forwarded to respective microservices<br/>

🤖 AI Recommendation Flow

User logs an activity<br/>
Activity data is sent to AI Service<br/>
AI Service processes data using Google Gemini API<br/>
Personalized suggestions are returned to the user<br/>

# 📂 Project Structure<br/>
```
Fitweb/
│── activityservice/
│── aiservice/
│── userservice/
│── gateway/
│── eureka/
│── configserver/
│── fitness-app-frontend/
│── README.md
```

# ⚙️ Setup & Installation (High-Level)

Clone the repository
```
git clone https://github.com/anjali012005/Fitweb.git
```
Start Keycloak and configure OAuth2 clients

# Start services in order:

Config Server<br/>

Eureka Server<br/>

User Service<br/>

Activity Service<br/>

AI Service<br/>

API Gateway<br/>

Run the frontend application<br/>

# 🌟 Future Enhancements<br/>

Diet & nutrition recommendations<br/>

Activity analytics dashboard<br/>

Wearable device integration<br/>

Cloud deployment (AWS/GCP)<br/>

Mobile application support<br/>

# 💛 Author<br/>
Anjali Daharwal<br/>
CS Student | Web Developer | Java Developer | Full-Stack Developer
