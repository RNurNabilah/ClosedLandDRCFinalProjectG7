axios
  .get("include_provider")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
