function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

var randomNumber1 = getRndInteger(1,6)
const i1 = document.getElementById("i1")
var path1="./images/dice"+randomNumber1+".png"
// console.log(i1, path1)
i1.setAttribute('src', path1);

var randomNumber2 = getRndInteger(1,6)
const i2 = document.getElementById("i2")
var path2="./images/dice"+randomNumber2+".png"
// console.log(i2, path2)
i2.setAttribute('src', path2);

if (randomNumber1==randomNumber2){
    document.getElementById("title").innerHTML = "Draw";
}
else if(randomNumber1>randomNumber2){
    document.getElementById("title").innerHTML = "Player 1 Wins";
}
else{
    document.getElementById("title").innerHTML = "Player 2 Wins";
}