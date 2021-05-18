const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const FiscalStaffSchema = new Schema({
  __v: {
    type: "number",
    select: false,
  },
  unit: {
    type: "string",
    required: true,
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
          key: {
            type: "string",
            required: true,
          },
        },
      },
    ],
  },
});

module.exports = model("FiscalStaffModel", FiscalStaffSchema);

// {
//     "unit": "Mechanical Engineering",
//     "fiscalstaffs": [
//         {
//             "name": "Xiaotong Yang",
//             "netId": "yangx38",
//             "key": "yangx38@Mechanical Engineering"
//         }, 
//         {
//             "name": "XXX",
//             "netId": "xxx",
//             "key": "xxx@Mechanical Engineering"
//         }
//     ]
// }