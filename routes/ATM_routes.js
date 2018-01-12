let express = require("express");
let router = express.Router();
let ATMcontroller = require("../controllers/ATM_controller");

// index
router.get("/", ATMcontroller.index);

// retrieve cash
router.post("/", ATMcontroller.getCash);

module.exports = router;