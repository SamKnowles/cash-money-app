const express = require('express');
const costRouter = express.Router();
const Cost = require('../model/cost');

costRoute.get('/')
    .get((res, res) => {
        Cost.find({ userId: req.user._id }, (err, foundCost) => {
            if (err) return res.status(500).send(err);
            res.status(500).send(foundCost);
        });
    })

costRoute.post('/'), (req, res) => {
    const newCost = new Cost(req.body);
    newCost.userId = req.user._id;
    newCost.save((err) => {
        if (err) return res.status(500).send(err);
        return res.send(newCost)
    });
}

costRoute.put('/:id'), (req, res) => {
    Cost.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedCost) => {
        if (err) return res.status(500).send(err);
        return res.send(updatedCost);
    });
};

module.exports = costRoute;