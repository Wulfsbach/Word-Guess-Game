//Create References
var Save = document.getElementById('Save');
var placeholder = document.getElementById('placeholders');
var LettersGuessed = document.getElementById('guessed-letters');
var RemainingGuesses = document.getElementById('Guesses-Left');
var winner = document.getElementById('Wins');
var loser = document.getElementById('Losses');
var ship = document.getElementById('spaceship');
var YouLose =document.getElementById("gameover");

// create variables
var spacewordbank = ["Mass Effect", "Stellaris", "Alien Isolation","Faster Than Light",
 "No Mans Sky","Surviving Mars", "Destiny", "Halo", "Starbound", "Spore", "Star Wars The Old Republic", 
 "Prey", "Dead Space","Star Fox","Metroid"];

 var wins=0;
 var losses=0;
 var guessesLeft= 7;
 var gameRunning=false;
 var ChosenWord='';
 var ChosenWordarr= [];
 var GuessedLetters= [];
 var IncorrectGuesses= [];
 var pos=0;
 
 //Function that resets and starts a new game.
 document.getElementById("myAudio").volume = 0.2;


 function start() {

    gameRunning= true;
    guessesLeft=7;
    GuessedLetters= [];
    IncorrectGuesses=[];
    ChosenWordarr=[];
    pos=0;
    ship.style.left = pos;
    YouLose.hidden=true;
  planet.hidden=false;
    ship.hidden=false;
    YouLose.pause();
     document.getElementById("myAudio").volume=0.2;
   

    
    // Math to pick a word from array at random

    ChosenWord = spacewordbank[Math.floor(Math.random()* spacewordbank.length)];

    // Creates Underscores in place of blanks

    for (var i = 0; i < ChosenWord.length; i++){
        if (ChosenWord[i] === ' '){
            ChosenWordarr.push(' ');
        }else{
            ChosenWordarr.push('_');
        }
    }
    //writes to html file
    RemainingGuesses.innerHTML = guessesLeft;
    placeholder.innerHTML = ChosenWordarr.join('');
    LettersGuessed.innerHTML = IncorrectGuesses;
 }

 //Function to see if letter is in selected word
 function Guess(letter) {
console.log(letter);

if (gameRunning && GuessedLetters.indexOf(letter) === -1) {

//Run Game 
GuessedLetters.push(letter);

//check if guessed letter is in picked word

for (var i = 0 ; i < ChosenWord.length ; i++) {
    //convert both values to lower case for comaprison.
    if (ChosenWord[i].toLowerCase() === letter.toLowerCase()) {
        //if match swap out character in placeholder
        ChosenWordarr[i] = ChosenWord[i];
    }
}
placeholder.innerHTML = ChosenWordarr.join('');
Incorrect(letter);
}
else{
    if(!gameRunning) {
        alert("Press the Button to save the world!")
    } else {
        alert("This button has already been pressed!")
    }
}
 }


 //Fuction to check for incorrect letters

 function Incorrect(letter){
     if (
         ChosenWordarr.indexOf(letter.toLowerCase()) === -1 
     && 
        ChosenWordarr.indexOf(letter.toUpperCase()) === -1
     ){
         guessesLeft--;
         IncorrectGuesses.push(letter);
         LettersGuessed.innerHTML = IncorrectGuesses.join(' ');
         RemainingGuesses.innerHTML = guessesLeft;
        Destroy();
     }
  
 Loss();
GameOver();
 }

 function Loss (){
if( guessesLeft === 0){
    losses++;
    gameRunning= false;
    loser.innerHTML = losses;
    document.getElementById("myAudio").volume=0;

}
Win();
 }
    

function Win(){
if( ChosenWord.toLowerCase() === ChosenWordarr.join('').toLowerCase()){
    wins++;
    gameRunning=false;
    winner.innerHTML = wins;
    document.getElementById("myAudio").volume=0;
}
}

function Destroy(){
    
    if (guessesLeft == 6) {
        pos++;
        ship.style.left = pos + '2px';

    }
    if (guessesLeft == 5) {
        pos++;
        ship.style.left = pos + '10px';

    }
    if (guessesLeft == 4) {
        pos++;
        ship.style.left = pos + '10px';

    }
    if (guessesLeft == 3) {
        pos++;
        ship.style.left = pos + '10px';

    }
    if (guessesLeft == 2) {
        pos++;
        ship.style.left = pos + '20px';

    }
    if (guessesLeft == 1) {
        pos++;
        ship.style.left = pos + '20px';

    }
    if (guessesLeft == 0) {
        pos++;
        ship.style.left = pos + '40px';

    }
}

function GameOver() {


if (guessesLeft === 0 && !gameRunning){
    YouLose.hidden=false;
    YouLose.load();
    YouLose.play();
    planet.hidden=true;
    ship.hidden=true;
}

}



 //button
 
 Save.addEventListener('click', start,);

 //on key up event

 document.onkeyup = function (event) {
     console.log(event);
     if(event.keyCode >=65 && event.keyCode <=90) {
         Guess(event.key);
         
     }
 }