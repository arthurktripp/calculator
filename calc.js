// declare global variables
var firstString = "0";
var secondString = "0";
var operandItteration = 1;
var firstNum = 0;
var secondNum = 0;
var key;
var x = 0;
var displayLength = 0;
var displayValue;
var answer = 0;


// STORES INPUT AS ONE OF TWO STRINGS
const writeString = function() {
    switch (operandItteration) {
        case 1:
            if (firstString.length <= 9){
                firstString += key;
                firstNum = parseFloat(firstString);
                break;
            } else {break};
        case 2:
            if (secondString.length <= 9) {
                secondString += key;
                secondNum = parseFloat(secondString);
                break;
            } else {break};
        case 3:
            if (secondString.length <= 9){
                firstString = answer.toString();
                firstNum = answer;
                secondString += key;
                secondNum = parseFloat(secondString);
                break;
            } else {break};
    }   
}

// UPDATES THE CALCULATOR DISPLAY TO REFLECT CURRENT NUMBER
const updateDisplay = function() {
    if (operandItteration == 1) {
        if (displayLength < 9) { 
            displayValue = parseFloat(firstString);
            if (displayValue == Math.floor(displayValue)) {
                document.getElementById("readout").innerHTML = (displayValue + '.');
            } else {
                document.getElementById("readout").innerHTML = (displayValue);
            }
            x = displayValue.toString();
            displayLength = x.length;
       } 
    } else if (operandItteration == 2) {
        if (displayLength < 9) {
            displayValue = parseFloat(secondString);
            if (displayValue == Math.floor(displayValue)) {
                document.getElementById("readout").innerHTML = (displayValue + '.');
            } else {
                document.getElementById("readout").innerHTML = (displayValue);
            }
            x = displayValue.toString();
            displayLength = x.length;
        }
        } else if (operandItteration == 3) {
            if (displayLength < 9) {
                displayValue = parseFloat(firstString);
                if (displayValue == Math.floor(displayValue)) {
                    document.getElementById("readout").innerHTML = (displayValue + '.');
                } else {
                    document.getElementById("readout").innerHTML = (displayValue);
                }
                x = displayValue.toString();
                displayLength = x.length;
                
            }
        }
    }






//CLEAR KEY
const clearKey = document.getElementById("clear").addEventListener("click",
    function() {
        firstString = "0";
        secondString = "0";
        operandItteration = 1;
        firstNum = 0;
        secondNum = 0;
        x = 0;
        displayLength = 0;
        displayValue;
        updateDisplay();      
    });


// PLUS KEY
const plusKey = document.getElementById('plus').addEventListener("click",
    function() {
        switch (operandItteration) {
            case 1:
                operator = '+';
                operandItteration = 2;
                break;
            case 2:
                operator = '+'
                calculate();
                firstString = answer.toString();
                secondNum = 0;
                secondString = '0';
                operandItteration = 3;
                writeString();
                updateDisplay();
                break;
            case 3:
                if (key == 'equals') {
                    secondNum = 0;
                    secondString = 0;
                }
                operator = '+'
                calculate();
                firstString = answer.toString();
                firstNum = answer;
                secondNum = 0;
                secondString = '0';
                writeString();
                updateDisplay();
                break;
        }
    });

// EQUALS KEY
const equalsKey = document.getElementById('equals').addEventListener("click",
    function() {
        switch (operandItteration) {
            case 1:
                break;
            case 2:
                calculate();
                firstString = 0 + answer.toString();
                key = 'equals'
                operandItteration = 3;
                writeString();
                updateDisplay();
                break;
            case 3:
                calculate();
                firstString = 0 + answer.toString();
                key = 'equals'
                operandItteration = 3;
                writeString();
                updateDisplay();
                break;
        }
    })


// CALCULATION FUNCTION
const calculate = function() {
    switch (operator) {
        case '+':
            answer = firstNum + secondNum;
            break;
        case "-":
            answer = firstNum - secondNum;
            break;
        case "*":
            answer = firstNum * secondNum;
            break;
        case "/": // Needs an out if secondNum is zero
            answer = firstNum / secondNum;
            break;
        default:
            answer = "That's not right" 
    }
    return answer;
}










// eventlisteners for the number keys
const zeroKey = document.getElementById("zero").addEventListener("click",
    function() { 
        key = this.dataset.key;
        if (operandItteration == 3){
            secondString = '';
            operandItteration = 2;
        }
        writeString();
        updateDisplay()
    });

const oneKey = document.getElementById("one").addEventListener("click",
    function() { 
        key = this.dataset.key;
        if (operandItteration == 3){
            secondString = '';
            operandItteration = 2;
        }
        writeString();
        updateDisplay()
    });

const twoKey = document.getElementById("two").addEventListener("click",
    function() { 
        key = this.dataset.key;
        if (operandItteration == 3){
            secondString = '';
            operandItteration = 2;
        }
        writeString();
        updateDisplay()
    });
const threeKey = document.getElementById("three").addEventListener("click",
    function() { 
        key = this.dataset.key;
        if (operandItteration == 3){
            secondString = '';
            operandItteration = 2;
        }
        writeString();
        updateDisplay()
    });
const fourKey = document.getElementById("four").addEventListener("click",
    function() { 
        key = this.dataset.key;
        if (operandItteration == 3){
            secondString = '';
            operandItteration = 2;
        }
        writeString();
        updateDisplay()
    });
const fiveKey = document.getElementById("five").addEventListener("click",
    function() { 
        key = this.dataset.key;
        if (operandItteration == 3){
            secondString = '';
            operandItteration = 2;
        }
        writeString();
        updateDisplay()
    });
const sixKey = document.getElementById("six").addEventListener("click",
    function() { 
        key = this.dataset.key;
        if (operandItteration == 3){
            secondString = '';
            operandItteration = 2;
        }
        writeString();
        updateDisplay()
    });
const sevenKey = document.getElementById("seven").addEventListener("click",
    function() { 
        key = this.dataset.key;
        if (operandItteration == 3){
            secondString = '';
            operandItteration = 2;
        }
        writeString();
        updateDisplay()
    });
const eightKey = document.getElementById("eight").addEventListener("click",
    function() { 
        key = this.dataset.key;
        if (operandItteration == 3){
            secondString = '';
            operandItteration = 2;
        }
        writeString();
        updateDisplay()
    });
const nineKey = document.getElementById("nine").addEventListener("click",
    function() { 
        key = this.dataset.key;
        if (operandItteration == 3){
            secondString = '';
            operandItteration = 2;
        }
        writeString();
        updateDisplay()
    });

const decimalKey = document.getElementById('decimal').addEventListener("click",
    function() {
        if ( (operandItteration == 1 && (firstString.indexOf('.') >= 0) ) || (operandItteration == 2 && secondString.indexOf('.') >= 0) ) {
            return; //kills decimal key once it has been used in current number
        } else {
        key = this.dataset.key;
        if (operandItteration == 3){
            secondString = '';
            operandItteration = 2;
        }
        writeString();
        updateDisplay()
        }
    });
    