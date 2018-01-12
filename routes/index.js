let express = require('express');
let router = express.Router();
let ATMroutes = require("./ATM_routes");

router.use("/", ATMroutes);

module.exports = router