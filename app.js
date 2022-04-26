const outputDisplay = document.getElementById("output-display");
const form = document.querySelector("form");
const btns = document.querySelectorAll(".btn");
let currNumber,
  firstNumber = [],
  isInModifiedState = false,
  operation = null;
secondNumber = [];
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    currNumber = parseInt(e.target.value);
    if (isFinite(currNumber))
      isInModifiedState
        ? secondNumber.push(currNumber)
        : firstNumber.push(currNumber);
    if (e.target.value === ".")
      isInModifiedState
        ? secondNumber.push(e.target.value)
        : firstNumber.push(e.target.value);
    //? DELETE BUTTON
    if (e.target.textContent === "DEL") {
      `${isInModifiedState ? secondNumber.pop() : firstNumber.pop()}`;
    }
    //? ADD BUTTON
    if (e.target.textContent === "+") {
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
      e.preventDefault();
      return;
    }

    //? RESET BUTTON
    if (e.target.type === "reset") {
      outputDisplay.value = 0;
      isInModifiedState = false;
      firstNumber = [];
      secondNumber = [];
    }
    outputDisplay.value = isInModifiedState
      ? secondNumber.join("")
      : firstNumber.join("");
    e.preventDefault();
  });
});
