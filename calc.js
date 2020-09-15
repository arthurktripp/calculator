


var firstNum;
var secondNum;
var operator;
var answer;


const addition = function(){
    answer = (firstNum + secondNum).toPrecision(9);
}
const subtraction = function(){
    answer = (firstNum - secondNum).toPrecision(9);
}
const multiplication = function(){
    answer = (firstNum * secondNum).toPrecision(9);
}
const division = function() {
    answer = (firstNum / secondNum).toPrecision(9);
}


const calculate = function() {
    firstNum = parseFloat(prompt('first number?'));
    operator = prompt('operator?', '+ - * /');
    secondNum = parseFloat(prompt('second number?'));
    
    switch (operator) {
        case '+':
            addition();
            break;
        case "-":
            subtraction();
            break;
        case "*":
            multiplication();
            break;
        case "/":
            division();
            break;
        default:
            answer = "That's not right" 
    }
    return answer;
}