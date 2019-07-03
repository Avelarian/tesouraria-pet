const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const EventHistorical = require('../models/eventHistorical');
const User = require('../models/user');

var itemsProcessed = 0;

router.get('/', (req, res, next) => {
   res.status(200).json({
      message: 'Historical Event were fetched'
   });
});

router.post('/', (req, res, next) => {
    const eventHistorical = new EventHistorical({
        _id: mongoose.Types.ObjectId(),
        user: req.body.user,
        event: req.body.event,
        value: req.body.value,
        main_reason: req.body.main_reason,
        description: req.body.description,
        from_place: req.body.from_place,
        to_place: req.body.to_place
    })
    eventHistorical.save()
        .then(result => {
            console.log(result);
        })
        .catch(err => console.log(err));
    res.status(201).json({
        message: 'Handling POST requests to /userHistorical',
        createdHistorical: eventHistorical
    })
});

router.get('/:id', (req, res, next) => {
    res.status(200).json({
        message: 'Historical Event details',
        eventId: req.params.id
    });
});

router.delete('/:id', (req, res, next) => {
    res.status(200).json({
        message: 'Historical Event deleted',
        eventId: req.params.id
    });
});

router.get('/event/:eventId', (req, res, next) => {
    const id = req.params.eventId;
    EventHistorical.find({ event: id })
        .exec()
        .then(doc => {
            doc.forEach(d => {
                User.findById(d.user)
                    .exec()
                    .then(user => {
                        console.log(user);
                        d.user = user;
                        itemsProcessed++;
                        if(itemsProcessed === doc.length) {
                            if (doc) {
                                console.log(doc);
                                res.status(200).json(doc);
                            } else {
                                res.status(404).json({
                                    message: 'No valid entry found for provided ID'
                                });
                            }
                        }
                    })
                    .catch();
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
});

module.exports = router;
