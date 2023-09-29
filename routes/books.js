const express = require('express');

const router = express.Router();
const pool = require('../db');


//Get all books
router.get("/", async (req, res) => {
    try {
        const books = await pool.query('SELECT * FROM book')
      
        res.json(books.rows)
          } catch (err) {
              console.error(err)
          }
})


// Get book by id:
router.get('/:id', async (req, res) => {
  const { id } = req.params
  try { 
    const book = await pool.query('SELECT * FROM book WHERE id = $1', [id])
    res.json(book.rows)
  } catch(err){
    console.error(err)
  }
} )

// Create new:
router.post("/", async (req, res) => {
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
 res.json(newBook)
 }
 catch(err){
   console.error("err")
 }
 })


/* Artists - Books */

// Get all:
router.get("/bookArtists", async (req, res) => {
  try {
      const bookArtists = await pool.query('SELECT * FROM bookArtist')
    
      res.json(bookArtists.rows)
        } catch (err) {
            console.error(err)
        }
})



 
 module.exports = router;