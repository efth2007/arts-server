const express = require('express');

const router = express.Router();
const pool = require('../db');

// Get all artists:
router.get("/", async (req, res) => {
    try {
        const artists = await pool.query('SELECT * FROM artist')
        res.json(artists.rows)
          } catch (err) {
              console.error(err)
          }
})

// Get by id:
router.get("/:id", async (req, res) => {
    const { id } = req.params
    try { 
      const artist = await pool.query('SELECT * FROM artist WHERE id = $1', [id])
      res.json(artist.rows)
    } catch(err){
      console.error(err)
    }
  } )


  // Create new:
router.post("/", async (req, res) => {
    // const id = uuidv4();
    const { 
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
  console.error(err)
}
})

// Edit:
router.put('/:id', async (req, res) => {
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

    if (first_name.length > 255){
      return res.status(400).json({ error: 'First name is too long. Max 255 characters allowed.' });
    }
      res.json(editArtist)
    } catch(err){
      console.error(err)
    }
  } )

  // Delete:
router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try
  {const deleteArtist = await pool.query('DELETE FROM artist WHERE id = $1;', [id])
  res.json(deleteArtist)
   } catch(err){
    console.error(err)
   } 
})


module.exports = router;