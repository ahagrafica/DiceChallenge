const playButton = document.querySelector('.play');
const imageDice1 = document.querySelector('.dice1');
const imageDice2 = document.querySelector('.dice2');

let results = [];

playButton.addEventListener('click', startGame);

function startGame() {
	addRandomNumbers();
	showDicesResult();
}

function addRandomNumbers() {
	results.push(Math.floor( Math.random() * 6 ) + 1);
	results.push(Math.floor( Math.random() * 6 ) + 1);
}

function showDicesResult() {
	imageDice1.setAttribute('src', getImgPath(results[0]));
	imageDice2.setAttribute('src', getImgPath(results[1]));
}

function getImgPath(diceNumber) {
	return `img/imageDice${diceNumber}.jpg`;
}

