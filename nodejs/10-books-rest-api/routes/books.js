const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Books = require('../models/books');

router.use(express.json());

// TODO: Pagination
router.get('/pages/:pn', (req, res) => {

});

router.route('/')
    //read
    .get((req, res, next) => {
        Books.find({})
            .limit(64)
            .then((books) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(books);
            })
            .catch((err) => {
                next(err);
            });
    })
    //create
    .post((req, res, next) => {
        Books.create(req.body)
            .then((book) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(book);
            })
            .catch((err) => {
                next(err);
            });
    })
    //update
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('You can\'t update everything');
    })
    //delete
    .delete((req, res, next) => {
        res.statusCode = 403;
        res.end('You can\'t delete everything');
    });

router.route('/:bid')
    //read
    .get((req, res, next) => {
        Books.findById(req.params.bid)
            .then((book) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(book);
            })
            .catch((err) => {
                next(err);
            });
    })
    //create
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('Id can\'t be assined manually');
    })
    //update
    .put((req, res, next) => {
        Books.findByIdAndUpdate(req.params.bid, { $set: req.body }, { new: true })
            .then((book) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(book);
            })
            .catch((err) => {
                next(err);
            });
    })
    //delete
    .delete((req, res, next) => {
        Books.findByIdAndDelete(req.params.bid)
            .then((book) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(book);
            })
            .catch((err) => {
                next(err);
            });
    });

router.route('/:bid/ratings')
    //read
    .get((req, res, next) => {
        Books.findById(req.params.bid
        ).then((book) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(book.rating);
        }).catch((err) => { next(err); });
    })
    //create
    .post((req, res, next) => {
        Books.findByIdAndUpdate(req.params.bid,
            { $addToSet: { rating: req.body } },
            { new: true }
        ).then((book) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(book.rating);
        }).catch((err) => {
            next(err);
        });
    })
    //update
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('You can\'t update everything');
    })
    //delete
    .delete((req, res, next) => {
        Books.findByIdAndUpdate(req.params.bid, { $pull: { rating: {} } })
            .then((book) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(book);
            })
            .catch((err) => {
                next(err);
            });
    });

router.route('/:bid/ratings/:rid')
    //read
    .get((req, res, next) => {
        Books.findById(
            req.params.bid,
            { rating: { $elemMatch: { _id: req.params.rid } } }
        ).then((rating) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(rating);
        }).catch((err) => {
            next(err);
        });
    })
    //create
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('Id can\'t be assined manually');
    })
    //update
    .put((req, res, next) => {
        //TODO: right now this just adds a new sub-document
        Books.updateOne({ _id: req.params.bid, "rating._id": req.params.rid },
            { $set: { "rating.$": req.body } },
            { new: true }
        ).then((book) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(book);
        }).catch((err) => {
            next(err);
        });
    })
    //delete
    .delete((req, res, next) => {
        Books.findByIdAndUpdate(req.params.bid,
            { $pull: { rating: { _id: req.params.rid } } },
            { new: true }
        ).then((book) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(book);
        }).catch((err) => {
            next(err);
        });
    });
    
module.exports = router;