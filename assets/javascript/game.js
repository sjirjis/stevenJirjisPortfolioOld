var answerBank = ['Odin', 'Balder', 'Frigg', 'Thor', 'Tyr', 'Loki'
	, 'Freya', 'Sif', 'Bragi', 'Forseti', 'Heimdall', 'Ve'];

var answer = answerBank[Math.floor(Math.random() * (answerBank.length + 1))];
var guessAllowed = 15;
var attemptCount;
var userGuess;
var guessesRemaining = guessAllowed - attemptCount;
var uLine

setUlineLength = function(){
	for(i = 0; i < answer; i++){
		uLine = uline + "_";
	} 
}

console.log(uline);

document.onkeyup = function (event) {
	userGuess = event.key;
	console.log(userGuess);

}

	console.log(userGuess);




















document.getElementById("answer").innerHTML = answer


