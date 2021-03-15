const { Family } = require("../../models/sample");
const { Family_common } = require("../../discriminators/commonModel");

exports.addFamily = (req, res) => {
  //objects out of schema
  const family = new Family({
    lastName: "Volum",
    parents: [{ firstName: "Thomas" }, { firstName: "Mary Kay" }],
    children: [
      { firstName: "Ryan", gender: "male", grade: 8 },
      { firstName: "Patrick", gender: "male", grade: 7 },
    ],
    pets: [{ givenName: "Buddy" }],
    address: { country: "USA", state: "WA", city: "Seattle" },
  });

  //save to database
  family.save((err, saveFamily) => {
    console.log(JSON.stringify(saveFamily));
  });
};

exports.getFamily = (req, res) => {
  //without discriminator
  Family.find({ "children.gender": "male" }, function (err, foundFamily) {
    res.json({ dicriminator: false, data: foundFamily });
  });
};

exports.addFamilyUsingDiscriminator = (req, res) => {
  //objects out of schema
  const family = new Family_common({
    lastName: "Volum",
    parents: [{ firstName: "Thomas" }, { firstName: "Mary Kay" }],
    children: [
      { firstName: "Ryan", gender: "male", grade: 8 },
      { firstName: "Patrick", gender: "male", grade: 7 },
    ],
    pets: [{ givenName: "Buddy" }],
    address: { country: "USA", state: "WA", city: "Seattle" },
  });

  //save to database
  family.save((err, saveFamily) => {
    console.log(JSON.stringify(saveFamily));
  });
};

exports.getFamilyUsingDescriminator = (req, res) => {
  Family_common.find(
    { "children.gender": "male" },
    function (err, foundFamily) {
      res.json({ dicriminator: true, data: foundFamily });
    }
  );
};
