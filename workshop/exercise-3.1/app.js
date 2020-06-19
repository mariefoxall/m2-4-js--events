const main = document.querySelector(".main");
const timeDisplay = document.createElement("div");
timeDisplay.setAttribute("class", "timedisplay");
main.appendChild(timeDisplay);
const hourDisplay = document.createElement("div");
hourDisplay.setAttribute("class", "timediv");
timeDisplay.appendChild(hourDisplay);
const spacer1 = document.createElement("div");
spacer1.setAttribute("class", "spacer");
timeDisplay.appendChild(spacer1);
spacer1.innerText = ":";
const minDisplay = document.createElement("div");
minDisplay.setAttribute("class", "timediv");
timeDisplay.appendChild(minDisplay);
const spacer2 = document.createElement("div");
spacer2.setAttribute("class", "spacer");
timeDisplay.appendChild(spacer2);
spacer2.innerText = ":";
const secDisplay = document.createElement("div");
secDisplay.setAttribute("class", "timediv");
timeDisplay.appendChild(secDisplay);

const currentTime = new Date();
let currentHour = currentTime.getHours();
let currentMin = currentTime.getMinutes();
let currentSec = currentTime.getSeconds();

let leadingZeros = function (digit) {
  return (digit < 10 ? "0" : "") + digit;
};

secDisplay.innerText = `${leadingZeros(currentSec)}`;
minDisplay.innerText = `${leadingZeros(currentMin)}`;
hourDisplay.innerText = `${leadingZeros(currentHour)}`;

setInterval(() => {
  currentSec = (currentSec + 1) % 60;
  secDisplay.innerText = `${leadingZeros(currentSec)}`;
  if (currentSec % 60 === 0) {
    currentMin = (currentMin + 1) % 60;
    minDisplay.innerText = `${leadingZeros(currentMin)}`;
    if (currentMin % 60 === 0) {
      currentHour = (currentHour + 1) % 24;
      hourDisplay.innerText = `${leadingZeros(currentHour)}`;
    }
  }
}, 1000);
