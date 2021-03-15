const mongoose = require("mongoose");

const VacationDestinations = mongoose.model(
  "VacationDestinations",
  new mongoose.Schema({
    name: String,
    country: String,
  })
);

module.exports = VacationDestinations;
