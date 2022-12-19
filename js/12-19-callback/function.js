// function something(func1, func2) {
//   if (hour.getHours() < 18) {
//     func1();
//   } else {
//     func2();
//   }
// }

// function hello() {
//   console.log("hello");
// }

// function bye() {
//   console.log("bayrtai");
// }

// const hour = new Date();

// something(hello, bye);

let body = document.getElementById("scroll");
let display = document.getElementById("root");
let counter = 0;

window.addEventListener("scroll", () => {
  counter = Math.floor(
    (window.scrollY / Math.round(body.offsetHeight / 2)) * 100
  );
  display.innerText = counter + "%";
});
