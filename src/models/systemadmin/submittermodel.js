const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const submitterSchema = new Schema({
  __v: {
    type: "number",
    select: false,
  },
  unit: {
    type: "string",
    required: true,
  },
  subunit: {
    type: "string",
    required: true,
  },
  submitters: {
    type: "array",
    required: false,
    submitter: [
      {
        type: "object",
        properties: {
          name: {
            type: "string",
            required: true,
          },
          netId: {
            type: "string",
            required: true,
          },
          key: {
            type: "string",
            required: true,
          },
        },
      },
    ],
  },
});

module.exports = model("SubmitterModel", submitterSchema);

// {
//   "subunit": "ME Test Lab 1@Mechanical Engineering",
//   "unit": "Mechanical Engineering",
//   "submitters": [
//       {
//           "name": "XXX",
//           "netId": "xxx",
//           "key": "xxx@ME Test Lab 1@Mechanical Engineering"
//       }
//   ]
// }