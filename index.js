
var randomNumber1 = Math.floor(Math.random() * 6) + 1
var randomImg1 = "dice" + randomNumber1 +".png"
var randomSource1 = "images/" + randomImg1
document.querySelector(".img1").setAttribute("src", randomSource1)


var randomNumber2 = Math.floor(Math.random() * 6) + 1 
var randomImg2 = "dice" + randomNumber2 +".png"
var randomSource2 = "images/" + randomImg2
document.querySelector(".img2").setAttribute("src", randomSource2 )

if (randomNumber1 > randomNumber2){
	document.querySelector(".heading").innerHTML = "Player 1 win" 
}
else if (randomNumber2 > randomNumber1){
	document.querySelector(".heading").innerHTML = "Player 2 win" 
}
else{
	document.querySelector(".heading").innerHTML = "Draw" 
}
