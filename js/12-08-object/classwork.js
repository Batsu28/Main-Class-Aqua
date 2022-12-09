let athlete = [
  { name: "person1", age: 20, record: [20, 30, 45, 60] },
  { name: "person2", age: 32, record: [17, 29, 32, 41, 54, 62] },
  { name: "person3", age: 24, record: [23, 33, 42, 44, 55, 87] },
  { name: "person4", age: 28, record: [17, 26, 32, 62, 73] },
];
let n = 0;
let div = [0, 0, 0, 0];
let divide = 0;
let output = "";
let personal = "";

function getAverageAge(input) {
  let sum = 0;
  while (n < input.length) {
    sum += input[n].age;
    n++;
  }
  output = Math.floor(sum / input.length);
  return output;
}

function getAverageSpeed(input) {
  while (n < input.length) {
    let sum = 0;
    let i = 0;
    while (i < input[n].record.length) {
      sum += input[n].record[i];
      div[n] = sum / input[n].record.length;
      i++;
    }
    personal += input[n].name + ": " + "\t" + div[n] + "\n";
    divide += input[n].record.length;
    output = personal + "\n" + "Average record: " + sum / divide;
    n++;
  }
  return output;
}

function getAll(input) {
  return getAverageSpeed(input) + "\n" + "Average age: " + getAverageAge(input);
}

console.log(getAverageSpeed(athlete) + "\n" + getAverageAge(athlete));
