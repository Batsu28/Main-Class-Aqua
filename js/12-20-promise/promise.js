let BoldIncome = 5_000_000;

let hairiinHuch2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (BoldIncome > 1_000_000) {
      resolve("success");
    } else {
      reject("not enough funds to release new album");
    }
  }, 2000);
});

hairiinHuch2
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finished");
  });
