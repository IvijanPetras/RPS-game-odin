addEventListener("DOMContentLoaded", () => {
  function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
      case 0:
        return "ROCK";
        break;
      case 1:
        return "PAPER";
        break;
      case 2:
        return "SCISSORS";
    }
  }

  function playRound(computerChoice) {
    let player = prompt("whats your choice? Spell it corectly!").toUpperCase();
    if (player === computerChoice) {
      console.log("Its A Tie!");
      return 2;
    } else if (player === "ROCK" && computerChoice === "PAPER") {
      console.log("Paper Beats Rock! PC Wins!");
      return 0;
    } else if (player === "ROCK" && computerChoice === "SCISSORS") {
      console.log("Rock Beats Scissors! Player Wins!");
      return 1;
    } else if (player === "PAPER" && computerChoice === "ROCK") {
      console.log("Paper Beats Rock! Player Wins!");
      return 1;
    } else if (player === "PAPER" && computerChoice === "SCISSORS") {
      console.log("Scissors Beat Paper! PC Wins!");
      return 0;
    } else if (player === "SCISSORS" && computerChoice === "ROCK") {
      console.log("Rock Beats Scissors! PC Wins!");
      return 0;
    } else if (player === "SCISSORS" && computerChoice === "PAPER") {
      console.log("Scissors Beat Paper! Player Wins!");
      return 1;
    }
  }

  function game() {
    let plScore = 0;
    let pcScore = 0;
    for (let i = 0; i < 5; i++) {
      let rnd = playRound(getComputerChoice());
      if (rnd == 1) {
        plScore++;
      } else if (rnd == 2) {
        i--;
      } else {
        pcScore++;
      }
    }
    if (plScore > pcScore) {
      return alert("Player Wins!");
    }
    return alert("Pc Wins!");
  }

  console.log(game());
});
