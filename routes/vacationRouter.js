var express = require("express");
const {
  addVacationDestination,
  getVacationDestinations,
  addVacationDestinationUsingDiscriminator,
  getVacationDestinationsUsingDiscriminator,
} = require("../controllers/sample/vacationController");
var router = express.Router();

router.route("/").post(addVacationDestination).get(getVacationDestinations);
router
  .route("/d")
  .post(addVacationDestinationUsingDiscriminator)
  .get(getVacationDestinationsUsingDiscriminator);

module.exports = router;
