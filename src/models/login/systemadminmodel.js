const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const systemAdminSchema = new Schema({
    "netId": {
        "type": "string",
        "required" : true,
    }
});

module.exports = model('SystemAdminModel', systemAdminSchema);

