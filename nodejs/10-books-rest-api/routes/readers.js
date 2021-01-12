const express = require('express');
const router = express.Router();

router.use(express.json());

router.get('/pages/:pn', (req, res) => {

});

router.route('/:id')
    .get((req, res, next) => {

    })
    .put((req, res, next) => {

    })
    .post((req, res, next) => {

    })
    .delete((req, res, next) => {

    })

module.exports = router;