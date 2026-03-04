let operand1 = "";
let operand2 = "";
let operator = "";

const btnContainer = document.querySelector("#btn-container");
btnContainer.addEventListener("click", handleClick);

function handleClick(e){
    switch(e.target.className){
        case "digit-btn":
            inputDigit(e.target.textContent);
            break;
        case "operator-btn":
            inputOperator(e.target.textContent);
            break;
        case "decimal-btn":
            console.log("Decimal button");
            break;
        case "equals-btn":
            operate();
            break;
        case "clear-btn":
            console.log("Clear button");
            break;
        case "back-btn":
            console.log("Back button");
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
    if(operand2 == false) return;

    const num1 = + operand1;
    const num2 = + operand2;

    switch(operator){
        case "+":
            add(num1, num2);
            break;
        case "-":
            substract(num1, num2);
            break;
        case "*":
            multiply(num1, num2);
            break;
        case "/":
            divide(num1, num2);
            break;
        default:
            break;
    }
}