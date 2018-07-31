const express = require('express');
const budgetRouter = express.Router();
const budgetModel = require('../model/budget');

budgetRouter.route('/')
    .post((req, res) => {
        let category = new budgetModel(req.body);
        category.user = req.user._id;
        category.save(req.body, (err, savedBudget) => {
            if (err) return res.status(500).send(err);
            res.send(savedBudget);
        });
    })

    .get((req, res) => {
        category.find({ userId: req.user._id }, (err, foundBudget) => {
            if (err) return res.status(500).send(err);
            res.status(500).send(foundBudget);
        });
    })


budgetRouter.put('/:id'), (req, res) => {
    category.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedBudget) => {
        if (err) return res.status(500).send(err);
        return res.send(updatedBudget);
    });
};

module.exports = budgetRouter;