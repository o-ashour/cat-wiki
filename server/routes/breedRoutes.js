const express = require("express");
const router = express.Router();
const {
  getBreeds,
  getBreedImgs,
  updateBreedScore,
} = require("../controllers/breedController");

router.route("/").get(getBreeds);
router.route("/:id/:limit").get(getBreedImgs);
router.route("/update/:id").post(updateBreedScore);

module.exports = router;
