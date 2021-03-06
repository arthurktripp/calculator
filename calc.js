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
var numberKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var operators = ["enter", "=", "+", "-", "/", "*"];

// STORES INPUT AS ONE OF TWO STRINGS
const writeString = function() {
    if (key == "del" && operandItteration == (1 || 3)) {
        firstString = firstString.slice(0, -1);
        key = '';
    } else if (key == "del" && operandItteration == 2){
        secondString = secondString.slice(0, -1);
        key = '';
    }
    
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
                firstString = answer.toString().slice(0, 10);
                firstNum = answer;
                if (key.length < 2) {secondString += key};
                secondNum = parseFloat(secondString);
                break;
            } else {break};
    }   
}

// UPDATES THE CALCULATOR DISPLAY TO REFLECT CURRENT NUMBER
const updateDisplay = function() {
    if (operandItteration == 1) {
        if (displayLength <= 9) { 
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
        if (displayLength <= 9) {
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
            if (displayLength <= 9) {
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
                if (key == '=') {
                    secondNum = 0;
                    secondString = '0';
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


// MINUS KEY
const minusKey = document.getElementById('minus').addEventListener("click",
    function() {
        switch (operandItteration) {
            case 1:
                operator = '-';
                operandItteration = 2;
                break;
            case 2:
                operator = '-'
                calculate();
                firstString = answer.toString();
                secondNum = 0;
                secondString = '0';
                operandItteration = 3;
                writeString();
                updateDisplay();
                break;
            case 3:
                if (key == '=') {
                    secondNum = 0;
                    secondString = '0';
                }
                operator = '-'
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


// MULTIPLY KEY
const multiplyKey = document.getElementById('multiply').addEventListener("click",
    function() {
        switch (operandItteration) {
            case 1:
                operator = '*';
                operandItteration = 2;
                break;
            case 2:
                operator = '*'
                calculate();
                firstString = answer.toString();
                secondNum = 0;
                secondString = '0';
                operandItteration = 3;
                writeString();
                updateDisplay();
                break;
            case 3:
                if (key == '=') {
                    secondNum = 1;
                    secondString = '1';
                }
                operator = '*'
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


// DIVIDE KEY
const divideKey = document.getElementById('divide').addEventListener("click",
    function() {
        switch (operandItteration) {
            case 1:
                operator = '/';
                operandItteration = 2;
                break;
            case 2:
                operator = '/'
                calculate();
                firstString = answer.toString();
                secondNum = 0;
                secondString = '0';
                operandItteration = 3;
                if (answer == "Infinity") {
                    document.getElementById("readout").innerHTML = ("GET REAL");
                } else {
                    writeString();
                    updateDisplay();
                    break;
                }
            case 3:
                if (key == '=') {
                    secondNum = 1;
                    secondString = '1';
                }
                operator = '/'
                calculate();
                firstString = answer.toString();
                secondNum = 0;
                secondString = '0';
                if (answer == "Infinity") {
                    document.getElementById("readout").innerHTML = ("GET REAL");
                } else {
                    writeString();
                    updateDisplay();
                    break;
                };
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
                key = '='
                operandItteration = 3;
                if (answer == "Infinity") {
                    document.getElementById("readout").innerHTML = ("GET REAL");
                } else {
                    writeString();
                    updateDisplay();
                    break;
                }
            case 3:
                calculate();
                firstString = 0 + answer.toString();
                firstNum = answer;
                key = '='
                operandItteration = 3;
                if (answer == "Infinity") {
                    document.getElementById("readout").innerHTML = ("GET REAL");
                } else {
                    writeString();
                    updateDisplay();
                    break;
                }
        }
    })


// CALCULATION FUNCTION
const calculate = function() {
    switch (operator) {
        case '+':
            answer = firstNum + secondNum;
            return answer;
            break;
        case "-":
            answer = firstNum + (secondNum * -1);
            return answer;
            break;
        case "*":
            answer = firstNum * secondNum;
            return answer;
            break;
        case "/": 
            answer = firstNum / secondNum;
            if (answer === Infinity) {
                break;
            } else {
            return answer
        };
            break;
        default:
            answer = "That's not right" 
    };
    
}


// DELETE KEY
const deleteKey = document.getElementById('backspace').addEventListener("click",
    function() {
        key = 'del';
        writeString();
        updateDisplay();
    });







// eventlisteners for the number button clicks
const zeroKey = document.getElementById("zero").addEventListener("click",
    function() { 
        key = this.dataset.key;
        if (operandItteration == 3){
            secondString = '';
            operandItteration = 2;
        }
        writeString();
        updateDisplay();
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
    

// EVENT LISTENERS FOR VISUAL FEEDBAK ON BUTTON PRESS
document.addEventListener('mousedown', function (event) {
    if ( event.target.classList.contains( 'button' ) ) {
        event.target.classList = "press";
    }
}, false);

document.addEventListener('mouseup', function (event) {
    if ( event.target.classList.contains( 'press' ) ) {
        event.target.classList = "button";
    }
}, false);

/*
window.addEventListener('keydown', function(e){
    const keyboard = document.querySelector(`div[data-key="${e.key}"]`);
    if (!keyboard) {
        return;
    } console.log(keyboard.dataset.key)


    }
})
*/


const numKeyboard = window.addEventListener('keydown', function(e){
    key = e.key;
    if (numberKeys.includes(key)) {
        if (operandItteration == 3){
            secondString = '';
            operandItteration = 2;
        };
    writeString();
    updateDisplay();
    }
});

const plusMinusKeyboard = window.addEventListener('keydown', function(e){
    if ( (e.key !== "+") && (e.key !== "-") ) {return}
    switch (operandItteration) {
        case 1:
            operator = e.key;
            operandItteration = 2;
            break;
        case 2:
            operator = e.key;
            calculate();
            firstString = answer.toString();
            secondNum = 0;
            secondString = '0';
            operandItteration = 3;
            writeString();
            updateDisplay();
            break;
        case 3:
            if (key == "=" ) {
                secondNum = 0;
                secondString = '0';
            }
            operator = e.key;
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

const multiplyKeyboard = window.addEventListener('keydown', function(e){
    if ( e.key !== "*" ) return
        switch (operandItteration) {
            case 1:
                operator = '*';
                operandItteration = 2;
                break;
            case 2:
                operator = '*'
                calculate();
                firstString = answer.toString();
                secondNum = 0;
                secondString = '0';
                operandItteration = 3;
                writeString();
                updateDisplay();
                break;
            case 3:
                if (key == '=') {
                    secondNum = 1;
                    secondString = '1';
                }
                operator = '*'
                calculate();
                firstString = answer.toString();
                firstNum = answer;
                secondNum = 0;
                secondString = '0';
                writeString();
                updateDisplay();
                break;
        }
    })

const divideqKeyboard = window.addEventListener('keydown', function(e){
    if ( e.key !== "/" ) return
    switch (operandItteration) {
        case 1:
            operator = '/';
            operandItteration = 2;
            break;
        case 2:
            operator = '/'
            calculate();
            firstString = answer.toString();
            secondNum = 0;
            secondString = '0';
            operandItteration = 3;
            if (answer == "Infinity") {
                document.getElementById("readout").innerHTML = ("GET REAL");
            } else {
                writeString();
                updateDisplay();
                break;
            }
        case 3:
            if (key == '=') {
                secondNum = 1;
                secondString = '1';
            }
            operator = '/'
            calculate();
            firstString = answer.toString();
            secondNum = 0;
            secondString = '0';
            if (answer == "Infinity") {
                document.getElementById("readout").innerHTML = ("GET REAL");
            } else {
                writeString();
                updateDisplay();
                break;
            };
    }
});

const equalsKeyboard = window.addEventListener('keydown', function(e) {
    if ( (e.key !== '=') && (e.key !== "Enter") ) return
    switch (operandItteration) {
        case 1:
            break;
        case 2:
            calculate();
            firstString = 0 + answer.toString();
            key = '='
            operandItteration = 3;
            if (answer == "Infinity") {
                document.getElementById("readout").innerHTML = ("GET REAL");
            } else {
                writeString();
                updateDisplay();
                break;
            }
        case 3:
            calculate();
            firstString = 0 + answer.toString();
            firstNum = answer;
            key = '='
            operandItteration = 3;
            if (answer == "Infinity") {
                document.getElementById("readout").innerHTML = ("GET REAL");
            } else {
                writeString();
                updateDisplay();
                break;
            }
    }
})

const decimalKeyboard = window.addEventListener('keydown', function(e) {
    if ( e.key !== '.') return
    if ( (operandItteration == 1 && (firstString.indexOf('.') >= 0) ) || (operandItteration == 2 && secondString.indexOf('.') >= 0) ) {
        return; //kills decimal key once it has been used in current number
    } else {
    key = e.key;
    if (operandItteration == 3){
        secondString = '';
        operandItteration = 2;
    }
    writeString();
    updateDisplay()
    }
});

const backspaceKeyboard = window.addEventListener('keydown', function(e) {
    if (e.key !== "Backspace") return;
    key = 'del';
    writeString();
    updateDisplay();
});

const clearKeyboard = window.addEventListener('keydown', function(e) {
    if ( (e.key !== "Clear" ) && ( e.key !== "Escape" ) ) return;
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
