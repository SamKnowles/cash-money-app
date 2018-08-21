const express = require("express");
const budgetModel = require("../model/budget");
const budgetRouter = express.Router();


budgetRouter.route("/")
    .get((req, res) => {
        budgetModel.find({ userId: req.user._id }, (err, foundBudget) => {
            if (err) return res.status(500).send(err);
            res.status(200).send(foundBudget);
        });
    })

    .post((req, res) => {
        let category = new budgetModel(req.body);
        category.userId = req.user._id;
        category.save((err, savedBudget) => {
            if (err) return res.status(500).send(err);
            return res.status(201).send(savedBudget);
        })
    });

budgetRouter.put("/"), (req, res) => {
    budgetModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedBudget) => {
        if (err) return res.status(500).send(err);
        return res.send(updatedBudget);
    });
};

module.exports = budgetRouter;
