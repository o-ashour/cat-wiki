const _ = require("lodash");
const axios = require("axios");
const Breed = require("../models/breedModel");
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

      breedsResArr.forEach(async (breed) => {
        const foundBreed = await Breed.findOne({ name: breed.name });

        const breedObj = {
          id: breed.id,
          name: breed.name,
          temperament: breed.temperament,
          origin: breed.origin,
          description: breed.description,
          imageUrl: breed.image ? breed.image.url : null,
          life_span: breed.life_span,
          adaptability: breed.adaptability,
          affection_level: breed.affection_level,
          child_friendly: breed.child_friendly,
          grooming: breed.grooming,
          health_issues: breed.health_issues,
          intelligence: breed.intelligence,
          social_needs: breed.social_needs,
          stranger_friendly: breed.stranger_friendly,
          search_score: !foundBreed.search_score ? 0 : foundBreed.search_score,
        };

        if (!foundBreed) {
          await Breed.create(breedObj);
        } else {
          const foundBreedObj = {
            id: foundBreed.id,
            name: foundBreed.name,
            temperament: foundBreed.temperament,
            origin: foundBreed.origin,
            description: foundBreed.description,
            imageUrl: foundBreed.imageUrl,
            life_span: foundBreed.life_span,
            adaptability: foundBreed.adaptability,
            affection_level: foundBreed.affection_level,
            child_friendly: foundBreed.child_friendly,
            grooming: foundBreed.grooming,
            health_issues: foundBreed.health_issues,
            intelligence: foundBreed.intelligence,
            social_needs: foundBreed.social_needs,
            stranger_friendly: foundBreed.stranger_friendly,
            search_score: !foundBreed.search_score
            ? 0
            : foundBreed.search_score,
          };
          if (!(_.isEqual(breedObj, foundBreedObj))) {
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
// @route GET /:id
// @access Public //should be private
const getBreedImgs = async (req, res) => {
  const breedId = await req.params.id;
  axios
    .get(
      `https://api.thecatapi.com/v1/images/search?limit=8&breed_ids=${breedId}`,
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
        await Breed.updateOne(breed, {$inc : {search_score : 1}});
      }
    });

    res.json("breed score updated");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getBreeds, getBreedImgs, updateBreedScore };