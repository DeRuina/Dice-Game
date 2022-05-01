let randomNumber1 = Math.floor(Math.random() * 6) + 1; 
let randomNumber2 = Math.floor(Math.random() * 6) + 1; 

let randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
let randomDiceImage2 = "images/dice" + randomNumber2 + ".png";


document.querySelector(".img1").setAttribute("src", randomDiceImage1);
document.querySelector(".img2").setAttribute("src", randomDiceImage2);

if(randomNumber1 > randomNumber2){
document.querySelector("h1").innerHTML = " PLAYER 1 WINS 🏆";
}
else if(randomDiceImage2 > randomDiceImage1){
document.querySelector("h1").innerHTML = "PLAYER 2 WINS 🏆";
}
else {
  document.querySelector("h1").innerHTML = "DRAW 🤝";
}