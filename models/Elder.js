const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ElderSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        number: {
            type: String,
            require: true
        }
    },
    {
    timestamps: true
    }
);
module.exports = Elder = mongoose.model('Elder', ElderSchema);