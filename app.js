const outputDisplay = document.getElementById("output-display");
const form = document.querySelector("form");
const btns = document.querySelectorAll(".btn");
let currNumber,
  firstNumber = [],
  isInModifiedState = false,
  operation = null,
  secondNumber = [];
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    currNumber = parseInt(e.target.value);
    // If the button is a number or a dot
    if (isFinite(currNumber) || e.target.value === ".")
      isInModifiedState
        ? secondNumber.push(currNumber || e.target.value)
        : firstNumber.push(currNumber || e.target.value);
    //? DELETE BUTTON
    if (e.target.textContent === "DEL") {
      `${isInModifiedState ? secondNumber.pop() : firstNumber.pop()}`;
    }
    //? ADD BUTTON
    if (e.target.textContent === "+") {
      outputDisplay.value = firstNumber.join("");
      isInModifiedState = true;
      operation = "+";
    }
    //? SUBTRACT BUTTON
    if (e.target.textContent === "-") {
      isInModifiedState = true;
      operation = "-";
    }
    //? MULTIPLY BUTTON
    if (e.target.textContent === "x") {
      isInModifiedState = true;
      operation = "x";
    }
    //? DIVIDE BUTTON
    if (e.target.textContent === "/") {
      isInModifiedState = true;
      operation = "/";
    }
    //? EQUALS BUTTON
    if (e.target.textContent === "=") {
      isInModifiedState = !isInModifiedState;
      let result;
      if (operation === "+") {
        result =
          parseFloat(firstNumber.join("")) + parseFloat(secondNumber.join(""));
      } else if (operation === "-") {
        result =
          parseFloat(firstNumber.join("")) - parseFloat(secondNumber.join(""));
      } else if (operation === "x") {
        result =
          parseFloat(firstNumber.join("")) * parseFloat(secondNumber.join(""));
      } else if (operation === "/") {
        result =
          parseFloat(firstNumber.join("")) / parseFloat(secondNumber.join(""));
      }
      outputDisplay.value = result;
      firstNumber = result ? [...result.toString()] : [];
      secondNumber = [];
      e.preventDefault();
      return;
    }

    //? RESET BUTTON
    if (e.target.type === "reset") {
      isInModifiedState = false;
      firstNumber = [];
      secondNumber = [];
    }
    if (isInModifiedState) {
      if (secondNumber.length >= 1) {
        outputDisplay.value = secondNumber.join("");
      }
    } else {
      outputDisplay.value = firstNumber.join("");
    }
    e.preventDefault();
  });
});
