/*
let lorem =
  "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
let count = 0;
let text = 0;

while (count < lorem.length) {
  if (lorem[count] == "b" || lorem[count] == "B") {
    text = text + 1;
  }
  count = count + 1;
}

console.log(text);
*/

//

/*
let num = 100;
let count = 0;

while (num > 0) {
  if (num % 3 == 0) {
    count = count + 1;
  }
  num--;
}

console.log(count);
*/

//

/*
let x = 10,
  count = 1;
output = "";
while (x > 0) {
  let y = 9;
  while (y > 0) {
    if (count % 2 == 0) {
      output = output + count + "\t";
      if (count % 18 == 0) output += "\n";
    }
    count++;
    y--;
  }
  x--;
}

console.log(output);
*/

//

let num = 10;
let space = " ",
  count = 0;
output = "";

while (count < num) {
  while (count++ == (count % 2 == 0)) {
    let space1 = Number(space);
    space1++;
    output = space1 + count + " ";
    console.log(output);
  }
  count++;
}
