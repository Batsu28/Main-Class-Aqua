let question = [
	document.getElementById("question1"),
	document.getElementById("question2"),
	document.getElementById("question3"),
];

let answer = [
	document.getElementById("answer1"),
	document.getElementById("answer2"),
	document.getElementById("answer3"),
];

let btn = [
	document.querySelector("#start"),
	document.querySelector("#enter"),
	document.querySelector("#reset"),
];

let gameBg = document.querySelector("#opacityBg");
let output = document.getElementById("output");

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
let zurhai = [
	[
		"ирэх онд санхүү сэхэж орлого нэмэгдэх нь гагцхүү чиний хичээл зүтгэл мэднэ",
		"",
	],
	["", ""],
	["ирэх онд эрдмийн зарлага гаргах аюултай тул хичээллээ сайн хийнүү", ""],
	["", ""],
	[
		"автобус таксины хойноос гүйж эрүүл мэнд болон дансандаа хөрөнгө оруулалт хийгээрэй",
		"",
	],
	["", "хэмнэж чадвал баяжих нь баттай сэхэх нь баараггүй"],
	["", ""],
	[
		"",
		"шинэ онд саад бэрхшээлтэй ихэд тулгарач давч чадвал орлогын үүд нээгдэх болно",
	],
	["олон хүнтэй найзалж чадвал чиний ирээдгүй гэгээлэг харагдаж байна", ""],
	["", ""],
	["", "шинэ онд орлогын үүд нээгдэх тул хичээлээ сайн хийгээрэй"],
	[
		"ирэх онд тархи гашлах нигууртай тул тархиа сэргээж бэлтгэлээ базаана уу",
		"5",
	],
];

let answerArr = [
	answer[0].addEventListener("input", input),
	answer[1].addEventListener("input", input),
	answer[2].addEventListener("input", input),
];

function randomNum(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function input(a) {
	return a.value;
}

btn[0].addEventListener("click", gameStart);
btn[2].addEventListener("click", () => {
	gameBg.style.display = "none";
});

function gameStart() {
	btn[2].style.display = "none";
	gameBg.style.display = "flex";

	let text1 = `Танай ангийн хамгийн ${
		questArr1[randomNum(0, questArr1.length)]
	} нь хэн бэ?`;

	question[0].innerText = `${text1}`;

	question[1].innerText = "Таны очих дуртай газар хаана вэ?";

	question[2].innerText = "Таны хэдэн сард төрсөн бэ?";

	btn[1].addEventListener("click", () => {
		document.querySelector(".top").style.display = "none";
		btn[1].style.display = "none";
		btn[2].style.display = "block";
		output.style.display = "block";

		output.innerHTML = `Ирэх ${randomNum(2023, 2026)} онд ${input(
			answer[0]
		)} тай хамт ${input(answer[1])} явах магадлалтай <br> ${input(
			answer[2]
		)} сард хүмүүс ${zurhaiRandom()} `;
	});
}

function zurhaiRandom() {
	if (randomNum(0, 10) % 2 == 0) {
		return zurhai[parseInt(input(answer[2])) - 1][1];
	} else {
		return zurhai[parseInt(input(answer[2])) - 1][0];
	}
}
