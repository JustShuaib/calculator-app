const outputDisplay = document.getElementById("output-display"),
  btns = document.querySelectorAll(".btn");

let currentOperation = "",
  resultIsDisplayed = false,
  result = "";

const themeOne = document.querySelector(".theme--one"),
  themeTwo = document.querySelector(".theme--two"),
  themeThree = document.querySelector(".theme--three");

btns.forEach((btn) => btn.addEventListener("click", performOperation));

function performOperation(e) {
  if (e.target.value) {
    resultIsDisplayed = false;
    currentOperation += e.target.value;
  }
  // DELETE BUTTON
  if (e.target.textContent === "DEL") {
    resultIsDisplayed = false;
    currentOperation = currentOperation.slice(0, -1);
  }
  // EQUALS BUTTON
  if (e.target.textContent === "=") {
    resultIsDisplayed = true;
    try {
      currentOperation = result = String(
        eval(currentOperation.replace(/×/g, "*"))
      );
      if (result === "Infinity" || result === "NaN") {
        result = "Infinity";
        currentOperation = "";
      }
    } catch {
      result = "Invalid Input";
      currentOperation = "";
    }
    e.preventDefault();
  }
  // RESET BUTTON
  if (e.target.type === "reset") {
    resultIsDisplayed = false;
    currentOperation = "";
  }

  outputDisplay.value = resultIsDisplayed ? result : currentOperation;
  e.preventDefault();
}

themeOne.addEventListener("click", (e) => {
  setTheme("dark");
  e.preventDefault();
});

themeTwo.addEventListener("click", (e) => {
  setTheme("light");
  e.preventDefault();
});

themeThree.addEventListener("click", (e) => {
  setTheme("purple");
  e.preventDefault();
});

function setTheme(theme) {
  document.documentElement.className = theme;
  localStorage.setItem("theme", theme);
}

document.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme");
  if (theme) document.documentElement.className = theme;
});
