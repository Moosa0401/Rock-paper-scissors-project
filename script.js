let humanScore = 0, computerScore = 0;


function greeting(){
    console.log("Hi! Welcome to rock, paper, scissors game!");
    console.log("The game is best of 5");
}

function getComputerChoice(){
    // approach one: using arr
    const choices = ["Rock", "Paper", "Scissors"];
    const index = Math.floor(Math.random() * choices.length); // 0 - 2

    return choices[index];

    //approach 2: conditionals
    // let index = Math.floor(Math.random() * 3); // 0 - 2
    // switch (index){
    //     case 0:
    //         return "Rock";
    //     case 1:
    //         return "Paper";
    //                 default:
    //         return "scissors";
    // }
}


function getHumanChoice(){

    
    let choice = prompt("drop your choice!");
    if (choice === null) return "invalid input :(";

    choice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();

    if(choice === "Rock" || choice === "Paper" || choice === "Scissors"){
        return choice;
    }

    return "invalid input :(";
}


//decider function:
function decideWinner(humanChoice, computerChoice)
{   
    //tie case:
    if(humanChoice === computerChoice)
    {
        return `You tie!, both picked ${humanChoice}`;
    }

    //win cases:
    else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
    )
    {
        humanScore++;
        return `You won!, ${humanChoice} beats ${computerChoice}`;
    }
    // lose case:
    else{
        computerScore++;
        return `You lost!, ${computerChoice} beats ${humanChoice}`;
    }
    
}


// game play
function playRound(hum, comp){
    console.log(decideWinner(hum, comp));
}

// 5 rounds
function playGame(){

    for (let i = 0; i < 5; i++)
    {
        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice();

        while(humanSelection === "invalid input :(" )
        {
            humanSelection = getHumanChoice();
        }

        playRound(humanSelection, computerSelection);
        
        console.log(`the score now is  HUMAN(${humanScore}) : COMPUTER(${computerScore})`);
    
    }

    console.log(`the final score is  HUMAN(${humanScore}) : COMPUTER(${computerScore})`);
}



// replay:
function replay()
{
    humanScore = 0;
    computerScore = 0;
    playGame();
    ending();
}

// ending
function ending()
{
    if(humanScore > computerScore) console.log("congrats! you won!");
    
    else if(humanScore === computerScore)
    {
        console.log("you tied!, try again :)");
        
    }
    else{
        console.log("you lost.")
    }

    let message = prompt("you wanna play again ( y/n)?");
    if (message === null)
    {
         console.log("invalid input");
         return;
    }
       

    message = message.toLowerCase();
    if(message === 'y' ||  message === 'yes')
    {
        replay();
    }
       
    else{
        console.log("Thank you for playing, Have a great day ahead!");
    }
    

}
// testing
greeting();

playGame();

ending();





