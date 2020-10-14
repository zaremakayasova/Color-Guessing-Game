var numSquares=6;
var colors=generateRandomColors(numSquares);
var squares=document.getElementsByClassName("square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.getElementById("reset");
var easyBtn=document.getElementById("easyBtn");
var hardBtn=document.getElementById("hardBtn");



easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares=3;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0; i<squares.length;i++){
		if(colors[i]){
			squares[i].style.background=colors[i];
		} else{
			squares[i].style.display="none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares=6;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0; i<squares.length;i++) {
		squares[i].style.background=colors[i];
		squares[i].style.display="block";
		}
});

resetButton.addEventListener("click", function() {
	//generate all new colors
	//pick a new random color from array
	//change colors of squares
	//change colorDisplay to match picked color
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	messageDisplay.textContent="";
	resetButton.textContent="New Colors"; //this.textContent="New Colors";
    for(var i=0; i<squares.length;i++) {
		squares[i].style.background=colors[i];
	}
	h1.style.background="steelblue";

});

colorDisplay.textContent=pickedColor;

for(var i=0; i<squares.length;i++) {
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor=this.style.backgroundColor;
		if(clickedColor===pickedColor) {
			messageDisplay.textContent="Correct!";
			changeColors(clickedColor);
			h1.style.background=clickedColor;
			resetButton.textContent="Play again?";
		} else {
			this.style.background="#232323";
			messageDisplay.textContent="Try Again!";
		}
	});
}

function changeColors(color) {
	//loop through all squares
	//change each color to match given color
	for(var i=0; i<colors.length;i++) {
		squares[i].style.background=color;
	}
}
function pickColor() {
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generateRandomColors(num) {
	//make an array
	//add num random colors to array
	//return that array
	var arr= [];
	for(var i=0; i<num;i++) {
		arr.push(randomColor());
    //get random color and push into array
}
	return arr;
}
function randomColor() {
	var red=Math.floor(Math.random()*256);
	var green=Math.floor(Math.random()*256);
	var blue=Math.floor(Math.random()*256);
	//"rgb(red, green, blue)"
	return "rgb(" + red + ", " + green + ", " + blue + ")";

}