let question1 = document.getElementById("question1");
let question2 = document.getElementById("question2");
let question3 = document.getElementById("question3");

let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");

let answerArr1 = ["өндөр","намхан","сахалтай"]

function randomNum(min,max){
    return Math.floor(Math.random()*max+min)
};

let text1 = `Танай ангийн хамгийн ${answerArr1[randomNum(0,answerArr1.length)]} нь хэн бэ?`
question1.innerText=`${text1}`
    
question2.innerText="Таны очих дуртай газар хаана вэ?"

question3.innerText="Таны хэдэн сард төрсөн бэ?"

answer1.addEventListener("input", input1)

