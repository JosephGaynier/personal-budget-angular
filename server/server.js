const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.get("/budget", (req, res) => {
  var budget = require("./budget-data.json");
  res.json(budget);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
