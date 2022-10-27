const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const datas = require("./data/datas.json");

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/datas", (req, res) => {
  res.send(datas);
});

app.get("/datas/:category", (req, res) => {
  const category = req.params.category;
  const selectedCategory = datas.filter((data) => data.category === category);
  res.send(selectedCategory);
});

app.listen(port, () => {
  console.log("running on port:", port);
});
