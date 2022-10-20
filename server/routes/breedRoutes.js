// handle GET request from client
// provide cat breeds data
// local host server needs to have made its own GET request to Cat-API
// data needs to be stored in a collection a MongoDB collection
const express = require("express");
const router = express.Router();
const { getBreeds, getBreedImgs } = require("../controllers/breedController");

router.route("/").get(getBreeds);
router.route("/details").get(getBreeds);
router.route("/topsearch").get(getBreeds);
router.route("/:id").get(getBreedImgs);

module.exports = router;
