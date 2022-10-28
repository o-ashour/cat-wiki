const mongoose = require("mongoose");
const { Schema } = mongoose;

const missingImgSchema = new Schema({
  id: String,
  url: String,
});

module.exports = mongoose.model("MissingImg", missingImgSchema);
