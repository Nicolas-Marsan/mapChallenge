var express = require('express');
var router = express.Router();
const placesController = require('../controllers/placesController');


router.get("/", placesController.getAllPlaces);


module.exports = router;