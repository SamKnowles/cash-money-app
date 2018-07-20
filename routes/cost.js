const express = require('express');
const costRouter = express.Router();
const Cost = require('../model/cost');

costRouter.get('/')
    .get((req, res) => {
        Cost.find({ userId: req.user._id }, (err, foundCost) => {
            if (err) return res.status(500).send(err);
            res.status(500).send(foundCost);
        });
    })

costRouter.post('/'), (req, res) => {
    const newCost = new Cost(req.body);
    newCost.userId = req.user._id;
    newCost.save((err) => {
        if (err) return res.status(500).send(err);
        return res.send(newCost)
    });
}

costRouter.put('/:id'), (req, res) => {
    Cost.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedCost) => {
        if (err) return res.status(500).send(err);
        return res.send(updatedCost);
    });
};

module.exports = costRouter;