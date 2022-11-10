const _ = require("lodash");
const axios = require("axios");
const Breed = require("../models/breedModel");
const MissingImg = require("../models/missingImgModel");
const apiKey = process.env.API_KEY;

// @desc Get breeds
// @route GET { / , /details , /topsearch }
// @access Public //should be private
const getBreeds = async (req, res) => {
  axios
    .get("https://api.thecatapi.com/v1/breeds", {
      headers: { "x-api-key": apiKey },
    })
    .then(async (response) => {
      const breedsResArr = response.data;

      const makeBreedObj = (breed, foundBreed, breedImgUrl) => {
        let breedScore;

        if (!foundBreed) {
          !breed.search_score
            ? (breedScore = 0)
            : (breedScore = breed.search_score);
        } else {
          !foundBreed.search_score
            ? (breedScore = 0)
            : (breedScore = foundBreed.search_score);
        }

        const breedObj = {
          id: breed.id,
          name: breed.name,
          temperament: breed.temperament,
          origin: breed.origin,
          description: breed.description,
          imageUrl: breedImgUrl ? breedImgUrl : breed.imageUrl,
          life_span: breed.life_span,
          adaptability: breed.adaptability,
          affection_level: breed.affection_level,
          child_friendly: breed.child_friendly,
          grooming: breed.grooming,
          health_issues: breed.health_issues,
          intelligence: breed.intelligence,
          social_needs: breed.social_needs,
          stranger_friendly: breed.stranger_friendly,
          search_score: breedScore,
        };
        return breedObj;
      };

      breedsResArr.forEach(async (breed) => {
        const foundBreed = await Breed.findOne({ name: breed.name });
        let foundBreedImg;

        if (!breed.image) {
          getMissingImg(breed);
          foundBreedImg = await MissingImg.findOne({ id: breed.id });
        }

        const imageUrl = breed.image
          ? breed.image.url
          : foundBreedImg
          ? foundBreedImg.url
          : null;

        const breedObj = makeBreedObj(breed, foundBreed, imageUrl);

        if (!foundBreed) {
          await Breed.create(breedObj);
        } else {
          const foundBreedObj = makeBreedObj(foundBreed);

          if (!_.isEqual(breedObj, foundBreedObj)) {
            await Breed.replaceOne({ name: breed.name }, breedObj);
          }
        }
      });

      const breedList = await Breed.find();
      res.status(200).json(breedList);
    })
    .catch((err) => {
      console.log("Error", err.message);
    });
};

// @desc Get breed images
// @route GET /:id/:limit
// @access Public //should be private
const getBreedImgs = async (req, res) => {
  const breedId = await req.params.id;
  const limit = await req.params.limit;
  axios
    .get(
      `https://api.thecatapi.com/v1/images/search?limit=${limit}&breed_ids=${breedId}`,
      { headers: { "x-api-key": apiKey } }
    )
    .then((response) => {
      const breedImgs = response.data;
      res.status(200).json(breedImgs);
    })
    .catch((err) => {
      console.log("Error", err.message);
    });
};

// @desc Update breed score
// @route POST /update/:id
// @access Public //should be private
const updateBreedScore = async (req, res) => {
  try {
    const selectedBreedId = JSON.parse(req.params.id);
    const breedList = await Breed.find();

    breedList.forEach(async (breed, idx) => {
      if (selectedBreedId === idx) {
        await Breed.updateOne(breed, { $inc: { search_score: 1 } });
      }
    });

    const updatedBreedList = await Breed.find();
    res.json(updatedBreedList);
  } catch (error) {
    console.log(error);
  }
};

// @desc Get missing breed image
// @route GET /:id/:limit
// @access Public
const getMissingImg = async (breed) => {
  const breedId = await breed.id;
  const limit = 1;

  axios
    .get(
      `https://api.thecatapi.com/v1/images/search?limit=${limit}&breed_ids=${breedId}`,
      { headers: { "x-api-key": apiKey } }
    )
    .then(async (response) => {
      const breedImg = response.data;
      if (breedImg.length > 0) {
        const breedUrl = breedImg[0].url;
        const foundBreedImg = await MissingImg.findOne({ id: breedId });

        if (!foundBreedImg) {
          await MissingImg.create({ id: breedId, url: breedUrl });
        }
      }
    })
    .catch((err) => {
      console.log("Error", err.message);
    });
};

module.exports = {
  getBreeds,
  getBreedImgs,
  updateBreedScore,
};
