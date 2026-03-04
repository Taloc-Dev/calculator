let operand1 = "";
let operand2 = "";
let operator = "";

const btnContainer = document.querySelector("#btn-container");
btnContainer.addEventListener("click", handleClick);

const calcDisplay = document.querySelector("#calculator-display")

function handleClick(e){
    switch(e.target.className){
        case "digit-btn":
            inputDigit(e.target.textContent);
            displayInputs();
            break;
        case "operator-btn":
            inputOperator(e.target.textContent);
            displayInputs();
            break;
        case "decimal-btn":
            console.log("Decimal button");
            displayInputs();
            break;
        case "equals-btn":
            displayResult(operate());
            break;
        case "clear-btn":
            resetCalculator();
            resetDisplay();
            break;
        case "back-btn":
            console.log("Back button");
            displayInputs();
            break;
    }
}
function inputDigit(digit){ 
    if(checkIfOperatorInputed()){
        operand2 += digit;
    }
    else{
        operand1 += digit;
    }
}
function inputOperator(op){
    if(operator != false){
        operand1 = operate();
    }
    operator = op;
}
function checkIfOperatorInputed(){ 
    if(!operator) return false;
    else return true;
}
function add(a, b){
    return a + b;
}
function substract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}
function operate(){
    if(operand2 == false){
        return operand1;
    } 

    const num1 = + operand1;
    const num2 = + operand2;

    let result = 0;
    switch(operator){
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = substract(num1, num2);
            break;
        case "x":
            result = multiply(num1, num2);
            break;
        case "÷":
            result = divide(num1, num2);
            break;
        default:
            break;
    }

    resetCalculator();

    return result;
}
function resetCalculator(){
    operand1 = "";
    operand2 = "";
    operator = "";
}
function displayInputs(){
    calcDisplay.textContent = `${operand1} ${operator} ${operand2}`;
}
function displayResult(result){
    calcDisplay.textContent = `${result}`;
}
function resetDisplay(){
    calcDisplay.textContent = `0`;
}