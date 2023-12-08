document.getElementById("start").onclick = function () {
    var input = document.getElementById("calculation").value;
    var resultPlace = document.getElementById("result");

    if (input.includes('+') || input.includes('-') || input.includes('*') || input.includes('/')) {
        var numbers = input.split(/\+|\-|\*|\//);
        var operator = input.match(/[\+\-\*\/]/)[0];

        var num1 = parseInt(numbers[0]);
        var num2 = parseInt(numbers[1]);

        switch (operator) {
            case '+':
                resultPlace.innerText = num1 + num2;
                break;
            case '-':
                resultPlace.innerText = num1 - num2;
                break;
            case '*':
                resultPlace.innerText = num1 * num2;
                break;
            case '/':
                if (num2 !== 0) {
                    resultPlace.innerText = num1 / num2;
                } else {
                    resultPlace.innerText = "Cannot divide by zero";
                }
                break;
            default:
                resultPlace.innerText = "Invalid operator";
        }
    } else {
        resultPlace.innerText = "Invalid input";
    }
};