const https = require("http");

// const data = async () => {
//   try {
//     const axios = require("axios");
//     const res = await axios.get("http://provider:5454/");
//     const fil_data = res.data;
//     console.log("EHHE");
//     console.log(fil_data);
//     console.log(res);

//     return fil_data;
//   } catch (err) {
//     console.log(err);
//   }
// };
// data();
// https://api.opensea.io/api/v1/assets?collection_slug=doodles-official&limit=50

https.get(`http://localhost:4568`, (resp) => {
  let data = "";

  // A chunk of data has been received.
  resp.on("data", (chunk) => {
    data += chunk;
  });

  // The whole response has been received.
  resp.on("end", () => {
    // let objData = JSON.parse(data);
    // console.log(objData);
    console.log(data);
  });
});
