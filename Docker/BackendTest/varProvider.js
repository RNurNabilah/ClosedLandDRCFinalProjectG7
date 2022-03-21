const express = require("express");
const App = express();
const Redis = require("ioredis");
const redis = new Redis(6379, "redis");
//const Person = require("./person");

App.use(express.json());

App.get("", async (req, res) => {
  let hi = "HELLO";
  res.send(hi);
});

App.listen(5454, () => {
  console.log(`Server Listening at http://provider:5454`);
});
