// const { Console, count } = require("console");
const https = require("https");
const Redis = require("ioredis");
const redis = new Redis(6379, "redis");

// Function Starts
const MeatGrinder2 = async function () {
  let cursor;
  let slugName;
  let invObj = 0;
  const replaceDefaultStr = "NULL";
  const replaceDefaultNum = 0;

  https.get(
    `https://api.opensea.io/api/v1/assets?collection_slug=${slugName}&limit=50&cursor=${cursor}`,
    (resp) => {
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
          let name = objData.collections[i].name || replaceDefaultStr;
          let date = objData.collections[i].created_date || replaceDefaultStr;
          let shortdesc =
            objData.collections[i].short_description || replaceDefaultStr;
          let desc = objData.collections[i].description || replaceDefaultStr;
          let exturl = objData.collections[i].external_url || replaceDefaultStr;
          let bannerimgurl =
            objData.collections[i].banner_image_url || replaceDefaultStr;
          let featuredimgurl =
            objData.collections[i].featured_image_url || replaceDefaultStr;
          let imgurl = objData.collections[i].image_url || replaceDefaultStr;
          let largeimgurl =
            objData.collections[i].large_image_url || replaceDefaultStr;
          let discordurl =
            objData.collections[i].discord_url || replaceDefaultStr;
          let telegramurl =
            objData.collections[i].telegram_url || replaceDefaultStr;
          let wikiurl = objData.collections[i].wiki_url || replaceDefaultStr;
          let mediumusername =
            objData.collections[i].medium_username || replaceDefaultStr;
          let twitterusername =
            objData.collections[i].twitter_username || replaceDefaultStr;
          let instagramusername =
            objData.collections[i].instagram_username || replaceDefaultStr;
          let statsonedayvol =
            objData.collections[i].stats.one_day_volume || replaceDefaultNum;
          let statsonedaychg =
            objData.collections[i].stats.one_day_change || replaceDefaultNum;
          let statsonedaysale =
            objData.collections[i].stats.one_day_sales || replaceDefaultNum;
          let statsonedayavgprice =
            objData.collections[i].stats.one_day_average_price ||
            replaceDefaultNum;
          let statssevendayvol =
            objData.collections[i].stats.seven_day_volume || replaceDefaultNum;
          let statssevendaychg =
            objData.collections[i].stats.seven_day_change || replaceDefaultNum;
          let statssevendaysale =
            objData.collections[i].stats.seven_day_sales || replaceDefaultNum;
          let statssevendayavgprice =
            objData.collections[i].stats.seven_day_average_price ||
            replaceDefaultNum;
          let statsthirtydayvol =
            objData.collections[i].stats.thirty_day_volume || replaceDefaultNum;
          let statsthirtydaychg =
            objData.collections[i].stats.thirty_day_change || replaceDefaultNum;
          let statsthirtydaysales =
            objData.collections[i].stats.thirty_day_sales || replaceDefaultNum;
          let statsthirtydayavgprice =
            objData.collections[i].stats.thirty_day_average_price ||
            replaceDefaultNum;
          let statstotalvolume =
            objData.collections[i].stats.total_volume || replaceDefaultNum;
          let statstotalsale =
            objData.collections[i].stats.total_sales || replaceDefaultNum;
          let statstotalsupply =
            objData.collections[i].stats.total_supply || replaceDefaultNum;
          let statscount =
            objData.collections[i].stats.count || replaceDefaultNum;
          let statsnumowners =
            objData.collections[i].stats.num_owners || replaceDefaultNum;
          let statsavgprice =
            objData.collections[i].stats.average_price || replaceDefaultNum;
          let statsnumreports =
            objData.collections[i].stats.num_reports || replaceDefaultNum;
          let statsmarketcap =
            objData.collections[i].stats.market_cap || replaceDefaultNum;
          let statsfloorprice =
            objData.collections[i].stats.floor_price || replaceDefaultNum;

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
    }
  );
};
// MeatGrinder Function ENDS //
MeatGrinder2();
