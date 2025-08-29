let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara =document.querySelector("#user-score");
const compScorepara =document.querySelector("#comp-score");

const genCompChoice = () => {
    options = ["rock","paper","scissors"];
    randIdx = Math.floor(Math.random()*3);
    return options [randIdx]; 
}

const playGame = (userChoice) => {
    console.log("user choice =",userChoice);
    // generate comp choice
    const compChoice = genCompChoice();
    console.log("comp choice =",compChoice);
    
    if(userChoice === compChoice){
        drawGame();
    } else {
        let userwin = true;
        if(userChoice === "rock") {
            // scissors , paper
            userwin = compChoice === "paper"?false:true;
        } else if (userChoice === "paper") {
            // rock,scissors
            userwin = compChoice === "scissors"?false:true;
        } else {
            userwin = compChoice === "rock"?false:true;
        }
        showWinner(userwin , userChoice, compChoice);
    }

};

const showWinner = (userwin , userChoice , compChoice) => {
    if(userwin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`; 
        msg.style.backgroundColor = "green"; 
    } else {
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const drawGame = () => {
    msg.innerText = "Game Was Draw. Play again."
    msg.style.backgroundColor = "#081b31"
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
    
})