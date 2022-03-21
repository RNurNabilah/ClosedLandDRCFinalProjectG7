const express = require("express");
const App = express();
const Redis = require("ioredis");
const redis = new Redis(6379, "10.5.0.15");
const cors = require("cors");

App.use(express.json());
App.use(cors());

let keyProcess = [];
let toBeSent = [];

App.post("", async (req, res) => {
  let sname = req.body.search;
  keyProcess = await redis.scan("0", "MATCH", `*${sname}*`, "COUNT", "200000");

  for (i = 0; i < 20; i++) {
    toBeSent[i] = await redis.hgetall(keyProcess[1][i]);
    //console.log(toBeSent["Name"]);
  }

  res.send(toBeSent);
});

App.listen(4573, () => {
  console.log(`Server Listening at http://10.5.0.8:4573/`);
});
