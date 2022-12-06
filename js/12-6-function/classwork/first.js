//
// bagsh
//

// const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const lower = "abcdefghijklmnopqrstuvwxyz";
// let text = "my Computer IS";

// function test(str) {
//   let output = "";
//   for (let n = 0; n < str.length; n++) {
//     if (upper.includes(str[n])) {
//       output += str[n].toLowerCase;
//     } else if (lower.includes(str[n])) {
//       output += str[n].toUpperCase;
//     } else {
//       output += str[n];
//     }
//   }
//   return output;
// }

//
//
//

let input = "thiS is STRING";
let n = 0;

function convert(string) {
  let output = "";
  while (n < string.length) {
    if (string[n] == string[n].toUpperCase()) {
      output += string[n].toLowerCase();
    } else if (string[n] == string[n].toLowerCase()) {
      output += string[n].toUpperCase();
    } else {
      output += string[n];
    }
    n++;
  }
  return output;
}

let result = convert(input);
console.log(result);
