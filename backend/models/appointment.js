const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  date: String,
  message: String
}, { timestamps: true });

module.exports = mongoose.model("Appointment", appointmentSchema);
