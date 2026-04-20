// -------------------------------
// 1. IMPORT PACKAGES
// -------------------------------

import express from "express";
import pg from "pg";
import config from "./config.js";


// -------------------------------
// 2. CREATE SERVER
// -------------------------------

const app = express();
const port = 3000;

// this lets us read JSON data from requests (like POST)
app.use(express.json());


// -------------------------------
// 3. CONNECT TO DATABASE
// -------------------------------

const db = new pg.Pool({
  connectionString: config.DATABASE_URL,
  ssl: true,
});


// -------------------------------
// 4. HELPER FUNCTIONS
// -------------------------------

// helper 1: get all suggestions
// this function runs a SQL query and returns ALL rows
async function getAllSuggestions() {
  const result = await db.query(`
    SELECT * FROM suggestions;
  `);

  return result.rows; // return the data
}


// helper 2: get suggestions by category
// this uses a URL parameter (category) to filter results
async function getSuggestionsByCategory(category) {
  const result = await db.query(
    `
    SELECT * FROM suggestions
    WHERE category = $1;
    `,
    [category]
  );

  return result.rows;
}


// helper 3: add one suggestion
// this inserts a new row into the database
async function addOneSuggestion(title, description, category) {
  const result = await db.query(
    `
    INSERT INTO suggestions (title, description, category)
    VALUES ($1, $2, $3)
    RETURNING *;
    `,
    [title, description, category]
  );

  return result.rows[0]; // return the new row
}


// -------------------------------
// 5. API ENDPOINTS
// -------------------------------

// test route
app.get("/", (req, res) => {
    res.send("Server is running!");
  });
  
  // GET all suggestions
  app.get("/get-all-suggestions", async (req, res) => {
    try {
      const data = await getAllSuggestions();
      res.json(data);
    } catch (error) {
      console.error("Error in /get-all-suggestions:", error);
      res.status(500).json({ error: "Failed to get suggestions" });
    }
  });
  
  // GET suggestions by category
  app.get("/get-suggestions-by-category/:category", async (req, res) => {
    try {
      const category = req.params.category;
      const data = await getSuggestionsByCategory(category);
      res.json(data);
    } catch (error) {
      console.error("Error in /get-suggestions-by-category:", error);
      res.status(500).json({ error: "Failed to get suggestions by category" });
    }
  });
  
  // POST add one suggestion
  app.post("/add-one-suggestion", async (req, res) => {
    try {
      const { title, description, category } = req.body;
  
      const newSuggestion = await addOneSuggestion(
        title,
        description,
        category
      );
  
      res.json(newSuggestion);
    } catch (error) {
      console.error("Error in /add-one-suggestion:", error);
      res.status(500).json({ error: "Failed to add suggestion" });
    }
  });
  

// -------------------------------
// 6. START SERVER
// -------------------------------

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});