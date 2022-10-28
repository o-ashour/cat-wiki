const express = require("express");
const router = express.Router();
const {
  getBreeds,
  getBreedImgs,
  getArticle,
  updateBreedScore,
} = require("../controllers/breedController");

router.route("/").get(getBreeds);
router.route("/topsearch").get(getBreeds);
router.route("/:id/:limit").get(getBreedImgs);
router.route("/article").get(getArticle);
router.route("/update/:id").post(updateBreedScore);

module.exports = router;
