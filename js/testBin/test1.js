let a=[1,2,3,4,5]

function randomNum(min,max){
    return Math.floor(Math.random()*max+min)
};

let random = randomNum(0,a.length)

console.log(random)