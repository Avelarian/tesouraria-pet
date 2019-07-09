const mongoose = require('mongoose');

const bankAccountSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    value: Number,
    historic: [{
        dt_created: { type: Date, default: Date.now },
        historic_id: String,
        historic_type: String
    }]
});

module.exports = mongoose.model('bankAccount', bankAccountSchema);
