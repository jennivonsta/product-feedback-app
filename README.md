# 📝 Product Feedback App 

## 📌 Project Description & Purpose

 This project is a full-stack Product Feedback App that allows users to submit feedback, categorize it, and view suggestions in a clean, responsive interface.

The purpose of this project is to demonstrate how to build and deploy a complete full-stack application using a React frontend, an Express server, and a PostgreSQL database. It showcases how data flows from the user interface to an API and is persisted in a database.

## 🚀 Live Site

Here's the link to view the live app: https://product-feedback-app-jen-portfolio.netlify.app/

## 🖼️ Screenshots

<img width="972" height="675" alt="App Shot 1" src="https://github.com/user-attachments/assets/e2bfb318-cb8e-4b5d-8511-4ac2e19d536e" />

<img width="928" height="664" alt="App Shot 2" src="https://github.com/user-attachments/assets/dd1178bd-0ed6-49f2-929d-06d42a3dcf73" />

## ✨ Features

This is what you can do on the app: 

- Submit new feedback through a custom form
- Categorize feedback (Feature, UI, UX, Enhancement, Bug)
- View all submitted suggestions
- Filter suggestions by category
- Form validation with error states
- Responsive design for desktop, tablet, and mobile

## 🛠️ Tech Stack

**Frontend**

- **Languages:** HTML, CSS, JavaScript
- **Framework:** React (Vite)
- **Deployment:** Netlify

**Server/API**

- **Languages:** JavaScript (Node.js)
- **Framework:** Express
- **Deployment:** Render

**Database**

- **Languages:** SQL (PostgreSQL)
- **Deployment:** Neon

## 🔹 API Documentation

These are the API endpoints I built: 

1. GET /get-all-suggestions → Returns all feedback
2. GET /get-suggestions-by-category/:category → Filters feedback by category
3. POST /add-one-suggestion → Adds a new feedback entry

Here's the link to the full API documentation: (https://github.com/jennivonsta/product-feedback-app/blob/main/api-documentation.md)

## 🗄️ Database Schema

Here's a link to my DB Fiddle: https://www.db-fiddle.com/f/7dW1pTV8SNjMnZsSaciJAL/2

Here’s the SQL I used to create my tables:  

```sql
CREATE TABLE suggestions (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  category VARCHAR NOT NULL,
  detail TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 💭 Reflections

**What I learned:** I learned how to build a full-stack application from scratch, including creating RESTful APIs, connecting a PostgreSQL database, handling async data flow, and deploying both the frontend and backend to production environments.

**What I'm proud of:** I’m proud of successfully debugging and connecting all parts of the stack — especially getting the frontend, backend, and database working together and deployed live. I also built a clean, responsive UI that matches design specifications.

**What challenged me:** The most challenging part was debugging server/database issues and understanding how environment variables and deployment differ from local development. Handling API errors and ensuring data consistency also required careful troubleshooting.

**Future ideas for how I'd continue building this project:** 
1. Add user authentication (login/signup)
2. Allow users to upvote feedback
3. Add comments and discussion threads on suggestions

## 🙌 Credits & Shoutouts 

- AnnieCannons Bootcamp, backend instructors Phil & Arianna for guidance and project structure
- Neon for PostgreSQL hosting
- Render for backend deployment
- Netlify for frontend deployment
- React & Express documentation
