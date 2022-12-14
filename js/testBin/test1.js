function lvl() {
  let lvl = 3;
  return lvl;
}
let lvl1 = lvl();

let rNum1 = Math.floor(Math.random(0, 1) * 256);
let rNum2 = Math.floor(Math.random(0, 1) * 256);
let rNum3 = Math.floor(Math.random(0, 1) * 256);

let color = `rgb(${rNum1},${rNum2},${rNum3})`;

function diffColor() {
  if (rNum1 == 0 || rNum2 == 0 || rNum3 == 0) {
    return `rgb(${rNum1 + 30},${rNum2 + 30},${rNum3 + 30})`;
  } else {
    return `rgb(${rNum1 - 30},${rNum2 - 30},${rNum3 - 30})`;
  }
}

function newDivs() {
  let idEl = document.getElementById("root");
  idEl.style.width = `${100 * lvl1 + 50}px`;
  idEl.style.display = "flex";
  idEl.style.flexWrap = "wrap";
  idEl.style.gap = "5px";
  let newDiv = document.createElement("button");
  newDiv.style.width = "100px";
  newDiv.style.height = "100px";
  newDiv.style.border = "1px solid black";
  idEl.appendChild(newDiv);
  newDiv.style.backgroundColor = color;
}
function oddOne(num, num2) {
  if (num == num2) {
    let a = Math.floor(Math.random(0, 1) * (lvl1 * lvl1));
    document.getElementsByTagName("button")[a].style.backgroundColor =
      diffColor();
  }
}
for (let row = 0; row < lvl1; row++) {
  for (let col = 0; col < lvl1; col++) {
    newDivs();
  }
  oddOne(row, lvl1 - 1);
}
