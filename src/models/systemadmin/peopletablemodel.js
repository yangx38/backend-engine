const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const peopleTableSchema = new Schema({
    "__v": {
        "type": "number",
        "select": false
    },
    "subunitName": {
        "type": "string",
        "required" : true,
    },
    "peopleName": {
        "type": "string",
        "required" : true,
    },
    "peopleNetID": {
        "type": "array",
        "required" : true,
    }
});

module.exports = model('PeopleTableSchema', peopleTableSchema);

