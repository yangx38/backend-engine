const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const unitsubunitSchema = new Schema({
    "__v": {
        "type": "number",
        "select": false
    },
    "_id": {
        "type": "number",
        "select": false
    },
    "key": {
        "type": "string",
        "required" : true,
    },
    "name": {
        "type": "string",
        "required" : true,
    },
    "children": {
        "type": "array",
        "required" : false,
        "items": [
            {
            "type": "object",
            "properties": {
                "key": {
                    "type": "string"
                    },
                    "name": {
                    "type": "string"
                    }
                }
            }
        ]
    }
});

module.exports = model('SystemAdminUnitSubunit', unitsubunitSchema);

