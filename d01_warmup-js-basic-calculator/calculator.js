document.addEventListener('DOMContentLoaded', function() { 
    // Get result text
    var resultText = document.getElementById('result-text');

    // Get all buttons in DOM
    var buttons = document.querySelectorAll('.button-panel');

    // Marker for decimal rule
    let canIAddComma = true;

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Initial behaviour
            var operator = ['del', 'sum', 'substract', 'multiply', 'divide', 'comma', 'reset', 'equal'];
            const operatorSign = ['+', '-', 'x', '/'];
            var nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
            var value = button.textContent.trim();

            // If user for the first time press comma
            if (button.id === "comma" && !canIAddComma) {
                return;
            } else {
                /* --- BASIC RULES --- */
                // Press operator for the first time
                if (operator.indexOf(button.id) === 1 || operator.indexOf(button.id) === 2 || operator.indexOf(button.id) === 3 || operator.indexOf(button.id) === 4) {
                    canIAddComma = true;
                } else if (button.id === "comma") {
                    canIAddComma = false;
                }

                // Press RESET
                if (operator.indexOf(button.id) === 6) {
                    resultText.innerHTML = 0;
                }
                
                // Press DEL when resultText already 0
                else if (resultText.textContent === '0' && operator.indexOf(button.id) === 0) {
                    resultText.innerHTML = '0';
                }

                // Press DEL when resultText is not 0
                else if (resultText.textContent !== '0' && operator.indexOf(button.id) === 0) {
                    // Goes to 0 if length of resultText is 1
                    if (resultText.textContent.length === 1) {
                        resultText.innerHTML = '0';
                    } else {
                        resultText.textContent = resultText.textContent.slice(0, -1);
                    }
                }

                // Press any numpad while resultText still 0
                else if ((resultText.textContent === '0' && nums.indexOf(button.id) !== -1)) {
                    resultText.textContent = value;
                }
                
                // Press any operator while resultText still 0
                else if (resultText.textContent === '0' && (operator.indexOf(button.id) !== 6 || operator.indexOf(button.id) !== 5)) {
                    resultText.textContent += value;
                } else {
                    resultText.textContent += value;
                }

                var lastChar = resultText.textContent.charAt(resultText.textContent.length - 1);
                var secondLastChar = resultText.textContent.charAt(resultText.textContent.length - 2);
                let lastInputType = "operator"; // Assume initial state has an operator
                
                /*  --- ADVANCED RULE: Prevent user to add multiple operator simultanously
                    by removes initial operator if the most recent button pressed was an operator
                    and the button pressed before that was also an operator ---
                */
                if (operatorSign.indexOf(lastChar) !== -1 && operatorSign.indexOf(secondLastChar) !== -1) {
                    resultText.textContent = resultText.textContent.slice(0, -2) + lastChar;
                }

                /* --- ADVANCED RULE: Prevent user to add operator if most recent button pressed was a comma ---*/
                if (operatorSign.indexOf(lastChar) !== -1 && secondLastChar === '.') {
                    resultText.textContent = resultText.textContent.slice(0, -1);
                }

                /* --- ADVANCED RULE: Prevent user to add multiple commas simultanously ---*/
                if (button.id === "comma" && secondLastChar === ".") {
                    canIAddComma = false;
                    resultText.textContent = resultText.textContent.slice(0, -1);
                }

                /* --- ADVANCED RULE: Automatically add '0' when user press comma after an operator ---*/
                if (button.id === "comma" && operatorSign.indexOf(secondLastChar) !== -1) {
                    resultText.textContent = resultText.textContent.slice(0, -1);
                    resultText.textContent += '0.';
                    canIAddComma = false;
                }
            }

            // Calculation Process
            if (button.id === "equal") {
                var expression = resultText.textContent;
                var parsedExpression = ParseMathOperation(expression);
                const result = EvaluateMathExpression(parsedExpression);
                resultText.textContent = SetThousandSeparator(result);
            }
        })
    })

    function ParseMathOperation(expression) {
        const tokens = expression.match(/\d+(\.\d+)?|[+\-x\/]/g);
        return tokens;
    }

    function EvaluateMathExpression(tokens) {
        // Perform multiplication and division first
        for (let i = 0; i < tokens.length; i++) {
            if (tokens[i] === 'x') {
                tokens.splice(i - 1, 3, parseFloat(tokens[i - 1]) * parseFloat(tokens[i + 1]));
                i -= 2;
            } else if (tokens[i] === '/') {
                tokens.splice(i - 1, 3, parseFloat(tokens[i - 1]) / parseFloat(tokens[i + 1]));
                i -= 2;
            }
        }

        // Perform addition and subtraction next
        let result = parseFloat(tokens[0]);
        for (let i = 1; i < tokens.length; i += 2) {
            const operator = tokens[i];
            const operand = parseFloat(tokens[i + 1]);
            if (operator === '+') {
                result += operand;
            } else if (operator === '-') {
                result -= operand;
            }
        }
        
        return result;
    }

    function SetThousandSeparator(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
})
