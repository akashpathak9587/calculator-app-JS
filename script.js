const operatorElement = document.querySelectorAll("#op");
console.log(operatorElement);
const numElement = document.querySelectorAll("#num");
console.log(numElement);
const resultElement = document.querySelector(".result");
console.log(resultElement);
let string = "";
let num1 = "";
let num2 = "";
let operator;
let result;

numElement.forEach((ele) => {
  ele.addEventListener("click", () => {
    if (typeof operator === "undefined") {
      string += ele.innerHTML;
      num1 += ele.innerHTML;
      num1 = parseInt(num1);
      updateDisplay();
    } else {
      string += ele.innerHTML;
      num2 += ele.innerHTML;
      num2 = parseInt(num2);
      updateDisplay();
    }
  });
});

operatorElement.forEach((ele) => {
  ele.addEventListener("click", () => {
    let operation = ele.innerHTML;
    if (operation === "=") {
      if (num1 == "" || num2 == "") {
        window.alert("Enter two input");
      } else {
        calculate();
        string = result;
        updateDisplay();
      }
    } else if (operation === "AC") {
      string = "";
      num1 = "";
      num2 = "";
      operator = undefined;
      result = undefined;
      updateDisplay();
    } else if (operation === "DEL") {
      string = string.replace(/.$/, "");
      if (num2 !== "") {
        num2 = String(num2);
        num2 = parseInt(num2.replace(/.$/, ""));
      } else if (operator !== undefined) {
        operator = undefined;
      } else {
        num1 = String(num1);
        num1 = parseInt(num1.replace(/.$/, ""));
      }
      updateDisplay();
    } else if (
      operator !== undefined &&
      String(num1) !== "" &&
      String(num2) !== ""
    ) {
      calculate();
      string = result + ele.innerHTML;
      num1 = parseInt(result);
      num2 = "";
      result = undefined;
      operator = ele.innerHTML;
      updateDisplay();
    } else if (operator === undefined) {
      string += ele.innerHTML;
      operator = ele.innerHTML;
      updateDisplay();
    } else {
      console.log(typeof operator);
      operator = ele.innerHTML;
      string = string.replace(/.$/, ele.innerHTML);
      updateDisplay();
    }
  });
});
function calculate() {
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      return;
  }
}
function updateDisplay() {
  console.log(
    `num1: ${num1}, num2: ${num2}, operator: ${operator}, string: ${string} result: ${result} \ntypeof num1: ${typeof num1}, typeof num2: ${typeof num2}, typeof operator: ${typeof operator}, typeof string: ${typeof string}, typeof result: ${typeof result}`
  );

  resultElement.innerHTML = string;
}
