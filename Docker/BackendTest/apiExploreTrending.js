const express = require("express");
const App = express();
const Redis = require("ioredis");
const redis = new Redis(6379, "172.22.0.2");

App.use(express.json());

App.get("", async (req, res) => {
  let getMeOut3 = await redis.sort(
    "collectionName",
    "BY",
    "*->StatsTotalSale",
    "LIMIT",
    "0",
    "10",
    "GET",
    "*->Name",
    "DESC"
  );
  res.send(getMeOut3);
});

App.listen(4568, () => {
  console.log(`Server Listening at http://provider:4568`);
});

// let getMeOut = await redis.smembers("collectionName");
// let getMeOut2 = await redis.hgetall("delerium");
// let getMeOut3 = await redis.sort(
//   "collectionName",
//   "BY",
//   "*->StatsTotalSale",
//   "LIMIT",
//   "0",
//   "10",
//   "GET",
//   "*->Name",
//   "DESC"
// );
// let getMeOut4 = await redis.sort(
//   "collectionName",
//   "BY",
//   "*->StatsTotalSale",
//   "LIMIT",
//   "0",
//   "10",
//   "GET",
//   "*->StatsTotalSale",
//   "ASC"
