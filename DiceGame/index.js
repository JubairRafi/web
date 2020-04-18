
var randomNumber1 = Math.floor(Math.random()*6) +1;

var randomNumber2 = Math.floor(Math.random()*6) +1;

var diceimg1 = "dice" + randomNumber1 + ".png"; //pick dice
var diceimg2 = "dice" + randomNumber2 + ".png";

var imgsrc1 = "images/" + diceimg1;
var imgsrc2 = "images/" + diceimg2;

document.querySelector(".img1").setAttribute("src",imgsrc1);
document.querySelector(".img2").setAttribute("src",imgsrc2);
