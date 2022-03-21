while (1) {
  console.log("server running");
  await sleep(10000);
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
