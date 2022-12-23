const form = document.querySelector("form");
const countriesContainer = document.querySelector(".countries");
let search = document.querySelector("input");
let btn = document.querySelector("button");
// https://restcountries.com/v3.1/name/${country}
// https://restcountries.com/v3.1/alpha/${neighbour}

function renderCountry(country) {
  const html = `<article class="country">
    <img class="country__img" src="${country.flags.svg}" />
    <div class="country__data">
      <h3 class="country__name">${country.name.common}</h3>
      <h4 class="country__region">${country.region}</h4>
      <p class="country__row"><span>👫</span>${
        country.population < 1_000_000_000
          ? country.population < 1_000_000
            ? (country.population / 1_000).toFixed(2) + " K"
            : (country.population / 1_000_000).toFixed(2) + " M"
          : (country.population / 1_000_000_000).toFixed(2) + " B"
      }</p>
      <p class="country__row"><span>🗣️</span>${
        Object.values(country.languages)[0]
      }</p>
      <p class="country__row"><span>💰</span>${
        Object.values(country.currencies)[0].name
      } ${Object.values(country.currencies)[0].symbol}</p>
      
    </div> 
    </article>`;
  countriesContainer.innerHTML = html;
  for (var i = 0; i < country.borders.length; i++) {
    getNeighbour(country.borders[i]);
  }
}

function getCountry(country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((res) => res.json())
    .then((data) => renderCountry(data[0]))
    .then((data) => borderlist(data[0]));
}

form.addEventListener("input", () => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    getCountry(search.value);
  });
});

function getNeighbour(neighbour) {
  fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
    .then((res) => res.json())
    .then((data) => borderlist(data[0]));
}

function borderlist(country) {
  const html1 = `<article class="country neighbour">
    <img class="country__img" src="${country.flags.svg}" />
    <div class="country__data">
      <h3 class="country__name">${country.name.common}</h3>
      <h4 class="country__region">${country.region}</h4>
      <p class="country__row"><span>👫</span>${
        country.population < 1_000_000_000
          ? country.population < 1_000_000
            ? (country.population / 1_000).toFixed(2) + " K"
            : (country.population / 1_000_000).toFixed(2) + " M"
          : (country.population / 1_000_000_000).toFixed(2) + " B"
      }</p>
      <p class="country__row"><span>🗣️</span>${
        Object.values(country.languages)[0]
      }</p>
      <p class="country__row"><span>💰</span>${
        Object.values(country.currencies)[0].name
      } ${Object.values(country.currencies)[0].symbol}</p>
      
    </div> 
    </article>`;
  countriesContainer.innerHTML += html1;
}
