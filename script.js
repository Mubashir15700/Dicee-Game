//alert("hello");

randomNUmber1 = Math.floor(Math.random() * 6 + 1);
//console.log(randomNUmber1);

randomNUmber2 = Math.floor(Math.random() * 6 + 1);
//console.log(randomNUmber2);

var randomDiceImage1 = "images/dice" + randomNUmber1 + ".png";
//console.log(randomDiceImage1);

var randomDiceImage2 = "images/dice" + randomNUmber2 + ".png";
//console.log(randomDiceImage2);

var image1 =  document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage1);

var image2 =  document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2);

if(randomNUmber1 > randomNUmber2) {
    document.querySelector("h1").innerHTML = "player 1 won";
} else if(randomNUmber2 > randomNUmber1) {
    document.querySelector("h1").innerHTML = "player 2 won";
} else {
    document.querySelector("h1").innerHTML = "draw";
}