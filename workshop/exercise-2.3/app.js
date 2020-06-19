const main = document.querySelector(".main");

let toggleGreen = function (event) {
  const buttonId = document.querySelector(`#${event.target.id}`);
  buttonId.classList.toggle("green");
};

for (i = 1; i <= 20; i++) {
  const button = document.createElement("button");
  main.appendChild(button);
  button.setAttribute("id", `button-${i}`);
  button.innerText = `${i}`;
  button.style.position = "absolute";
  let random1 = Math.random();
  //   console.log(random1);
  let random2 = Math.random();
  //   console.log(random2);
  button.style.left = `${random1 * 90}%`;
  button.style.top = `${random2 * 90}vh`;
  button.setAttribute("class", "red");
  addEventListener("click", toggleGreen);
}
