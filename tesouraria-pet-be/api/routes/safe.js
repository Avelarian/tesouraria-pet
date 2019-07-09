const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require('../middleware/check-auth');

const Safe = require('../models/safe');

router.get('/latest', checkAuth, (req, res, next) => {
    Safe.find()
        .exec()
        .then(docs => {
            const historic = docs[0].historic;
            if (historic.length > 0) {
                const date = new Date(Math.max.apply(null, historic.map(function(e) {
                    return new Date(e.dt_created);
                })));
                res.status(200).json({
                    date: date
                });
            } else {
                res.status(404).json({
                    message:'No entries found'
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
});

router.post('/', checkAuth, (req, res, next) => {
    const safe = new Safe({
        _id: mongoose.Types.ObjectId(),
        value: req.body.value,
        historic: req.body.historic
    });
    safe.save()
        .then(result => {
            console.log(result);
        })
        .catch(err => console.log(err));
    res.status(201).json({
        message: 'Handling POST requests to /cashier',
        createdEvent: safe
    })
});

router.patch("/", checkAuth, (req, res, next) => {
    const historic = req.body.historic;
    Safe.update({ _id: "5d23ec78c3851f04f705e7ac" }, { $push: { historic: historic } })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Cashier updated'
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.get('/', checkAuth, (req, res, next) => {
    Safe.find()
        .exec()
        .then(doc => {
            console.log(doc);
            if (doc) {
                res.status(200).json(doc);
            } else {
                res.status(404).json({
                    message: 'No valid entry found for provided ID'
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
});

module.exports = router;
