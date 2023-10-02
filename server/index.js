const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const cors = require("cors");
const AnimeList = require("./Models/AnimeList.js");

mongoose.connect(process.env.MONGO_URL);

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.get("", (req, res) => {
  res.send("working");
});

app.get("/list", async (req, res) => {
  try {
    const listsData = await AnimeList.find();
    res.json(listsData);
  } catch (error) {
    console.log(error);
  }
});

app.get("/list/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const listData = await AnimeList.findById(id);
    res.json(listData);
  } catch (error) {
    console.log(error);
  }
});

app.listen(process.env.PORT || 4000);
