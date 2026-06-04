const choices = document.querySelectorAll(".choice");
const userchoiceText = document.getElementById("user-choice");
const compchoiceText = document.getElementById("computer-choice");
const winnertext = document.getElementById("winner");

const userscoreText = document.getElementById("user-score");
const compscoreText = document.getElementById("computer-score");

let userScore = 0;
let comptScore = 0;

const options = ["rock", "paper", "scissors"];

choices.forEach((button) => {
  button.addEventListener("click", () => {
    const userChoise = button.dataset.choice;
    const compChoice = options[Math.floor(Math.random() * options.length)];

    userchoiceText.textContent = `Your Choice: ${userChoise}`;
    compchoiceText.textContent = `Computer Choice: ${compChoice}`;

    let result = "";

    if (userChoise === compChoice) {
      result = "It is Draw!";
    } else if (
      (userChoise === "rock" && compChoice === "scissors") ||
      (userChoise === "paper" && compChoice === "rock") ||
      (userChoise === "scissors" && compChoice === "paper")
    ) {
      result = "You Win";
      userScore++;
    } else {
      result = "Computer Win";
      comptScore++;
    }

    winnertext.textContent = result;
    userscoreText.textContent = userScore;
    compscoreText.textContent = comptScore;
  });
});
