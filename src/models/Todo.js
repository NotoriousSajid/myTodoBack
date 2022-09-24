const mongoose = require("mongoose");
const todoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  _id: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("TodoData", todoSchema);
