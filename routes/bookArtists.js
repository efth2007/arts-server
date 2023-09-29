const express = require('express');

const router = express.Router();
const pool = require('../db');

/* Artists - Books */

// // Get all:
router.get("/", async (req, res) => {
  try {
      const bookArtists = await pool.query('SELECT * FROM bookArtist')
    
      res.json(bookArtists.rows)
        } catch (err) {
            console.error(err)
        }
})



// Create new:
router.post("/", async (req, res) => {
    const { 
     id_artist,
     id_book
     } = req.body;
 try { const newBookArtist = pool.query(`INSERT INTO bookArtist (
   id_artist,
   id_book
    )
    VALUES
    (
    $1,
    $2)
 `,
 [
   id_artist,
   id_book 
 ]);
 res.json("newBookArtist")
 }
 catch(err){
  console.error("err")
 }
 })
 
 
 // Delete by id (either artist id or book id)
 
 router.delete('/:id', async (req, res) => {
   const { id } = req.params
   try
 {const deleteBookArtist = await pool.query('DELETE FROM bookArtist WHERE id_artist = $1 OR id_book = $1;', [id])
 res.json(deleteBookArtist)
  } catch(err){
   console.error(err)
  } 
 })
 
 // Delete specific book-artist entry
 router.delete('/:artisId/:bookId', async (req, res) => {
   const { artisId, bookId } = req.params
   try
 {const deleteBookArtist = await pool.query('DELETE FROM bookArtist WHERE id_artist = $1 AND id_book = $2', [artisId, bookId])
 res.json(deleteBookArtist)
  } catch(err){
   console.error(err)
  } 
 })
 

// Get all books that mention a specific artist by artistId
 router.get('/books_with_artist/:id', async (req, res) => {
    const { id } = req.params
    try { 
      const books = await pool.query('SELECT * FROM bookArtist WHERE id_artist = $1', [id])
      res.json(books.rows)
    } catch(err){
      console.error(err)
    }
  } )
 
  //Get all artists mentioned in a book by a bookId

 router.get('/artists_in_book/:bookId', async (req, res) => {
  const { bookId } = req.params
  try { 
    const books = await pool.query('SELECT * FROM bookArtist WHERE id_book = $1', [bookId])
    res.json(books.rows)
  } catch(err){
    console.error(err)
  }
} )




module.exports = router;