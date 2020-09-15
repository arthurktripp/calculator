var firstNum = 0;
var secondNum;
var operator;
var answer;
var displayValue;

// listen for clicks to store values


document.querySelector()





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

    // This function should be initiated when I click EQUALS, or an equivalent event occurs (such as selecting an operator after secondNum has been stored.)
const calculate = function() {
    /* THIS CODE WAS A PLACEHOLDER FOR RECEIVING INPUT VIA PROMPTS
    firstNum = parseFloat(prompt('first number?'));
    operator = prompt('operator?', '+ - * /');
    secondNum = parseFloat(prompt('second number?'));
    */

    // This function should be initiated when I click EQUALS;
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

