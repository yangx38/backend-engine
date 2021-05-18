const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const FormSchema = new Schema({
  __v: {
    type: "number",
    select: false,
  },
  form_creator_netId: {
    type: "string",
    required: true,
  },
  form_type: {
    type: "string",
    required: true,
  },
  form_unit: {
    type: "string",
    required: true,
  },
  form_subunit: {
    type: "string",
    required: true,
  },
  form_data: {
    type: "object",
    required: true,
  },
  used_budget: {
    type: "array",
    required: false,
    budget: [
      {
        type: "object",
        properties: {
          budgetnumber: {
            type: "string",
            required: true,
          },
          approvers: {
            type: "array",
            required: false,
          },
          approver_comment: {
            type: "string",
            required: false,
          },
        },
      },
    ],
  },
  created_time: {
    type: "string",
    required: true,
  },
  approvers_numer_left: {
    type: "number",
    required: true,
  },
  status: {
    type: "string",
    required: true,
  },
});

module.exports = model("FormModel", FormSchema);
