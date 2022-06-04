const express = require("express");
const router = express.Router();
const pool = require("../db-config/db");

router.get('/', async (req, res) => {
    const users = await pool.query("SELECT * FROM users");
    res.json(users.rows);
});

module.exports = router;