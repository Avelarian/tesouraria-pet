const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Event = require('../models/event');

router.get('/', (req, res, next) => {
    Event.find()
        .exec()
        .then(docs => {
            if (docs.length > 0) {
                console.log(docs);
                res.status(200).json(docs);
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

router.post('/', (req, res, next) => {
    const event = new Event({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        edition: req.body.edition
    });
    event.save()
        .then(result => {
            console.log(result);
        })
        .catch(err => console.log(err));
    res.status(201).json({
        message: 'Handling POST requests to /event',
        createdEvent: event
    })
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    Event.findById(id)
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
