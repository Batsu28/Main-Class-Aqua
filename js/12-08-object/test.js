let athlete = [
  { name: "John", age: 18, record: [20, 30, 45, 60] },
  { name: "Dorj", age: 32, record: [17, 29, 32, 41, 54, 62] },
  { name: "John", age: 23, record: [23, 33, 42, 44, 55, 87] },
  { name: "John", age: 28, record: [17, 26, 32, 62, 73] },
];

function getAllNames(nput) {
  let name = [];
  for (i = 0; i < input.length; i++) {
    name.push(list[i].name);
  }
  return name;
}

function getAllSec(input) {
  let allList = [];
  for (i = 0; i < input.length; i++) {
    let sum = 0;
    for (j = 0; j < input[i].record.length; j++) {
      sum += input[i].record[j];
    }
    let list = {
      name: input[i].name,
      avg: sum / input[i].record.length,
    };
  }
}

function getAllAge(input) {
  for (i = 0; i < input.length; i++) {
    sum += input[i].age;
  }
  return Math.round(sum / input.length);
}

function getAllInfo(input) {
  let name = getAllNames(input);
  let age = getAllAge(input);
  let sec = getAllSec(input);
  for (i = 0; i < avgSec.length; i++) {
    sum += avgSec[i].avg;
  }
  return;
}
