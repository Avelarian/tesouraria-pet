const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const EventHistorical = require('../models/eventHistorical');
const User = require('../models/user');
const checkAuth = require('../middleware/check-auth');

var itemsProcessed = 0;

router.get('/', checkAuth, (req, res, next) => {
   res.status(200).json({
      message: 'Historical Event were fetched'
   });
});

router.post('/', checkAuth, (req, res, next) => {
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

router.get('/:id', checkAuth, (req, res, next) => {
    res.status(200).json({
        message: 'Historical Event details',
        eventId: req.params.id
    });
});

router.delete('/:id', checkAuth, (req, res, next) => {
    res.status(200).json({
        message: 'Historical Event deleted',
        eventId: req.params.id
    });
});

router.get('/event/:eventId', checkAuth, (req, res, next) => {
    const id = req.params.eventId;
    EventHistorical.find({ event: id })
        .exec()
        .then(docs => {
            if (docs.length > 0) {
                res.status(200).json(docs);
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

router.get('/cashier/historical', checkAuth, (req, res, next) => {
    EventHistorical.find({ $or: [ {'from_place': 'Caixinha'}, {'to_place': 'Caixinha'} ]})
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

router.get('/safe/historical', checkAuth, (req, res, next) => {
    EventHistorical.find({ $or: [ {'from_place': 'Cofre'}, {'to_place': 'Cofre'} ]})
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

router.get('/bankAccount/historical', checkAuth, (req, res, next) => {
    EventHistorical.find({ $or: [ {'from_place': 'Conta Bancaria'}, {'to_place': 'Conta Bancaria'} ]})
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
