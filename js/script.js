//UI elements
const btns = document.querySelectorAll('div.option');
const btnRock = document.querySelector('div#rock');
const btnPaper = document.querySelector('div#paper');
const btnSciss = document.querySelector('div#scissors');
const parResult = document.querySelector('p#result-message');
const playScore = document.querySelector('span#player-score');
const compScore = document.querySelector('span#comp-score');
const parPlayChoice = document.querySelector('span#player-choice');
const parCompChoice = document.querySelector('span#comp-choice');
const h2GameOver = document.querySelector('h2');

//Game variables
const options = ['rock','paper','scissors'];
let userScore = 0;
let computerScore = 0;
let roundResult;
let player = "";
let computer = "";

//game UI functions
const computerSelectUI = ()=>{
    let computerElement = document.querySelector(`div#${computer}`);
    parCompChoice.classList.remove('neutral-color');
    parCompChoice.classList.add('computer-color');
    parCompChoice.textContent = computer;
    if(computer === player){
        computerElement.classList.remove('choiced-player');
        computerElement.classList.remove('player-color');
        computerElement.classList.add('choiced-both');
        computerElement.classList.add('draw-color');
    }else{
        computerElement.classList.add('choiced-comp');
        computerElement.classList.add('computer-color');
    }
        
}
const playerSelectUI = (element)=>{
    parPlayChoice.textContent = player;
    parPlayChoice.classList.remove('neutral-color');
    parPlayChoice.classList.add('player-color');
    element.classList.add('player-color');
    element.classList.add('choiced-player');
    player = element.getAttribute('id');
}
const updateScore = ()=>{
    playScore.textContent = userScore;
    compScore.textContent = computerScore;
}
const resetUI = () =>{
    btns.forEach(e =>{
        e.classList.remove('choiced-player');
        e.classList.remove('choiced-comp');
        e.classList.remove('choiced-both');
        e.classList.remove('player-color');
        e.classList.remove('computer-color');
        e.classList.remove('draw-color');
    });
    parCompChoice.textContent = "unknown";
    parPlayChoice.textContent = "unknown";
    parCompChoice.classList.remove('computer-color');
    parPlayChoice.classList.remove('player-color')
    parCompChoice.classList.add('neutral-color');
    parPlayChoice.classList.add('neutral-color');
    parResult.textContent = "";
    updateScore();
}
const gameOver = ()=>{
    h2GameOver.textContent = `Game over! ${(userScore>computerScore)?'Player':'Computer'} wins. (Click to reset game)`;
    h2GameOver.classList.remove('hide');
    h2GameOver.classList.add('show');
    resetUI();
}
const resetGame = ()=>{
    userScore = 0;
    computerScore = 0;
    h2GameOver.classList.remove('show');
    h2GameOver.classList.add('hide');
    resetUI();
}
//attach event listeners
btns.forEach(e => e.addEventListener('click',(evt)=>{
    if(userScore<5&&computerScore<5){
        resetUI();
        player = evt.target.getAttribute('id');
        computer = computerPlay();
        playerSelectUI(evt.target);
        computerSelectUI();
        game();
    }
}));
h2GameOver.addEventListener('click',resetGame);


/* Makes a choice and returns it as an string */
function computerPlay(){
    return options[Math.floor( Math.random()*3)];
}

/* Draw: -1, Win: 1, Lose: 0 */
function compare(a,b){
    if(a == b) return -1;

    if(a === "rock"){
        if(b === "paper") return 0;
        if(b === "scissors") return 1;

    }else if(a == "paper"){

        if(b === "rock") return 1;
        if(b === "scissors") return 0;

    }else{
        if(b === "rock") return 0;
        if(b === "paper") return 1;
    }
}

function printResult(playerSelection,computerSelection,roundResult){
    if(roundResult === -1) return `Draw! both selected ${playerSelection}.`;
    return `${(roundResult===1)?`You win! ${playerSelection} beats ${computerSelection}`:`You lose! ${computerSelection} beats ${playerSelection}` }`;
}

function game(){

    roundResult = compare(player,computer);
    if(roundResult === 1){
        userScore++;
        parResult.classList.remove('neutral-color');
        parResult.classList.remove('computer-color');
        parResult.classList.add('player-color');
    } 
    else if (roundResult === 0){ 
        computerScore++;
        parResult.classList.remove('neutral-color')
        parResult.classList.remove('player-color');
        parResult.classList.add('computer-color');
    }else{
        parResult.classList.remove('computer-color');
        parResult.classList.remove('player-color');
        parResult.classList.add('neutral-color');
    }
    updateScore();
    parResult.textContent = printResult(player,computer,roundResult);
    player = "";
    computer = "";
    if(userScore === 5 || computerScore === 5){
        gameOver();
    }

}