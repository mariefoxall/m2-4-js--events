const main = document.querySelector(".main");

let toggleGreen = function (event) {
  const buttonId = document.querySelector(`#${event.target.id}`);
  buttonId.classList.toggle("green");
  console.log("click");
};

for (i = 1; i <= 20; i++) {
  const button = document.createElement("button");
  main.appendChild(button);
  button.setAttribute("id", `button-${i}`);
  button.innerText = `${i}`;
  button.setAttribute("class", "red");
  button.addEventListener("click", toggleGreen);
}
