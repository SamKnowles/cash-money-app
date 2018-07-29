const express = require('express');
const costRouter = express.Router();
const costModel = require('../model/cost');

costRouter.route('/')

    .post((req, res) => {
        let category = new costModel(req.body);
        // newCost.userId = req.user._id;
        category.save(req.body, (err, savedBudget) => {
            if (err) return res.status(500).send(err);
            res.send(savedBudget);
        });
    })

    .get((req, res) => {
        costModel.find({ userId: req.user._id }, (err, foundCost) => {
            if (err) return res.status(500).send(err);
            res.status(500).send(foundCost);
        });
    })



costRouter.put('/:id'), (req, res) => {
    costModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedCost) => {
        if (err) return res.status(500).send(err);
        return res.send(updatedCost);
    });
};

module.exports = costRouter;