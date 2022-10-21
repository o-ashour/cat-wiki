const mongoose = require("mongoose");
const { Schema } = mongoose;

const breedSchema = new Schema({
  id: String,
  name: String,
  temperament: String,
  origin: String,
  description: String,
  imageUrl: String,
  life_span: String,
  adaptability: Number,
  affection_level: Number,
  child_friendly: Number,
  grooming: Number,
  health_issues: Number,
  intelligence: Number,
  social_needs: Number,
  stranger_friendly: Number,
  search_score: Number
});

module.exports = mongoose.model("Breed", breedSchema);
