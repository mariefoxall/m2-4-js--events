// Exercise 1.1
// ------------
console.log("exercise 1.1");

const body = document.querySelector("body");
const result = document.querySelector(".result");

let hasWon = false;
let gameOver = false;

let winner = function () {
  console.log("click");
  if (gameOver === false) {
    hasWon = true;
    result.innerText = "You win!";
    body.removeEventListener("click", winner);
    console.log("winner");
  }
};

body.addEventListener("click", winner);

setTimeout(function () {
  gameOver = true;
  if (hasWon === false) {
    result.innerText = "You lose!";
    body.removeEventListener("click", winner);
    console.log("loser");
  }
}, 1000);
