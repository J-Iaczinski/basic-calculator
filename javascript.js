document.querySelector("form").addEventListener("submit", (e) => e.preventDefault()); // Prevent form submission

let firstNumber = "";
let operator = "";
let secondNumber = "";

function sum(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  if (y === 0) {
    alert("ERROR: Not Alowed to Divide by Zero");
    return "AC";
  }
  return x / y;
}

let btns = document.querySelectorAll(".buttons button");
let display = document.querySelector("#display");
let display2 = document.querySelector("#display2");
console.table(btns);

btns.forEach((bt) => {
  bt.addEventListener("click", (e) => {
    e.preventDefault();

    let value = e.target.textContent;

    if (!isNaN(value) || value === ".") {
      // If it's a number or decimal, build the number
      if (operator === "") {
        if (value === "." && firstNumber.includes(".")) {
          return;
        }
        firstNumber += value;
        display.value = firstNumber;
      } else {
        if (value === "." && secondNumber.includes(".")) {
          return;
        }
        secondNumber += value;
        display.value = secondNumber;
      }
    } else if (value === "AC") {
      // Reset calculator
      firstNumber = "";
      operator = "";
      secondNumber = "";
      display.value = "";
      display2.value = "";
    } else if (value === "=") {
      let result;
      let x = parseFloat(firstNumber);
      let y = parseFloat(secondNumber);

      if (firstNumber != "" && secondNumber != "") {
        if (operator === "+") {
          result = sum(x, y);
        } else if (operator === "-") {
          result = sub(x, y);
        } else if (operator === "x") {
          result = multiply(x, y);
        } else if (operator === "/") {
          result = divide(x, y);
        }
      } else result = firstNumber;

      if (result === "AC") {
        firstNumber = "";
        operator = "";
        secondNumber = "";
        display.value = "";
        display2.value = "";
      } else {
        display.value = Math.round(result * 1000) / 1000;
        firstNumber = result;
        secondNumber = "";
      }
    } else {
      if (firstNumber != "") {
        operator = value;
        display.value = secondNumber;
        display2.value = Math.round(firstNumber * 1000) / 1000 + " " + operator;
      }
    }
  });
});
