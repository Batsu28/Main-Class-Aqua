let breeds = document.querySelector("#breeds");
let card = document.querySelector(".card");
let str = "";

breeds.innerHTML = `<option value="blank" hidden></option>`;

fetch(`https://dog.ceo/api/breeds/list/all`)
  .then((data) => data.json())
  .then((data) => {
    breedsOptions(data);
  });

function getImg(type) {
  fetch(`https://dog.ceo/api/breed/${type}/images/random`)
    .then((data) => data.json())
    .then((data) => (card.innerHTML = `<img src="${data.message}">`));
}

function breedsOptions(breed) {
  let breedOpt = Object.keys(breed.message);

  for (let i = 0; i < breedOpt.length; i++) {
    let html = `<option value="${breedOpt[i]}">${breedOpt[i]}</option>`;
    breeds.innerHTML += html;
  }
}
breeds.addEventListener("change", () => {
  getImg(breeds.value);
});
card.addEventListener("click", () => {
  getImg(breeds.value);
});
