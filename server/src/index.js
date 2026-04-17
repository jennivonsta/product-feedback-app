// -------------------------------
// 1. IMPORT PACKAGES
// -------------------------------

import express from "express";
import pg from "pg";


// -------------------------------
// 2. CREATE SERVER
// -------------------------------

const app = express();
const port = 3000;

// this lets us read JSON data from requests (like POST)
app.use(express.json());


// -------------------------------
// 3. CONNECT TO DATABASE (Neon)
// -------------------------------

// paste your Neon connection string below
const db = new pg.Pool({
  connectionString: "postgresql://neondb_owner:npg_VkYHmr8vdfA7@ep-sweet-scene-an39bif2-pooler.c-6.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
  ssl: {
    rejectUnauthorized: false,
  },
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
    [category] // this replaces $1 safely
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


// test route (just to make sure server works)
app.get("/", (req, res) => {
  res.send("Server is running!");
});


// GET all suggestions
app.get("/get-all-suggestions", async (req, res) => {
  const data = await getAllSuggestions();
  res.json(data); // send data to frontend
});


// GET suggestions by category
app.get("/get-suggestions-by-category/:category", async (req, res) => {
  const category = req.params.category; // grab from URL
  const data = await getSuggestionsByCategory(category);
  res.json(data);
});


// POST add one suggestion
app.post("/add-one-suggestion", async (req, res) => {
  // grab data from request body
  const { title, description, category } = req.body;

  const newSuggestion = await addOneSuggestion(
    title,
    description,
    category
  );

  res.json(newSuggestion);
});


// -------------------------------
// 6. START SERVER
// -------------------------------

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});