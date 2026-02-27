let operand1 = 0;
let operand2 = 0;
let operator = "+";

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