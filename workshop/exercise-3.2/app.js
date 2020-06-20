const main = document.querySelector("#main");
const startStop = document.createElement("button");
startStop.setAttribute("class", "startstop");
startStop.innerText = "START / STOP";
main.appendChild(startStop);

const timeDisplay = document.createElement("div");
timeDisplay.setAttribute("class", "timedisplay");
main.appendChild(timeDisplay);

const minDisplay = document.createElement("div");
minDisplay.setAttribute("class", "timediv");
timeDisplay.appendChild(minDisplay);
const spacer = document.createElement("div");
spacer.setAttribute("class", "spacer");
timeDisplay.appendChild(spacer);
spacer.innerText = ":";
const secDisplay = document.createElement("div");
secDisplay.setAttribute("class", "timediv");
timeDisplay.appendChild(secDisplay);

let leadingZeros = function (digit) {
  return (digit < 10 ? "0" : "") + digit;
};

let currentMin = 0;
let currentSec = 0;
let started = false;

minDisplay.innerText = `${leadingZeros(currentMin)}`;
secDisplay.innerText = `${leadingZeros(currentSec)}`;
let counter = undefined;

let startTimer = function (event) {
  if (started === false) {
    started = true;
    counter = setInterval(() => {
      currentSec = (currentSec + 1) % 60;
      secDisplay.innerText = `${leadingZeros(currentSec)}`;
      if (currentSec % 60 === 0) {
        currentMin = (currentMin + 1) % 60;
        minDisplay.innerText = `${leadingZeros(currentMin)}`;
      }
    }, 1000);
  }

  let stopTimer = function (event) {
    clearInterval(counter);
    minDisplay.innerText = `${leadingZeros(currentMin)}`;
    secDisplay.innerText = `${leadingZeros(currentSec)}`;
  };
  startStop.addEventListener("click", stopTimer);
};

startStop.addEventListener("click", startTimer);
