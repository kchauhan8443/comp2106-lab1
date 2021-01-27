let userSelection = prompt("Enter Rock, Paper or Scissors");


var userSelectionObj = userSelection.toUpperCase();


let computerSelection = Math.random();




if(computerSelection >= 0 && computerSelection <= .34){

    var computerSelectObj="PAPER";
}

if(computerSelection >= .35 && computerSelection <= .67){

    var computerSelectObj="SCISSORS";
}

if(computerSelection >= .68 && computerSelection <= 1){

    var computerSelectObj="ROCK";
}

if(computerSelectObj === userSelectionObj) {
    alert("TIE")
}else{

    
if(computerSelectObj === "ROCK" && userSelectionObj==="SCISSORS" || computerSelectObj === "PAPER" && userSelectionObj==="ROCK" || computerSelectObj === "SCISSORS" && userSelectionObj==="PAPER") {
    alert("COMPUTER WINS")
}else{ alert("User Wins")}


}

console.log(computerSelection);
console.log("Computer: "+computerSelectObj)
console.log("User: "+userSelectionObj);
