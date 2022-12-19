
let question1 = document.getElementById("question1");
let question2 = document.getElementById("question2");
let question3 = document.getElementById("question3");

let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");

let output = document.getElementById("output");

let startBtn = document.querySelector("button")

let gameBg = document.querySelector("#opacityBg")

let questArr1 = ["өндөр", "намхан", "сахалтай"];
let questArr2 = []

function randomNum(min, max) {
  return Math.floor(Math.random() * max + min);
}

startBtn.addEventListener("click",gameStart)

function gameStart(){
console.log("test")

gameBg.style.display = "flex"

let text1 = `Танай ангийн хамгийн ${
    questArr1[randomNum(0, questArr1.length)]
} нь хэн бэ?`;

question1.innerText = `${text1}`;

question2.innerText = "Таны очих дуртай газар хаана вэ?";

question3.innerText = "Таны хэдэн сард төрсөн бэ?";


// output.innerText = `Ирэх ${randomNum(2023, 20)} онд ${input1(
//   answer1
// )} тай хамт ${answer2.value} явах магадлалтай "\n" ${
//   answer3.value
// } сард төрсөн бол шингэн зүйл их хэрэглэх нигууртай`;
}