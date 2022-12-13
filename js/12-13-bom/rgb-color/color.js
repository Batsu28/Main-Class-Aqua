let idEl = document.getElementById("root");
idEl.style.width = "100px";
idEl.style.height = "100px";
idEl.style.margin = "auto";

let r = 0;
let g = 255;
let b = 60;

let colorChange = setInterval(function () {
  r++;
  g--;
  b++;
  idEl.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  if (n == 255) {
    clearInterval(colorChange);
  }
}, 10);
