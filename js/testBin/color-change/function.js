let contain = document.querySelector(".container");

for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    let newDiv = document.createElement("div");
    contain.appendChild(newDiv);
    newDiv.setAttribute("class", "cell");
    newDiv.addEventListener("click", colorBlue);
  }
}
function colorBlue() {
  newDiv.style.backgroundColor = "blue";
  newDiv.addEventListener("click", colorGreen);
}
function colorGreen() {
  newDiv.style.backgroundColor = "rgb(118, 228, 118)";
}
