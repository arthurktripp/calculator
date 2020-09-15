var firstNum = 0;
var secondNum;
var operator;
var answer;
var displayString = 0;
var displayValue;
var displayLength = 0;
var x;





// updates the calculator display, with a nine-digit max limitation built in like an old calculator.
const updateDisplay = function() {
    if (displayLength < 9) { 
        displayValue = parseFloat(displayString);
        document.getElementById("read").innerHTML = (displayValue);
        x = displayValue.toString();
        displayLength = x.length;
    }
}

// eventlisteners for the number keys
const zeroKey = document.getElementById("zero").addEventListener("click",
    function() { 
        displayString += this.dataset.key;
        updateDisplay()
    });
const oneKey = document.getElementById("one").addEventListener("click",
    function() { 
        displayString += this.dataset.key;
        updateDisplay()
    });
const twoKey = document.getElementById("two").addEventListener("click",
function() { 
    displayString += this.dataset.key;
    updateDisplay()
});
const threeKey = document.getElementById("three").addEventListener("click",
function() { 
    displayString += this.dataset.key;
    updateDisplay()
});
const fourKey = document.getElementById("four").addEventListener("click",
function() { 
    displayString += this.dataset.key;
    updateDisplay()
});
const fiveKey = document.getElementById("five").addEventListener("click",
function() { 
    displayString += this.dataset.key;
    updateDisplay()
});
const sixKey = document.getElementById("six").addEventListener("click",
function() { 
    displayString += this.dataset.key;
    updateDisplay()
});
const sevenKey = document.getElementById("seven").addEventListener("click",
function() { 
    displayString += this.dataset.key;
    updateDisplay()
});
const eightKey = document.getElementById("eight").addEventListener("click",
function() { 
    displayString += this.dataset.key;
    updateDisplay()
});
const nineKey = document.getElementById("nine").addEventListener("click",
function() { 
    displayString += this.dataset.key;
    updateDisplay()
});


// functions for each operator
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

