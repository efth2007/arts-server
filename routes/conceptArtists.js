const express = require('express');

const router = express.Router();
const pool = require('../db');

/* Artists - Concepts */

// // Get all:
router.get("/", async (req, res) => {
  try {
      const conceptArtists = await pool.query('SELECT * FROM conceptArtist')
    
      res.json(conceptArtists.rows)
        } catch (err) {
            console.error(err)
        }
})



// Create new:
router.post("/", async (req, res) => {
    const { 
     id_artist,
     id_concept
     } = req.body;
 try { const newConceptArtist = pool.query(`INSERT INTO conceptArtist (
   id_artist,
   id_concept
    )
    VALUES
    (
    $1,
    $2)
 `,
 [
   id_artist,
   id_concept 
 ]);
 res.json("newConceptArtist")
 }
 catch(err){
  console.error("err")
 }
 })
 
 
 // Delete by id (either artist id or concept id)
 
 router.delete('/:id', async (req, res) => {
   const { id } = req.params
   try
 {const deleteConceptArtist = await pool.query('DELETE FROM conceptArtist WHERE id_artist = $1 OR id_concept = $1;', [id])
 res.json(deleteConceptArtist)
  } catch(err){
   console.error(err)
  } 
 })
 
 // Delete specific concept-artist entry
 router.delete('/:artisId/:conceptId', async (req, res) => {
   const { artisId, conceptId } = req.params
   try
 {const deleteConceptArtist = await pool.query('DELETE FROM conceptArtist WHERE id_artist = $1 AND id_concept = $2', [artisId, conceptId])
 res.json(deleteConceptArtist)
  } catch(err){
   console.error(err)
  } 
 })
 

// Get all the concepts of an artist by the artistId
 router.get('/concepts_of_artist/:id', async (req, res) => {
    const { id } = req.params
    try { 
      const concepts = await pool.query('SELECT * FROM conceptArtist WHERE id_artist = $1', [id])
      res.json(concepts.rows)
    } catch(err){
      console.error(err)
    }
  } )
 


// Get all the artists associated with a concept by the conceptId
router.get('/artists_with_concept/:conceptId', async (req, res) => {
  const { conceptId } = req.params
  try { 
    const concepts = await pool.query('SELECT * FROM conceptArtist WHERE id_concept = $1', [conceptId])
    res.json(concepts.rows)
  } catch(err){
    console.error(err)
  }
} )




module.exports = router;