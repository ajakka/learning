var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Favorites = require('../models/favorites');

var favoriteRouter = express.Router();
favoriteRouter.use(bodyParser.json());

var Verify = require('./verify');

favoriteRouter.route('/')
    .get(Verify.verifyOrdinaryUser, (req, res, next) => {
        Favorites.find({ 'postedBy': req.decoded._doc._id })
            .populate('dishes')
            .populate('postedBy')
            .exec((err, favorites) => {
                if (err) throw err;
                res.json(favorites);
            });
    })

    .post(Verify.verifyOrdinaryUser, (req, res, next) => {
        Favorites.findOne({ 'postedBy': req.decoded._doc._id }, (err, favorite) => {
            if (err) throw err;
            if (!favorite) {
                Favorites.create(req.body, (err, favorite) => {
                    if (err) throw err;
                    console.log('Favorite created!');
                    favorite.postedBy = req.decoded._doc._id;
                    favorite.dishes.push(req.body._id);
                    favorite.save((err, favorite) => {
                        if (err) throw err;
                        res.json(favorite);
                    });
                });
            } else {
                var dish = req.body._id;

                if (favorite.dishes.indexOf(dish) == -1) {
                    favorite.dishes.push(dish);
                }
                favorite.save((err, favorite) => {
                    if (err) throw err;
                    res.json(favorite);
                });
            }
        });
    })

    .delete(Verify.verifyOrdinaryUser, (req, res, next) => {
        Favorites.remove({ 'postedBy': req.decoded._doc._id }, (err, resp) => {
            if (err) throw err;
            res.json(resp);
        });
    });

favoriteRouter.route('/:dishId')

    .delete(Verify.verifyOrdinaryUser, (req, res, next) => {
        Favorites.findOneAndUpdate({ 'postedBy': req.decoded._doc._id }, { $pull: { dishes: req.params.dishId } }, function (err, favorite) {
            if (err) throw err;
            Favorites.findOne({ 'postedBy': req.decoded._doc._id }, (err, favorite) => {
                res.json(favorite);
            });
        });
    });


module.exports = favoriteRouter;
