function prepare_breakfast() {
  let coffee_promise = new Promise((resolve, reject) =>
    setInterval(() => resolve("coffee ready to drink"), 2500)
  );
  let frying_pan = new Promise((resolve, reject) => {
    setTimeout(() => resolve("pan is ready"), 1000);
  });
  let egg_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("finished frying egg");
    }, 2000);
  });
  let boil_water = new Promise((resolve, reject) => {
    setTimeout(() => resolve("water is ready"), 2000);
  });

  let combined_promise = Promise.all([
    boil_water,
    frying_pan,
    coffee_promise,
    egg_promise,
  ]);
  return combined_promise;
}
async function morning() {
  let result = await prepare_breakfast();
  console.log(result);
}
morning();
