const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db-config/db");

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    const users = await pool.query("SELECT * FROM users")
    res.json(users.rows);
})

app.listen(5001, () => {
    console.log("Listening...");
});