const { Vacation_common } = require("../../discriminators/commonModel");
const { VacationDestinations } = require("../../models/sample");

exports.addVacationDestination = (req, res) => {
  const vacaySpot = new VacationDestinations({
    name: "Honolulu",
    country: "USA",
  });

  vacaySpot.save((err, saveVacay) => {
    console.log(JSON.stringify(saveVacay));
  });
};

exports.getVacationDestinations = (req, res) => {
  VacationDestinations.find({ name: "Honolulu" }, (err, foundVacation) => {
    res.json({ dicriminator: false, data: foundVacation });
  });
};

exports.addVacationDestinationUsingDiscriminator = (req, res) => {
  const vacaySpot = new Vacation_common({
    name: "Goa",
    country: "India",
  });

  vacaySpot.save((err, saveVacay) => {
    console.log(JSON.stringify(saveVacay));
  });
};

exports.getVacationDestinationsUsingDiscriminator = (req, res) => {
  Vacation_common.find({ name: "Goa" }, (err, foundVacation) => {
    res.json({ dicriminator: true, data: foundVacation });
  });
};
