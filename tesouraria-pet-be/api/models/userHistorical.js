const mongoose = require('mongoose');
const User = require('../models/user');

const userHistoricalSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true},
    dt_created: { type: Date, default: Date.now },
    value: Number,
    main_reason: String,
    description: String,
    from_place: String,
    to_place: String
});

module.exports = mongoose.model('userHistorical', userHistoricalSchema);
