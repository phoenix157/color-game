var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

init();

function init(){
//mode buttons
for (var i = 0; i < modeBtns.length; i++) {
	modeBtns[i].addEventListener("click", function(){
		modeBtns[0].classList.remove("selected");
		modeBtns[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares=3 : numSquares=6;
		reset();
		});
	}	

}

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor =pickColor();
	colorDisplay.textContent = 	pickedColor;
	resetBtn.textContent = "New Colors";
	messageDisplay.textContent = "";
	resetBtn.textContent = "Play Again?";
	h1.style.background = "steelblue";

	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
}



colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	// squares[i].style.background = colors[i]; 
	squares[i].addEventListener("click", function(){

		var clickedColor = this.style.background;
		
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColor(clickedColor);
			h1.style.background = clickedColor;
		}
		else{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
		
	});

}

function changeColor(color) {
	for (var i = 0; i <squares.length; i++) {
	squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];

	for (var i = 0; i <num; i++) {
		arr.push(randomColor());
	}

	return arr;
}

function randomColor(){
	 var r = Math.floor(Math.random() * 256);
	 var g = Math.floor(Math.random() * 256);
	 var b = Math.floor(Math.random() * 256);
	 return "rgb(" + r + ", " +g + ", " + b + ")";
}

resetBtn.addEventListener("click", function(){
	reset();
});



