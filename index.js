const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const datas = require("./data/datas.json");
const categories = require("./data/category.json");

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/datas", (req, res) => {
  res.send(datas);
});

app.get("/datas/categories", (req, res) => {
  res.send(categories);
});

app.get("/datas/categories/:category", (req, res) => {
  const category = req.params.category;
  const selectedCategory = datas.filter((data) => data.category === category);
  res.send(selectedCategory);
});

app.get("/datas/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = datas.find((data) => data.id === id);
  res.send(selectedCourse);
});

app.listen(port, () => {
  console.log("running on port:", port);
});
