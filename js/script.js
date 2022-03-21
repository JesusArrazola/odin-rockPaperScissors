function computerPlay(){
    let options = ['rock','paper','scissors'];
    return options[Math.floor( Math.random()*3)];
}

function compare(a,b){
    if(a == b) return -1; //Draw

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

function singleRound(playerSelection,computerSelection){
    let roundResult = compare(playerSelection.toLowerCase(),computerPlay());

}