//Create References
var Save = document.getElementById('World');
var placeholder = document.getElementById('placeholders');
var LettersGuessed = document.getElementById('guessed-letters');
var RemainingGuesses = document.getElementById('Guesses-Left');
var winner = document.getElementById('Wins');
var loser = document.getElementById('Losses');
var ship = document.getElementById('spaceship');
var YouLose =document.getElementById("gameover");
var target= document.getElementById('startsound');
var YouWin= document.getElementById('gamewin');
var miss1= document.getElementById('loss1');
var miss2= document.getElementById('loss2');
var miss3= document.getElementById('loss3');
var miss4= document.getElementById('loss4');
var miss5= document.getElementById('loss5');
var miss6= document.getElementById('loss6');
var miss7= document.getElementById('loss7');

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
     YouWin.hidden=true;
    YouWin.pause();
    
    ship.hidden=false;
    planet.hidden=false;
   

    
    // Math to pick a word from array at random

    ChosenWord = spacewordbank[Math.floor(Math.random()* spacewordbank.length)];

    // Creates Underscores in place of blanks also allows for blank spaces in array

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
        Alert();
    } else {
        alert("This button has already been pressed!")
        Alert();
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
// adds losses and stops 8-bit track
 function Loss (){
if( guessesLeft === 0){
    losses++;
    gameRunning= false;
    loser.innerHTML = losses;
    document.getElementById("myAudio").volume=0;

}
Win();
 }
    
// Has to be a better way to do this. Hides video and shows it when win condition met
function Win(){
if( ChosenWord.toLowerCase() === ChosenWordarr.join('').toLowerCase()){
    wins++;
    gameRunning=false;
    winner.innerHTML = wins;
    document.getElementById("myAudio").volume=0;
    YouWin.hidden=false;
    YouWin.load();
    YouWin.play();
    ship.hidden=true;
    planet.hidden=true;

}
}
//My take on hangman, ship moves towards planet plays sound on every mistake.
function Destroy(){
    
    if (guessesLeft == 6) {
        pos++;
        ship.style.left = pos + '2px';
    miss1.play();
    }
    if (guessesLeft == 5) {
        pos++;
        ship.style.left = pos + '10px';
     miss2.play();
    }
    if (guessesLeft == 4) {
        pos++;
        ship.style.left = pos + '10px';
    miss3.play();
    }
    if (guessesLeft == 3) {
        pos++;
        ship.style.left = pos + '10px';
    miss4.play();
    }
    if (guessesLeft == 2) {
        pos++;
        ship.style.left = pos + '20px';
    miss5.play();
    }
    if (guessesLeft == 1) {
        pos++;
        ship.style.left = pos + '20px';
    miss6.play();
    }
    if (guessesLeft == 0) {
        pos++;
        ship.style.left = pos + '40px';
    miss7.play();
    }
}
//messy figured out i didnt even need to do this but its here anyway
//when game is lost, loser video plays while hiding planet and ship
function GameOver() {


if (guessesLeft === 0 && !gameRunning){
    YouLose.hidden=false;
    YouLose.load();
    YouLose.play();
    planet.hidden=true;
    ship.hidden=true;
}
//plays the background music at like 50%? or was it the background music i dont remember
}
 function Sound() {
     target.play();
     target.volume()=0.5;
 }
 //set up to play alert sound on every alert
function Alert() {
    var ALERT=document.getElementById('alertsound');
    ALERT.play();
    ALERT.volume()=0.5
}



 //buttons//basically starts the game on click and also plays a sound, couldnt link it into one event.
 
 Save.addEventListener('click', start);
 Save.addEventListener('click', Sound);
 //on key up event, searches for keycodes designated a-z.

 document.onkeyup = function (event) {
     console.log(event);
     if(event.keyCode >=65 && event.keyCode <=90) {
         Guess(event.key);
         
     }
 }