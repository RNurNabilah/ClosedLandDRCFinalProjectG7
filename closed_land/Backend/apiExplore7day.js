const express = require("express");
const App = express();
const Redis = require("ioredis");
const redis = new Redis(6379, "10.5.0.15");
const cors = require("cors");

App.use(express.json());
App.use(cors());

let toBeSent = [];

App.get("", async (req, res) => {
  if ((await redis.ttl("Exp7")) >= 0) {
    for (i = 0; i < 9; i++) {
      toBeSent[i] = await redis.hgetall(`Exp7-${i}`);
    }
    res.send(toBeSent);
  } else if ((await redis.ttl("Exp7")) <= 0) {
    await redis.set("Exp7", "Explore7DaysCollectionSale");
    await redis.expire("Exp7", 604800);
    let BannerImgUrl = await redis.sort(
      "collectionName",
      "BY",
      "*->StatsSevenDaySale",
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
      "*->StatsSevenDaySale",
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
      "*->StatsSevenDaySale",
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
      "*->StatsSevenDaySale",
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
      "*->StatsSevenDaySale",
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
      "*->StatsSevenDaySale",
      "LIMIT",
      "0",
      "9",
      "GET",
      "*->StatsCount",
      "DESC"
    );
    for (i = 0; i < 9; i++) {
      await redis.hmset(
        `Exp7-${i}`,
        "BannerImgUrl",
        BannerImgUrl[i],
        "ImgUrl",
        ImgUrl[i],
        "Name",
        Name[i],
        "Desc",
        Desc[i],
        "StatsFloorPrice",
        StatsFloorPrice[i],
        "StatsCount",
        StatsCount[i]
      );
      toBeSent[i] = await redis.hgetall(`Exp7-${i}`);
    }
    res.send(toBeSent);
  }
});

App.listen(4563, () => {
  console.log(`Server Listening at http://10.5.0.6:4563/`);
});
