const outputDisplay = document.getElementById("output-display");
const btns = document.querySelectorAll(".btn");

let currOperation = "",
  resultDisplayed = false,
  result = "";

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (btn.value !== "") {
      resultDisplayed = false;
      currOperation += btn.value;
    }
    //? DELETE BUTTON
    if (e.target.textContent === "DEL") {
      resultDisplayed = false;
      currOperation = currOperation.slice(0, -1);
    }
    //? EQUALS BUTTON
    if (e.target.textContent === "=") {
      resultDisplayed = true;
      try {
        currOperation = result = String(eval(currOperation.replace(/×/g, "*")));
      } catch {
        result = "Invalid Input";
        currOperation = "";
      }
      e.preventDefault();
    }
    //? RESET BUTTON
    if (e.target.type === "reset") {
      resultDisplayed = false;
      currOperation = "";
    }

    outputDisplay.value = resultDisplayed ? result : currOperation;
    e.preventDefault();
  });
});

/* function formatOutput(str) {
  let output = [];
  for (let i = 0; i < str.length; i += 3) {
    output.push(str.substring(i, i + 3));
  }
  return output.join();
}
 */
