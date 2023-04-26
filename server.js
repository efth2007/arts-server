require("dotenv").config();

const express = require('express');
const pool = require('./db')

//const contactRoutes = require('./src/contact/routes');



const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res)=>{
    res.send(`Yoo ${process.env.MESSAGE} !!!!!`)
})

//Get all artists
app.get("/artists", async (req, res) => {
    try {
        const artists = await pool.query('SELECT * FROM artist')
      
        res.json(artists.rows)
          } catch (err) {
              console.error(err)
          }
})

//Get all museums
app.get("/museums", async (req, res) => {
    try {
        const museums = await pool.query('SELECT * FROM museum')
      
        res.json(museums.rows)
          } catch (err) {
              console.error(err)
          }
})


app.listen(port, () => console.log(`Listening on port ${port}`))
