const express = require("express");
const router = express.Router();
const pool = require("../db-config/db");

router.get('/', async (req, res) => {
    const services = await pool.query("SELECT * FROM services");
    res.json(services.rows);
});

// router.post('/', async (req, res) => {
//     const services = await pool.query("SELECT * FROM services");
//     res.json(services.rows);
// });

module.exports = router;
