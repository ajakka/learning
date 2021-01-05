const router = require('express').Router();
const User = require('../models/User')

// validation
const Joi = require('joi');

const userSchema = Joi.object({
    name: Joi.string()
        .alphanum()
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{8,64}$')),

    email: Joi.string()
        .email({ tlds: { allow: ['com', 'net'] } })
})

router.post('/register', (req, res) => {

    res.send(userSchema.validate(req.body));

    // const user = new User({
    //     name: req.body.name,
    //     email: req.body.email,
    //     password: req.body.password
    // });
    // user.save()
    //     .then((savedUser) => {
    //         res.send(savedUser)
    //     })
    //     .catch((err) => {
    //         res.status(400).send(err);
    //     });
})

module.exports = router;

