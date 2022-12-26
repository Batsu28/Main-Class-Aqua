let root = document.querySelector("#root");

fetch(`https://dog.ceo/api/breeds/image/random`)
  .then((data) => data.json())
  .then((data) => (root.innerHTML = `<img src="${data.message}">`));
