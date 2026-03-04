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
            inputDecimal();
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
            deleteLastImput();
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
function inputDecimal(){
    if(checkIfOperatorInputed()){
        if(!operand2.split("").includes(".")){
            if(operand2.length === 0){
                operand2 = "0.";
            }
            else{
                operand2 += ".";
            }
        }
        else return;
    }
    else{
        if(!operand1.split("").includes(".")){
            if(operand1.length === 0){
                operand1 = "0.";
            }
            else{
                operand1 += ".";
            }
        }
    }
}
function deleteLastImput(){
     if(checkIfOperatorInputed()){
        if(operand2 === ""){
            operator = "";
        }
        else{
            let slicedOperand =operand2.slice(0, -1);
            operand2 = slicedOperand;
        }
     }
     else{
        if(operand1 !== ""){
            let slicedOperand = operand1.slice(0, -1);
            operand1 = slicedOperand;
        }
     }
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
    if(b === 0){    
        return "INFINITY";
    } 
    return a / b;
}
function operate(){
    if(operand2 === ""){
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

    return +parseFloat(result.toFixed(4));
}
function resetCalculator(){
    operand1 = "";
    operand2 = "";
    operator = "";
}
function displayInputs(){
    if(operand1 === "") {
        resetDisplay(); 
        return;
    }
    calcDisplay.textContent = `${operand1} ${operator} ${operand2}`;
}
function displayResult(result){
    calcDisplay.textContent = `${result}`;
}
function resetDisplay(){
    calcDisplay.textContent = `0`;
}