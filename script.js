let display = document.getElementById("display");
let currentInput = "";
let operator = null;
let previousInput = "";

function appendNumber(number) {
    if (currentInput === "0" && number === "0") return;
    currentInput += number;
    updateDisplay();
}

function appendOperator(op) {
    if (currentInput === "" && op !== "-") return;
    if (operator) calculate();
    previousInput = currentInput;
    currentInput = "";
    operator = op;
}

function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operator = null;
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    display.innerText = currentInput || previousInput || "0";
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result;
    operator = null;
    previousInput = "";
    updateDisplay();
}
