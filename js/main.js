/*----- constants -----*/
const statesObj = {
	AL: {
		name: 'ALABAMA',
		id: '1',
		bStates: [ 'FLORIDA', 'GEORGIA', 'MISSISSIPPI', 'TENNESSEE' ]
	},
	AZ: {
		name: 'ARIZONA',
		id: '2',
		bStates: [ 'CALIFORNIA', 'COLORADO', 'NEVADA', 'NEW MEXICO', 'UTAH' ]
	},
	AR: {
		name: 'ARKANSAS',
		id: '3',
		bStates: [ 'OKLAHOMA', 'TENNESSEE', 'TEXAS', 'LOUISIANA', 'MISSISSIPPI', 'MISSOURI' ]
	},
	CA: {
		name: 'CALIFORNIA',
		id: '4',
		bStates: [ 'ARIZONA', 'NEVADA', 'OREGON' ]
	},
	CO: {
		name: 'COLORADO',
		id: '5',
		bStates: [ 'ARIZONA', 'NEW MEXICO', 'OKLAHOMA', 'UTAH', 'WYOMING', 'KANSAS', 'NEBRASKA' ]
	},
	CT: {
		name: 'CONNECTICUT',
		id: '6',
		bStates: [ 'NEW YORK', 'RHODE ISLAND', 'MASSACHUSETTS' ]
	},
	DE: {
		name: 'DELAWARE',
		id: '7',
		bStates: [ 'NEW JERSEY', 'PENNSYLVANIA', 'MARYLAND' ]
	},
	FL: {
		name: 'FLORIDA',
		id: '8',
		bStates: [ 'GEORGIA', 'ALABAMA' ]
	},
	GA: {
		name: 'GEORGIA',
		id: '9',
		bStates: [ 'NORTH CAROLINA', 'SOUTH CAROLINA', 'TENNESSEE', 'ALABAMA', 'FLORIDA' ]
	},
	ID: {
		name: 'IDAHO',
		id: '10',
		bStates: [ 'UTAH', 'WASHINGTON', 'WYOMING', 'MONTANA', 'NEVADA', 'OREGON' ]
	},
	IL: {
		name: 'ILLINOIS',
		id: '11',
		bStates: [ 'KENTUCKY', 'MISSOURI', 'WISCONSIN', 'INDIANA', 'IOWA', 'MICHIGAN' ]
	},
	IN: {
		name: 'INDIANA',
		id: '12',
		bStates: [ 'MICHIGAN', 'OHIO', 'ILLINOIS', 'KENTUCKY', 'IOWA' ]
	},
	IA: {
		name: 'IOWA',
		id: '13',
		bStates: [ 'NEBRASKA', 'SOUTH DAKOTA', 'WISCONSIN', 'ILLINOIS', 'MINNESOTA', 'MISSOURI' ]
	},
	KS: {
		name: 'KANSAS',
		id: '14',
		bStates: [ 'NEBRASKA', 'OKLAHOMA', 'COLORADO', 'MISSOURI' ]
	},
	KY: {
		name: 'KENTUCKY',
		id: '15',
		bStates: [ 'TENNESSEE', 'VIRGINIA', 'WEST VIRGINIA', 'ILLINOIS', 'INDIANA', 'MISSOURI', 'OHIO' ]
	},
	LA: {
		name: 'LOUISIANA',
		id: '16',
		bStates: [ 'TEXAS', 'ARKANSAS', 'MISSISSIPPI' ]
	},
	ME: {
		name: 'MAINE',
		id: '17',
		bStates: [ 'NEW HAMPSHIRE' ]
	},
	MD: {
		name: 'MARYLAND',
		id: '18',
		bStates: [ 'VIRGINIA', 'WEST VIRGINIA', 'DELAWARE', 'PENNSYLVANIA' ]
	},
	MA: {
		name: 'MASSACHUSETTS',
		id: '19',
		bStates: [ 'NEW YORK', 'RHODE ISLAND', 'VERMONT', 'CONNECTICUT', 'NEW HAMPSHIRE' ]
	},
	MI: {
		name: 'MICHIGAN',
		id: '20',
		bStates: [ 'OHIO', 'WISCONSIN', 'ILLINOIS', 'INDIANA' ]
	},
	MN: {
		name: 'MINNESOTA',
		id: '21',
		bStates: [ 'NORTH DAKOTA', 'SOUTH DAKOTA', 'WISCONSIN', 'IOWA' ]
	},
	MS: {
		name: 'MISSISSIPPI',
		id: '22',
		bStates: [ 'LOUISIANA', 'TENNESSEE', 'ALABAMA', 'ARKANSAS' ]
	},
	MO: {
		name: 'MISSOURI',
		id: '23',
		bStates: [ 'NEBRASKA', 'OKLAHOMA', 'TENNESSEE', 'ARKANSAS', 'ILLINOIS', 'IOWA', 'KANSAS', 'KENTUCKY' ]
	},
	MT: {
		name: 'MONTANA',
		id: '24',
		bStates: [ 'SOUTH DAKOTA', 'WYOMING', 'IDAHO', 'NORTH DAKOTA' ]
	},
	NE: {
		name: 'NEBRASKA',
		id: '25',
		bStates: [ 'MISSOURI', 'SOUTH DAKOTA', 'WYOMING', 'COLORADO', 'IOWA', 'KANSAS' ]
	},
	NV: {
		name: 'NEVADA',
		id: '26',
		bStates: [ 'IDAHO', 'OREGON', 'UTAH', 'ARIZONA', 'CALIFORNIA' ]
	},
	NH: {
		name: 'NEW HAMPSHIRE',
		id: '27',
		bStates: [ 'VERMONT', 'MASSACHUSETTS', 'MAINE' ]
	},
	NJ: {
		name: 'NEW JERSEY',
		id: '28',
		bStates: [ 'PENNSYLVANIA', 'DELAWARE', 'NEW YORK' ]
	},
	NM: {
		name: 'NEW MEXICO',
		id: '29',
		bStates: [ 'OKLAHOMA', 'TEXAS', 'UTAH', 'ARIZONA', 'COLORADO' ]
	},
	NY: {
		name: 'NEW YORK',
		id: '30',
		bStates: [ 'PENNSYLVANIA', 'VERMONT', 'CONNECTICUT', 'MASSACHUSETTS', 'NEW JERSEY' ]
	},
	NC: {
		name: 'NORTH CAROLINA',
		id: '31',
		bStates: [ 'TENNESSEE', 'VIRGINIA', 'GEORGIA', 'SOUTH CAROLINA' ]
	},
	ND: {
		name: 'NORTH DAKOTA',
		id: '32',
		bStates: [ 'SOUTH DAKOTA', 'MINNESOTA', 'MONTANA' ]
	},
	OH: {
		name: 'OHIO',
		id: '33',
		bStates: [ 'MICHIGAN', 'PENNSYLVANIA', 'WEST VIRGINIA', 'INDIANA', 'KENTUCKY' ]
	},
	OK: {
		name: 'OKLAHOMA',
		id: '34',
		bStates: [ 'MISSOURI', 'NEW MEXICO', 'TEXAS', 'ARKANSAS', 'COLORADO', 'KANSAS' ]
	},
	OR: {
		name: 'OREGON',
		id: '35',
		bStates: [ 'NEVADA', 'WASHINGTON', 'CALIFORNIA', 'IDAHO' ]
	},
	PA: {
		name: 'PENNSYLVANIA',
		id: '36',
		bStates: [ 'NEW YORK', 'OHIO', 'WEST VIRGINIA', 'DELAWARE', 'MARYLAND', 'NEW JERSEY' ]
	},
	RI: {
		name: 'RHODE ISLAND',
		id: '37',
		bStates: [ 'MASSACHUSETTS', 'CONNECTICUT' ]
	},
	SC: {
		name: 'SOUTH CAROLINA',
		id: '38',
		bStates: [ 'NORTH CAROLINA', 'GEORGIA' ]
	},
	SD: {
		name: 'SOUTH DAKOTA',
		id: '39',
		bStates: [ 'NEBRASKA', 'NORTH DAKOTA', 'WYOMING', 'IOWA', 'MINNESOTA', 'MONTANA' ]
	},
	TN: {
		name: 'TENNESSEE',
		id: '40',
		bStates: [
			'MISSISSIPPI',
			'MISSOURI',
			'NORTH CAROLINA',
			'VIRGINIA',
			'ALABAMA',
			'ARKANSAS',
			'GEORGIA',
			'KENTUCKY'
		]
	},
	TX: {
		name: 'TEXAS',
		id: '41',
		bStates: [ 'NEW MEXICO', 'OKLAHOMA', 'ARKANSAS', 'LOUISIANA' ]
	},
	UT: {
		name: 'UTAH',
		id: '42',
		bStates: [ 'NEVADA', 'NEW MEXICO', 'WYOMING', 'ARIZONA', 'COLORADO', 'IDAHO' ]
	},
	VT: {
		name: 'VERMONT',
		id: '43',
		bStates: [ 'NEW HAMPSHIRE', 'NEW YORK', 'MASSACHUSETTS' ]
	},
	VA: {
		name: 'VIRGINIA',
		id: '44',
		bStates: [ 'NORTH CAROLINA', 'TENNESSEE', 'WEST VIRGINIA', 'KENTUCKY', 'MARYLAND' ]
	},
	WA: {
		name: 'WASHINGTON',
		id: '45',
		bStates: [ 'OREGON', 'IDAHO' ]
	},
	WV: {
		name: 'WEST VIRGINIA',
		id: '46',
		bStates: [ 'PENNSYLVANIA', 'VIRGINIA', 'KENTUCKY', 'MARYLAND', 'OHIO' ]
	},
	WI: {
		name: 'WISCONSIN',
		id: '47',
		bStates: [ 'MICHIGAN', 'MINNESOTA', 'ILLINOIS', 'IOWA' ]
	},
	WY: {
		name: 'WYOMING',
		id: '48',
		bStates: [ 'NEBRASKA', 'SOUTH DAKOTA', 'UTAH', 'COLORADO', 'IDAHO', 'MONTANA' ]
	}
};

