const express = require("express");
const App = express();
const Redis = require("ioredis");
const redis = new Redis(6379, "10.5.0.15");
const cors = require("cors");

App.use(express.json());
App.use(cors());

let toBeSent = [];

App.get("", async (req, res) => {
  if ((await redis.ttl("Exp24")) >= 0) {
    for (i = 0; i < 9; i++) {
      toBeSent[i] = await redis.hgetall(`Exp24-${i}`);
    }
    res.send(toBeSent);
  } else if ((await redis.ttl("Exp24")) <= 0) {
    await redis.set("Exp24", "Explore24HoursCollectionSale");
    await redis.expire("Exp24", 86400);
    let BannerImgUrl = await redis.sort(
      "collectionName",
      "BY",
      "*->StatsOneDaySale",
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
      "*->StatsOneDaySale",
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
      "*->StatsOneDaySale",
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
      "*->StatsOneDaySale",
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
      "*->StatsOneDaySale",
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
      "*->StatsOneDaySale",
      "LIMIT",
      "0",
      "9",
      "GET",
      "*->StatsCount",
      "DESC"
    );
    for (i = 0; i < 9; i++) {
      await redis.hmset(
        `Exp24-${i}`,
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
      toBeSent[i] = await redis.hgetall(`Exp24-${i}`);
    }
    res.send(toBeSent);
  }
});

App.listen(4562, () => {
  console.log(`Server Listening at http://10.5.0.5:4562/`);
});
