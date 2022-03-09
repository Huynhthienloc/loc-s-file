function randomNumber1() {
	var randomNumber1 = Math.floor(Math.random() * 6) + 1
	var randomImg = "dice" + randomNumber1 +".png"
	var randomSource = "images/" + randomImg
	return randomSource
}
document.querySelector(".img1").setAttribute("src", randomNumber1())

function randomNumber2() {
	var randomNumber2 = Math.floor(Math.random() * 6) + 1 
	var randomImg = "dice" + randomNumber2 +".png"
	var randomSource = "images/" + randomImg
	return randomSource
}

document.querySelector(".img2").setAttribute("src", randomNumber2())

if (randomNumber1 > randomNumber2){
	document.querySelector(".heading").innerHTML = "Player 1 win" 
}
else if (randomNumber2 > randomNumber1){
	document.querySelector(".heading").innerHTML = "Player 2 win" 
}
else{
	document.querySelector(".heading").innerHTML = "Draw" 
}