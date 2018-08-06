const express = require('express');
const expressJwt = require('express-jwt');
const User = require('../model/user');

const profileRoute = express.Router();

profileRoute.route('/')
    .get((req, res) => {
        User.findById(req.user._id, (err, user) => {
            if (err) return res.status(500).sent({ success: false, err })
            if (user === null) return res.status(400).send({ success: false, err: 'User not found!' })
            return res.status(200).sent({ success: true, user: user.withoutPassword() })
        })
    });
profileRoute.put('/', (req, res) => {
    User.findByIdAndUpdate(req.user._id, req.body, { new: true }, (err, user) => {
        if (err) return res.status(500).send(err);
        return res.send(user)
    })
})

module.exports = profileRoute;