const messages = {
	stateSpecific: {
		TX: 'HOME OF OUR BELOVED GEOGRAPHIC REEDUCATION CAMPS. YEEHAW!',
		CA: 'AH CALIFORNIA, HOME TO PRECISELY 841.445 MILES OF SUNSOAKED SHORELINE.',
		NY: 'HOME OF OUR BELOVED CAPITAL, NEW GEOLOPOLIS. SHAME ABOUT OLD GEOLOPOLIS.',
		FL: 'DISNEYWORLD IS NOT A STATE SANCTIONED GEOGRAPHIC ENTITY AND SHOULD NOT BE TREATED AS SUCH.',
		NV: 'GAMBLING ON THE RESULTS OF PERIODIC UPRISINGS IS STRICTLY FORBIDDEN.',
		GA: 'A SHAME ABOUT THE PEACH RIOTS.',
		WY: "EVEN I CAN'T THINK OF SOMETHING RELEVANT TO SAY.",
		MN: 'SOME OF THE FINEST GULAGS. OH YEAH YOU BETCHA.'
	},
	randomMessage: [
		'SIT UP STRAIGHT!',
		'I HOPE YOU ENJOY THE COLD.',
		'DO YOU EVEN OWN AN ATLAS?',
		'FOUR LEGS GOOD, TWO LEGS AND A GLOBE BETTER.',
		"IF YOU HIDE YOUR IGNORANCE, NO ONE WILL HIT YOU AND YOU'LL NEVER LEARN.",
		'WHO CONTROLS THE BORDERS CONTROLS THE MAPS. WHO CONTROLS THE MAPS CONTROLS THE BORDERS.',
		"IF ONE'S DIFFERENT, ONE'S BOUND TO BE THROWN IN A REEDUCATION CAMP.",
		'I HAVE THIS DISEASE LATE AT NIGHT SOMETIMES, INVOLVING ALCOHOL AND A GPS.'
	],
	opening: 'YOU THERE! BORDER CHECK.',
	loss: 'A DISGRACE TO THE STATE. TAKE THEM AWAY!'
};

