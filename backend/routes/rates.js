const router = require("express").Router();
const pool = require("../db-config/db");

router.get("/", async (req, res) => {
    const rates = await pool.query("SELECT * FROM rates");
    res.json(rates.rows);
});

module.exports = router;