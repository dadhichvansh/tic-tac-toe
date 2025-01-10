const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const drawScorePara = document.querySelector("#draw-score");

let userScore = 0;
let compScore = 0;
let drawScore = 0;

const generateCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const drawGame = () => {
  drawScore++;
  drawScorePara.innerText = drawScore;
  msg.innerHTML = "<i>Game was draw.</i>";
  msg.style.backgroundColor = "#333";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerHTML = `You won! <i>Your '${userChoice}' beats '${compChoice}'.</i>`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerHTML = `You lost. <i>'${compChoice}' beats your '${userChoice}'.</i>`;
    msg.style.backgroundColor = "#ff4d4d";
  }
};

const playGame = (userChoice) => {
  // generate computer choice
  const compChoice = generateCompChoice();

  if (userChoice === compChoice) {
    // draw game
    drawGame();
  } else {
    // user win
    let userWin = true;

    if (userChoice === "rock") {
      // rock, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // paper, scissor
      userWin = compChoice === "scissor" ? false : true;
    } else {
      // scissor, rock
      userWin = compChoice === "rock" ? false : true;
    }

    // show the winner
    showWinner(userWin, userChoice, compChoice);
  }
};

const main = () => {
  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    });
  });
};

main();
