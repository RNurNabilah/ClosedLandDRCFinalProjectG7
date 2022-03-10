// const { Console, count } = require("console");
const https = require("https");
const Redis = require("ioredis");
const redis = new Redis(6379, "redis");
let slugName;
let cursor;

// Function Starts
const assetGrinder = async function (slugName, cursor) {
  let invObj = 0;
  let whatToAsk;
  const replaceDefaultStr = "NULL";
  const replaceDefaultNum = 0;

  if (cursor === null || cursor === undefined) {
    whatToAsk = `https://api.opensea.io/api/v1/assets?collection_slug=${slugName}&limit=50&`;
  } else {
    whatToAsk = `https://api.opensea.io/api/v1/assets?collection_slug=${slugName}&limit=50&cursor=${cursor}`;
  }

  https.get(whatToAsk, (resp) => {
    let data = "";

    // A chunk of data has been received.
    resp.on("data", (chunk) => {
      data += chunk;
    });

    // The whole response has been received.
    resp.on("end", () => {
      let objData = JSON.parse(data);

      // A check to see if objData has any data in it.
      if (objData.collections == undefined) {
        console.log("#:", invObj, "NO DATA DISCOVERED");
        //new Promise((r) => setTimeout(r, 2000));
        //invObj++;
        //if (invObj >= 991) {
        console.log(
          "Sad that OpenSea API doesn't want to acknowledge us ... Bye For Now!"
        );
        process.exit(0);
        //}
        //return 0;
      }

      // Start of Loop into 50 assests per API call
      for (let i = 0; i < 50; i++) {
        cursor = objData.next;
        let id = objData.assets[i].id || replaceDefaultNum;
        let name = objData.assets[i].name || replaceDefaultStr;
        let collectionName = slugName;
        let animationOriUrl =
          objData.assets[i].animation_original_url || replaceDefaultStr;
        let animationUrl = objData.assets[i].animation_url || replaceDefaultStr;
        let background_color =
          objData.assets[i].background_color || replaceDefaultStr;
        let creator =
          objData.assets[i].creator.user.username || replaceDefaultStr;
        let imageOriUrl =
          objData.assets[i].image_original_url || replaceDefaultStr;
        let imagePreUrl =
          objData.assets[i].image_preview_url || replaceDefaultStr;
        let imageThumbUrl =
          objData.assets[i].image_thumbnail_url || replaceDefaultStr;
        let imageUrl = objData.assets[i].image_url || replaceDefaultStr;
        let lastSaleDecimal =
          objData.assets[i].last_sale.asset.decimals || replaceDefaultNum;
        let lastSaletokenID =
          objData.assets[i].last_sale_asset.token_id || replaceDefaultNum;
        let listingDate = objData.assets[i].listing_date || replaceDefaultStr;
        let numSales = objData.assets[i].num_sales || replaceDefaultNum;
        let ownerUserName =
          objData.assets[i].owner.user.username || replaceDefaultStr;
        let ownerProfileImgUrl =
          objData.assets[i].owner.profile_img_url || replaceDefaultStr;
        let ownerAddress = objData.assets[i].owner.address || replaceDefaultStr;
        let token_id = objData.assets[i].token_id || replaceDefaultNum;
        let token_metadata =
          objData.assets[i].token_metadata || replaceDefaultStr;
        let top_bid = objData.assets[i].top_bid || replaceDefaultStr;

        //let traits;
        //   redis.sadd("collectionName", objData.collections[i].slug);
        //   redis.hmset(
        //     objData.collections[i].slug,
        //     "Name",
        //     name,
        //     "Date",
        //     date,
        //     "ShortDesc",
        //     shortdesc,
        //     "Desc",
        //     desc,
        //     "ExtUrl",
        //     exturl,
        //     "BannerImgUrl",
        //     bannerimgurl,
        //     "FeaturedImgUrl",
        //     featuredimgurl,
        //     "ImgUrl",
        //     imgurl,
        //     "LargeImgUrl",
        //     largeimgurl,
        //     "DiscordUrl",
        //     discordurl,
        //     "TelegramUrl",
        //     telegramurl,
        //     "WikiUrl",
        //     wikiurl,
        //     "MediumUsername",
        //     mediumusername,
        //     "TwitterUsername",
        //     twitterusername,
        //     "InstagramUsername",
        //     instagramusername,
        //     "StatsOneDayVol",
        //     statsonedayvol,
        //     "StatsOneDayChg",
        //     statsonedaychg,
        //     "StatsOneDaySale",
        //     statsonedaysale,
        //     "StatsOneDayAvgPrice",
        //     statsonedayavgprice,
        //     "StatsSevenDayVol",
        //     statssevendayvol,
        //     "StatsSevenDayChg",
        //     statssevendaychg,
        //     "StatsSevenDaySale",
        //     statssevendaysale,
        //     "StatsSevenDayAvgPrice",
        //     statssevendayavgprice,
        //     "StatsThirtyDayVol",
        //     statsthirtydayvol,
        //     "StatsThirtyDayChange",
        //     statsthirtydaychg,
        //     "StatsThirtyDaySale",
        //     statsthirtydaysales,
        //     "StatsThirtyDayAvgPrice",
        //     statsthirtydayavgprice,
        //     "StatsTotalVolume",
        //     statstotalvolume,
        //     "StatsTotalSale",
        //     statstotalsale,
        //     "StatsTotalSupply",
        //     statstotalsupply,
        //     "StatsCount",
        //     statscount,
        //     "StatsNumOwners",
        //     statsnumowners,
        //     "StatsAvgPrice",
        //     statsavgprice,
        //     "StatsNumReports",
        //     statsnumreports,
        //     "StatsMarketCap",
        //     statsmarketcap,
        //     "StatsFloorPrice",
        //     statsfloorprice
        //   );
      }
      // End Of Loop

      // offsetty += 300;
      // // Reading Offset Value
      // console.log("Offset Value is: ", offsetty);
      // // End

      // // Exiting the Process once certain count is reached
      // if (offsetty >= 290000) {
      //   console.log("Ending Sniffer now...");
      //   process.exit(0);
      // }
      // End
    });
  });
};
// assetGrinder Function ENDS //
assetGrinder();
