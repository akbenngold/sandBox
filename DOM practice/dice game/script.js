const playerImage = document.querySelector(".playerOneImage");
const playerTwoImage = document.querySelector(".playerTwoImage");
const outcome = document.querySelector(".outcome");
const startButton = document.querySelector(".button");

function getRandomThrow() {
  return Math.floor(Math.random() * 6) + 1;
}

startButton.addEventListener("click", () => {
  let playerOneThrow = getRandomThrow();
  let playerTwoThrow = getRandomThrow();
  let playerThrow = getRandomThrow();

  if (playerOneThrow === 1) {
    playerImage.src = "1.png";
  } else if (playerOneThrow === 2) {
    playerImage.src = "2.png";
  } else if (playerOneThrow === 3) {
    playerImage.src = "3.png";
  } else if (playerOneThrow === 4) {
    playerImage.src = "4.png";
  } else if (playerOneThrow === 5) {
    playerImage.src = "5.png";
  } else {
    playerImage.src = "6.png";
  }

  if (playerTwoThrow === 1) {
    playerTwoImage.src = "1.png";
  } else if (playerTwoThrow === 2) {
    playerTwoImage.src = "2.png";
  } else if (playerTwoThrow === 3) {
    playerTwoImage.src = "3.png";
  } else if (playerTwoThrow === 4) {
    playerTwoImage.src = "4.png";
  } else if (playerTwoThrow === 5) {
    playerTwoImage.src = "5.png";
  } else {
    playerTwoImage.src = "6.png";
  }

  if (playerOneThrow > playerTwoThrow) {
    outcome.innerHTML = "PLAYER ONE WINS";
  } else if (playerOneThrow < playerTwoThrow) {
    outcome.innerHTML = "PLAYER TWO WINS";
  } else {
    outcome.innerHTML = "draw!";
  }
});

// to return to this code to factor it
