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

function playRound(playerSelection, computerSelection) {
	let loser = 'Lose ! ' + computerSelection + ' beats ' + playerSelection + '!';
	let winner = 'Win ! ' + playerSelection + ' beats ' + computerSelection + '!';
	let tie = 'Tie ! ' + playerSelection + ' ties with ' + computerSelection;

	let round =
		playerSelection == 'rock' && computerSelection == 'rock'
			? tie
			: playerSelection == 'paper' && computerSelection == 'paper'
				? tie
				: playerSelection == 'scissor' && computerSelection == 'scissor'
					? tie
					: playerSelection == 'scissor' && computerSelection == 'rock'
						? loser
						: playerSelection == 'scissor' && computerSelection == 'paper'
							? winner
							: playerSelection == 'paper' && computerSelection == 'rock'
								? winner
								: playerSelection == 'paper' && computerSelection == 'scissor'
									? loser
									: playerSelection == 'rock' && computerSelection == 'scissor'
										? winner
										: playerSelection == 'rock' && computerSelection == 'paper' ? loser : '';
	return round;
}

function game() {
	const computerSelection = computerPlay();
	let scores = [ 0, 0 ];

	for (i = 0; i < 5; i++) {
		// let playerSelection = prompt('Please enter Rock , Paper, Scissor');
		// playerSelection = playerSelection.toLowerCase();

        do {
            playerSelection = prompt('Please enter Rock , Paper, Scissor').toLowerCase();
            if (playerSelection == 'rock' || playerSelection == 'scissor' || playerSelection == 'paper') {
                break;
            }
        } while (playerSelection !== 'rock' || playerSelection !== 'scissor' || playerSelection !== 'paper')
        
        let beginGame = playRound(playerSelection, computerSelection);
		console.log(beginGame);

		if (beginGame.slice(0, 4) == 'Lose') {
			scores[1] += 1;
		} else if (beginGame.slice(0, 3) == 'Win') {
			scores[0] += 1;
		}
	}

	if (scores[0] > scores[1]) {
		console.log('You are a winner! Score: ' + scores[0] + ' to ' + scores[1]);
	} else if (scores[0] < scores[1]) {
		console.log('You are a loser! Score: ' + scores[0] + ' to ' + scores[1]);
	} else {
		console.log('TIE Game!! Score: ' + scores[0] + ' to ' + scores[1]);
	}
}

//game()


function test() {
    let playerSelection;
    for (i = 0; i < 5; i++) {
        do {
            playerSelection = prompt('Please enter Rock , Paper, Scissor').toLowerCase();
            if (playerSelection == 'rock' || playerSelection == 'scissor' || playerSelection == 'paper') {
                console.log(playerSelection);
                break;
            }
        } while (playerSelection !== 'rock' || playerSelection !== 'scissor' || playerSelection !== 'paper')
    }
}