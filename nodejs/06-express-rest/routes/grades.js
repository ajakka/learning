const express = require('express');
const router = express.Router();

router.use(express.json());

/**
 * Creating grades
 */
router.post('/', (req, res) => {
    // create a grade
    res.end(`Added grade ${req.body.name}`);
})

/**
 * Reading grades
 */
router.get('/page/:page', (req, res) => {
    // read a page of grades
    res.end(`Page ${req.params.page} containing grades`);
})

router.get('/:id', (req, res) => {
    // read grade with specific id
    res.end(`Grade with id: ${req.params.id}`);
})

router.get('/', (req, res) => {
    // read all grades
    res.end('All grades');
})

/**
 * Updating grades
 */
router.put('/:id', (req, res) => {
    // update a grade
    res.end(`Updated grade with id ${req.params.id} and data ${req.body.name}`);
});

/**
 * Deleting grades
 */
router.delete('/:id', (req, res) => {
    //delete a grade
    res.end(`Deleted grade with id ${req.params.id}`);
})

module.exports = router;