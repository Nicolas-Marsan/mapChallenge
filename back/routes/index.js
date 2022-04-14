var express = require('express');
var router = express.Router();
const placesRouter = require("./places");
/* GET notes */
router.use("/places", placesRouter);





module.exports = router;
