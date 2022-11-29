let day, weekname;
day = 10;

// If () {} else {}

if (day == 1) {
  weekname = "Monday";
} else if (day == 2) {
  weekname = "Tuesday";
} else if (day == 3) {
  weekname = "Wednesday";
} else if (day == 4) {
  weekname = "Thurday";
} else if (day == 5) {
  weekname = "Friday";
} else if (day == 6) {
  weekname = "Saturday";
} else if (day == 7) {
  weekname = "Sunday";
}

if (day > 7) {
  console.log("not found");
} else if (day <= 0) {
  console.log("not found");
} else {
  console.log("your inserted day is " + weekname);
}

// Switch

switch (day) {
  case 1:
    weekname = "monday";
    break;
  case 2:
    weekname = "tuesday";
    break;
  case 3:
    weekname = "wednesday";
    break;
  case 4:
    weekname = "thusday";
    break;
  case 5:
    weekname = "friday";
    break;
  case 6:
    weekname = "saturday";
    break;
  case 7:
    weekname = "sunday";
    break;
}
switch (day) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  case 7:
    console.log("your inserted day is " + weekname);
    break;
  default:
    console.log("not found");
}

if (day == 1 || day == 2 || day == 3 || day == 4 || day == 5) {
  console.log("work day");
} else {
}

// new

let x = 10,
  y = 20,
  z = 30;

if (x > y) {
  if (x > z) {
    console.log(x, " n hamgiin ih");
  } else {
    console.log(z, " n hamgiin ih");
  }
} else {
  if (y > z) {
    console.log(y, " n hamgiin ih");
  } else {
    console.log(z, " n hamgiin ih");
  }
}

if (x > y && x > z) {
  console.log(x, " n hamgiin ih");
} else {
  if (y > z) {
    console.log(y, " n hamgiin ih");
  } else {
    console.log(z, " n hamgiin ih");
  }
}

// ternary
//
// condition ? true : false
//

let age = 15;

age > 21 ? console.log("yes") : console.log("no");

let mystate = age >= 10 && age <= 21 ? "teen" : "adult";

console.log(mystate);
