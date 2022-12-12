let n = 0;
// while (n <= 8) {
//   let i = 1;
//   while (i <= 8) {
//     const newDiv = document.createElement("div");
//     const main = document.getElementsByTagName("main");
//     main[0].appendChild(newDiv);
//     if ((n + i) % 2 == 0) {
//       newDiv.style.backgroundColor = "black";
//     }
//     i++;
//   }
//   n++;
// }
while (n < 64) {
  const newDiv = document.createElement("div");
  const main = document.getElementsByTagName("main");
  main[0].appendChild(newDiv);
  if ((n + (Math.floor(n / 8) % 2)) % 2 == 0) {
    newDiv.style.backgroundColor = "black";
  }
  n++;
}
