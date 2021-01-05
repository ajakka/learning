const express = require('express');
const router = express.Router();

router.route('/')
    .post((req, res) => {
        res.end(`post leaders`);
    })
    .get((req, res) => {
        res.end(`get leaders`);
    })
    .put((req, res) => {
        res.end(`put leaders`);
    })
    .delete((req, res) => {
        res.end(`delete leaders`);
    });

router.route('/:id')
    .post((req, res) => {
        res.end(`post leaders id=${req.params.id}`);
    })
    .get((req, res) => {
        res.end(`get leaders id=${req.params.id}`);
    })
    .put((req, res) => {
        res.end(`put leaders id=${req.params.id}`);
    })
    .delete((req, res) => {
        res.end(`delete leaders id=${req.params.id}`);
    });

module.exports = router;