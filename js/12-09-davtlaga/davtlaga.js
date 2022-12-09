// //////////////////////////////////////////////////////////////////
//
//////// for loop bichih
//
// //////////////////////////////////////////////////////////////////

// 1

// for (let i = 0; true; console.log(i)) {
//   i++;
//   if (i == 5) {
//     break;
//   }
// }

// 2

// let i = 1;
// for (console.log("hello"); true; console.log(i)) {
//   i++;
//   if (i == 5) {
//     break;
//   }
// }

// 3

// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 5; j++) {
//     process.stdout.write(i + " ");
//   }
//   console.log();
// }
// //////////////////////////////////////////////////////////////////
//
////////// Do While
//
// //////////////////////////////////////////////////////////////////

// let i = 1;
// do {
//   for (let j = 0; j < 5; j++) {
//     process.stdout.write(i + " ");
//   }
//   console.log();
//   i *= 2;
// } while (i < 5);

// buruu bolno gehdee daraa n code uurchilhud aldaa garah magadlaltai

// let random = 12;
// let guess = Number(prompt("enter number"));
// while (guess !== random) {
//   guess = Number(prompt("enter number"));
//   if (guess < random) {
//     console.log("low");
//   } else {
//     console.log("high");
//   }
//   if (guess == random) {
//     break;
//   }
// }

// zuv ehleed asuuna daraa tentsuu bish bval dahin asuuna

// let random = 12;
// let guess;

// do {
//   guess = Number(prompt("enter number"));
//   if (guess < random) {
//     console.log("low");
//   } else {
//     console.log("high");
//   }
// } while (guess !== random);

// //////////////////////////////////////////////////////////////////////////
//
// /////// Object & function
//
// //////////////////////////////////////////////////////////////////////////

// function addTwoNumber(a, b) {
//   return a + b;
// }
// function findsum(n, i) {
//   return addTwoNumber(n, i) * 2;
// }

// function findsum(k, j) {
//   if (k > j) {
//     return 0;
//   } else {
//     return k + findsum(k + 1, j); print:165 return findsum(k+1,j) print:0
//   }
// }
