const express = require('express');
const router = express.Router();

router.route('/')
    .post((req, res) => {
        res.end(`post promotions`);
    })
    .get((req, res) => {
        res.end(`get promotions`);
    })
    .put((req, res) => {
        res.end(`put promotions`);
    })
    .delete((req, res) => {
        res.end(`delete promotions`);
    });

router.route('/:id')
    .post((req, res) => {
        res.end(`post promotions id=${req.params.id}`);
    })
    .get((req, res) => {
        res.end(`get promotions id=${req.params.id}`);
    })
    .put((req, res) => {
        res.end(`put promotions id=${req.params.id}`);
    })
    .delete((req, res) => {
        res.end(`delete promotions id=${req.params.id}`);
    });

module.exports = router;