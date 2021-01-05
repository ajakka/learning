const express = require('express');
const router = express.Router();

router.use(express.json());

/**
 * Creating students
 */
router.post('/', (req, res) => {
    // create a student
    res.end(`Added student ${req.body.name}`);
})

/**
 * Reading students
 */
router.get('/page/:page', (req, res) => {
    // read a page of students
    res.end(`Page ${req.params.page} containing students`);
})

router.get('/:id', (req, res) => {
    // read student with specific id
    res.end(`Student with id: ${req.params.id}`);
})

router.get('/', (req, res) => {
    // read all students
    res.end('All students');
})

/**
 * Updating students
 */
router.put('/:id', (req, res) => {
    // update a student
    res.end(`Updated student with id ${req.params.id} and data ${req.body.name}`);
});

/**
 * Deleting students
 */
router.delete('/:id', (req, res) => {
    //delete a student
    res.end(`Deleted student with id ${req.params.id}`);
})

module.exports = router;