const sounds = {
	pageFlip: 'assets/sounds/pageFlip.wav',
	wrong: 'assets/sounds/wrong.wav',
	success: 'assets/sounds/success.wav',
	correct: 'assets/sounds/correct.wav',
	lose: 'assets/sounds/lose.wav'
};

const maxFailures = 3;

/*----- app's state (variables) -----*/
let currentState, statesArr, currentScore, numFailures, cardsCompleted, statesProgressArr, textBoxValue;

/*----- cached element references -----*/
const stateBoardPEls = document.querySelectorAll('td p');
const failureBadgeEls = document.querySelectorAll('div span');
const wrongGuessesEl = document.getElementById('wrong-guesses');
const textBoxEl = document.getElementById('text-message');
const resetBtnEl = document.getElementById('reset-btn');
const stateCardEl = document.querySelector('div.card');
const scoreEl = document.querySelector('.score-value');
const player = new Audio();

const backstoryEl = document.getElementById('backstory');
const instructionsEl = document.getElementById('instructions');
const startEl = document.getElementById('start');

/*----- event listeners -----*/
resetBtnEl.addEventListener('click', handleResetBtn);
stateCardEl.addEventListener('keydown', handleInput);

/*----- Functions -----*/
function init() {
	stateCardEl.innerHTML = '';
	stateCardEl.classList.remove('failure-page');
	resetFailures();
	resetStateBoard();
	resetBtnEl.textContent = 'PLAY';
	statesArr = Object.keys(statesObj);
	randomizeStates();
	numInputs = 0;
	currentState = statesArr[0];
	statesProgressArr = [];
	statesProgressArr.push(currentState);
	cardsCompleted = 0;
	currentScore = 0;
	numFailures = 0;
	textBoxValue = messages.opening;
	wrongGuessesEl.className = 'closed';
	wrongGuessesEl.innerHTML = '';
	stateCardEl.addEventListener('animationend', function() {
		stateCardEl.classList.remove('animated', 'flipInY');
	});
	render();
}

