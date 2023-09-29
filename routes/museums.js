const express = require('express');

const router = express.Router();
const pool = require('../db');


//Get all museums
router.get("/", async (req, res) => {
    try {
        const museums = await pool.query('SELECT * FROM museum')
      
        res.json(museums.rows)
          } catch (err) {
              console.error(err)
          }
})


module.exports = router;