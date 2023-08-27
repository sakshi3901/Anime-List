const mongoose = require("mongoose");

const animeListSchema = new mongoose.Schema({
  img: String,
  name: String,
});

const animeListModel = mongoose.model("animeList", animeListSchema);
module.exports = animeListModel;
