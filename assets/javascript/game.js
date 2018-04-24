//Variable Definitons
var guessed = [];
var guessright=[];
const MaxTries = 10;
var current[];
var remainingGuesses= 0;
var gamesStarted = false;
var hasFinished= false;
var wins=0;
var spaceword = ["MassEffect", "Stellaris", "AlienIsolation","FasterThanLight", "NoMansSky","SurvivingMars", "Destiny", "Halo", "Starbound", "Spore", "SWOTR", "Prey", "DeadSpace","StarFox","Metroid"]








//Game-Reset
function resetGame(){
    remainingGuesses = MaxTries;
    gamesStarted =false;
    var word = spaceword[Math.floor(Math.random() * words.length)];
    
guessed=[];
guessright=[];

document.getElementById("hangmanalien").src="./assets/images/hangmanalien.jpeg"
for (var i = 0; i < spaceword[current].length; i++) {
    guessedright.push("_");


    document.getElementById("pressKeyTryAgain").style.cssText= "display: none";
    document.getElementById("gameover-image").style.cssText = "display: none";
    document.getElementById("youwin-image").style.cssText = "display: none";

    updateDisplay();
}

function updateDisplay(){

    document.getElementById("totalWins").innerText = wins;
    document.getElementById("currentWord").innerText="";
    
    for(var i=0; i< guessedright.length; i++){

        document.getElementById("currentWord").innerText += guessedright[i];
    }
    document.getElementById("remainingGuesses").innerText= remainingGuesses;
    document.getElementById("guessedLetters").innerText= guessed;
    if(guessed <= 0) {
        document.getElementbyId("gameover-image").style.cssText= "display:block";
        document.getElementbyId("pressKeyTryAgain").style.cssText="display:block";
    }
}










    