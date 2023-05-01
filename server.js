require("dotenv").config();
const { v4: uuidv4 } = require('uuid')

const express = require('express');
const pool = require('./db')

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json())

app.get("/", (req, res)=>{
    res.send(`Yoo ${process.env.MESSAGE} !!!!!`)
})

/* Artists */

// Get all:
app.get("/artists", async (req, res) => {
    try {
        const artists = await pool.query('SELECT * FROM artist')
      
        res.json(artists.rows)
          } catch (err) {
              console.error(err)
          }
})

// Get by id:
app.get('/artists/:id', async (req, res) => {
    const { id } = req.params
    try { 
      const artist = await pool.query('SELECT * FROM artist WHERE id = $1', [id])
      res.json(artist.rows)
    } catch(err){
      console.error(err)
    }
  } )


// Create new:
app.post("/artists", async (req, res) => {
    const id = uuidv4();
    const { 
        first_name,
        last_name, 
        known_as, 
        born_on, 
        died_on, 
        gender, 
        place_of_birth, 
        place_of_death, 
        nationality, 
        wiki_url,
        image_url, 
        bio, 
        notes 
    } = req.body;
try { const newArtist = pool.query(`INSERT INTO artist (
    id, first_name, last_name, known_as, born_on, died_on, gender, place_of_birth, place_of_death, nationality, 
    wiki_url, image_url, bio, notes )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)`,
[
    id,
    first_name, 
    last_name, 
    known_as, 
    born_on, 
    died_on, 
    gender, 
    place_of_birth, 
    place_of_death, 
    nationality, 
    wiki_url,
    image_url, 
    bio, 
    notes 
]);
res.json(newArtist)
}
catch(err){
  console.error("err")
}
})


// Edit:

// edit a task
app.put('/artists/:id', async (req, res) => {
    const { id } = req.params
    const { 
        first_name,
        last_name, 
        known_as, 
        born_on, 
        died_on, 
        gender, 
        place_of_birth, 
        place_of_death, 
        nationality, 
        wiki_url,
        image_url, 
        bio, 
        notes 
    } = req.body;
    try { 
      const editArtist = await pool.query(
        'UPDATE artist SET first_name=$2, last_name=$3, known_as=$4, born_on=$5, died_on=$6, gender=$7, place_of_birth=$8, place_of_death=$9, nationality=$10, wiki_url=$11, image_url=$12, bio=$13, notes=$14 WHERE id=$1;', 
      [id,
        first_name,
        last_name, 
        known_as, 
        born_on, 
        died_on, 
        gender, 
        place_of_birth, 
        place_of_death, 
        nationality, 
        wiki_url,
        image_url, 
        bio, 
        notes 
    ])
      res.json(editArtist)
    } catch(err){
      console.error(err)
    }
  } )



// Delete:

app.delete('/artists/:id', async (req, res) => {
    const { id } = req.params
    try
  {const deleteArtist = await pool.query('DELETE FROM artist WHERE id = $1;', [id])
  res.json(deleteArtist)
   } catch(err){
    console.error(err)
   } 
})

// app.use('/artists', routes)


//Get all museums
app.get("/museums", async (req, res) => {
    try {
        const museums = await pool.query('SELECT * FROM museum')
      
        res.json(museums.rows)
          } catch (err) {
              console.error(err)
          }
})

//Get all books
app.get("/books", async (req, res) => {
    try {
        const books = await pool.query('SELECT * FROM book')
      
        res.json(books.rows)
          } catch (err) {
              console.error(err)
          }
})

// Create new:
app.post("/books", async (req, res) => {
    // const id = uuidv4();
     const { 
        id,
        title, 
        author,
        first_published,
        description
    } = req.body;
 try { const newBook = pool.query(`INSERT INTO book (
        id,
        title, 
        author,
        first_published,
        description 
     )
     VALUES
     (
     $1,
     $2,
     $3,
     $4,
     $5)
 `,
 [
    id,
    title, 
    author,
    first_published,
    description 
 ]);
 res.json("newArtist")
 }
 catch(err){
   console.error("err")
 }
 })
 
 





app.listen(port, () => console.log(`Listening on port ${port}`))

