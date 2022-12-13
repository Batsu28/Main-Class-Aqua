let idEl = document.getElementById("root");
idEl.style.width = "450px";
idEl.style.display = "flex";
idEl.style.flexWrap = "wrap";

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

// function rDiv() {
//   let n = Math.ceil(Math.random(0, 1) * 16);
//   return n;
// }

// for (let n = 0; n < 16; n++) {
//   let newDiv = document.createElement("div");
//   newDiv.style.width = "100px";
//   newDiv.style.height = "100px";
//   newDiv.style.border = "1px solid black";
//   newDiv.style.backgroundColor = color;
//   idEl.appendChild(newDiv);
//   if (n == 15) {
//     document.getElementsByTagName("div")[rDiv()].style.backgroundColor =
//       diffColor();
//   }
// }

function rDiv() {
  let n = Math.ceil(Math.random(0, 1) * 16);
  return n;
}

for (let n = 0; n < 4; n++) {
  for (let i = 0; i < 4; i++) {
    let newDiv = document.createElement("div");
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.border = "1px solid black";
    newDiv.style.backgroundColor = color;
    idEl.appendChild(newDiv);
  }
  if (n == 3) {
    document.getElementsByTagName("div")[rDiv()].style.backgroundColor =
      diffColor();
  }
}
