const screenDisplay = document.querySelector(".calculator__screen");
const buttons = document.querySelectorAll("button");
let calculation = [];
let calculationDisplay;

function Calculate(button) {
  const value = button.textContent;

  if (value === "C") {
    calculation = [];
    screenDisplay.textContent = ".";
  } else if (value === "=") {
    screenDisplay.textContent = eval(calculationDisplay);
  } else {
    calculation.push(value);
    calculationDisplay = calculation.join("");
    screenDisplay.textContent = calculationDisplay;
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", () => Calculate(button))
);
