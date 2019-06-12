const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: { type: String, required: true },
    full_name: String,
    is_active: { type: Boolean, default: false },
    date_joined: { type: Date, default: Date.now },
    m_number: String,
    dt_start_course: { type: Date, default: Date.now },
    dt_finish_course: { type: Date, default: Date.now },
    cpf_number: String,
    rg_number: String,
    mobile_number: String,
    address: String,
    dt_entry_pet: { type: Date, default: Date.now },
    dt_leave_pet: { type: Date, default: Date.now },
    function_pet: String,
    debt: Number
});

module.exports = mongoose.model('user', userSchema);
