function computerPlay(){
    let num = Math.floor(Math.random()*(3-1+1)+1);
    if (num === 1){
        return "rock";
    }else if (num === 2){
        return "paper";
    }
    return "scissors"
}
let resultMess = document.querySelector('.result');
let playerDisplay = document.querySelector('.player-score');
let computerDisplay = document.querySelector('.computer-score');
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection){
    let player = playerSelection
    let computer = computerSelection

    if (player === computer){
        resultMess.textContent = "it's a tieee!!";
    }

    if (player == "rock"){
        if (computer === "paper"){
           resultMess.textContent = ":( Paper beats Rock";
           computerScore +=1;
           computerDisplay.textContent = `Computer: ${computerScore}`;
        }
        if (computer === "scissors"){
            resultMess.textContent = "Naicee! Rock beats Scissors";
            playerScore +=1; 
            playerDisplay.textContent = `You: ${playerScore}`;
        }
    }

    if (player === "paper"){
        if (computer === "rock"){
            resultMess.textContent = "Good one! Paper beats Rock";
            playerScore +=1;
            playerDisplay.textContent = `You: ${playerScore}`;
        }
        if (computer === "scissors"){
            resultMess.textContent = "Nice try but Scissors beat Paper";
            computerScore +=1;
            computerDisplay.textContent = `Computer: ${computerScore}`;
        }
    }

    if (player === "scissors"){
        if (computer === "paper"){
            resultMess.textContent = "Yayyy! Scissors beat Paper";
            playerScore +=1;
            playerDisplay.textContent = `You: ${playerScore}`;
        }
        if (computer === "rock"){
            resultMess.textContent = "Opss! Rock beats Scissors";
            computerScore +=1;
            computerDisplay.textContent = `Computer: ${computerScore}`;
        }
    } 
    
}
function endGame(){
    if (computerScore == 5){
        resultMess.textContent = ":( You lost the game!"
        disableButtons();
    }
    if (playerScore == 5){
        resultMess.textContent = "Congrats! You woooonnn the gameeee!"
        disableButtons();
    }
    
}

function reset(){
    computerScore = 0;
    playerScore = 0;
    playerDisplay.textContent = `You: ${playerScore}`;
    computerDisplay.textContent = `Computer: ${computerScore}`;
    enableButtons();
}

const resetBtn = document.getElementById('reset-btn');


const rockBtn = document.getElementById('r-btn');
const paperBtn = document.getElementById('p-btn');
const scissorsBtn = document.getElementById('s-btn');

rockBtn.addEventListener('click', () => play('rock'));
paperBtn.addEventListener('click', () => play('paper'));
scissorsBtn.addEventListener('click', () => play('scissors'));

function disableButtons(){
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}
function enableButtons(){
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
}
function play(player){
    const computer = computerPlay();
    playRound(player,computer);
    endGame();
    resetBtn.addEventListener('click', reset);
}



  