function initSplash() {
	backstoryEl.classList.add('animated', 'fadeInLeft', 'slower');
	instructionsEl.classList.add('animated', 'fadeInDown', 'slower');
}

/*----- Render Functions -----*/
function render() {
	renderTextBox();
	if (stateCardEl.classList.contains('complete') || (cardsCompleted === 0 && numInputs === 0)) {
		renderStateCard();
	}
	renderScore();
	renderFailuresBoard();
	renderStateBoard();
}

function renderFailuresBoard() {
	for (i = 0; i < numFailures; i++) {
		failureBadgeEls[i].classList.remove('badge-dark');
		failureBadgeEls[i].classList.add('badge-danger');
	}
}

function renderStateCard() {
	wrongGuessesEl.innerHTML = '';
	if ((wrongGuessesEl.className = 'open')) {
		wrongGuessesEl.className = 'closed';
	}
	stateCardEl.classList.remove('cover');
	stateCardEl.classList.add('game-page');
	let stateName = document.createElement('p');
	stateName.textContent = statesObj[currentState].name;
	stateCardEl.appendChild(stateName);
	let stateImage = document.createElement('img');
	stateImage.setAttribute('src', `assets/states-images/${currentState}.png`);
	stateCardEl.appendChild(stateImage);
	renderInputs();
	stateCardEl.classList.add('animated', 'flipInY');
	playSound('pageFlip');
}

function renderInputs() {
	let numBorderStates = statesObj[currentState].bStates.length;
	let correctInputsDiv = document.createElement('div');
	let inputDiv = document.createElement('div');
	for (i = 0; i < numBorderStates; i++) {
		let newInput = document.createElement('input');
		inputDiv.appendChild(newInput);
	}
	stateCardEl.appendChild(correctInputsDiv);
	stateCardEl.appendChild(inputDiv);
}

function renderStateBoard() {
	for (i = 0; i < stateBoardPEls.length; i++) {
		stateBoardPEls[i].textContent = statesArr[i];
		stateBoardPEls[i].classList.add('inactive');
	}
	for (i = 0; i < statesProgressArr.length; i++) {
		stateBoardPEls[i].className = 'state-complete';
	}
	stateBoardPEls[statesProgressArr.length - 1].className = 'active';
}

function renderTextBox() {
	if (numFailures < 3) {
		generateMessage();
	}
	textBoxEl.textContent = textBoxValue;
	textBoxEl.classList.add('animated', 'bounceInDown');
	textBoxEl.addEventListener('animationend', function() {
		textBoxEl.classList.remove('animated', 'bounceInDown');
	});
}

