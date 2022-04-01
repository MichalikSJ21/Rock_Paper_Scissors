function computerPlay (){
    let randomInt = Math.random()*3;

    if (randomInt < 1){
        return "Rock";
    } else if (randomInt < 2){
        return "Paper";
    } else {
        return "Scissors";
    }
}

function singleRound (playerSelection, computerSelection){
    let player = String(playerSelection).toLowerCase();
    let computer = String(computerSelection).toLowerCase();
    
    if (player === computer){
        return "Players tied this round"
    } else if (player == "rock" && computer == "scissors" || player == "paper" && computer == "rock" || player == "scissors" && computer == "paper"){
        return "Human player won this round"
    } else {
        return "Computer player won this round"
    }
}

function game (){

    let gameLength = 5;
    let playerChoice;
    let computerChoice;


    for (let i = 0; i < gameLength; i++){
        playerChoice = prompt("Which would you like to choose: Rock, Paper, or Scissors: ");
        computerChoice = computerPlay();
        console.log(singleRound(playerChoice, computerChoice));
    }
}


game();
