# 📘 Product Feedback API Documentation

Base URL: `https://REPLACE-THIS-WITH-YOUR-DEPLOYED-URL.onrender.com`

## Overview

| Resource         | Method | Endpoint                      | Description                              |
|------------------|--------|-------------------------------|------------------------------------------|
| `suggestions`    | GET    | /get-all-suggestions          | Write your description here              |
| `suggestions`    | GET    | /get-suggestions-by-category  | Write your description here              |
| `suggestions`    | POST   | /add-one-suggestion           | Write your description here              |

---

### 🔹 GET `/get-all-suggestions`

**Description:** Returns all suggestions from the suggestions table.

**Example Request URL:**  
`https://REPLACE-THIS-WITH-YOUR-DEPLOYED-URL.onrender.com/get-all-suggestions`


**Example Response:**


```
[
  {
    "id": 1,
    "title": "Add tags for solutions",
    "description": "Easier to search for solutions based on a specific stack.",
    "category": "enhancement"
  },
  {
    "id": 2,
    "title": "Add a dark theme option",
    "description": "It would help people with light sensitivities and who prefer dark mode.",
    "category": "feature"
  },
  {
    "id": 3,
    "title": "Q&A within the challenge hubs",
    "description": "Challenge-specific Q&A would make for easy reference.",
    "category": "feature"
  }
]
```

---

### 🔹 GET `/get-suggestions-by-category/:category`

**Description:** Returns all suggestions that match the category provided in the URL parameter.

**Example Request URL:**
https://REPLACE-THIS-WITH-YOUR-DEPLOYED-URL.onrender.com/get-suggestions-by-category/feature

**Example Response:**

```
[
  {
    "id": 2,
    "title": "Add a dark theme option",
    "description": "It would help people with light sensitivities and who prefer dark mode.",
    "category": "feature"
  },
  {
    "id": 3,
    "title": "Q&A within the challenge hubs",
    "description": "Challenge-specific Q&A would make for easy reference.",
    "category": "feature"
  }
]
```

---

### 🔹 POST `/add-one-suggestion`

**Description:** Adds one new suggestion to the suggestions table using the data sent in the request body.

**Example Request URL:**
https://REPLACE-THIS-WITH-YOUR-DEPLOYED-URL.onrender.com/add-one-suggestion

**Example Request Body:**

```
{
  "title": "Add upvoting",
  "description": "Users should be able to upvote suggestions they agree with.",
  "category": "feature"
} 
```

**Example Response:**

```
{
  "id": 4,
  "title": "Add upvoting",
  "description": "Users should be able to upvote suggestions they agree with.",
  "category": "feature"
}
```
---

