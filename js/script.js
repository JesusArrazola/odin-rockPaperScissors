const options = ['rock','paper','scissors'];

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

/*function game(){
    let userScore = 0;
    let computerScore = 0;
    let roundResult;
    let player = "";
    let computer = "";

    for(let i=0;i<5;i++){
        while(!options.includes(player.toLowerCase())){
            player = prompt("Type your choice");
        }
        computer = computerPlay();
        roundResult = compare(player,computer);
        if(roundResult === 1) userScore++;
        else if (roundResult === 0) computerScore++;
        console.log(printResult(player,computer,roundResult));
        player = "";
        computer = "";
    }
    if(userScore > computerScore) console.log(`You win! ${userScore} out of 5`);
    else if(userScore < computerScore) console.log(`You lose! ${userScore} out of 5`);
    else console.log(`Draw! Both scored ${userScore}; Drawed ${5-userScore} times`);
}*/