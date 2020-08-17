var numSquares = 6;
var colors = generateRandomColor(6);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
colorDisplay.textContent = pickedColor;
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
let modeBtn = document.querySelectorAll('.mode');

init();

function init() {
	reset();
	setupModeButtons();
	setupSquares();
}

function setupModeButtons() {
	for (let i = 0; i < modeBtn.length; i++) {
		modeBtn[i].addEventListener('click', function() {
			modeBtn[0].classList.remove('selected');
			modeBtn[1].classList.remove('selected');
			this.classList.add('selected');
			this.textContent === 'Easy' ? (numSquares = 3) : (numSquares = 6);
			reset();
		});
	}
}

function reset() {
	colors = generateRandomColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = 'New Colors';
	messageDisplay.textContent = '';

	for (let i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = 'block';
			squares[i].style.background = colors[i];
		}
		else {
			squares[i].style.display = 'none';
		}
	}
	h1.style.backgroundColor = 'steelblue';
}

function setupSquares() {
	for (let i = 0; i < squares.length; i++) {
		//adding click listeners

		squares[i].addEventListener('click', function() {
			//grab the color of the picked square and compare to the set color
			let clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = 'Correct!';
				resetButton.textContent = 'Play again?';
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}
			else {
				this.style.backgroundColor = '#232323';
				messageDisplay.textContent = 'Try again';
			}
		});
	}
}

resetButton.addEventListener('click', function() {
	reset();
});

function changeColors(color) {
	for (let i = 0; i < colors.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	let random = Math.floor(Math.random() * colors.length);

	return colors[random];
}

function generateRandomColor(num) {
	let arr = [];

	for (let i = 0; i < num; i++) {
		arr.push(randomColor());
	}

	return arr;
}

function randomColor() {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);

	return `rgb(${r}, ${g}, ${b})`;
}
