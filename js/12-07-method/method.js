//
// 1 Register number
//
let upper = "АБВГДЕЖЭИЙКЛМНОПРСТФХУЦ";
let input = "аб98110231";
let region = [
  "Архангай",
  "Баян-Өлгий",
  "Баянхонгор",
  "Булган",
  "Говь-Алтай",
  "Дорноговь",
  "Дорнод",
  "Дундговь",
  "Завхан",
  "Өвөрхангай",
  "Өмнөговь",
  "Сүхбаатар",
  "Сэлэнгэ",
  "Төв",
  "Увс",
  "Ховд",
  "Хөвсгөл",
  "Хэнтий",
  "Дархан-Уул",
  "Орхон",
  "Говьсүмбэр",
  "Улаанбаатар",
  "Улаанбаатар",
];
let n = 0;

function isCorrectReg(register) {
  text = register.substring(0, 1).toUpperCase();
  num = register.substring(2, 9);
  if (register.length == 10 && upper.includes(text) && !isNaN(num)) {
    return true;
  } else {
    return false;
  }
}

function getGender(register) {
  if (register[8] % 2 == 0) {
    return "Gender: emegtei";
  } else {
    return "Gender: eregtei";
  }
}

function getBirthRegion(register) {
  while (n < upper.length) {
    if (register[0].toUpperCase() == upper[n]) {
      return "Birth Region: " + region[n];
    }
    n++;
  }
}

function getBirthDay(register) {
  if (register[4] == 2 || register[4] == 3) {
    return (
      "BirthDay: " +
      (Number(register.substring(2, 4)) +
        2000 +
        "." +
        (Number(register.substring(4, 6)) - 20) +
        "." +
        Number(register.substring(6, 8)))
    );
  } else {
    return (
      "BirthDay: " +
      (Number(register.substring(2, 4)) +
        1900 +
        "." +
        Number(register.substring(4, 6)) +
        "." +
        Number(register.substring(6, 8)))
    );
  }
}

function getRegisterInfo(register) {
  if (isCorrectReg(input) == true) {
    return register;
  } else {
    return "enter correct register number";
  }
}
let result = getRegisterInfo(
  getGender(input) + "\n" + getBirthRegion(input) + "\n" + getBirthDay(input)
);
console.log(result);
