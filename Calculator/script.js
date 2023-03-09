const input = document.getElementById("input");

function appendToScreen(value) {
  input.value += value;
}

function calculate() {
  const expression = input.value;
  let operator = expression.match(/[+\-*/%]/g);
  if (!operator) {
    input.value = expression;
    return;
  }

  operator = operator[0];
  const operands = expression.split(operator);
  const num1 = parseFloat(operands[0]);
  const num2 = parseFloat(operands[1]);

  if (operator === "+") {
    input.value = num1 + num2;
  } else if (operator === "-") {
    input.value = num1 - num2;
  } else if (operator === "*") {
    input.value = num1 * num2;
  } else if (operator === "/") {
    input.value = num2 !== 0 ? num1 / num2 : "Error";
  } else if (operator === "%") {
    input.value = num1 % num2;
  }
}

function clearScreen() {
  input.value = "";
}

function allclearscreen() {
  document.getElementById("input").value = "";
}

function backspace() {
  input.value = input.value.slice(0, -1);
}