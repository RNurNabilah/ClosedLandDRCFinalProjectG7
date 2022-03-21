const express = require("express");
const axios = require("axios");
const App = express();
const Redis = require("ioredis");
const redis = new Redis(6379, "10.5.0.15");
const cors = require("cors");

App.use(express.json());
App.use(cors());

// Function Starts
const assetGrinder = async function () {
  let invObj = 0;
  let slugName;
  let cursor;
  let cursorN;
  let cursorP;
  let ddata;
  const replaceDefaultStr = "NULL";
  const replaceDefaultNum = 0;

  App.post("", async (req, res) => {
    let whatToAsk;
    let pre;
    let nxt;
    cursorN = await redis.get("cursorN");
    cursorP = await redis.get("cursorP");
    slugName = req.body.search;

    if (cursor === null || cursor === undefined) {
      whatToAsk = `https://api.opensea.io/api/v1/assets?collection_slug=${slugName}&limit=1`;
    } else if (cursor) {
      whatToAsk = `https://api.opensea.io/api/v1/assets?collection_slug=${slugName}&limit=1&cursor=${cursor}`;
    }

    const options = {
      method: "GET",
      headers: {
        "X-API-KEY": "e5d251b38832420abaf8fa88b085aafc",
      },
    };

    await axios.get(whatToAsk, options).then(function (respond) {
      ddata = respond.data;
      // redis.set("cursorN", ddata.next || NULL);
      // redis.set("cursorP", ddata.previous || NULL);
      res.send(ddata);
    });
  });

  App.listen(4573, () => {
    console.log(`Server Listening at http://10.5.0.8:4573/`);
  });

  // // A check to see if objData has any data in it.
  // if (objData.collections == undefined) {
  //   console.log("#:", invObj, "NO DATA DISCOVERED");
  //   //new Promise((r) => setTimeout(r, 2000));
  //   //invObj++;
  //   //if (invObj >= 991) {
  //   console.log(
  //     "Sad that OpenSea API doesn't want to acknowledge us ... Bye For Now!"
  //   );
  //   process.exit(0);
  //   //}
  //   //return 0;
  // }

  //     // Start of Loop into 50 assests per API call
  //     // for (let i = 0; i < 50; i++) {
  //     //   cursor = objData.next;
  //     //   let id = objData.assets[i].id || replaceDefaultNum;
  //     //   let name = objData.assets[i].name || replaceDefaultStr;
  //     //   let collectionName = slugName;
  //     //   let animationOriUrl =
  //     //     objData.assets[i].animation_original_url || replaceDefaultStr;
  //     //   let animationUrl = objData.assets[i].animation_url || replaceDefaultStr;
  //     //   let background_color =
  //     //     objData.assets[i].background_color || replaceDefaultStr;
  //     //   let creator =
  //     //     objData.assets[i].creator.user.username || replaceDefaultStr;
  //     //   let imageOriUrl =
  //     //     objData.assets[i].image_original_url || replaceDefaultStr;
  //     //   let imagePreUrl =
  //     //     objData.assets[i].image_preview_url || replaceDefaultStr;
  //     //   let imageThumbUrl =
  //     //     objData.assets[i].image_thumbnail_url || replaceDefaultStr;
  //     //   let imageUrl = objData.assets[i].image_url || replaceDefaultStr;
  //     //   let lastSaleDecimal =
  //     //     objData.assets[i].last_sale.asset.decimals || replaceDefaultNum;
  //     //   let lastSaletokenID =
  //     //     objData.assets[i].last_sale_asset.token_id || replaceDefaultNum;
  //     //   let listingDate = objData.assets[i].listing_date || replaceDefaultStr;
  //     //   let numSales = objData.assets[i].num_sales || replaceDefaultNum;
  //     //   let ownerUserName =
  //     //     objData.assets[i].owner.user.username || replaceDefaultStr;
  //     //   let ownerProfileImgUrl =
  //     //     objData.assets[i].owner.profile_img_url || replaceDefaultStr;
  //     //   let ownerAddress = objData.assets[i].owner.address || replaceDefaultStr;
  //     //   let token_id = objData.assets[i].token_id || replaceDefaultNum;
  //     //   let token_metadata =
  //     //     objData.assets[i].token_metadata || replaceDefaultStr;
  //     //   let top_bid = objData.assets[i].top_bid || replaceDefaultStr;

  //     //   //let traits;
  //     //   //   redis.sadd("collectionName", objData.collections[i].slug);
  //     //   //   redis.hmset(
  //     //   //     objData.collections[i].slug,
  //     //   //     "Name",
  //     //   //     name,
  //     //   //     "Date",
  //     //   //     date,
  //     //   //     "ShortDesc",
  //     //   //     shortdesc,
  //     //   //     "Desc",
  //     //   //     desc,
  //     //   //     "ExtUrl",
  //     //   //     exturl,
  //     //   //     "BannerImgUrl",
  //     //   //     bannerimgurl,
  //     //   //     "FeaturedImgUrl",
  //     //   //     featuredimgurl,
  //     //   //     "ImgUrl",
  //     //   //     imgurl,
  //     //   //     "LargeImgUrl",
  //     //   //     largeimgurl,
  //     //   //     "DiscordUrl",
  //     //   //     discordurl,
  //     //   //     "TelegramUrl",
  //     //   //     telegramurl,
  //     //   //     "WikiUrl",
  //     //   //     wikiurl,
  //     //   //     "MediumUsername",
  //     //   //     mediumusername,
  //     //   //     "TwitterUsername",
  //     //   //     twitterusername,
  //     //   //     "InstagramUsername",
  //     //   //     instagramusername,
  //     //   //     "StatsOneDayVol",
  //     //   //     statsonedayvol,
  //     //   //     "StatsOneDayChg",
  //     //   //     statsonedaychg,
  //     //   //     "StatsOneDaySale",
  //     //   //     statsonedaysale,
  //     //   //     "StatsOneDayAvgPrice",
  //     //   //     statsonedayavgprice,
  //     //   //     "StatsSevenDayVol",
  //     //   //     statssevendayvol,
  //     //   //     "StatsSevenDayChg",
  //     //   //     statssevendaychg,
  //     //   //     "StatsSevenDaySale",
  //     //   //     statssevendaysale,
  //     //   //     "StatsSevenDayAvgPrice",
  //     //   //     statssevendayavgprice,
  //     //   //     "StatsThirtyDayVol",
  //     //   //     statsthirtydayvol,
  //     //   //     "StatsThirtyDayChange",
  //     //   //     statsthirtydaychg,
  //     //   //     "StatsThirtyDaySale",
  //     //   //     statsthirtydaysales,
  //     //   //     "StatsThirtyDayAvgPrice",
  //     //   //     statsthirtydayavgprice,
  //     //   //     "StatsTotalVolume",
  //     //   //     statstotalvolume,
  //     //   //     "StatsTotalSale",
  //     //   //     statstotalsale,
  //     //   //     "StatsTotalSupply",
  //     //   //     statstotalsupply,
  //     //   //     "StatsCount",
  //     //   //     statscount,
  //     //   //     "StatsNumOwners",
  //     //   //     statsnumowners,
  //     //   //     "StatsAvgPrice",
  //     //   //     statsavgprice,
  //     //   //     "StatsNumReports",
  //     //   //     statsnumreports,
  //     //   //     "StatsMarketCap",
  //     //   //     statsmarketcap,
  //     //   //     "StatsFloorPrice",
  //     //   //     statsfloorprice
  //     //   //   );
  //     // }
  //     // End Of Loop

  //     // offsetty += 300;
  //     // // Reading Offset Value
  //     // console.log("Offset Value is: ", offsetty);
  //     // // End

  //     // // Exiting the Process once certain count is reached
  //     // if (offsetty >= 290000) {
  //     //   console.log("Ending Sniffer now...");
  //     //   process.exit(0);
  //     // }
  //     // End
  //   });
  // });
};
// assetGrinder Function ENDS //
assetGrinder();
