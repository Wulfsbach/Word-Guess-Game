var words = ["Mass Effect", "Stellaris", "Alien Isolation","Faster Than Light", "No Mans Sky","Surviving Mars", "Destiny", "Halo", "Starbound", "Spore", "Star Wars The Old Republic", "Prey", "Dead Space","Star Fox","Metroid"]

var word = words[Math.floor(Math.random() * words.length)];

//Answer Array//
var answerarr =[];

for (var i=0; i < word.length; i++){

    answerarr=[i] = "_";
}

//letter tracking//
var letter = word.length;


    
