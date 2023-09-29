require("dotenv").config();
const { v4: uuidv4 } = require('uuid')

const express = require('express');
const cors = require('cors')

const pool = require('./db')

const app = express();
const port = process.env.PORT || 8000;

app.use(cors())
app.use(express.json())

app.get("/", (req, res)=>{
    res.send(`Yoo ${process.env.MESSAGE} !!!!!`)
})


const artistRouter = require('./routes/artists');


const bookRouter = require('./routes/books');
const museumRouter = require('./routes/museums');
const bookArtistRouter = require('./routes/bookArtists');
const conceptRouter = require('./routes/concepts')
const conceptArtistRouter = require('./routes/conceptArtists')



app.use('/artists', artistRouter)
app.use('/books', bookRouter)
app.use('/museums', museumRouter)
app.use('/bookArtists', bookArtistRouter)

app.use('/concepts', conceptRouter)
app.use('/conceptArtists', conceptArtistRouter)






app.listen(port, () => console.log(`Listening on port ${port}`))

