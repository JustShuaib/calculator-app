const outputDisplay = document.getElementById("output-display"),
  btns = document.querySelectorAll(".btn");
const themeOne = document.querySelector(".theme--one");
const themeTwo = document.querySelector(".theme--two");
const themeThree = document.querySelector(".theme--three");
let currentOperation = "",
  resultIsDisplayed = false,
  result = "";

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
const setTheme = (theme) => {
  document.documentElement.className = theme;
};
themeOne.addEventListener("click", (e) => {
  console.log("You clicked theme One");
  document.documentElement.className = "dark";
  e.preventDefault();
});

themeTwo.addEventListener("click", (e) => {
  console.log("You clicked theme two");
  document.documentElement.className = "light";
  e.preventDefault();
});

themeThree.addEventListener("click", (e) => {
  console.log("You clicked theme Three");
  document.documentElement.className = "purple";
  e.preventDefault();
});

/* function formatOutput(str) {
  let output = [];
  for (let i = 0; i < str.length; i += 3) {
    output.push(str.substring(i, i + 3));
  }
  return output.join();
} */
