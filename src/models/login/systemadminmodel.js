const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const systemAdminSchema = new Schema({
    // "__v": {
    //     "type": "number",
    //     "select": false
    // },
    // "_id": {
    //     "type": "number",
    //     "select": false
    // },
    "netId": {
        "type": "string",
        "required" : true,
    }
});

module.exports = model('systemadminmodel', systemAdminSchema);

