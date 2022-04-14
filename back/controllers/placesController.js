const db = require("../models");

entity = "places";

const getAllPlaces = async function (req, res, next) {
  try {
    const placesFound = await db[entity].findAll({});
    res.send({
      title: "Places",
      places: placesFound,
      count: placesFound.length,
    });
  } catch (err) {
    next(err);
  }
};

const placesController = {
  getAllPlaces,
};

module.exports = placesController;
