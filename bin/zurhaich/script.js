//// elements

let question1 = document.getElementById("question1");
let question2 = document.getElementById("question2");
let question3 = document.getElementById("question3");

let btnStart = document.getElementById("start");
let btnEnter = document.getElementById("enter");
let btnReset = document.getElementById("reset");

let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");

let gameBg = document.querySelector("#opacityBg");
let output = document.getElementById("output");

//// arrays

let questArr1 = [
  "өндөр",
  "намхан",
  "сахалтай",
  "балчир(залуу)",
  "урт үстэй",
  "сахалтай",
  "овортой",
];
let questArr2 = [];
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let zurhai = [
  [
    "ирэх онд санхүү сэхэж орлого нэмэгдэх нь гагцхүү чиний хичээл зүтгэл мэднэ",
    " ",
  ],
  [" ", " "],
  ["ирэх онд эрдмийн зарлага гаргах аюултай тул хичээллээ сайн хийнүү", " "],
  [" ", " "],
  [
    "автобус таксины хойноос гүйж эрүүл мэнд болон дансандаа хөрөнгө оруулалт хийгээрэй",
    " ",
  ],
  [" ", "хэмнэж чадвал баяжих нь баттай сэхэх нь баараггүй"],
  [" ", " "],
  [
    " ",
    "шинэ онд саад бэрхшээлтэй ихэд тулгарач давч чадвал орлогын үүд нээгдэх болно",
  ],
  ["олон хүнтэй найзалж чадвал чиний ирээдгүй гэгээлэг харагдаж байна", " "],
  [" ", " "],
  [" ", "шинэ онд орлогын үүд нээгдэх тул хичээлээ сайн хийгээрэй"],
  [
    "ирэх онд тархи гашлах нигууртай тул тархиа сэргээж бэлтгэлээ базаана уу",
    " ",
  ],
];

//// functions

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// input

function input(a) {
  return a.value;
}

// zuvlumj

function zurhaiRandom() {
  if (randomNum(0, 10) % 2 == 0) {
    return zurhai[parseInt(input(answer3)) - 1][1];
  } else {
    return zurhai[parseInt(input(answer3)) - 1][0];
  }
}

// gameStart

function gameStart() {
  btnReset.style.display = "none";
  gameBg.style.display = "flex";

  let text1 = `Танай ангийн хамгийн ${
    questArr1[randomNum(0, questArr1.length)]
  } нь хэн бэ?`;

  question1.innerText = `${text1}`;

  question2.innerText = "Таны очих дуртай газар хаана вэ?";

  question3.innerText = "Таны хэдэн сард төрсөн бэ?";
}

//// events

answer1.addEventListener("input", input);
answer2.addEventListener("input", input);
answer3.addEventListener("input", input);

btnEnter.addEventListener("click", () => {
  let check = num[parseInt(input(answer3)) - 1];
  if (parseInt(input(answer3)) === check) {
    document.querySelector(".top").style.display = "none";
    btnEnter.style.display = "none";
    btnReset.style.display = "flex";
    output.style.display = "block";

    output.innerHTML = `Ирэх ${randomNum(2023, 2026)} онд ${input(
      answer1
    )} тай хамт ${input(answer2)} явах магадлалтай <br>Зөвлөмж: ${input(
      answer3
    )} сард төрсөн хүмүүс ${zurhaiRandom()} `;
  } else {
    btnEnter.Disabled = true;
  }
});

btnStart.addEventListener("click", gameStart);
