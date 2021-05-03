const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const peopleSchema = new Schema({
  __v: {
    type: "number",
    select: false,
  },
  key: {
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
        },
      },
    ],
  },
  fiscalstaffs: {
    type: "array",
    required: false,
    fiscalstaff: [
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
        },
      },
    ],
  },
});

module.exports = model("PeopleModel", peopleSchema);

// {
//     "key": "AA Test Lab 1@Aeronautics & Astronautics",
//     "submitters": [
//         {
//             "name": "Dummy1",
//             "netId": "dummy1"
//         },
//         {
//             "name": "Xiaotong Yang",
//             "netId": "yangx38"
//         }
//     ],
//     "fiscalstaffs": [
//         {
//             "name": "May",
//             "netId": "may2"
//         },
//         {
//             "name": "May3",
//             "netId": "may3"
//         },
//         {
//             "name": "Xiaotong Yang",
//             "netId": "yangx38"
//         }
//     ]
//   }