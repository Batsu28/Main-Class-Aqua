let mainBox = document.querySelector("#root");

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function ranCells() {}

for (let i = 0; i < 9; i++) {
  let newDiv = document.createElement("div");
  newDiv.className = "new-div";
  mainBox.appendChild(newDiv);
  for (let j = 0; j < 9; j++) {
    let cell = document.createElement("div");
    cell.className = "cell";
    newDiv.appendChild(cell);
    if (j == 8) {
      let cellName = document.querySelectorAll(".cell");
      let count = 0;
      do {
        cellName[randomNum(count, (count + 1) * 9)].innerText = `${randomNum(
          1,
          10
        )}`;
        count++;
      } while (count < 9);
    }
  }
}