function renderScore() {
	console.log('rendering');
	scoreEl.textContent = `${currentScore}`;
	if (currentScore !== 0) {
		scoreEl.classList.add('animated', 'flash');
		scoreEl.addEventListener('animationend', function() {
			scoreEl.classList.remove('animated', 'flash');
		});
	}
}

/*----- Event Listener Functions -----*/
function handleResetBtn() {
	init();
	resetBtnEl.textContent = 'RESTART';
}

function handleInput(evt) {
	if (evt.keyCode === 13) {
		verifyInputs();
		renderFailuresBoard();
		checkForLoss();
	}
}

/*----- Misc Functions -----*/
function randomizeStates() {
	statesArr.sort(() => Math.random() - 0.5);
}

function verifyInputs() {
	numInputs += 1;
	let inputArr = document.querySelectorAll('input');
	let currentBStates = statesObj[currentState].bStates;
	checkForTrue(inputArr, currentBStates);
	checkForFalse(inputArr, currentBStates);
	checkForComplete(inputArr, currentBStates);
}

function checkForTrue(inputArr, currentBStates) {
	inputArr.forEach(function(input) {
		currentBStates.forEach(function(state) {
			if (input.value.toUpperCase() === state) {
				input.classList.add('correct', 'animation', 'bounceIn');
				replaceInput(input);
				playSound('correct');
			}
		});
	});
}

function checkForFalse(inputArr, currentBStates) {
	inputArr.forEach(function(input) {
		if (currentBStates.includes(input.value.toUpperCase())) {
			return;
		} else if (input.value === '') {
			return;
		} else {
			input.classList.add('animated', 'shake');
			input.addEventListener('animationend', function() {
				input.classList.remove('animated', 'shake');
			});
			numFailures += 1;
			playSound('wrong');
			appendWrongGuess(input);
		}
	});
	return true;
}

function checkForComplete(inputArr, currentBStates) {
	let correctGuesses = [];
	for (i = 0; i < inputArr.length; i++) {
		if (inputArr[i].classList.contains('correct')) {
			correctGuesses.push(inputArr[i.value]);
		}
	}
	if (correctGuesses.length === currentBStates.length) {
		currentScore += 1;
		currentStateIndex = statesArr.indexOf(`${currentState}`);
		currentState = statesArr[currentStateIndex + 1];
		cardsCompleted += 1;
		stateCardEl.classList.add('complete');
		stateCardEl.innerHTML = '';
		statesProgressArr.push(currentState);
		render();
		playSound('success');
	} else {
		renderFailuresBoard();
	}
}

function checkForLoss() {
	if (numFailures === maxFailures) {
		stateCardEl.innerHTML = '';
		stateCardEl.classList.remove('cover');
		stateCardEl.classList.add('failure-page');
		textBoxValue = messages.loss;
		console.log(textBoxValue);
		renderTextBox();
		playSound('lose');
	}
}

function resetFailures() {
	for (i = 0; i < failureBadgeEls.length; i++) {
		failureBadgeEls[i].classList.remove('badge-danger');
		failureBadgeEls[i].classList.add('badge-dark');
	}
}

function resetStateBoard() {
	for (i = 0; i < stateBoardPEls.length; i++) {
		stateBoardPEls[i].textContent = 'X';
		stateBoardPEls[i].className = '';
	}
}

function replaceInput(input) {
	input.setAttribute('readonly', 'true');
	input.style.color = 'green';
}

function playSound(name) {
	player.src = sounds[name];
	player.play();
}

function generateMessage() {
	specificStates = Object.keys(messages.stateSpecific);
	for (i = 0; i < specificStates.length; i++) {
		if (currentState === specificStates[i]) {
			textBoxValue = messages.stateSpecific[specificStates[i]];
			break;
		} else {
			messages.randomMessage.sort(() => Math.random() - 0.5);
			textBoxValue = messages.randomMessage[0];
		}
	}
}

function appendWrongGuess(input) {
	console.log('opening');
	wrongGuessesEl.className = 'open';
	let wrongGuess = document.createElement('p');
	wrongGuess.textContent = input.value;
	wrongGuessesEl.appendChild(wrongGuess);
	wrongGuessesEl.classList.add('animated', 'fadeInRight');
	wrongGuessesEl.addEventListener('animationend', function() {
		wrongGuessesEl.classList.remove('animated', 'fadeInRight');
	});
}

initSplash();
