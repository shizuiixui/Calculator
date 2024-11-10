// Get the display element
const display = document.getElementById("value");

// Variables to store the current input, the previous input, and the operator
let currentInput = "";
let previousInput = "";
let operator = null;

// Function to update the display
function updateDisplay(value) {
    display.innerText = value;
}

// Function to handle number inputs
function handleNumber(num) {
    currentInput += num;
    updateDisplay(currentInput);
}

// Function to handle operator inputs
function handleOperator(op) {
    if (currentInput === "") return; // Ignore if no current input
    if (previousInput !== "") {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = "";
}

// Function to clear all inputs
function clearCalculator() {
    currentInput = "";
    previousInput = "";
    operator = null;
    updateDisplay("0");
}

// Function to handle decimal point
function addDecimal() {
    if (!currentInput.includes(".")) {
        currentInput += ".";
        updateDisplay(currentInput);
    }
}

// Function to perform calculation
function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(curr)) return;

    switch (operator) {
        case "+":
            result = prev + curr;
            break;
        case "-":
            result = prev - curr;
            break;
        case "X":
            result = prev * curr;
            break;
        case "÷":
            result = prev / curr;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operator = null;
    previousInput = "";
    updateDisplay(currentInput);
}

// Event handler functions for each button
function increment0() { handleNumber("0"); }
function increment1() { handleNumber("1"); }
function increment2() { handleNumber("2"); }
function increment3() { handleNumber("3"); }
function increment4() { handleNumber("4"); }
function increment5() { handleNumber("5"); }
function increment6() { handleNumber("6"); }
function increment7() { handleNumber("7"); }
function increment8() { handleNumber("8"); }
function increment9() { handleNumber("9"); }
function increment_plus() { handleOperator("+"); }
function increment_minus() { handleOperator("-"); }
function increment_times() { handleOperator("X"); }
function increment_divide() { handleOperator("÷"); }
function increment_dot() { addDecimal(); }
function increment_equals() { calculate(); }
function increment_clear() { clearCalculator(); }
