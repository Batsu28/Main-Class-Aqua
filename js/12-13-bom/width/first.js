let n = 0;
let i = 0;

while (i < 2) {
  let rootElement = document.getElementById("main");
  let newDiv = document.createElement("div");
  rootElement.appendChild(newDiv);
  newDiv.className = "notDummy";
  let classEl = document.getElementsByClassName("notDummy")[i];
  classEl.style.backgroundColor = "aqua";
  classEl.style.margin = "auto";
  classEl.style.border = "10px dashed white";
  classEl.style.borderRadius = "100%";

  let timer = setInterval(function () {
    n++;
    classEl.style.width = `${n}px`;
    classEl.style.height = `${n}px`;
    if (n == 100) {
      clearInterval(timer);
      n = 0;
    }
    debugger;
  }, 10);
  i++;
}
