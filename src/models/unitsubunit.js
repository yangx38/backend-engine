const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const unitsubunitSchema = new Schema({
    key: { type: Number, required: true},
    name: { type: String, required: true },
    children: { 
        type: [{
            key: { type: Number, required: true},
            name: { type: String, required: true },
        }], 
        requried: false
    },
});

module.exports = model('SystemAdminUnitSubunit', unitsubunitSchema);

