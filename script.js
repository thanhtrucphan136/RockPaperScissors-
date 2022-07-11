function computerPlay(){
    let num = Math.floor(Math.random()*(3-1+1)+1);
    if (num === 1){
        return "Rock";
    }else if (num === 2){
        return "Paper";
    }
    return "Scissors"
}

function playRound(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase()
    if (player === computer){
        return "tie game!!";
    }

    if (player === "rock"){
        if (computer === "paper"){
            return "You Lose! Paper beats Rock";
        }
        if (computer === "scissors"){
            return "You Win! Rock beats Scissors";
        }
    }

    if (player === "paper"){
        if (computer === "rock"){
            return "You Win! Paper beats Rock";
        }
        if (computer === "scissors"){
            return "You Lose! Scissors beat Paper";
        }
    }

    if (player === "scissors"){
        if (computer === "paper"){
            return "You Win! Scissors beat Paper";
        }
        if (computer === "rock"){
            return "You Lose! Rock beats Scissors";
        }
    }
}

function game(){
    for (let i = 0; i < 5; i++){    
        let player = prompt("Rock, Paper or Scissors? ");
        let computer = computerPlay();
        console.log(playRound(player,computer));
    }
}
console.log(game());
