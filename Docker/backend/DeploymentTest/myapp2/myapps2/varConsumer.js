const data = async () => {
  try {
    const axios = require("axios");
    const res = await axios.get("http://provider:5454/");
    const fil_data = res.data;
    console.log("EHHE");
    console.log(fil_data);
    console.log(res);

    return fil_data;
  } catch (err) {
    console.log(err);
  }
};
data();
