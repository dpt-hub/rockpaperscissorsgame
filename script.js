const getComputerChoice = () => {
            let choice = Math.floor(Math.random() * 3) + 1
            if (choice === 1) {
                return "rock"
            } else if  (choice === 2) {
                return "paper"
            } else {
                return "scissors"
            }
        }

const getHumanChoice = () =>{
    return (prompt("Beep Boop. What do you want to play human? Beep."))
}
        
let humanScore = 0
let computerScore = 0

const playRound = (computerChoice, humanChoice) => {
    humanChoice = humanChoice.toLowerCase()
    if (computerChoice === humanChoice) {
        return `It's a draw! You both picked ${humanChoice[0] + humanChoice.slice(1).toLowerCase()}.`
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++
        return `You won this round! ${humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase()} beats ${computerChoice[0].toUpperCase() + computerChoice.slice(1).toLowerCase()}!` 
    } else {
        computerScore++
        return `You lost this round! ${computerChoice[0].toUpperCase() + computerChoice.slice(1).toLowerCase()} beats ${humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase()}!`
    }
}

const playerSelection = document.querySelectorAll(".playerSelection")
const resultsDisplay = document.querySelector("#results")
const humanScoreDisplay = document.querySelector("#humanScore")
const computerScoreDisplay = document.querySelector("#computerScore")

playerSelection.forEach(button => {
    button.addEventListener("click", () => {
        const computerChoice = getComputerChoice();
        const humanChoice = button.textContent.toLowerCase();
        let roundResult = playRound(computerChoice, humanChoice)
        let resultValue = ""
        if (humanScore === 5) {
                resultValue = `You won the game! Congratulations! Score: ${humanScore} to ${computerScore}`
                humanScore = 0
                computerScore = 0
            } else if (computerScore === 5) {
                resultValue = `You lost the game... Better luck next time. Score: ${computerScore} to ${humanScore}`
                humanScore = 0
                computerScore = 0
            } else {
                resultValue = roundResult
            }
        resultsDisplay.textContent = resultValue
        humanScoreDisplay.textContent = `Your score: ${humanScore}`
        computerScoreDisplay.textContent = `Computer's score: ${computerScore}`
    })
})
            
