const playButton = document.querySelector('.play');
const imageDice1 = document.querySelector('.dice1');
const imageDice2 = document.querySelector('.dice2');

const titulo = document.querySelector('h1');

// let results = [];

let resultDice1;
let resultDice2;

function startGame() {
	addRandomNumbers();
	showDicesResult();
	if(resultDice1 > resultDice2){
		titulo.textContent = 'Ganador Player 1';
	} else if(resultDice1 < resultDice2){
		titulo.textContent ='Ganador Player 2';
	} else{
		titulo.textContent = 'Empate';
	}
}

function addRandomNumbers(){
	resultDice1 = Math.floor( Math.random() * 6 ) + 1;
	resultDice2 = Math.floor( Math.random() * 6 ) + 1;
}

function showDicesResult() {
	imageDice1.setAttribute('src', getImgPath(resultDice1));
	imageDice2.setAttribute('src', getImgPath(resultDice2));
}

function getImgPath(diceNumber) {
	return `img/dice${diceNumber}.png`;
}

playButton.addEventListener('click', startGame);
