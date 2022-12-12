let rootElement = document.getElementById("root");
rootElement.style.width = "500px";
let newDiv = document.createElement("div");
rootElement.appendChild(newDiv);
newDiv.style.height = "100px";
newDiv.style.border = "1px solid black";

// for (let i = 0; i > 10; i++);
// {
//   let n = 0;
//   let newDiv = document.createElement("div");
//   rootElement.appendChild(newDiv);
//   newDiv.style.height = "100px";
//   newDiv.style.border = "1px solid black";
//   setInterval(function () {
//     n++;
//     newDiv.style.width = `${n}px`;
//     if (newDiv.style.width == rootElement.style.width) {
//       n--;
//     }
//   }, 10);
// }
let i = 0;

setInterval(function () {
  i++;
}, 10);
