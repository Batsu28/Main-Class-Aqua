let carBtns = document.querySelector("#carBtns");
let root = document.querySelector("#root");
let showBtn = document.createElement("button");
let newDiv = document.createElement("div");
let select = document.querySelector("#cars");
let selectByBrand = document.querySelector("#selectByBrand");
let addCar = document.querySelector("#addCar");
let dltBtn = document.querySelector("#dltBtn");

carBtns.appendChild(showBtn);
root.appendChild(newDiv);
select.innerHTML = "<option value='blank' hidden></option>";
showBtn.innerText = "Snow all cars";
newDiv.style.display = "flex";
newDiv.style.flexWrap = "wrap";
newDiv.style.gap = "10px";

fetch("http://localhost:3333/api/cars")
  .then((res) => res.json())
  .then((res) => {
    selectModel(res);
    showBtn.addEventListener("click", () => showAll(res));
    selectBrand(res);
  });

function selectModel(cars) {
  cars.map((car) => {
    select.innerHTML += `<option value="${car.model}-${car.image}-${car.brand}">${car.model}</option>`;
    select.addEventListener("change", () => {
      let value = select.value.split("-");
      newDiv.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${value[1]}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"><span>Model: </span>${value[0]}</h5>
          <p class="card-text"><span>Brand: </span>${value[2]}</p>
        </div>
        </div>`;
    });
  });
}

function showAll(cars) {
  newDiv.innerHTML = "";
  cars.map((car) => {
    newDiv.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="${car.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"><span>Model: </span>${car.model}</h5>
      <p class="card-text"><span>Brand: </span>${car.brand}</p>
    </div>
    </div>`;
  });
}

function selectBrand(cars) {
  selectByBrand.addEventListener("change", () => {
    newDiv.innerHTML = "";
    cars.filter((car) => {
      if (selectByBrand.value == car.brand) {
        newDiv.innerHTML += `
        <div class="card" style="width: 18rem;">
        <img src="${car.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"><span>Model: </span>${car.model}</h5>
          <p class="card-text"><span>Brand: </span>${car.brand}</p>
        </div>
        </div>`;
      }
    });
  });
}

addCar.addEventListener("click", () => {
  let carModel = document.querySelector("#carModel");
  let carBrand = document.querySelector("#carBrand");
  let carImg = document.querySelector("#carImg");
  const newCar = {
    model: carModel.value,
    brand: carBrand.value,
    images: carImg.value,
  };
  fetch("http://localhost:3333/api/cars", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newCar),
  })
    .then((res) => res.json())
    .then(() => console.log("true"))
    .catch(() => console.log("false"));
});

// dltBtn.addEventListener("click", () => {
//   fetch("http://localhost:3333/api/cars" + "/" + 10, {
//     method: "delete",
//   })
//     .then(() => console.log("ok"))
//     .catch(() => console.log("error"));
// });
