const express = require('express');
const budgetRouter = express.Router();
const budgetModel = require('../model/budget');


budgetRouter.post("/", (req, res) => {
    const category = new budgetModel(req.body);
    category.userId = req.user._id;
    category.save((err, savedBudget) => {
        if (err) return res.status(500).send(err);
        return res.status(201).send(savedBudget);
    })
});


budgetRouter.get((req, res) => {
    category.find({ userId: req.user._id }, (err, foundBudget) => {
        if (err) return res.status(500).send(err);
        res.status(200).send(foundBudget);
    });
})

budgetRouter.get('/', (req, res) => {
    budget.findOne({ userId: req.user._id }, (err, foundBudget) => {
        if (err) return res.status(500).send(err);
        res.status(200).send(foundBudget);
    });
});


budgetRouter.put('/:id'), (req, res) => {
    category.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedBudget) => {
        if (err) return res.status(500).send(err);
        return res.send(updatedBudget);
    });
};

module.exports = budgetRouter;