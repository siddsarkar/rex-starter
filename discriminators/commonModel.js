const mongoose = require("mongoose");

//Using Mongoose discriminators to store data in a single collection
const baseConfig = {
  discriminatorKey: "_type", //If you've got a lot of different data types, you could also consider setting up a secondary index here.
  collection: "alldata", //Name of the Common Collection
};

const commonModel = mongoose.model(
  "Common",
  new mongoose.Schema({}, baseConfig)
);

const Family_common = commonModel.discriminator(
  "FamilyType",
  new mongoose.Schema(
    {
      lastName: String,
      parents: [
        {
          familyName: String,
          firstName: String,
          gender: String,
        },
      ],
      children: [
        {
          familyName: String,
          firstName: String,
          gender: String,
          grade: Number,
        },
      ],
      pets: [
        {
          givenName: String,
        },
      ],
      address: {
        country: String,
        state: String,
        city: String,
      },
    },
    baseConfig
  )
);

const Vacation_common = commonModel.discriminator(
  "VacationDestinationsType",
  new mongoose.Schema(
    {
      name: String,
      country: String,
    },
    baseConfig
  )
);

module.exports = { Family_common, Vacation_common };
