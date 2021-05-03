const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const budgetSchema = new Schema({
  __v: {
    type: "number",
    select: false,
  },
  budgetnumber: {
    type: "string",
    required: true,
  },
  budgetname: {
    type: "string",
    required: true,
  },
  startdate: {
    type: "string",
    required: true,
  },
  enddate: {
    type: "string",
    required: true,
  },
  approvers: {
    type: "array",
    required: false,
    approver: [
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
          amount: {
            type: "number",
            required: true,
          },
        },
      },
    ],
  },
});

module.exports = model("BudgetModel", budgetSchema);

// {
//   "budgetnumber": "62-0372",
//   "budgetname": "TSUNAMI EVACUATION S",
//   "startdate": "10/15/19",
//   "enddate": "6/30/20",
//   "approvers": [
//       {
//           "name": "Dummy1",
//           "netId": "dummy1",
//           "amount": 10000
//       },
//       {
//           "name": "Dummy2",
//           "netId": "dummy2",
//           "amount": 100000
//       }
//   ]
// }