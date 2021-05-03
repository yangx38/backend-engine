const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const unitSubunitSchema = new Schema({
  __v: {
    type: "number",
    select: false,
  },
  key: {
    type: "string",
    required: true,
  },
  name: {
    type: "string",
    required: true,
  },
  children: {
    type: "array",
    required: false,
    items: [
      {
        type: "object",
        properties: {
          key: {
            type: "string",
          },
          name: {
            type: "string",
          },
        },
      },
    ],
  },
});

module.exports = model("UnitSubunitModel", unitSubunitSchema);

// unit's id: key
// subunit's id: children key

// {
//     "children": [
//         {
//             "key": "Aeronautics & Astronautics@AA Test Lab 1",
//             "name": "AA Test Lab 1"
//         }
//     ],
//     "key": "Aeronautics & Astronautics",
//     "name": "Aeronautics & Astronautics"
// }