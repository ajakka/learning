const express = require('express');
const router = express.Router();

router.route('/')
    .post((req, res) => {
        res.end(`post dishes`);
    })
    .get((req, res) => {
        res.end(`get dishes`);
    })
    .put((req, res) => {
        res.end(`put dishes`);
    })
    .delete((req, res) => {
        res.end(`delete dishes`);
    });

router.route('/:id')
    .post((req, res) => {
        res.end(`post dishes id=${req.params.id}`);
    })
    .get((req, res) => {
        res.end(`get dishes id=${req.params.id}`);
    })
    .put((req, res) => {
        res.end(`put dishes id=${req.params.id}`);
    })
    .delete((req, res) => {
        res.end(`delete dishes id=${req.params.id}`);
    });

module.exports = router;