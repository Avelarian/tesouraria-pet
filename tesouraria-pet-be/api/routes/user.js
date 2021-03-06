const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const checkAuth = require('../middleware/check-auth');
const User = require('../models/user');

router.get('/', checkAuth, (req, res, next) => {
    User.find({ is_active: true })
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

router.post('/signup', (req, res, next) => {
    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length > 0) {
                return res.status(409).json({
                    message: 'Email already exists'
                });
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        });
                    } else {
                        const user = new User({
                            _id: mongoose.Types.ObjectId(),
                            email: req.body.email,
                            password: hash,
                            full_name: req.body.full_name,
                            m_number: req.body.m_number,
                            dt_start_course: req.body.dt_start_course,
                            dt_finish_course: req.body.dt_finish_course,
                            cpf_number: req.body.cpf_number,
                            rg_number: req.body.rg_number,
                            mobile_number: req.body.mobile_number,
                            address: req.body.address,
                            dt_entry_pet: req.body.dt_entry_pet,
                            dt_leave_pet: req.body.dt_leave_pet,
                            function_pet: req.body.function_pet,
                            debt: req.body.debt
                        });
                        user.save()
                            .then(result => {
                                console.log(result);
                                res.status(201).json({
                                    message: 'User created'
                                });
                            })
                            .catch(err => {
                                console.log(err);
                                res.status(500).json({
                                    error: err
                                });
                            });
                    }
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
});

router.post('/login', (req, res, next) => {
    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(401).json({
                    message: 'Auth failed1'
                });
            } else if (user[0].is_active === false) {
                return res.status(401).json({
                    message: 'Inactive user'
                });
            } else {
                bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                    console.log(result);
                    if (err) {
                        return res.status(401).json({
                            message: 'Auth failed2'
                        });
                    } else if (result) {
                        const token = jwt.sign({
                            email: user[0].email,
                            _id: user[0]._id,
                            role: user[0].function_pet,
                            full_name: user[0].full_name,
                            debt: user[0].debt
                        },
                            process.env.JWT_KEY,
                            {
                                expiresIn: "2h"
                            });
                        return res.status(200).json({
                            message: 'Auth successful',
                            token: token,
                            user: user[0]
                        });
                    } else {
                        return res.status(401).json({
                            message: 'Auth failed3'
                        });
                    }
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.get('/:id', checkAuth, (req, res, next) => {
    const id = req.params.id;
    User.findById(id)
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

router.patch("/:id", checkAuth, (req, res, next) => {
    const id = req.params.id;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    User.update({ _id: id }, { $set: updateOps })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'User updated',
                request: {
                    type: 'GET',
                    url: 'http://localhost:3000/user/' + id
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});


router.delete("/:id", checkAuth, (req, res, next) => {
    const id = req.params.id;
    User.remove({_id: id})
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
