const express = require('express');

const router = express.Router();
const pool = require('../db');


//Get all concepts
router.get("/", async (req, res) => {
    try {
        const concepts = await pool.query('SELECT * FROM concept')
      
        res.json(concepts.rows)
          } catch (err) {
              console.error(err)
          }
})



// Get concept by id:
router.get('/:id', async (req, res) => {
    const { id } = req.params
    try { 
      const concept = await pool.query('SELECT * FROM concept WHERE id = $1', [id])
      res.json(concept.rows)
    } catch(err){
      console.error(err)
    }
  } )
  
  // Create new:
  router.post("/", async (req, res) => {
       const { 
          id,
          name, 
          type,
          description,
          wiki_url,
    period_from,
    period_to
      } = req.body;
   try { const newConcept = pool.query(`INSERT INTO concept (
    id,
    name, 
    type,
    description,
    wiki_url,
    period_from,
    period_to
       )
       VALUES
       (
       $1,
       $2,
       $3,
       $4,
       $5,
       $6,
       $7)
   `,
   [
    id,
    name, 
    type,
    description,
    wiki_url,
    period_from,
    period_to
   ]);
   res.json(newConcept)
   }
   catch(err){
     console.error("err")
   }
   })




// Edit:
router.put('/:id', async (req, res) => {
  const { id } = req.params
  const { 
    name, 
    type,
    description,
    wiki_url,
    period_from,
    period_to
  } = req.body;
  try { 
    const editConcept = await pool.query(
      'UPDATE artist SET name=$2, type=$3, description=$4, wiki_url=$5, period_from=$6, period_to=$7 WHERE id=$1;', 
    [
      id,
      name, 
      type,
      description,
      wiki_url,
      period_from,
      period_to
  ])

    res.json(editConcept)
  } catch(err){
    console.error(err)
  }
} )

// Delete:
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try
{const deleteConcept = await pool.query('DELETE FROM concept WHERE id = $1;', [id])
res.json(deleteConcept)
 } catch(err){
  console.error(err)
 } 
})



module.exports = router;