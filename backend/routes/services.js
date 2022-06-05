const router = require("express").Router();
const pool = require("../db-config/db");

router.get('/', async (req, res) => {
    const services = await pool.query("SELECT * FROM services");
    res.json(services.rows);
});

router.post('/', async (req, res) => {
    const data = req.body;
    console.log(data);
    const services = await pool.query(
        "INSERT INTO services (name, info, user_id) VALUES ($1, $2, $3) RETURNING *",
        [data.service_name, data.info, data.user_id]
    );
    res.json(services.rows);
});

module.exports = router;
