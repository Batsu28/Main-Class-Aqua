// 1
// ex: ****
//     ****
//     ****
//     ****

// let num = 6;
// let output = "";
// for (let a = 1; a <= num; a++) {
//   for (let b = 1; b <= num; b++) {
//     output = output + "*" + "\t";
//     debugger;
//   }
//   output += "\n";
// }
// console.log(output);

// 2
// ex: ****
//     *  *
//     *  *
//     ****

// let num = 10;
// let output = "";

// for (let row = 1; row <= num; row++) {
//   for (let col = 1; col <= num; col++) {
//     if (row == 1 || row == num || col == 1 || col == num) {
//       output += "*" + "\t";
//     } else {
//       output += "\t";
//     }
//   }
//   output += "\n";
// }
// console.log(output);

// 3
// ex: 1111
//     2  2
//     3  3
//     4444

// let num = 6;
// let count = 0;
// let output = "";

// for (let row = 1; row <= num; row++) {
//   count++;
//   for (let col = 1; col <= num; col++) {
//     if (row == 1 || row == num || col == 1 || col == num) {
//       output += count + "\t";
//     } else {
//       output += "\t";
//     }
//   }
//   output += "\n";
// }
// console.log(output);

// 4 unfinished
// ex: 1234
//     1  4
//     1  4
//     1234

// let num = 6;
// let count = 0;
// let output = "";

// for (let row = 1; row <= num; row++) {
//   count++;
//   for (let col = 1; col <= num; col++) {
//     if (row == 1 || row == num || col == 1 || col == num) {
//       output += count + "\t";
//     } else {
//       output += "\t";
//     }
//   }
//   output += "\n";
// }
// console.log(output);

// 5

// let number = "12345678976543";
// number =
//   number.substring(0, number.length - 3) +
//   "_" +
//   number.substring(number.length - 3, number.length);
// console.log(number);

// 6
// password check

// let pass = 123;
// let num = Number(prompt("enter password"));
// do {
//   if (num === pass) {
//     alert("correct");
//   } else {
//     let num = Number(prompt("enter password"));
//   }
// } while (num !== pass);

// 9
// Check number

// let number;
// break == shuud zogsono

// while (true) {
//   number = prompt("number");
//   let firstChar = number.charAt(0);
//   number = Number(number);
//   if (Number.isInteger(number) && (firstChar == 9 || firstChar == 8)) {
//     break; //shuud zogsono
//   }
// }

// 10

// let i = 0;
// continue == duusah hurtlee urgejilne

// while (i < 10) {
//   i++;
//   if (i % 2 == 0) {
//     continue;
//   }
//   console.log(i);
// }

// 11
// prime number

// let n = 23;
// let prime = true;

// for (let i = 2; i < n; i++) {
//   if (n % i == 0) {
//     prime = false;
//     break;
//   }
// }

// if (prime) {
//   console.log("yes");
// } else {
//   console.log("no");
// }
