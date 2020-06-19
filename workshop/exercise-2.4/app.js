const main = document.querySelector(".main");
const headerBar = document.createElement("header");
main.appendChild(headerBar);
const startButton = document.createElement("button");
startButton.setAttribute("class", "start");
startButton.setAttribute("id", "start");
headerBar.appendChild(startButton);
startButton.innerText = "START";

let randomButtons = Math.ceil(Math.random() * 10);
let counter = randomButtons;
console.log("Counter at start: " + counter);
let buttonHolder = [];

const body = document.querySelector("body");
const gameBoard = document.createElement("div");
body.appendChild(gameBoard);
gameBoard.setAttribute("class", "gameboard");

const status = document.createElement("div");
body.appendChild(status);
status.setAttribute("class", "status");

let countdownText = document.createElement("div");
headerBar.appendChild(countdownText);
countdownText.setAttribute("class", "countdown");
let randomTime = Math.ceil(Math.random() * 10);
let currentTime = randomTime;

let countdown = undefined;
let gameOver = false;
let hasWon = false;

let toggleGreen = function (event) {
  const gameButtonId = document.querySelector(`#${event.target.id}`);
  gameButtonId.classList.toggle("green");

  if (gameButtonId.classList.contains("green")) {
    counter -= 1;
    console.log("Counter - 1: " + counter);
  } else {
    counter += 1;
    console.log("Counter + 1: " + counter);
  }

  console.log("Counter before If: " + counter);
  if (counter == 0) {
    startButton.removeEventListener("click", startGame);
    clearInterval(countdown);
    status.innerText = "YOU WIN!";
    status.classList.toggle("appear");
    countdownText.classList.toggle("appear");
    console.log("you win");
    hasWon = true;
    removeEventListenersFromButtons();
    // clearTimeout(timeout);
  }
};

let removeEventListenersFromButtons = function () {
  buttonHolder.forEach((button) => {
    button.removeEventListener("click", toggleGreen);
  });
};

let startGame = function (event) {
  startButton.classList.toggle("disappear");
  countdownText.classList.toggle("appear");
  let countdown = setInterval(function () {
    currentTime = currentTime - 1;
    countdownText.innerText = `${currentTime}`;
  }, 1000);
  setTimeout(function () {
    if (hasWon === false) {
      gameOver = true;
      startButton.removeEventListener("click", startGame);
      clearInterval(countdown);
      status.innerText = "YOU LOSE!";
      status.classList.toggle("appear");
      countdownText.classList.toggle("appear");
      console.log("you lose");
      removeEventListenersFromButtons();
    }
  }, `${randomTime * 1000}`);
};

startButton.addEventListener("click", startGame);

for (i = 1; i <= randomButtons; i++) {
  let gameButton = document.createElement("button");
  gameBoard.appendChild(gameButton);
  gameButton.setAttribute("id", `gamebutton-${i}`);
  gameButton.setAttribute("class", "gamebutton");
  gameButton.innerText = `${i}`;
  let randomTop = Math.random();
  let randomLeft = Math.random();
  gameButton.style.left = `${randomLeft * 80}%`;
  gameButton.style.top = `${randomTop * 85}%`;
  gameButton.addEventListener("click", toggleGreen);
  buttonHolder.push(gameButton);
}
