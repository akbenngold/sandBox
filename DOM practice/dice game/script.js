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
    playerImage.src = "images/1.png";
  } else if (playerOneThrow === 2) {
    playerImage.src = "images/2.png";
  } else if (playerOneThrow === 3) {
    playerImage.src = "images/3.png";
  } else if (playerOneThrow === 4) {
    playerImage.src = "images/4.png";
  } else if (playerOneThrow === 5) {
    playerImage.src = "images/5.png";
  } else {
    playerImage.src = "images/6.png";
  }

  if (playerTwoThrow === 1) {
    playerTwoImage.src = "images/1.png";
  } else if (playerTwoThrow === 2) {
    playerTwoImage.src = "images/2.png";
  } else if (playerTwoThrow === 3) {
    playerTwoImage.src = "images/3.png";
  } else if (playerTwoThrow === 4) {
    playerTwoImage.src = "images/4.png";
  } else if (playerTwoThrow === 5) {
    playerTwoImage.src = "images/5.png";
  } else {
    playerTwoImage.src = "images/6.png";
  }

  if (playerOneThrow > playerTwoThrow) {
    outcome.innerHTML = "PLAYER ONE WINS";
  } else if (playerOneThrow < playerTwoThrow) {
    outcome.innerHTML = "PLAYER TWO WINS";
  } else {
    outcome.innerHTML = "DRAW!";
  }
});

// to return to this code to factor it
