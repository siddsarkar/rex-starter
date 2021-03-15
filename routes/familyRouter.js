var express = require("express");
const {
  addFamily,
  getFamily,
  getFamilyUsingDescriminator,
  addFamilyUsingDiscriminator,
} = require("../controllers/sample/familyController");
var router = express.Router();

router.route("/").get(getFamily).post(addFamily);
router
  .route("/d")
  .get(getFamilyUsingDescriminator)
  .post(addFamilyUsingDiscriminator);

module.exports = router;
