const express = require("express");
const App = express();
const Redis = require("ioredis");
const redis = new Redis(6379, "10.5.0.15");
const cors = require("cors");

App.use(express.json());
App.use(cors());

let toBeSent = [];

App.get("", async (req, res) => {
  let BannerImgUrl = await redis.sort(
    "collectionName",
    "BY",
    "*->Date",
    "ALPHA",
    "LIMIT",
    "0",
    "9",
    "GET",
    "*->BannerImgUrl",
    "DESC"
  );
  let ImgUrl = await redis.sort(
    "collectionName",
    "BY",
    "*->Date",
    "ALPHA",
    "LIMIT",
    "0",
    "9",
    "GET",
    "*->ImgUrl",
    "DESC"
  );
  let Name = await redis.sort(
    "collectionName",
    "BY",
    "*->Date",
    "ALPHA",
    "LIMIT",
    "0",
    "9",
    "GET",
    "*->Name",
    "DESC"
  );
  let Desc = await redis.sort(
    "collectionName",
    "BY",
    "*->Date",
    "ALPHA",
    "LIMIT",
    "0",
    "9",
    "GET",
    "*->Desc",
    "DESC"
  );
  let StatsFloorPrice = await redis.sort(
    "collectionName",
    "BY",
    "*->Date",
    "ALPHA",
    "LIMIT",
    "0",
    "9",
    "GET",
    "*->StatsFloorPrice",
    "DESC"
  );
  let StatsCount = await redis.sort(
    "collectionName",
    "BY",
    "*->Date",
    "ALPHA",
    "LIMIT",
    "0",
    "9",
    "GET",
    "*->StatsCount",
    "DESC"
  );
  for (i = 0; i < 9; i++) {
    toBeSent[i] = {
      BannerImgUrl: BannerImgUrl[i],
      ImgUrl: ImgUrl[i],
      Name: Name[i],
      Desc: Desc[i],
      StatsFloorPrice: StatsFloorPrice[i],
      StatsCount: StatsCount[i],
    };
  }
  res.send(toBeSent);
});

App.listen(4565, () => {
  console.log(`Server Listening at http://10.5.0.8:4565/`);
});
