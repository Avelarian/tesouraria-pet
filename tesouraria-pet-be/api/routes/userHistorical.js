const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const checkAuth = require('../middleware/check-auth');
const UserHistorical = require('../models/userHistorical');

router.get('/', checkAuth, (req, res, next) => {
    UserHistorical.find()
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
    const userHistorical = new UserHistorical({
        _id: mongoose.Types.ObjectId(),
        user: req.body.user,
        value: req.body.value,
        main_reason: req.body.main_reason,
        description: req.body.description,
        from_place: req.body.from_place,
        to_place: req.body.to_place
    })
    userHistorical.save()
        .then(result => {
        console.log(result);
    })
        .catch(err => console.log(err));
    res.status(201).json({
        message: 'Handling POST requests to /userHistorical',
        createdHistorical: userHistorical
    })
});

router.get('/:id', (req, res, next) => {
   const id = req.params.id;
   UserHistorical.findById(id)
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

router.get('/user/:userId', (req, res, next) => {
    const id = req.params.userId;
    UserHistorical.find({ user: id })
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

router.patch("/:id", (req, res, next) => {
    const id = req.params.id;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    UserHistorical.update({_id: id}, {$set: updateOps})
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
})

router.delete("/:id", (req, res, next) => {
    const id = req.params.id;
    UserHistorical.remove({_id: id})
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

module.exports = router;
