const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
   res.status(200).json({
      message: 'Historical Event were fetched'
   });
});

router.post('/', (req, res, next) => {
    const eventHistorical = {
        event_id: req.body.id,
        quantity: req.body.quantity
    }
    res.status(201).json({
        message: 'Historical Event were created',
        historicalCreated: eventHistorical
    });
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

module.exports = router;
