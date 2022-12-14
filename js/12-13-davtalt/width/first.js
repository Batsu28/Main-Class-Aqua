let n = 0;
let i = 0;
let rootElement = document.getElementById("main");

do {
  let newDiv = document.createElement("div");
  rootElement.appendChild(newDiv);
  newDiv.className = "notDummy";
  classEl = document.getElementsByClassName("notDummy")[i];
  classEl.style.margin = "auto";
  classEl.style.border = "10px dashed blue";
  classEl.style.borderRadius = "100%";
  classEl.style.backgroundColor = "aqua";
  let timer = setInterval(function () {
    n++;
    if (n == 200) {
      clearInterval(timer);
      n = 0;
    } else {
      classEl.style.width = `${n}px`;
      classEl.style.height = `${n}px`;
    }
  }, 10);
  i++;
} while (i < 2);
