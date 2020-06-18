const main = document.querySelector(".main");
let buttonArray = [];

let makeGreen = function (event) {
  const buttonId = document.querySelector(`#${event.target.id}`);
  buttonId.style.backgroundColor = "green";
  console.log(buttonId);
};

for (i = 1; i <= 20; i++) {
  const button = document.createElement("button");
  main.appendChild(button);
  button.innerText = `${i}`;
  button.setAttribute("id", `button-${i}`);
  button.style.width = "20%";
  button.style.height = "25vh";
  button.style.backgroundColor = "red";
  button.style.color = "pink";
  button.style.fontSize = "32px";
  buttonArray.push(`button-${i}`);
  button.addEventListener("click", makeGreen);
}
