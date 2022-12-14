// color

let rNum1 = Math.floor(Math.random(0, 1) * 256);
let rNum2 = Math.floor(Math.random(0, 1) * 256);
let rNum3 = Math.floor(Math.random(0, 1) * 256);

let color = `rgb(${rNum1},${rNum2},${rNum3})`;

function diffColor(num) {
  if (rNum1 == 0 || rNum2 == 0 || rNum3 == 0) {
    return `rgb(${rNum1 + num},${rNum2 + num},${rNum3 + num})`;
  } else {
    return `rgb(${rNum1 - num},${rNum2 - num},${rNum3 - num})`;
  }
}

// box
