const mongoose = require("mongoose");

const LeadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  status: {
    type: String,
    default: "New"
  }
});

module.exports = mongoose.model("Lead", LeadSchema);