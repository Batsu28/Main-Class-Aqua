let rootElement = document.getElementById("root");
let newDiv = document.createElement("div");
rootElement.appendChild(newDiv);

let sec = 0;
let min = 0;
let hour = 0;
setInterval(function () {
  sec++;
  if (sec == 59) {
    sec = 0;
    min++;
  }
  if (min == 59) {
    min = 0;
    hour++;
  }
  newDiv.innerHTML = `${hour < 10 ? "0" : ""}${hour}:${
    min < 10 ? "0" : ""
  }${min}:${sec < 10 ? "0" : ""}${sec}`;
}, 10);
