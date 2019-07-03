const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    is_active: { type: Boolean, default: false },
    date_joined: { type: Date, default: Date.now },
    edition: [{
        edition_number: String,
        dt_start: { type: Date },
        dt_finish: { type: Date },
    }],
    debt: { type: Number, default: 0},
});

module.exports = mongoose.model('event', eventSchema);
