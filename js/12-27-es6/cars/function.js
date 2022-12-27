let root = document.querySelector("#root");
let newDiv = document.createElement("div");
let select = document.querySelector("#cars");

select.innerHTML = "<option value='blank' hidden></option>";

fetch("http://localhost:3333/api/cars")
  .then((data) => data.json())
  .then((cars) =>
    cars.map((car) => {
      select.innerHTML += `<option value="${car.model}">${car.model}</option>`;
      select.addEventListener("change", () => {
        newDiv.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${car.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"><span>Model: </span>${select.value}/h5>
          <p class="card-text"><span>Brand: </span>${car.brand}</p>
        </div>
      </div>`;
        root.appendChild(newDiv);
      });
    })
  );
