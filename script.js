addEventListener("DOMContentLoaded", () => {
  var decision = "";
  let plScore = 0;
  let pcScore = 0;
  let player = document.querySelector(".player");
  let pc = document.querySelector(".pc");

  const rock = document.querySelector(".rock");
  const paper = document.querySelector(".paper");
  const scissors = document.querySelector(".scissors");
  const choice = document.querySelector(".rock2");
  const choice2 = document.querySelector(".paper2");
  const choice3 = document.querySelector(".scissors2");

  function winner() {
    if (plScore > 4) {
      alert("Player wins!");
      plScore = 0;
      pcScore = 0;
      player.innerHTML = "Player: 0";
      pc.innerHTML = "PC: 0";
    } else if (pcScore > 4) {
      alert("PC Wins!");
      plScore = 0;
      pcScore = 0;
      player.innerHTML = "Player: 0";
      pc.innerHTML = "PC: 0";
    }
  }

  function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
      case 0:
        choice.classList.add("img-clicked");
        removeClass(choice);
        return "ROCK";
        break;
      case 1:
        choice2.classList.add("img-clicked");
        removeClass(choice2);
        return "PAPER";
        break;
      case 2:
        choice3.classList.add("img-clicked");
        removeClass(choice3);
        return "SCISSORS";
    }
  }

  function removeClass(e) {
    setTimeout(() => e.classList.remove("img-clicked"), 1000);
  }

  function playRound(dec) {
    let pcChoice = getComputerChoice();
    if (dec === pcChoice) {
      console.log("Its A Tie!");
      return;
    } else if (dec === "ROCK" && pcChoice === "PAPER") {
      console.log("Paper Beats Rock! PC Wins!");
      pcScore++;
      pc.innerHTML = `PC: ${pcScore}`;
    } else if (dec === "ROCK" && pcChoice === "SCISSORS") {
      console.log("Rock Beats Scissors! Player Wins!");
      plScore++;
      player.innerHTML = `Player: ${plScore}`;
    } else if (dec === "PAPER" && pcChoice === "ROCK") {
      console.log("Paper Beats Rock! Player Wins!");
      plScore++;
      player.innerHTML = `Player: ${plScore}`;
    } else if (dec === "PAPER" && pcChoice === "SCISSORS") {
      console.log("Scissors Beat Paper! PC Wins!");
      pcScore++;
      pc.innerHTML = `PC: ${pcScore}`;
    } else if (dec === "SCISSORS" && pcChoice === "ROCK") {
      console.log("Rock Beats Scissors! PC Wins!");
      pcScore++;
      pc.innerHTML = `PC: ${pcScore}`;
    } else if (dec === "SCISSORS" && pcChoice === "PAPER") {
      console.log("Scissors Beat Paper! Player Wins!");
      plScore++;
      player.innerHTML = `Player: ${plScore}`;
    }
  }

  rock.onclick = () => {
    decision = "ROCK";
    rock.classList.add("img-clicked");
    playRound(decision);
    removeClass(rock);
    setTimeout(() => winner(), 1000);
  };
  paper.onclick = () => {
    decision = "PAPER";
    paper.classList.add("img-clicked");
    playRound(decision);
    removeClass(paper);
    setTimeout(() => winner(), 1000);
  };
  scissors.onclick = () => {
    decision = "SCISSORS";
    scissors.classList.add("img-clicked");
    playRound(decision);
    removeClass(scissors);
    setTimeout(() => winner(), 1000);
  };
});
