// Exercise 1.2
// ------------
console.log("exercise 1.2");

const body = document.querySelector("body");
const time = document.querySelector("#time");
const result = document.querySelector("#result");
const timeText = document.querySelector(".time-text");

let haveWon = false;
let gameOver = false;

let winner = function () {
  console.log("click");
  if (gameOver === false) {
    haveWon = true;
    result.innerText = "You win!";
    console.log("winner");
    body.removeEventListener("click", winner);
    clearInterval(countdown);
    timeText.style.display = "none";
  }
};

body.addEventListener("click", winner);

let randomTime = Math.ceil(Math.random() * 5);
console.log(randomTime);

let currentTime = randomTime;
time.innerText = `${currentTime}`;

let countdown = setInterval(function () {
  currentTime = currentTime - 1;
  time.innerText = `${currentTime}`;
}, 1000);

setTimeout(function () {
  gameOver = true;
  if (haveWon === false) {
    result.innerText = "You lose!";
    console.log("loser");
    body.removeEventListener("click", winner);
    clearInterval(countdown);
    timeText.style.display = "none";
  }
}, randomTime * 1000);
