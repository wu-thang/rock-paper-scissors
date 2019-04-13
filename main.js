function computerPlay() {
	let ranNum = Math.floor(Math.random() * 3);
	let choice = '';
	switch (ranNum) {
		case 0:
			choice = 'rock';
			break;
		case 1:
			choice = 'paper';
			break;
		case 2:
			choice = 'scissor';
			break;
	}
	return choice;
}

function capitalize(str){
	arr = str.split("");
	 arr[0] = arr[0].toUpperCase();  
 return arr.join("");
 }

function playRound(playerSelection, computerSelection) {
	loser = 'Lose ! ' + capitalize(computerSelection) + ' beats ' + capitalize(playerSelection) + '!';
	winner = 'Win ! ' + capitalize(playerSelection) + ' beats ' + capitalize(computerSelection) + '!';
	tie = 'Tie ! ' + capitalize(playerSelection) + ' ties with ' + capitalize(computerSelection) + '!';

	let round =
		playerSelection == 'rock' && computerSelection == 'rock' ?
		tie :
		playerSelection == 'paper' && computerSelection == 'paper' ?
		tie :
		playerSelection == 'scissor' && computerSelection == 'scissor' ?
		tie :
		playerSelection == 'scissor' && computerSelection == 'rock' ?
		loser :
		playerSelection == 'scissor' && computerSelection == 'paper' ?
		winner :
		playerSelection == 'paper' && computerSelection == 'rock' ?
		winner :
		playerSelection == 'paper' && computerSelection == 'scissor' ?
		loser :
		playerSelection == 'rock' && computerSelection == 'scissor' ?
		winner :
		playerSelection == 'rock' && computerSelection == 'paper' ? loser : '';
	return round;
}

function game(play) {
	const computerSelection = computerPlay();
	return playRound(play, computerSelection);
}

let scores = [0, 0];

function score(e) {
	if (e === 0) {
		scores[0] += 1;
	} else if (e === 1) {
		scores[1] += 1;
	}
	return scores;
}

function choice(str) {
	if (str.slice(0, 3) == 'Win') {
		score(0);
	} else if (str.slice(0, 4) == 'Lose') {
		score(1);
	}
}

function newGame() {
	scores = [0, 0];
}

const ngame = document.querySelector('#new-game');
ngame.addEventListener('click', () => {
	newGame();
	console.log(scores);
	button.style.visibility = "visible";  
	player.innerHTML = scores[0];
	computer.innerHTML = scores[1];
	content.textContent = "";
})

const player = document.querySelector('.player');
const computer = document.querySelector('.cpu');



const action = document.querySelector('#action');

const content = document.createElement('p');
content.classList.add('content');

action.appendChild(content);

let button = document.querySelector('#container');
button.addEventListener('click', (e) => {
	let z = game(e.target.id);
	choice(z)

	if (scores[0] === 5) {
		content.textContent = "The player is the winnnerr!"
		button.style.visibility = "hidden";  
	} else if (scores[1] === 5 ) {
		content.textContent = "The Computer is the winner!!"
		button.style.visibility = "hidden";  
	} else {
		content.innerText = z;
	}

	console.log(scores);
	player.innerHTML = scores[0];
	computer.innerHTML = scores[1];

	

})