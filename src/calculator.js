let operand1 = 0;
let operand2 = 0;
let operator = "+";

const btnContainer = document.querySelector("#btn-container");
btnContainer.addEventListener("click", handleClick);

function handleClick(e){
    switch(e.target.className){
        case "digit-btn":
            console.log("Digit button");
            break;
        case "operator-btn":
            console.log("Operator button");
            break;
        case "operator-btn":
            console.log("Operator button");
            break;
        case "decimal-btn":
            console.log("Decimal button");
            break;
        case "clear-btn":
            console.log("Clear button");
            break;
        case "back-btn":
            console.log("Back button");
            break;
    }
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
    switch(operator){
        case "+":
            add(operand1, operand2);
            break;
        case "-":
            substract(operand1, operand2);
            break;
        case "*":
            multiply(operand1, operand2);
            break;
        case "/":
            divide(operand1, operand2);
            break;
        default:
            break;
    }
}